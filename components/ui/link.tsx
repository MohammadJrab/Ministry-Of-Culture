'use client';

/**
 * Client-side re-export of the `Link` component from the next-intl package.
 *
 * This is necessary because the `Link` component may not render correctly
 * when used as a child of a `Button` with `asChild` enabled in a Server Component.
 *
 * By marking this as a Client Component, it ensures proper rendering and behavior
 * in interactive contexts like buttons or navigation wrappers.
 */
export {Link} from "@/i18n/routing";