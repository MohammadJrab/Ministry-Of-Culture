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