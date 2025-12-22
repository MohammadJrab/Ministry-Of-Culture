'use client'

import {Button} from "@/components/ui/button";
import {useRouter, usePathname} from "@/i18n/routing";
import React from "react";
import {cn} from "@/lib/utils";
import {useTranslations} from "next-intl";

export default function ClearFiltersButton(props: React.ComponentProps<typeof Button>)
{
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('common');

    function handleClick(e: React.MouseEvent<HTMLButtonElement>)
    {
        if (props.onClick) props.onClick(e);
        // Replace current URL with no search params
        router.replace(pathname);
        router.refresh();
    }

    return (
        <Button title={t('clearFilters')} {...props} onClick={handleClick}
                className={cn('text-muted-foreground shrink-0', props.className)}>
            {props.children}
        </Button>
    );
}