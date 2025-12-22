'use client'

import * as React from "react"
import {DateRange} from "react-day-picker"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {IconCalendar} from "@tabler/icons-react"
import {useDatePickerLocale} from "@/context/date-picker-locale-provider"
import {useEffect} from "react"
import {useMediaQuery} from "react-responsive"
import {useTranslations} from "next-intl"

type DatePickerWithRangeProps = {
    defaultValue?: DateRange;
    onChange: (range: DateRange | undefined) => void;
    className?: string;
};

export function DatePickerWithRange({
                                        defaultValue,
                                        onChange,
                                        className,
                                    }: DatePickerWithRangeProps)
{
    const t = useTranslations('datePicker');
    const locale = useDatePickerLocale();
    const [selectedRange, setSelectedRange] = React.useState<DateRange | undefined>(defaultValue);
    const [tempRange, setTempRange] = React.useState<DateRange | undefined>(defaultValue);
    const [open, setOpen] = React.useState(false);
    const isMobile = useMediaQuery({maxWidth: 768});

    // When the popover opens, reset tempRange to match selected
    const handleOpenChange = (isOpen: boolean) =>
    {
        if (isOpen)
        {
            setTempRange(selectedRange);
        }
        setOpen(isOpen);
    };

    const handleApply = () =>
    {
        setSelectedRange(tempRange);
        onChange(tempRange);
        setOpen(false);
    };

    const handleReset = () =>
    {
        setSelectedRange(undefined);
        setTempRange(undefined);
        onChange(undefined);
        setOpen(false);
    };

    useEffect(() =>
    {
        setSelectedRange(defaultValue)
    }, [defaultValue]);

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover open={open} onOpenChange={handleOpenChange} modal={isMobile}>
                <PopoverTrigger asChild title={t('triggerTitle')}>
                    <Button
                        id="date"
                        variant="ghost"
                        size="smIconOnMobile"
                        className={cn(
                            "font-normal relative",
                            !selectedRange && "text-muted-foreground"
                        )}
                    >
                        <IconCalendar/>
                        {(selectedRange?.from || selectedRange?.to) && (
                            <span className="absolute right-2 top-2 size-2 bg-primary rounded-full"/>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 mx-4" align="start">
                    <Calendar
                        autoFocus
                        mode="range"
                        defaultMonth={tempRange?.from}
                        selected={tempRange}
                        onSelect={setTempRange}
                        numberOfMonths={isMobile ? 1 : 2}
                        locale={locale}
                    />
                    <div className="p-4 flex justify-end gap-2">
                        <Button
                            size="sm"
                            variant="outline"
                            className="text-xs"
                            onClick={handleReset}
                        >
                            {t('resetButton')}
                        </Button>
                        <Button size="sm" className="text-xs" onClick={handleApply}>
                            {t('applyButton')}
                        </Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}