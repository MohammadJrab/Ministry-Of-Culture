'use client';

import {Input} from "@/components/ui/input";
import {IconSearch, IconX} from "@tabler/icons-react";
import {useDebouncedCallback} from "use-debounce";
import {useSearchParams} from "next/navigation";
import {useRouter} from "@/i18n/routing";
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";

export default function SearchBarInput({searchParmKey = 'Keyword'}: { searchParmKey?: string })
{
    const router = useRouter();
    const searchParams = useSearchParams();
    const t = useTranslations('common');

    const initialValue = searchParams.get(searchParmKey) || '';
    const [value, setValue] = useState(initialValue);

    useEffect(() =>
    {
        if (!initialValue) setValue('')
    }, [initialValue]);

    const debounced = useDebouncedCallback((newValue: string) =>
    {
        const params = new URLSearchParams(searchParams.toString());

        if (newValue.trim())
            params.set(searchParmKey, newValue.trim());
        else
            params.delete(searchParmKey);

        // Always reset the page when filters change
        params.delete("Page");

        router.replace(`?${params.toString()}`, {scroll: false});
        router.refresh();
    }, 500);

    return (
        <div className={'relative w-full sm:max-w-80'}>
            <Input
                placeholder={t('search')}
                startContent={<IconSearch size={16}/>}
                value={value}
                onChange={(e) =>
                {
                    setValue(e.target.value);
                    debounced(e.target.value);
                }}
            />
            {value && (
                <button onClick={() =>
                {
                    setValue('');
                    debounced('');
                }}
                        aria-label={'Clear search'}
                        className={'z-10 end-2 absolute top-2 size-6 inset-y-1/2 flex items-center justify-center hover:text-primary transition-colors'}>
                    <IconX strokeWidth={3} size={14}/>
                </button>
            )}
        </div>
    );
}