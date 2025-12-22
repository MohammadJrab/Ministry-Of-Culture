'use client'

import { useEffect } from "react";
import ErrorPageContent from "@/components/error-page-content";
import LanguageSelector from "@/components/language-selector";

export default function GlobalErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">

            {/*<div*/}
            {/*    className="absolute inset-0 bg-[url('/images/not-found-page-background.svg')] bg-cover md:bg-[length:100%_100%] -z-10 dark:brightness-75"/>*/}

            <div className='absolute top-4 end-4 z-10'>
                <LanguageSelector />
            </div>

            <ErrorPageContent href={'/'} error={error} reset={reset} />
        </section>
    )
}