<script lang="ts">
    import {TESTIMONIALS, TEXTS} from "./consts";
    import Testimonial from "./Testimonial.svelte";
    import Carousel from "../../../../components/Carousel/Carousel.svelte";
</script>

<div class="Testimonials">
    <h2>{TEXTS.title}</h2>

    <div class="Testimonials__items">
        <Carousel perPage={1}>
            {#each TESTIMONIALS as testimonial}
                <Testimonial
                        author={testimonial.author}
                        text={testimonial.text}
                        imageUrl={testimonial.imageUrl}/>
            {/each}

        </Carousel>
    </div>
</div>

<style>
    .Testimonials__items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .Testimonials__items :global(.Testimonial__items__item) {
        margin: 0 auto 3rem;
    }
</style>