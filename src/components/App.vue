<template>
    <div id="app" class="d-flex flex-column">

        <NavigationBar title="Th3Shadowbroker's Tools">
            <NavigationBarItem name="Home" url="/"/>
            <NavigationBarDropdown name="Tools">
                <NavigationBarDropdownItem name="Steam Collection Resolver" url="/tools/steam-collection-resolver"/>
                <NavigationBarDropdownItem name="Password Generator" url="/tools/password-generator"/>
            </NavigationBarDropdown>
        </NavigationBar>

        <main role="main" class="d-flex mb-auto h-100">
            <RouterView/>
        </main>

        <CookieBanner accept="OK" learn-more="Learn more..." learn-more-url="/policies">
            This site uses cookies to improve the user experience.
        </CookieBanner>

        <Footer>Made with <span role="img" aria-label="heart">💜</span> and <span role="img" aria-label="coffee">☕</span> - <a href="https://th3shadowbroker.org/#imprint" target="_blank">Imprint</a> - <RouterLink to="/policies">Privacy- and Cookie-Policy</RouterLink></Footer>

    </div>
</template>

<script>
    import NavigationBar from "./NavigationBar";
    import NavigationBarItem from "./NavigationBarItem";
    import Footer from "./Footer";
    import NavigationBarDropdown from "./NavigationBarDropdown";
    import NavigationBarDropdownItem from "./NavigationBarDropdownItem";
    import CookieBanner from "./CookieBanner";
    export default {
        components: {
            CookieBanner,
            NavigationBarDropdownItem, NavigationBarDropdown, Footer, NavigationBarItem, NavigationBar}
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
