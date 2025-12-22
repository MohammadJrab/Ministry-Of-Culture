import {setRequestLocale} from 'next-intl/server';
import {routing} from "@/i18n/routing";

// Enables static rendering for all pages within this layout.
export function generateStaticParams()
{
    return routing.locales.map((locale) => ({locale}));
}

export default async function PublicStaticPagesLayout(props)
{
    const params = await props.params;
    const {locale} = params;
    const {children} = props;

    // Enable static rendering.
    setRequestLocale(locale);

    return <>{children}</>
}