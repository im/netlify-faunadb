<template>
    <div id="app">
        <div class="warp">
            hello
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
declare module 'vue/types/vue' {
    interface Vue {
        [key: string]: any,
    }
}
@Component({})
export default class App extends Vue {
    
}
</script>
<style lang="stylus">
html, body
    width 100%
    height 100%
</style>
