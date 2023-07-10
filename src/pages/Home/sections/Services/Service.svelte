<script lang="ts">
    import Markdown from "../../../../components/Markdown/Markdown.svelte";

    export let service: Service;

</script>

<div class="Service">
    <h3>{service.title}</h3>
    <Markdown text={service.content}/>
</div>