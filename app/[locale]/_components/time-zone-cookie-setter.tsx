'use client';

import {useEffect} from 'react';
import {usePathname} from "@/i18n/routing";

/**
 * Sets or updates the user's local time zone in a cookie (`timezone`).
 *
 *  This cookie can later be accessed on the server to format dates/times
 *  according to the user's actual time zone, especially useful for internationalization (i18n).
 *
 * If the user's system time zone changes, the cookie is updated on the next render.
 *
 * Usage:
 * Place this component at the root level of your layout to ensure it's run early.
 *
 * @example
 * <html>
 *   <body>
 *     <TimeZoneSetter />
 *     <MainApp />
 *   </body>
 * </html>
 */
export function TimeZoneCookieSetter()
{
    const isDashboardOpen = usePathname().includes('/dashboard');
    
    useEffect(() =>
    {
        const currentTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const existingTz = document.cookie
            .split('; ')
            .find(cookie => cookie.startsWith('timezone='))
            ?.split('=')[1];

        if (existingTz !== currentTz)
        {
            document.cookie = `timezone=${currentTz}; path=/; samesite=lax; max-age=${60 * 60 * 24 * 365}; secure`;
            // Forces a reload to make sure the updated cookie is taken into account.
            // * Don't reload the website if the dashboard is not open, cuz there are no dates displayed outside of it.
            if (isDashboardOpen) window.location.reload();
        }
    }, []);

    return null;
}