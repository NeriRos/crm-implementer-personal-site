<script lang="ts">
    import {PACKAGES, TEXTS} from "./consts";
    import Package from "./Package.svelte";
</script>

<div class="Packages">
    <h2 class="Packages__title">
        {TEXTS.title}
    </h2>

    <div class="Packages__list">
        {#each PACKAGES as packageItem}
            <Package
                    title={packageItem.title}
                    description={packageItem.description}
                    price={packageItem.price}
                    pricePeriod={packageItem.pricePeriod}
                    features={packageItem.features}
            />
        {/each}
    </div>
</div>

<style>
    .Packages {
        text-align: left;
    }

    .Packages__title {
        text-align: center;
    }

    .Packages__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media screen and (min-width: 430px) {
        .Packages__list :global(.Package + .Package) {
            margin: 1rem;
        }
    }
</style>