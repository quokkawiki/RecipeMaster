<script lang="ts">
    import * as Tooltip from '$lib/components/ui/tooltip'
    import { cn } from '$lib/utils';

    const difficultyMap = [
        { color: 'bg-green-500', label: 'easy' },
        { color: 'bg-yellow-400', label: 'intermediate' },
        { color: 'bg-red-500', label: 'difficult' }
    ];

    const { recipe, size = 2 } = $props()
</script>

<Tooltip.Provider>
    <Tooltip.Root>
        <Tooltip.Trigger
            class={cn(
                `ms-1 inline-flex size-${size} rounded-full inline`,
                difficultyMap[recipe.difficulty]?.color
            )}
        />
        <Tooltip.Content>
            <p>
                This recipe is {difficultyMap[recipe.difficulty]?.label}
            </p>
        </Tooltip.Content>
    </Tooltip.Root>
</Tooltip.Provider>
