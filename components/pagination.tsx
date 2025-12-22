'use client'

import {useSearchParams} from 'next/navigation'
import {
    Pagination as ShadcnPagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/components/ui/pagination"

export function Pagination({
                                       totalPages,
                                       currentPage,
                                   }: {
    totalPages: number
    currentPage: number
})
{
    const searchParams = useSearchParams()

    const createPageLink = (page: number) =>
    {
        const params = new URLSearchParams(searchParams.toString())

        if (page === 1)
        {
            params.delete("Page") // Clean URL for first page
        } else
        {
            params.set("Page", String(page))
        }

        return `?${params.toString()}`
    }

    if (totalPages <= 1) return null

    const renderPageNumbers = () =>
    {
        const pages = []
        const windowSize = 2 // how many pages to show around the current page
        const range = []

        // Always include first page
        range.push(1)

        // Add pages before current
        for (let i = currentPage - windowSize; i <= currentPage + windowSize; i++)
        {
            if (i > 1 && i < totalPages)
            {
                range.push(i)
            }
        }

        // Always include last page
        if (totalPages > 1)
        {
            range.push(totalPages)
        }

        // Remove duplicates and sort
        const uniqueSortedPages = [...new Set(range)].sort((a, b) => a - b)

        let prevPage: number | null = null

        for (const page of uniqueSortedPages)
        {
            if (prevPage && page - prevPage > 1)
            {
                pages.push(
                    <PaginationItem key={`ellipsis-${page}`}>
                        <PaginationEllipsis/>
                    </PaginationItem>
                )
            }

            pages.push(
                <PaginationItem key={page}>
                    <PaginationLink href={createPageLink(page)} isActive={page === currentPage}>
                        {page}
                    </PaginationLink>
                </PaginationItem>
            )

            prevPage = page
        }

        return pages
    }

    return (
        <ShadcnPagination className="justify-center mt-8">
            <PaginationContent className="flex-wrap justify-center gap-1 sm:gap-2">
                {currentPage > 1 && (
                    <PaginationItem>
                        <PaginationPrevious className={'rtl:-scale-100'} href={createPageLink(currentPage - 1)}/>
                    </PaginationItem>
                )}

                {renderPageNumbers()}

                {currentPage < totalPages && (
                    <PaginationItem>
                        <PaginationNext className={'rtl:-scale-100'} href={createPageLink(currentPage + 1)}/>
                    </PaginationItem>
                )}
            </PaginationContent>
        </ShadcnPagination>
    )
}