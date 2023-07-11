<script lang="ts">
    export let author: string;
    export let text: string;
    export let imageUrl: string | undefined;
</script>

<div class="Testimonial__items__item">
    {#if imageUrl}
        <img src={imageUrl} alt={author}/>
    {/if}
    <h3>{author}</h3>
    <div>{text}</div>
</div>

<style>
    .Testimonial__items__item {
        max-width: 200px;
        text-align: left;
    }

    .Testimonial__items__item:not(:last-child, :first-child) {
        padding: 0 1rem;
    }

    h3 {
        text-align: center;
    }

    img {
        max-width: 200px;
        width: 100%;
        height: auto;
    }
</style>