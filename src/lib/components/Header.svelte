<script>
    import HeaderIcon from "$lib/components/HeaderIcon.svelte";
    import SearchBox from "$lib/components/SearchBox.svelte";
    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
    import MobileSearchBox from "$lib/components/MobileSearchBox.svelte";
</script>

<div class="sticky top-0 z-10 flex bg-secondary justify-between text-secondary-foreground px-12 sm:px-24 py-4">
    <HeaderIcon />
    <SearchBox class="hidden md:flex mx-12" />
    <div class="flex gap-2">
        <MobileSearchBox />
        <ThemeSwitcher />
    </div>
</div>