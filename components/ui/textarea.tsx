import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

export const textareaVariants = cva(
    "flex min-h-[80px] w-full text-sm placeholder:text-muted-foreground transition-[border-color] disabled:cursor-not-allowed disabled:opacity-50 focus-within:outline-none aria-invalid:ring-1 aria-invalid:ring-destructive aria-invalid:focus-within:ring-2 aria-invalid:focus-within:ring-destructive ring-0 p-3 placeholder:text-muted-foreground/70",
    {
        variants: {
            rounded: {
                none: "rounded-none",
                md: "rounded-md",
            },
            variant: {
                outline:
                    "border border-border bg-background focus-visible:border-primary aria-invalid:ring-destructive aria-invalid:ring-1",
                filled:
                    "border border-transparent bg-secondary dark:bg-primary-foreground focus-within:border-primary focus-within:ring-primary text-secondary-foreground dark:text-background focus-within:ring-1 transition-[border-color,box-shadow] border-transparent duration-300",
                underlined:
                    "rounded-none border-b border-border bg-background focus-visible:border-b-primary focus-visible:shadow-[0_1px_0px_0px_hsl(var(--primary))]",
                unstyled: "",
            },
        },
        defaultVariants: {
            rounded: "md",
            variant: "outline",
        },
    }
)

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, variant, rounded, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={cn(textareaVariants({ variant, rounded }), className)}
                {...props}
            />
        )
    }
)

Textarea.displayName = "Textarea"

export { Textarea }