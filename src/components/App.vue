<template>
    <div id="app" class="d-flex flex-column">

        <NavigationBar title="Th3Shadowbroker's Tools">
            <NavigationBarItem name="Home" url="/"/>
            <NavigationBarDropdown name="Tools">
                <NavigationBarDropdownItem name="Steam Collection Resolver" url="/tools/steam-collection-resolver"/>
            </NavigationBarDropdown>
        </NavigationBar>

        <main role="main" class="d-flex mb-auto h-100">
            <RouterView/>
        </main>

        <Footer>Made with <span role="img" aria-label="heart">💜</span> and <span role="img" aria-label="coffee">☕</span> - <a href="https://th3shadowbroker.org/#imprint" target="_blank">Imprint</a> - <a href="https://th3shadowbroker.org/#data-protection" target="_blank">Privacy policy</a></Footer>

    </div>
</template>

<script>
    import NavigationBar from "./NavigationBar";
    import NavigationBarItem from "./NavigationBarItem";
    import Footer from "./Footer";
    import NavigationBarDropdown from "./NavigationBarDropdown";
    import NavigationBarDropdownItem from "./NavigationBarDropdownItem";
    export default {
        components: {NavigationBarDropdownItem, NavigationBarDropdown, Footer, NavigationBarItem, NavigationBar}
    }
</script>

<style>
    body {
        min-height: 100vh;
    }
    #app {
        min-height: 100vh;
    }
    main {
        margin-bottom: 30px;
    }
</style>
