'use client';

import * as m from "motion/react-m"
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import LanguageSelector from "@/components/language-selector";
import { Link } from "@/i18n/routing";
import LogoLink from "@/components/logo-link";

export default function NotFound() {
    const t = useTranslations('notFound');

    return (
        <div className="h-screen flex flex-col items-center justify-center text-center p-4">

            <div className='absolute top-4 end-4 z-10'>
                <LanguageSelector />
            </div>

            <LogoLink size={'5xl'} className='animate-appear mb-10' />

            <m.h1
                className="text-6xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                404
            </m.h1>
            <m.p
                className="text-lg mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {t('message')}
            </m.p>
            <m.div
                className="mt-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
            >
                <Link href={'/'}>
                    <Button>{t('goHome')}</Button>
                </Link>
            </m.div>
        </div>
    );
}