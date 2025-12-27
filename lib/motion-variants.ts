/**
 * Motion Animation System
 * 
 * Central file for all motion variants and utilities.
 * Uses transform and opacity only for optimal performance.
 * Respects prefers-reduced-motion via conditional variants.
 */

import type { Variants, Transition } from 'motion/react';

// ============================================================================
// SHARED TIMING & EASING
// ============================================================================

/**
 * Default transition with natural easing.
 * Duration 0.5s is balanced – fast enough to feel snappy, slow enough to be noticeable.
 */
export const defaultTransition: Transition = {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for natural feel
};

export const quickTransition: Transition = {
    duration: 0.3,
    ease: 'easeOut',
};

export const slowTransition: Transition = {
    duration: 0.7,
    ease: [0.25, 0.1, 0.25, 1],
};

// ============================================================================
// VIEWPORT OPTIONS
// ============================================================================

/**
 * Standard viewport options for scroll-triggered animations.
 * - once: true → animate only on first view (performance)
 * - amount: 0.3 → trigger when 30% visible (feels responsive)
 */
export const viewportOnce = { once: true, amount: 0.3 } as const;

/**
 * For smaller elements that should trigger earlier.
 */
export const viewportEarly = { once: true, amount: 0.2 } as const;

// ============================================================================
// CONTAINER VARIANTS (for stagger children)
// ============================================================================

/**
 * Container variant for staggered children animations.
 * Usage: Apply to parent, children use `item` variants.
 */
export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

/**
 * Container with faster stagger for many items (e.g., 7 cultural cards).
 */
export const containerFastVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
};

// ============================================================================
// ITEM / ELEMENT VARIANTS
// ============================================================================

/**
 * Fade in + slide up. The most common entrance animation.
 * Works well for: headlines, paragraphs, cards, buttons.
 */
export const fadeInUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: defaultTransition,
    },
};

/**
 * Fade in + slide from left.
 * Works well for: images, left-aligned content.
 */
export const fadeInLeftVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -32,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: defaultTransition,
    },
};

/**
 * Fade in + slide from right.
 * Works well for: text blocks next to images.
 */
export const fadeInRightVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 32,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: defaultTransition,
    },
};

/**
 * Scale in + fade. Creates an "appear" effect.
 * Works well for: centered content, quotes, CTAs.
 */
export const scaleInVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: slowTransition,
    },
};

/**
 * Simple fade only. Minimal and non-distracting.
 * Works well for: footer, utility sections.
 */
export const fadeOnlyVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: defaultTransition,
    },
};

// ============================================================================
// HOVER VARIANTS
// ============================================================================

/**
 * Subtle lift on hover for cards.
 * Scale 1.02 is noticeable but not jarring.
 */
export const hoverLiftVariants = {
    scale: 1.02,
    transition: quickTransition,
};

/**
 * Tap/press feedback.
 */
export const tapVariants = {
    scale: 0.98,
};

// ============================================================================
// REDUCED MOTION VARIANTS
// ============================================================================

/**
 * Null variants for reduced motion preference.
 * Returns instant state without animation.
 */
export const reducedMotionVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Returns appropriate variants based on reduced motion preference.
 * Use this to conditionally apply animations.
 */
export function getVariants(
    variants: Variants,
    prefersReducedMotion: boolean
): Variants {
    return prefersReducedMotion ? reducedMotionVariants : variants;
}

/**
 * Creates stagger delay for a specific item index.
 * Useful when you can't use container variants (e.g., SSR mapping).
 */
export function staggerDelay(index: number, baseDelay = 0.1): Transition {
    return {
        ...defaultTransition,
        delay: index * baseDelay,
    };
}
