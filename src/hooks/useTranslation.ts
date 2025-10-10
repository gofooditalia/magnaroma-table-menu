import { useLanguage } from '@/contexts/LanguageContext';
import { Translation } from '@/types/menu';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (translation: Translation): string => {
    return translation[language];
  };

  return { t, language };
}

