<template>
    <div id="cookie-banner" class="fixed-bottom bg-dark text-light" v-if="!accepted">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <slot/>
                </div>
                <div class="col text-right">
                    <button class="btn btn-primary btn-sm" v-on:click="openLearnMoreUrl">
                        {{learnMore}}
                    </button>
                    <button class="btn btn-primary btn-sm" v-on:click="acceptCookies">
                        {{accept}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import cookie from 'js-cookie'
    export default {
        name: "CookieBanner",
        props: ['accept', 'learnMore', 'learnMoreUrl'],
        data() {
          return {
              accepted: false
          }
        },
        methods: {
            acceptCookies() {
                cookie.set('cookies_accepted', true);
                this.accepted = true;
            },
            openLearnMoreUrl() {
                window.open(this.$props.learnMoreUrl,'_self');
            }
        },
        mounted() {
            this.accepted = cookie.get('cookies_accepted') !== undefined;
        }
    }
</script>

<style scoped>
    #cookie-banner {
        width: 100%;
        z-index: 1;
    }
    .container {
        padding-top: 5px;
        padding-bottom: 5px;
    }
    button {
        margin-bottom: 2px;
        margin-left: 15px;
    }
</style>
