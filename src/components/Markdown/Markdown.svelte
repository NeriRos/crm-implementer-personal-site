<script lang="ts">
    export let text: string;

    import {unified} from 'unified'
    import remarkParse from 'remark-parse'
    import remarkRehype from 'remark-rehype'
    import remarkHtml from 'remark-html'
    import rehypeSanitize from 'rehype-sanitize'

    const content = text ? await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .process(text) : "";
</script>

<div class="Markdown">
    {@html content}
</div>

