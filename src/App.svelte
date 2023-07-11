<script lang="ts">
    import {Home} from './pages/Home'

    import {inject} from '@vercel/analytics';

    inject({mode: import.meta.env.DEV ? 'development' : 'production'});
</script>

<main data-color-scheme="dark">
    <Home/>
</main>

<style>
    main {
        color: var(--foreground);
        background-color: var(--background);
    }
</style>
