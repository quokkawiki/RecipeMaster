<script lang="ts">
    import * as InputGroup from '$lib/components/ui/input-group'
    import { cn } from '$lib/utils';
    import { SearchIcon, ArrowRight } from '@lucide/svelte';

    const { class: className } = $props<{ class?: string }>();
</script>

<InputGroup.Root
    class={cn(
        "max-w-md",
        className
    )}
>
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon>
        <SearchIcon />
    </InputGroup.Addon>
    <InputGroup.Addon align="inline-end">
        <ArrowRight />
    </InputGroup.Addon>
</InputGroup.Root>
