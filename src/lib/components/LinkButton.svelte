<script lang="ts">
    import { buttonVariants, type ButtonVariant, type ButtonSize } from '$lib/components/ui/button';
    import { cn } from '$lib/utils';
    import type { Snippet } from 'svelte';

    const {
        class: className,
        variant = 'default',
        size = 'default',
        children,
        ...props
    }: {
        className?: string;
        variant?: ButtonVariant;
        size?: ButtonSize;
        children: Snippet;
        [key: string]: any;
    } = $props();
</script>

<a class={cn(buttonVariants({ variant, size }), className)} {...props} role="button">
    {@render children()}
</a>
