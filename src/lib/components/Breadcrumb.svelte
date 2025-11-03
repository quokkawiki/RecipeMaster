<script lang="ts">
    import * as Breadcrumb from '$lib/components/ui/breadcrumb';
    import StructuredData from '$lib/components/StructuredData.svelte';
    import { createBreadcrumbSchema } from '$lib/utils';
    
    interface BreadcrumbItem {
        name: string;
        path: string;
    }
    
    export let items: BreadcrumbItem[];
    
    const schema = createBreadcrumbSchema(items);
</script>

<StructuredData data={schema} />

<Breadcrumb.Root>
    <Breadcrumb.List>
        {#each items as item, i}
            {#if i > 0}
                <Breadcrumb.Separator />
            {/if}
            <Breadcrumb.Item>
                {#if i === items.length - 1}
                    <Breadcrumb.Page>{item.name}</Breadcrumb.Page>
                {:else}
                    <Breadcrumb.Link href={item.path}>{item.name}</Breadcrumb.Link>
                {/if}
            </Breadcrumb.Item>
        {/each}
    </Breadcrumb.List>
</Breadcrumb.Root>