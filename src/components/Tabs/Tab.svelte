<script>
    import {getContext} from 'svelte';
    import {TABS} from './Tabs.svelte';

    export let tab = {};

    const {registerTab, selectTab, selectedTab} = getContext(TABS);

    registerTab(tab);
</script>

<style>
    button {
        background: none;
        border: none;
        border-radius: 0;
        margin: 0;
        color: #ccc;
    }

    button:active, button {
        border: none;
        outline: none;
    }

    .selected {
        color: white;
        border-bottom: 2px solid white;
    }
</style>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
    <slot></slot>
</button>