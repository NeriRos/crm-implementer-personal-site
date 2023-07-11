<script lang="ts">
    import Form from "../../../../components/Form/Form.svelte";
    import type {SubmitResult} from "../../../../components/Form/Form";
    import {TEXTS, WEBHOOK_URL} from "./consts";
    import {Congratulations} from "../../../../components/Congratulations";

    let confettiTimes = -1;
    let didSubmit = false;

    const activateCongratulations = () => {
        $: confettiTimes += 1;
    }

    const submit = (submitResult: SubmitResult<any>) => {
        if (didSubmit) return;

        activateCongratulations();

        fetch(WEBHOOK_URL, {
            method: "POST",
            body: JSON.stringify(submitResult.detail.data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        $: didSubmit = true;
    }
</script>

<div class="Contact">
    <h2>{TEXTS.title}</h2>

    <Form on:submit={submit}>
        <input autocomplete="name" name="name" placeholder="Full Name" required>
        <input autocomplete="tel" type="tel" name="phone" placeholder="Phone" required>
        <input autocomplete="email" type="email" name="email" placeholder="Email" required>
        <button type="submit">{TEXTS.submit}</button>
    </Form>

    {#if didSubmit}
        <p>{TEXTS.thanks}</p>
    {/if}

    <Congratulations durationSeconds={5} toggle={confettiTimes}/>
</div>

<style>
    input {
        display: block;
        margin-bottom: 0.5rem;
    }
</style>