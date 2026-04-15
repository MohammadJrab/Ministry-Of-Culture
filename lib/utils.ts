import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Ensures the given ISO date string ends with 'Z' to indicate UTC time,
 * then returns a Date object.
 *
 * @param date - The ISO date string to normalize.
 * @returns A Date object representing the UTC time.
 */
export function parseUTCDate(date: string): Date {
  const normalized = date.endsWith('Z') ? date : date + 'Z';
  return new Date(normalized);
}

export function parseIntIfExists(val: string | undefined) {
  return val !== undefined ? parseInt(val) : undefined;
}

/**
 * Formats a Date object to "YYYY-MM-DD HH:mm AM/PM" format.
 * @param date - The Date object to format
 * @param locale - The locale string (e.g., 'en', 'ar') to determine AM/PM format
 * @returns Formatted date string like "2026-01-19 05:12 AM" or "2026-01-19 05:12 ص"
 */
export function formatDateTime(date: Date, locale: string = 'en'): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // Use Arabic AM/PM indicators for Arabic locale
  let ampm: string;
  if (locale === 'ar') {
    ampm = hours >= 12 ? 'م' : 'ص'; // م for PM (masa), ص for AM (sabah)
  } else {
    ampm = hours >= 12 ? 'PM' : 'AM';
  }

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const hoursStr = String(hours).padStart(2, '0');

  return `${year}-${month}-${day} ${hoursStr}:${minutes} ${ampm}`;
}

/**
 * Formats an array of date strings into a human-readable display.
 * @param dateStrings - Array of date strings (ISO or parseable by Date)
 * @param dateFormatter - next-intl function for formatting the result dates.
 * @param timeZone - User's timezone (e.g., 'Europe/Athens', 'GMT+3', or 'UTC')
 */
export function formatDateRangeDisplay(
  dateStrings: string[],
  dateFormatter: any,
  timeZone: string
): string {
  if (!dateStrings || dateStrings.length === 0) return "";

  const dates = dateStrings.map(d => new Date(d)).sort((a, b) => a.getTime() - b.getTime());

  if (dates.length === 1) return dateFormatter.dateTime(dates[0], 'standard');

  // Create date formatter once and reuse it
  const localDateFormatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  // Convert dates to the user's timezone and extract just the date part
  const localDateStrings = dates.map(date => localDateFormatter.format(date));

  // Check if dates are continuous based on local dates
  let isContinuous = true;
  for (let i = 1; i < localDateStrings.length; i++) {
    const currentDate = new Date(localDateStrings[i]);
    const previousDate = new Date(localDateStrings[i - 1]);

    const diffInDays = (currentDate.getTime() - previousDate.getTime()) / (1000 * 60 * 60 * 24);

    if (diffInDays !== 1) {
      isContinuous = false;
      break;
    }
  }

  if (isContinuous) {
    const formatterOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone
    }

    return `${dateFormatter.dateTime(dates[0], formatterOptions)}-${dateFormatter.dateTime(dates[dates.length - 1], formatterOptions)}`;
  }
  return dates.map(d => dateFormatter.dateTime(d, 'standard')).join("\n");
}