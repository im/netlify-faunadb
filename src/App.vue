<template>
    <div id="app">
        <div class="warp">
            {{res}}
        </div>
    </div>
</template>
<script lang="ts">
import axios from 'axios'
import { Component, Vue } from 'vue-property-decorator'
declare module 'vue/types/vue' {
    interface Vue {
        [key: string]: any,
    }
}
@Component({})
export default class App extends Vue {
    res: String = ''
    async created () {
        const res =  await axios.post(`/.netlify/functions/helloworld/`)
        this.res = JSON.stringify(res);
    }
}
</script>
<style lang="stylus">
html, body
    width 100%
    height 100%
</style>
