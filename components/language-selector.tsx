'use client';
import {useLocale, useTranslations} from "next-intl";
import {usePathname, useRouter} from "@/i18n/routing";
import {Button, buttonVariants} from "@/components/ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import * as React from "react";
import {useSearchParams} from "next/navigation";
import {useMediaQuery} from "react-responsive";
import {IconWorld} from "@tabler/icons-react";
import {VariantProps} from "class-variance-authority";

type ButtonSize = VariantProps<typeof buttonVariants>["size"];

interface LanguageSelectorProps
{
    size?: ButtonSize;
}

export default function LanguageSelector({size = 'icon'}: LanguageSelectorProps)
{
    const t = useTranslations("header");
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const isMobile = useMediaQuery({maxWidth: 1024});
    const currentLocale = useLocale();

    async function handleLocaleChange(locale: string)
    {
        // Preserve search params.
        const params = new URLSearchParams(searchParams);
        const newPath = params.toString() ? `${pathname}?${params.toString()}` : pathname;

        if (currentLocale === locale) return;
        router.replace(newPath, {locale: locale});
    }

    return (
        <DropdownMenu modal={isMobile}>
            <DropdownMenuTrigger asChild>
                <Button
                    id="language-dropdown-button"
                    variant={'ghost'}
                    size={size}
                    aria-controls="language-menu"
                    aria-label={"Select language"}
                    aria-expanded="false"
                >
                    <IconWorld/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLocaleChange("en")}>
                    {t("english")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLocaleChange("ar")}>
                    {t("arabic")}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}