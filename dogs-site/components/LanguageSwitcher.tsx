'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '@/i18n-config';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const redirectedPathName = (locale: string) => {
        if (!pathname) return '/';
        const segments = pathname.split('/');
        segments[1] = locale;
        return segments.join('/');
    };

    const currentLang = pathname.split('/')[1];

    return (
        <div className="flex gap-2 text-sm font-medium items-center">
            <Link href={redirectedPathName('pl')} className={`font-bold flex items-center gap-1 ${currentLang === 'pl' ? 'text-white underline' : 'text-green-200 hover:text-white'}`}>
                <img src="https://flagcdn.com/w20/pl.png" width="20" height="15" alt="PL" /> PL
            </Link>
            <span className="text-green-300">|</span>
            <Link href={redirectedPathName('en')} className={`font-bold flex items-center gap-1 ${currentLang === 'en' ? 'text-white underline' : 'text-green-200 hover:text-white'}`}>
                <img src="https://flagcdn.com/w20/gb.png" width="20" height="15" alt="EN" /> EN
            </Link>
        </div>
    );
}
