<script lang="ts">
    import Markdown from "../../../../components/Markdown/Markdown.svelte";

    export let service: Service;

</script>

<div class="Service">
    <Markdown text={service.content}/>
</div>

<style>
    .Service {
        padding: 1rem;
        text-align: left;
    }
</style>