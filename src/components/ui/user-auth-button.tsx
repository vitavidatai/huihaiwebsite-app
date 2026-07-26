'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '@/context/auth-context';
import { Language, getDictionary } from '@/lib/i18n';
import { LogOut, User as UserIcon, Loader2, CheckCircle2, ChevronDown } from 'lucide-react';

interface UserAuthButtonProps {
  currentLang: Language;
}

export const UserAuthButton: React.FC<UserAuthButtonProps> = ({ currentLang }) => {
  const { user, loading, signInWithGoogle, signOutUser } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dict = getDictionary(currentLang);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignIn = async () => {
    try {
      setIsSigningIn(true);
      await signInWithGoogle();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSigningIn(false);
    }
  };

  if (loading || isSigningIn) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#5E5A56] bg-[#F5F2EB] rounded-xl border border-[#E5E0D8]">
        <Loader2 className="w-4 h-4 animate-spin text-[#4A6B82]" />
        <span>{dict.auth?.loading || 'Loading...'}</span>
      </div>
    );
  }

  if (!user) {
    return (
      <button
        onClick={handleSignIn}
        type="button"
        className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-[#2D2B2A] bg-white hover:bg-[#F5F2EB] border border-[#D5D0C8] rounded-xl transition-all shadow-sm active:scale-95 group"
      >
        {/* Google G Logo SVG */}
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
        <span>{dict.auth?.signInWithGoogle || 'Sign in with Google'}</span>
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        type="button"
        className="flex items-center gap-2 p-1 pl-2 pr-2.5 bg-white hover:bg-[#F5F2EB] border border-[#E5E0D8] rounded-xl transition-all shadow-sm"
      >
        {user.photoURL ? (
          <Image
            src={user.photoURL}
            alt={user.displayName || 'User Avatar'}
            width={24}
            height={24}
            className="w-6 h-6 rounded-full object-cover border border-[#E5E0D8]"
          />
        ) : (
          <div className="w-6 h-6 rounded-full bg-[#4A6B82] text-white flex items-center justify-center text-[10px] font-bold">
            {(user.displayName || user.email || 'U')[0].toUpperCase()}
          </div>
        )}
        <span className="text-xs font-medium text-[#2D2B2A] max-w-[100px] truncate">
          {user.displayName || user.email?.split('@')[0]}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-[#8C8883] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#E5E0D8] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-4 py-3 border-b border-[#F0ECE1]">
            <p className="text-xs font-semibold text-[#2D2B2A] truncate">
              {user.displayName || 'Google User'}
            </p>
            <p className="text-[11px] text-[#8C8883] truncate mt-0.5">{user.email}</p>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] text-[#7A8B7B] font-mono bg-[#F2F7F3] px-2 py-1 rounded-md w-fit">
              <CheckCircle2 className="w-3 h-3 text-[#5A7B5B]" />
              <span>Firestore Synced</span>
            </div>
          </div>

          <div className="p-1">
            <button
              onClick={() => {
                setDropdownOpen(false);
                signOutUser();
              }}
              type="button"
              className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium text-left"
            >
              <LogOut className="w-4 h-4" />
              <span>{dict.auth?.signOut || 'Sign Out'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
