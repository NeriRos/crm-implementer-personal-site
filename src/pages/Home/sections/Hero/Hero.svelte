<script lang="ts">

    import {TEXTS} from "./consts";
</script>

<div class="Hero">
    <div class="Hero__content">
        <h1 class="Hero__title">
            {TEXTS.title.first} <span class="Hero__title--highlight">{TEXTS.title.second}</span>
        </h1>
        <p class="Hero__subtitle">{TEXTS.subtitle}</p>
    </div>
</div>

<style>
    .Hero {
        height: 100vh;
        background-image: url('https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3b3b6b0b0b5b0b0b0b0b0b0b0b0b0b0b&auto=format&fit=crop&w=1950&q=80');
        background-size: cover;
        background-position: center;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Hero__content {
        text-align: center;
        color: #fff;
        backdrop-filter: blur(5px);
        padding: 2rem;
        border-radius: 20px;
    }

    .Hero__title {
        font-size: 4rem;
        margin-bottom: 0;
    }

    .Hero__title--highlight {
        color: #f4645f;
    }

    .Hero__subtitle {
        font-size: 1.5rem;
        margin-top: 0;
    }
</style>