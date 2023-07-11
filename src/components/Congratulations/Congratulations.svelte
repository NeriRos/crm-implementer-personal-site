<script>
    import {onMount} from 'svelte';

    let characters = ['🥳', '🎉', '✨'];

    let confetti = new Array(100)
        .fill()
        .map((_, i) => {
            return {
                character: characters[i % characters.length],
                x: Math.random() * 100,
                y: -20 - Math.random() * 100,
                r: 1 + Math.random()
            };
        })
        .sort((a, b) => a.r - b.r);

    onMount(() => {
        let frame;

        const speed = 0.3;

        function loop() {
            frame = requestAnimationFrame(loop);

            confetti = confetti.map((emoji) => {
                emoji.y += speed * emoji.r;
                if (emoji.y > 120) emoji.y = -20;
                return emoji;
            });
        }

        loop();

        return () => cancelAnimationFrame(frame);
    });
</script>

<div class="Congratulations">
    {#each confetti as c}
        <span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.character}</span>
    {/each}
</div>

<style>
    .Congratulations {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
    }

    span {
        position: absolute;
        font-size: 5vw;
        user-select: none;
    }
</style>
