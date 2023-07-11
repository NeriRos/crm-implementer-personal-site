<script lang="ts">
    import Form from "../../../../components/Form/Form.svelte";
    import type {SubmitResult} from "../../../../components/Form/Form";
    import {TEXTS} from "./consts";

    const submit = (submitResult: SubmitResult<any>) => {
        console.log(submitResult.detail.data);
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
</div>

<style>
    .Contact {
        padding: 1rem;
        max-width: 400px;
        margin: 0 auto;
    }

    input {
        display: block;
        margin-bottom: 0.5rem;
    }
</style>