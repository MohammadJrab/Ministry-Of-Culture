'use client';

/**
 * Motion - A single, unified animation component.
 * 
 * Replaces all section-specific wrappers with one configurable component.
 * Supports: fade, slide, scale, stagger, and hover interactions.
 * 
 * @example
 * // Basic fade-up animation
 * <Motion animation="fadeUp">
 *   <Content />
 * </Motion>
 * 
 * // Slide from left on scroll
 * <Motion animation="slideLeft" trigger="inView">
 *   <Image />
 * </Motion>
 * 
 * // Staggered cards with hover
 * <Motion animation="fadeUp" staggerIndex={0} hover="lift">
 *   <Card />
 * </Motion>
 * 
 * // Container for staggered children
 * <Motion animation="stagger" trigger="onMount">
 *   <Motion.Item><Child1 /></Motion.Item>
 *   <Motion.Item><Child2 /></Motion.Item>
 * </Motion>
 */

import { ReactNode, createContext, useContext } from 'react';
import {
    LazyMotion,
    domAnimation,
    m,
    useReducedMotion,
    type Variants,
} from 'motion/react';
import {
    fadeInUpVariants,
    fadeInLeftVariants,
    fadeInRightVariants,
    scaleInVariants,
    fadeOnlyVariants,
    containerVariants,
    reducedMotionVariants,
    viewportOnce,
    viewportEarly,
    hoverLiftVariants,
    tapVariants,
    staggerDelay,
    defaultTransition,
} from '@/lib/motion-variants';

// ============================================================================
// TYPES
// ============================================================================

type AnimationType =
    | 'fadeUp'
    | 'fadeOnly'
    | 'slideLeft'
    | 'slideRight'
    | 'scaleIn'
    | 'stagger';

type TriggerType = 'onMount' | 'inView';
type HoverType = 'lift' | 'none';
type ViewportType = 'normal' | 'early';

interface MotionProps {
    children: ReactNode;
    /** Animation type to apply */
    animation?: AnimationType;
    /** When to trigger: 'onMount' (immediate) or 'inView' (scroll) */
    trigger?: TriggerType;
    /** Hover interaction: 'lift' (scale 1.02) or 'none' */
    hover?: HoverType;
    /** Index for stagger delay (0, 1, 2...) */
    staggerIndex?: number;
    /** Delay before animation starts (seconds) */
    delay?: number;
    /** Viewport trigger threshold: 'normal' (30%) or 'early' (20%) */
    viewport?: ViewportType;
    /** Additional CSS classes */
    className?: string;
    /** HTML element to render as */
    as?: 'div' | 'section' | 'article' | 'span';
}

interface MotionItemProps {
    children: ReactNode;
    className?: string;
}

// ============================================================================
// VARIANT MAP
// ============================================================================

const animationVariants: Record<AnimationType, Variants> = {
    fadeUp: fadeInUpVariants,
    fadeOnly: fadeOnlyVariants,
    slideLeft: fadeInLeftVariants,
    slideRight: fadeInRightVariants,
    scaleIn: scaleInVariants,
    stagger: containerVariants,
};

// ============================================================================
// CONTEXT (for stagger children)
// ============================================================================

const MotionContext = createContext<{ isInsideStagger: boolean }>({
    isInsideStagger: false
});

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function Motion({
    children,
    animation = 'fadeUp',
    trigger = 'inView',
    hover = 'none',
    staggerIndex,
    delay = 0,
    viewport = 'normal',
    className = '',
    as = 'div',
}: MotionProps) {
    const prefersReducedMotion = useReducedMotion();
    const isStagger = animation === 'stagger';

    // Get base variants
    let variants = prefersReducedMotion
        ? reducedMotionVariants
        : animationVariants[animation];

    // Apply stagger delay if index provided
    if (staggerIndex !== undefined && !prefersReducedMotion) {
        variants = {
            hidden: fadeInUpVariants.hidden,
            visible: {
                ...fadeInUpVariants.visible,
                transition: staggerDelay(staggerIndex, 0.08),
            },
        };
    }

    // Apply custom delay
    if (delay > 0 && !prefersReducedMotion) {
        variants = {
            ...variants,
            visible: {
                ...(variants.visible as object),
                transition: {
                    ...defaultTransition,
                    delay,
                },
            },
        };
    }

    // Viewport config
    const viewportConfig = viewport === 'early' ? viewportEarly : viewportOnce;

    // Hover props
    const hoverProps = hover === 'lift' && !prefersReducedMotion
        ? { whileHover: hoverLiftVariants, whileTap: tapVariants }
        : {};

    // Trigger props
    const triggerProps = trigger === 'onMount'
        ? { initial: 'hidden', animate: 'visible' }
        : { initial: 'hidden', whileInView: 'visible', viewport: viewportConfig };

    // Create the motion element
    const MotionElement = as === 'section' ? m.section
        : as === 'article' ? m.article
            : as === 'span' ? m.span
                : m.div;

    const content = (
        <MotionElement
            {...triggerProps}
            {...hoverProps}
            variants={variants}
            className={className}
        >
            {children}
        </MotionElement>
    );

    // Wrap in context for stagger children
    if (isStagger) {
        return (
            <LazyMotion features={domAnimation}>
                <MotionContext.Provider value={{ isInsideStagger: true }}>
                    {content}
                </MotionContext.Provider>
            </LazyMotion>
        );
    }

    return (
        <LazyMotion features={domAnimation}>
            {content}
        </LazyMotion>
    );
}

// ============================================================================
// STAGGER ITEM (child of stagger container)
// ============================================================================

export function MotionItem({ children, className = '' }: MotionItemProps) {
    const prefersReducedMotion = useReducedMotion();
    const variants = prefersReducedMotion ? reducedMotionVariants : fadeInUpVariants;

    return (
        <m.div variants={variants} className={className}>
            {children}
        </m.div>
    );
}

// Compound component pattern
export const MotionCompound = Object.assign(Motion, { Item: MotionItem });

export default Motion;
