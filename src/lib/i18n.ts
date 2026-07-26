import en from '../dictionaries/en.json';
import ja from '../dictionaries/ja.json';
import zh from '../dictionaries/zh.json';

export type Language = 'en' | 'ja' | 'zh';

export const dictionaries = {
  en,
  ja,
  zh,
};

export function getDictionary(lang: Language) {
  return dictionaries[lang] || dictionaries.en;
}
