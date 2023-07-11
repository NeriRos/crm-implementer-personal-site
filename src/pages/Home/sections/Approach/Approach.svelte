<script lang="ts">
    import {ITEMS, TEXTS} from "./consts";
    import ApproachItem from "./ApproachItem.svelte";
</script>

<div class="Approach">
    <h2>{TEXTS.title}</h2>

    <div class="Approach__items">
        {#each ITEMS as item}
            <ApproachItem
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}/>
        {/each}
    </div>
</div>

<style>
    .Approach__items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>