"use client";

import {useEffect} from "react";

export default function ScrollToHashOnLoad()
{
    useEffect(() =>
    {
        if (typeof window === "undefined") return;

        const hash = window.location.hash;

        if (hash)
        {
            const el = document.querySelector(hash);
            if (el)
            {
                // Delay ensures DOM is fully rendered before scrolling
                setTimeout(() =>
                {
                    el.scrollIntoView({behavior: "smooth"});
                }, 100);
            }
        }
    }, []);

    return null;
}