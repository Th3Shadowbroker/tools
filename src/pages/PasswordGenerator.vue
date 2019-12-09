<template>
    <div class="container">
        <div class="text-center">
            <form>
                <input class="form-control text-center" type="text" v-bind:value="password.length > 0 ? password : 'Click generate!'" readonly/><br/>

                <div class="form-group text-left">
                    <label for="range">Length</label>
                    <input id="range" class="form-control-range" type="range" min="5" max="25" v-model="length" value="15" v-on:change="generatePassword">
                    <span class="current text-muted">{{ length }}</span>
                </div>

                <div class="text-left">
                    <div class="form-check">
                        <input id="includeLetters" class="form-check-input" v-model="letters" v-bind:disabled="!numbers && !symbols" v-on:change="generatePassword" type="checkbox">
                        <label for="includeLetters" class="form-check-label">Use letters</label>
                    </div>

                    <div class="form-check">
                        <input id="includeNumbers" class="form-check-input" v-model="numbers" v-bind:disabled="!letters && !symbols" v-on:change="generatePassword"  type="checkbox">
                        <label for="includeNumbers" class="form-check-label">Use numbers</label>
                    </div>

                    <div class="form-check">
                        <input id="includeSymbols" class="form-check-input" v-model="symbols" v-bind:disabled="!letters && !numbers" v-on:change="generatePassword"  type="checkbox">
                        <label for="includeSymbols" class="form-check-label">Use symbols</label>
                    </div>
                </div>

                <br/>
                <button type="button" class="btn btn-primary w-100" v-on:click="generatePassword">Generate</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PasswordGenerator",
        data() {
            return {
                password: '',
                length: 15,
                letters: true,
                numbers: true,
                symbols: false
            };
        },
        methods: {
            generatePassword() {
                let charset = [];
                let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
                let numbers = [0,1,2,3,4,5,6,7,8,9];
                let symbols = ['{','}','(',')','[',']','#',':',';','^',',','.','?','!','|','&','~','@','$','%','/','\\','+','-','*','/','"','\''];

                if (this.letters) charset.push.apply(charset,letters);
                if (this.numbers) charset.push.apply(charset,numbers);
                if (this.symbols) charset.push.apply(charset,symbols);

                this.password = '';

                for (let i = 0; i < this.length; i++) {
                    this.password += charset[Math.floor(Math.random()*charset.length)];
                }
            }
        }
    }
</script>

<style scoped>
    form {
        width: 100%;
        max-width: 320px;
        padding: 15px 15px;
        margin: auto auto;
    }

    .current {
        font-size: 11px;
    }
</style>
