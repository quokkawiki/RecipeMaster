<script lang="ts">
    import * as Popover from '$lib/components/ui/popover';
    import { Button, buttonVariants } from '$lib/components/ui/button';
    import { SearchIcon } from '@lucide/svelte';
    import SearchBox from '$lib/components/SearchBox.svelte';
    import { cn } from '$lib/utils';
</script>

<Popover.Root>
    <Popover.Trigger
        class={cn(
            "block min-[1000px]:hidden cursor-pointer",
            buttonVariants({ variant: 'ghost', size: 'icon' })
        )}
        >
        <SearchIcon />
    </Popover.Trigger>
    <Popover.Content>
        <SearchBox />
    </Popover.Content>
</Popover.Root>
