import React from 'react'

import { getTranslations } from 'next-intl/server'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IconSearch } from '@tabler/icons-react';

const SearchBar = async () => {
    const t = await getTranslations('search');
    return (
        <div className="flex items-center gap-3 w-full mt-8" dir="ltr">
            <Button
                type="button"
                className="h-12 px-8 rounded-lg bg-emerald-900 hover:bg-emerald-950"
            >
                {t('placeholder')}
            </Button>

            <div className="relative flex-1">
                <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <Input

                    type="text"
                    placeholder={t('placeholder')}
                    className="h-12 rounded-lg pl-11 pr-4 text-right"
                />
            </div>
        </div>
    )
}

export default SearchBar