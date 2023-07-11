<script>
    export let durationSeconds = 3;
    export let toggle = 0;

    import {onDestroy} from 'svelte';

    let shouldStartHiding = false;
    let shouldRun = false;

    const speed = 0.3;
    const emojiSize = 1;
    let characters = ['🥳', '🎉', '✨'];

    let confetti = new Array(100)
        .fill()
        .map((_, i) => {
            return {
                character: characters[i % characters.length],
                x: Math.random() * 100,
                y: -20 - Math.random() * 100,
                r: emojiSize + Math.random()
            };
        })
        .sort((a, b) => a.r - b.r);


    const startSession = () => {
        $: shouldStartHiding = true;
        $: shouldRun = true;

        loop();

        setTimeout(() => {
            $: shouldStartHiding = false;

            setTimeout(() => {
                $: shouldRun = false;
            }, 1000)
        }, durationSeconds * 1000)
    }

    let frame;

    $: {
        if (toggle !== -1) {
            startSession();
        }
    }

    function loop() {
        if (!shouldRun) return;

        frame = requestAnimationFrame(loop);

        confetti = confetti.map((emoji) => {
            emoji.y += speed * emoji.r;
            if (emoji.y > 120) emoji.y = -20;
            return emoji;
        });
    }

    onDestroy(() => {
        cancelAnimationFrame(frame);
    });
</script>

{#if shouldRun}
    <div class="Congratulations" class:show={shouldStartHiding}>
        {#each confetti as c}
            <span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.character}</span>
        {/each}
    </div>
{/if}

<style>
    .Congratulations {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 1s ease;
    }

    .Congratulations.show {
        opacity: 1;
    }

    .Congratulations:not(.show) {
        opacity: 0;
    }

    span {
        position: absolute;
        font-size: 5vw;
        user-select: none;
    }
</style>
