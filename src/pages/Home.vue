<template>
    <div class="container">
        <h1 class="text-center">Hi there <span role="img" aria-label="sunglasses">🖖</span>!</h1>
        <p class="text-center lead">
            Welcome to my collection of all sorts of tool!<br/>
            I created these tools when I needed something complex or complicated to become much easier, or just for fun.
            I hope these tools will help you as they helped me <span role="img" aria-label="smile">🙂💻</span>
        </p>
        <br/>
        <p class="text-center">
            If you want to support me and help me to keep my services up and running, feel free to do so!<br/>
            <br/>
            You can support me on:<br/>
            <br/>
            <a href='https://ko-fi.com/V7V0GYAP' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a><br/>
            <br/>
            <a href="https://www.patreon.com/bePatron?u=16360103" data-patreon-widget-type="become-patron-button">Become a Patron!</a>
            <br/>
            <a class="github-button" href="https://github.com/sponsors/Th3Shadowbroker" data-icon="octicon-heart" data-size="large" aria-label="Sponsor @Th3Shadowbroker on GitHub">Sponsor</a>
        </p>
        <br/>
        <p class="text-center">
            If you have any questions feel free to contact me on:
            <ul>
                <li><a href="https://twitter.com/m4taiori" target="_blank">Twitter</a></li>
                <li><a href="https://m4taiori.io/#contact" target="_blank">Email</a></li>
                <li><a href="https://discord.m4taiori.io" target="_blank">Discord</a></li>
            </ul>
        </p>

        <br/>
        <br/>

        <div class="text-center">Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        mounted() {
            const patreonScript = document.createElement('script');
            patreonScript.async = true;
            patreonScript.src = 'https://c6.patreon.com/becomePatronButton.bundle.js';
            document.head.appendChild(patreonScript);

            const githubScript = document.createElement('script');
            githubScript.async = true;
            githubScript.defer = true;
            githubScript.src = 'https://buttons.github.io/buttons.js';
            document.head.appendChild(githubScript);
        }
    }
</script>

<style scoped>

</style>
