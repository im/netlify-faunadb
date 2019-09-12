<template>
    <div class="home">
        <div class="list">
            <a-list :loading="loading" itemLayout="horizontal" :dataSource="postList">
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <template slot="actions">
                        <span>
                            <a-icon type="schedule" style="margin-right: 8px" />
                            {{item.ts | formatDate}}
                        </span>
                    </template>
                    <a-list-item-meta :description="item.content">
                        <router-link :to="{ name: 'post', params: { id: item.id }}" slot="title">
                            {{item.title}}
                        </router-link>
                        <!-- <a slot="title" :href="'/post/' + item.id">{{item.title}}</a> -->
                        <a-avatar
                            slot="avatar"
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                    </a-list-item-meta>

                    <a-tag color="pink" v-for="tag in item.tags">{{tag}}</a-tag>
                </a-list-item>
            </a-list>
        </div>
    </div>
</template>
<script lang="ts">
import axios from 'axios'
import dayjs from 'dayjs'
import { Component, Vue } from 'vue-property-decorator'
Vue.filter('formatDate', function(ts: any) {
    return dayjs(ts / 1000).format('YYYY-MM-DD ')
})
@Component({})
export default class Add extends Vue {
    loading: Boolean = true
    loadingMore: Boolean = false
    onLoadMore() {}

    postList: any = []

    formatData(data: Array<any>) {
        return data.map(item => {
            const content = item.data
            return {
                id: item.ref['@ref'].id,
                ts: item.ts,
                ...content
            }
        })
    }

    async created() {
        const res = await axios.get(`/.netlify/functions/getPosts/`)
        this.postList = this.formatData(res.data || [])
        this.loading = false
    }
}
</script>
<style lang="stylus" scoped>
.home
    padding 20px
.list
    min-height 146px
    border 1px solid #ebedf0
    padding 0 20px
    color rgba(0, 0, 0, 0.65)
</style>
