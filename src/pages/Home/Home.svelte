<script lang="ts">
    import {Hero} from "./sections/Hero";
    import {Services} from "./sections/Services";
    import {Approach} from "./sections/Approach";
    import {Contact} from "./sections/Contact";
    import {Packages} from "./sections/Packages";
    import Credits from "./sections/Credits/Credits.svelte";
</script>

<div class="Home">
    <div class="Home__header">
        <Hero/>
    </div>
    <div class="Home__content">
        <Services/>
        <Packages/>
        <!--<Projects />-->
        <Approach/>
    </div>
    <div class="Home__footer">
        <Contact/>
        <Credits/>
    </div>
</div>
<!--<About />-->

<style>
    .Home__content :global( > *) {
        margin-bottom: 2rem;
    }

    .Home__content {
        padding: 1rem;
    }

    :global(.Contact) {
        margin-bottom: 3rem;
    }
</style>
