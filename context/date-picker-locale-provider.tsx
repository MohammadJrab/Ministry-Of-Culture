"use client";

import React, {
    createContext,
    useContext,
    type ReactNode,
} from "react";
import {type Locale as DFLocale} from "date-fns";
import {ar} from "date-fns/locale/ar";
import {enUS} from "date-fns/locale/en-US";

// A custom locale that supports Levantine months.
export const arLev: DFLocale = {
    ...ar,
    code: 'ar-lev',
    localize: {
        ...ar.localize,
        month: (n: number) => [
            'كانون الثاني',
            'شباط',
            'آذار',
            'نيسان',
            'أيار',
            'حزيران',
            'تموز',
            'آب',
            'أيلول',
            'تشرين الأول',
            'تشرين الثاني',
            'كانون الأول',
        ][n],
    },
};

type DatePickerLocaleContextType = {
    locale: DFLocale | null;
};

const DatePickerLocaleContext = createContext<DatePickerLocaleContextType | undefined>(undefined);

export function DatePickerLocaleProvider({
                                             children,
                                             localeName,
                                         }: {
    children: ReactNode;
    localeName: string;
})
{
    return (
        <DatePickerLocaleContext.Provider value={{locale: localeName === 'ar' ? arLev : enUS}}>
            {children}
        </DatePickerLocaleContext.Provider>
    );
}

export function useDatePickerLocale(): DFLocale
{
    const ctx = useContext(DatePickerLocaleContext);
    if (!ctx) throw new Error("useDatePickerLocale must be used within DatePickerLocaleProvider");
    return ctx.locale;
}