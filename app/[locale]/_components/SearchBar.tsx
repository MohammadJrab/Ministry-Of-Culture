import React from 'react'
import Form from 'next/form'
import { getTranslations } from 'next-intl/server'
import { Button } from '@/components/ui/button';
import { IconSearch } from '@tabler/icons-react';

const SearchBar = async () => {
    const t = await getTranslations('search');
    return (
        <Form action="/news" className="flex items-center w-full">
            <div className="flex items-center w-full bg-black/20 backdrop-blur-md rounded-full border border-white/20 overflow-hidden transition-all duration-300 hover:bg-white/15 focus-within:bg-white/20 focus-within:border-white/40">

                {/* Search Input */}
                <input
                    name="Keyword"
                    type="text"
                    placeholder={t('placeholder')}
                    className="flex-1 h-11 min-w-0 px-6 bg-transparent text-white placeholder:text-white/60 text-start outline-none"
                />

                {/* Divider */}
                <div className="w-px me-2 h-8 bg-white/20" />

                {/* Search Button */}
                <Button
                    type="submit"
                    size="icon"
                    className="h-11 w-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-medium m-1 shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                >
                    <IconSearch className="h-5 w-5" />
                </Button>
            </div>
        </Form>
    )
}

export default SearchBar