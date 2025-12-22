'use client'
import {DirectionProvider as RadixDirectionProvider} from "@radix-ui/react-direction";
import {ReactNode} from "react";

export default function DirectionProvider({dir, children}: { dir: 'rtl' | 'ltr', children: ReactNode })
{
    return <RadixDirectionProvider dir={dir}>{children}</RadixDirectionProvider>;
}