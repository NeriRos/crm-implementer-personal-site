<script lang="ts">

    import {SERVICES, TEXTS} from "./consts";
    import Service from "./Service.svelte";
</script>

<div class="Services">
    <h2>{TEXTS.title}</h2>

    <div class="Services__list">
        {#each SERVICES as service}
            <Service service={service}/>
        {/each}
    </div>
</div>

<style>
    .Services {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>