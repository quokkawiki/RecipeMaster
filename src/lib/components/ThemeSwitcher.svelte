<script lang="ts">
    import * as Select from '$lib/components/ui/select/index.js';

    import { Palette, Sun, Moon, Monitor } from '@lucide/svelte';
    import { userPrefersMode, setMode } from 'mode-watcher';

    let value = $state(userPrefersMode.current);

    const {
        full = false,
        ...props
    }: {
        full?: boolean;
        [key: string]: any;
    } = $props();
</script>

<Select.Root
    type="single"
    bind:value
    onValueChange={(value) => setMode(value as 'dark' | 'light' | 'system')}
    {...props}
>
    <Select.Trigger {...props}>
        <Palette />
        <span class={full ? '' : 'sr-only md:not-sr-only'}>Theme</span>
    </Select.Trigger>
    <Select.Content>
        <Select.Item value="light" label="Light">
            <Sun />
            Light
        </Select.Item>
        <Select.Item value="dark" label="Dark">
            <Moon />
            Dark
        </Select.Item>
        <Select.Item value="system" label="System theme">
            <Monitor />
            System theme
        </Select.Item>
    </Select.Content>
</Select.Root>