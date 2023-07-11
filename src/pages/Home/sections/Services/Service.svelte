<script lang="ts">
    import Markdown from "../../../../components/Markdown/Markdown.svelte";

    export let service: Service;

</script>

<div class="Service">
    <Markdown text={service.content}/>
</div>

<style>
    .Service {
        text-align: left;
    }
</style>