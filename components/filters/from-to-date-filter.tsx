'use client';

import React from "react";
import {useSearchParams} from 'next/navigation';
import {useRouter} from 'i18n/routing';
import {DatePickerWithRange} from "@/components/range-date-picker";
import {DateRange} from "react-day-picker";
import {parseISO} from "date-fns";

export default function FromToDateFilter()
{
    const router = useRouter();
    const searchParams = useSearchParams();

    const minDateStr = searchParams.get("FromDate");
    const maxDateStr = searchParams.get("ToDate");

    const defaultRange: DateRange | undefined =
        minDateStr || maxDateStr
            ? {
                from: minDateStr ? parseISO(minDateStr) : undefined,
                to: maxDateStr ? parseISO(maxDateStr) : undefined,
            }
            : undefined;

    function updateSearchParams(range: DateRange | undefined)
    {
        const params = new URLSearchParams(searchParams.toString());

        if (range?.from)
            params.set("FromDate", range.from.toISOString());
        else
            params.delete("FromDate");

        if (range?.to)
            params.set("ToDate", range.to.toISOString());
        else
            params.delete("ToDate");

        params.delete("Page");

        router.replace(`?${params.toString()}`);
        router.refresh();
    }

    return (
        <DatePickerWithRange
            defaultValue={defaultRange}
            onChange={updateSearchParams}
        />
    );
}