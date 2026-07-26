'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { auth, db, googleProvider } from '@/lib/firebase';

export interface UserProfileData {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  lastLoginAt?: any;
  createdAt?: any;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOutUser: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Sync user profile data to Firestore
  const syncUserToFirestore = async (user: User) => {
    try {
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      const userData: Record<string, any> = {
        uid: user.uid,
        displayName: user.displayName || '',
        email: user.email || '',
        photoURL: user.photoURL || '',
        lastLoginAt: serverTimestamp(),
      };

      if (!userSnap.exists()) {
        userData.createdAt = serverTimestamp();
      }

      await setDoc(userRef, userData, { merge: true });
    } catch (error) {
      console.error('Error syncing user data to Firestore:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await syncUserToFirestore(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        await syncUserToFirestore(result.user);
      }
    } catch (error: any) {
      console.error('Google Sign-In failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Sign-Out failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
