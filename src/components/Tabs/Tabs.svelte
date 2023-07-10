<script context="module">
    export const TABS = {};
</script>

<script>
    import {setContext, onDestroy} from 'svelte';
    import {writable} from 'svelte/store';

    const registeredTabs = [];
    const registeredPanels = [];
    const selectedTab = writable(null);
    const selectedPanel = writable(null);

    setContext(TABS, {
        registerTab: tab => {
            registeredTabs.push(tab);
            selectedTab.update(current => current || tab);

            onDestroy(() => {
                const i = registeredTabs.indexOf(tab);
                registeredTabs.splice(i, 1);
                selectedTab.update(current => current === tab ? (registeredTabs[i] || registeredTabs[registeredTabs.length - 1]) : current);
            });
        },
        registerPanel: panel => {
            registeredPanels.push(panel);
            selectedPanel.update(current => current || panel);

            onDestroy(() => {
                const i = registeredPanels.indexOf(panel);
                registeredPanels.splice(i, 1);
                selectedPanel.update(current => current === panel ? (registeredPanels[i] || registeredPanels[registeredPanels.length - 1]) : current);
            });
        },
        selectTab: tab => {
            const i = registeredTabs.indexOf(tab);
            selectedTab.set(tab);
            selectedPanel.set(registeredPanels[i]);
        },
        selectedTab,
        selectedPanel
    });
</script>

<div class="Tabs">
    <slot></slot>
</div>