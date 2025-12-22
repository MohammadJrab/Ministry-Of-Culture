import {notFound} from 'next/navigation';
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

// This page catches all the unknown routes to show the 404 not found page. 
export default function CatchAllPage()
{
    notFound();
}

export async function generateMetadata({params}): Promise<Metadata>
{
    const {locale} = await params;
    const t = await getTranslations({locale, namespace: 'metadata.notFound'});

    return {
        title: t('title'),
        description: t('description')
    };
}