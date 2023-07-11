<script lang="ts">
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    const submit = (e: Event) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        dispatch('submit', {data, event: e});
    }
</script>

<form on:submit={submit}>
    <slot/>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    :global(input), :global(select), :global(textarea) {
        background: var(--background);
        color: var(--foreground);

        border: 1px solid var(--foreground);
        border-radius: var(--border-radius);

        padding: 1rem;
    }

    :global(input::placeholder), :global(select::placeholder), :global(textarea::placeholder) {
        color: var(--foreground);
        opacity: 1;
    }
</style>