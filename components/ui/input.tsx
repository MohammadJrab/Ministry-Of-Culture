import * as React from "react"

import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

export const inputVariants = cva(
    "flex items-center h-10 w-full text-sm bg-transparent placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border border-transparent focus-within:outline-none aria-invalid:ring-1 aria-invalid:ring-destructive aria-invalid:focus-within:ring-2 aria-invalid:focus-within:ring-destructive",

    {
        variants: {
            rounded: {
                none: "rounded-none",
                md: "rounded-md",
                full: "rounded-full",
            },
            variant: {
                outline:
                    "border-[#DDDDDD] bg-background rounded-md focus-within:border-primary aria-invalid:border-transparent",
                filled:
                    "border bg-secondary dark:bg-primary-foreground focus-within:border-primary focus-within:ring-primary text-secondary-foreground dark:text-background focus-within:ring-1 transition-[border-color,box-shadow] border-transparent duration-300",
                underlined:
                    "rounded-none border-b-border focus-within:border-b-primary focus-within:shadow-[0_1px_0px_0px_hsl(var(--primary))] transition-[box-shadow]",
                unstyled: "",
            },
        },
        defaultVariants: {
            rounded: "full",
            variant: "outline",
        },
    }
)

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
    startContent?: React.ReactNode
    endContent?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        { className, rounded, variant, startContent, endContent, ...props },
        ref
    ) => {
        return (
            <div
                className={cn(
                    inputVariants({ variant, rounded, className }),
                    className
                )}
            >
                {startContent && (
                    <span className="pointer-events-none flex items-center text-muted-foreground px-3 py-2">
                        {startContent}
                    </span>
                )}
                <input
                    ref={ref}
                    {...props}
                    className={cn(
                        "w-full bg-transparent px-3 py-2 h-full outline-none focus-visible:outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed disabled:opacity-50",
                        {
                            "pl-1.5": !!startContent,
                            "pr-1.5": !!endContent,
                        }
                    )}
                />
                {endContent && (
                    <span className="pointer-events-none flex items-center text-muted-foreground p-2">
                        {endContent}
                    </span>
                )}
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }