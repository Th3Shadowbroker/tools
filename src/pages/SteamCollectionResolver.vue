<template>
    <div class="container">
        <div class="alert alert-info">
            <h2>Steam Collection Resolver</h2>
            <hr/>
            I originally made this tool to generate the mod-information for my ARK-Server. ARK, as well as some other games,
            does not accept collection ids. That's where this resolver comes in. Just enter the collection id and see what happens <span role="img" aria-label="cat and pc">🐱‍💻</span><br/>
            <br/>

            <form>
                <div class="input-group mb-2">
                    <input id="collectionId" class="form-control" type="text" placeholder="Collection ID" minlength="9" maxlength="10">
                    <div class="input-group-append">
                        <button id="resolveButton" class="btn btn-primary" v-on:click="resolveCollection" type="button">Resolve</button>
                    </div>
                </div>
            </form>

            <br/>

            <CollapseCard name="Raw results" v-if="csv.length > 0">
                <form>
                    CSV, comma separated values, are used in some server-configurations:<br/>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">CSV</div>
                        </div>
                        <input id="csv" class="form-control" type="text" v-bind:value="csv" readonly/>
                    </div>
                    ARK uses the <b>ActiveMods</b> key inside <b>GameUserSettings.ini</b>

                    <br/>
                    <br/>

                    This mod-id list is used by ARK to install mods on startup (Placed in <b>Game.ini</b>):<br/>
                    <textarea id="modIdList" class="form-control" v-bind:value="modIdList" readonly></textarea>
                </form>
            </CollapseCard>
        </div>

        <hr/>

        <div>
            <table class="table table-striped table-hover">
                <tr class="text-center">
                    <th>Preview</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Workshop</th>
                </tr>
                <tr class="remove-on-result" v-if="mods.length < 1">
                    <td colspan="4" class="text-center">No collection to resolve!</td>
                </tr>
                <tr class="result-entry text-center" v-for="mod of mods" v-bind:key="mod.workshop.id">
                    <td><img :src="mod.preview" alt="preview"/></td>
                    <td><a :href="mod.workshop.url" target="_blank">{{mod.name}}</a></td>
                    <td><a :href="mod.author.profile" target="_blank">{{mod.author.name}}</a></td>
                    <td><a :href="mod.workshop.url" target="_blank">{{mod.workshop.id}}</a></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import CollapseCard from "../components/CollapseCard";
    export default {
        name: "SteamCollectionResolver",
        components: {CollapseCard},
        data () {
            return {
                csv: '',
                modIdList: '',
                mods: []
            }
        },
        methods: {

            // Resolve the collection entered by the user
            resolveCollection(){
                // Controls that will be edited/accessed
                const collectionId = document.querySelector('#collectionId').value;
                const submissionButton = document.querySelector('#resolveButton');

                // eslint-disable-next-line no-console
                console.log(`Resolving collection ${collectionId}...`);

                // Remove previous results and placeholders
                this.csv = '';
                this.modIdList = '';
                this.mods = [];

                // Fetch data
                fetch(`/php/steam-collection-resolver.php?collectionId=${collectionId}`)
                // eslint-disable-next-line no-console
                    .then(resp => resp.text().then(
                        text => {
                            const parsed = new DOMParser().parseFromString(text, "text/html").documentElement;
                            const collectionItems = parsed.getElementsByClassName('collectionItem');

                            if (collectionItems.length === 0) {
                                alert('Invalid or empty collection!');
                                // eslint-disable-next-line no-console
                                console.log('Collection invalid. Informing user.');
                                return;
                            }

                            submissionButton.disabled = true;

                            for (let collectionItem of collectionItems)
                            {
                                // Collected data from fetched html
                                const modName = collectionItem.getElementsByClassName('workshopItemTitle')[0].innerText;
                                const author = collectionItem.getElementsByClassName('workshopItemAuthorName')[0];
                                const authorName = author.getElementsByTagName('a')[0].innerText;
                                const authorProfile = author.getElementsByTagName('a')[0].href;
                                const previewImage = collectionItem.getElementsByClassName('workshopItemPreviewImage')[0].src;
                                const workshopUrl = collectionItem.getElementsByClassName('collectionItemDetails')[0].getElementsByTagName('a')[0].href;
                                const workshopId = workshopUrl.split('=')[1];

                                // Push id to state
                                this.mods.push({
                                    name: modName,
                                    author: {
                                        name: authorName,
                                        profile: authorProfile
                                    },
                                    workshop: {
                                        id: workshopId,
                                        url: workshopUrl
                                    },
                                    preview: previewImage
                                });

                                // eslint-disable-next-line no-console
                                console.log(`Resolved mod: ${modName} (${workshopId})`);
                            }

                            this.generateCSV();
                            this.generateModList();

                            submissionButton.disabled = false;
                        }
                    ))
                    // eslint-disable-next-line no-console
                    .catch(err => alert('Something went wrong :/\nPlease contact the developer!\n\n' + err));
            },

            // Generate csv
            generateCSV (){
                this.csv = this.mods.map(mod => mod.workshop.id).join(',');
            },

            // Generate Mod-List for ARK: Survival Evolved
            generateModList() {
                this.modIdList += '[ModInstaller]\n';
                for (let mod of this.mods)
                {
                    this.modIdList += `ModIDS=${mod.workshop.id}\n`;
                }
            }

        }
    }
</script>

<style scoped>

</style>
