<script lang="ts">
    import {TEXTS} from "./consts.js";
</script>

<div class="Credits">
    <span>{TEXTS.createdBy}</span>
    <span>{TEXTS.copywrite}</span>
</div>

<style>
    .Credits {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
    }

    @media screen and (max-width: 430px) {
        .Credits {
            flex-direction: column;
            justify-content: flex-end;
        }
    }
</style>