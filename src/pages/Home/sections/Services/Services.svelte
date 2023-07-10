<script lang="ts">

    import {SERVICES, TEXTS} from "./consts";
    import Service from "./Service.svelte";
    import Tabs from "../../../../components/Tabs/Tabs.svelte";
    import TabPanel from "../../../../components/Tabs/TabPanel.svelte";
    import TabList from "../../../../components/Tabs/TabList.svelte";
    import Tab from "../../../../components/Tabs/Tab.svelte";

</script>

<div class="Services">
    <h2>{TEXTS.title}</h2>

    <Tabs class="Services__list">
        <TabList>
            {#each SERVICES as service}
                <Tab tab={service.tab}>
                    {service.tab}
                </Tab>
            {/each}
        </TabList>
        {#each SERVICES as service}
            <TabPanel>
                <Service service={service}/>
            </TabPanel>
        {/each}
    </Tabs>
</div>

<style>
    .Services {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>