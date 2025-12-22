'use client';

import * as React from "react";
import {useRouter} from 'i18n/routing';
import {useSearchParams} from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger
} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";
import {ReactNode} from "react";

type Item = {
    id: string,
    name: string,
}

export default function FilterSelect({items, queryName, Icon, title}: {
    items: Item[],
    queryName: string,
    Icon: ReactNode,
    title: string
})
{
    const router = useRouter();
    const searchParams = useSearchParams();
    const t = useTranslations('filters');

    const selectedItem = searchParams.get(queryName) ?? "";

    function handleChange(value: string)
    {
        const params = new URLSearchParams(searchParams.toString());

        if (value === "__clear__")
            params.delete(queryName);
        else
            params.set(queryName, value);

        params.delete("Page");

        router.replace(`?${params.toString()}`);
        router.refresh();
    }

    return (
        <Select onValueChange={handleChange} value={selectedItem || "__clear__"}>
            <Button variant="ghost" size="smIconOnMobile" asChild className={'relative'}>
                <SelectTrigger className={'border-none shadow-none'} showIcon={false} title={t(title)}>
                    {Icon}
                    {selectedItem && (
                        <span className="absolute right-2 top-2 size-2 bg-primary rounded-full"/>
                    )}
                </SelectTrigger>
            </Button>
            <SelectContent>
                <SelectItem value="__clear__">{t('all')}</SelectItem>
                {items.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                        {item.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}