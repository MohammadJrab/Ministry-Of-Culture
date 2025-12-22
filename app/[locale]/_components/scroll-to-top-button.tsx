'use client'
import {useState, useEffect} from "react";
import {IconArrowUp} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTopButton()
{
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() =>
    {
        const handleScroll = () => setHasScrolled(window.scrollY > 150);
        window.addEventListener("scroll", handleScroll);
        // Check for scrolling position also on component mount.
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Button variant={'secondary'} size={'icon'}
                className={`fixed bottom-4 right-4 z-50 animate-appear ${hasScrolled ? "visible" : "hidden"}`}
                onClick={() => window.scrollTo(0, 0)}>
            <IconArrowUp/>
        </Button>
    );
}