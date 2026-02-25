'use client';
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button, buttonVariants } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import * as React from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { VariantProps } from "class-variance-authority";

type ButtonSize = VariantProps<typeof buttonVariants>["size"];

interface LanguageSelectorProps {
    size?: ButtonSize;
}

export default function LanguageSelector({ size = 'sm' }: LanguageSelectorProps) {
    const t = useTranslations("header");
    const pathname = usePathname();
    const router = useRouter();
    const [isMobile, setIsMobile] = React.useState(false);
    const currentLocale = useLocale();

    React.useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 1024);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    function handleLocaleChange(locale: string) {
        if (currentLocale === locale) return;

        router.replace(pathname, { locale });
    }

    return (
        <DropdownMenu modal={isMobile} >
            <DropdownMenuTrigger asChild>
                <Button
                    id="language-dropdown-button"
                    variant={'ghost'}
                    size={size}
                    aria-controls="language-menu"
                    aria-expanded="false"
                    className={'max-lg:justify-start max-lg:text-base lg:font-medium max-lg:ps-4 hover:cursor-pointer'}
                >
                    {t(currentLocale)}<IconChevronDown />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
                <DropdownMenuItem onClick={() => handleLocaleChange("en")}>
                    {t("en")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLocaleChange("ar")}>
                    {t("ar")}
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    );
}