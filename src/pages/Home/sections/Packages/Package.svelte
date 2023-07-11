<script lang="ts">
    import {CURRENCY} from "./consts";

    export let title: string;
    export let description: string;
    export let price: number;
    export let pricePeriod: string;
    export let features: string[];
</script>

<div class="Package">
    <h3>{title}</h3>
    <p>{description}</p>
    <span class="Package__price">{CURRENCY}{price}<span class="Package__price__period">/{pricePeriod}</span></span>
    <ul class="Package__features">
        {#each features as feature}
            <li>{feature}</li>
        {/each}
    </ul>
</div>

<style>
    .Package {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        border: 1px solid var(--foreground);
        border-radius: var(--border-radius);
        margin: 1rem 0;
        width: 100%;
        flex: 1;
    }

    .Package__price {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .Package__price__period {
        font-size: 1rem;
        font-weight: normal;
    }

    .Package__features {
        margin: 0;
    }
</style>