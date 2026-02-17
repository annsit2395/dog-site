import 'server-only';
import { Locale } from './i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We use an object to not break the build if a file is missing
const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    pl: () => import('./dictionaries/pl.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.en();
