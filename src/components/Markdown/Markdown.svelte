<script lang="ts">
    import {unified} from 'unified'
    import remarkParse from 'remark-parse'
    import remarkHtml from 'remark-html'

    export let text: string;

    const contentPromise = text ? unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(text) : "";
</script>

<div class="Markdown">
    {#await contentPromise then content}
        {@html content}
    {/await}
</div>

