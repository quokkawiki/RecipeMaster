<script lang="ts">
    import { ImageIcon } from '@lucide/svelte';
    import { cn } from '$lib/utils';

    const {
        src,
        alt,
        class: className,
        parentClass,
        iconSize = 16,
        ...props
    }: {
        src: string;
        alt: string;
        class?: string;
        parentClass?: string;
        iconSize?: number;
    } = $props();
</script>

<div class={cn("relative mb-1 overflow-hidden", parentClass)}>
    <div class="flex items-center justify-center bg-muted" style="aspect-ratio: 40/21;">
        <ImageIcon size={`${iconSize * 0.25}rem`} class="text-muted-foreground" />
    </div>

    <img
        class={cn("absolute top-0 left-0 w-full", className)}
        {src}
        {alt}
        {...props}
    />
</div>
