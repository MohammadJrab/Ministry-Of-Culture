import {DateTimeFormatOptions} from "use-intl";
import {cookies} from "next/headers";

export async function getFormatterOptions()
{
    const cookieStore = await cookies()
    const timeZone = cookieStore.get('timezone')?.value || 'UTC';

    return {
        dateTime: {
            standard: {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hourCycle: 'h12',
                timeZone
            } as DateTimeFormatOptions
        }
    }
} 