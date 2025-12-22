import {useEffect} from "react";

/**
 * Scrolls the selected element into view when `enabled` is true.
 * The selected element must have the specified `className`.
 *
 * @param enabled When true, scroll into view is triggered.
 * @param className Class name of the selected element to scroll into view.
 * @param delay Optional delay before scrolling (default: 100ms).
 * @param block Position in the viewport after scroll (default: 'start').
 */
export function useScrollSelectedIntoView({
                                              enabled,
                                              className,
                                              delay = 100,
                                              block = "start",
                                          }: {
    enabled: boolean;
    className: string;
    delay?: number;
    block?: ScrollLogicalPosition;
})
{
    useEffect(() =>
    {
        if (!enabled) return;

        const timeout = setTimeout(() =>
        {
            const els = document.getElementsByClassName(className);
            if (els.length > 0)
            {
                els[0].scrollIntoView({behavior: "instant", block});
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [enabled, className, delay, block]);
}