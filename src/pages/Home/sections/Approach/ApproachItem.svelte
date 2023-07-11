<script lang="ts">
    export let title: string;
    export let description: string;
    export let imageUrl: string;
</script>

<div class="Approach__items__item">
    <img src={imageUrl} alt={title}/>
    <h3>{title}</h3>
    <div>{description}</div>
</div>

<style>
    .Approach__items__item {
        max-width: 200px;
        text-align: left;
    }

    .Approach__items__item:not(:last-child, :first-child) {
        padding: 0 1rem;
    }

    h3 {
        text-align: left;
    }

    img {
        max-width: 200px;
        width: 100%;
        height: auto;
    }
</style>