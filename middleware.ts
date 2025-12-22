import createMiddleware from 'next-intl/middleware';
import {NextRequest} from 'next/server';
import {routing} from "@/i18n/routing";

export default async function middleware(request: NextRequest)
{
    const locales = ['en', 'ar'];

    // Safely detect browser language
    const acceptLanguage = request.headers.get('accept-language');
    const browserLocale = acceptLanguage?.split(',')[0]?.split('-')[0];
    const defaultLocale = locales.includes(browserLocale || '') ? browserLocale : routing.defaultLocale;

    const handleI18nRouting = createMiddleware({
        locales,
        defaultLocale
    });

    const response = handleI18nRouting(request);

    if (response && !response.ok) return response;

    response.headers.set('x-default-locale', defaultLocale);
    return response;
}

export const config = {
    matcher: [
        '/',
        '/(ar|en)/:path*',
        /**
         * Match all request paths except for:
         * - api/refresh-token
         * - _next/static
         * - _next/image
         * - favicon.ico
         * - .well-known/
         * - static images
         * - robots.txt
         * - sitemap.xml
         */
        '/((?!api/refresh-token|_next/static|_next/image|favicon.ico|\\.well-known/.*|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};