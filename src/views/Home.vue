<template>
<div class="home">
    <div class="list">
        <a-list itemLayout="vertical" size="large" :pagination="pagination" :dataSource="listData">
            <a-list-item slot="renderItem" slot-scope="item, index" key="item.title">
                <template slot="actions" v-for="{type, text} in actions">
                    <span :key="type">
                        <a-icon :type="type" style="margin-right: 8px" />
                        {{text}}
                    </span>
                </template>
                <img
                    slot="extra"
                    width="272"
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
                <a-list-item-meta :description="item.description">
                    <a slot="title" :href="item.href">{{item.title}}</a>
                    <a-avatar slot="avatar" :src="item.avatar" />
                </a-list-item-meta>
                {{item.content}}
            </a-list-item>
        </a-list>
    </div>
</div>
</template>
<script lang="ts">
import axios from 'axios'
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Add extends Vue {
    listData: any = [
        {
            avatar:
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            gender: 'male',
            name: { title: 'mr', first: 'neil', last: 'carter' },
            email: 'neil.carter@example.com',
            nat: 'US'
        },
        {
            avatar:
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            gender: 'female',
            name: { title: 'mrs', first: 'josefine', last: 'andersen' },
            email: 'josefine.andersen@example.com',
            nat: 'DK'
        },
        {
            avatar:
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            gender: 'male',
            name: { title: 'mr', first: 'albert', last: 'poulsen' },
            email: 'albert.poulsen@example.com',
            nat: 'DK'
        },
        {
            avatar:
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            gender: 'male',
            name: { title: 'mr', first: 'mille', last: 'kristensen' },
            email: 'mille.kristensen@example.com',
            nat: 'DK'
        },
        {
            avatar:
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            gender: 'female',
            name: { title: 'ms', first: 'aleyna', last: 'van wel' },
            email: 'aleyna.vanwel@example.com',
            nat: 'NL'
        }
    ]
    loading: Boolean = false
    loadingMore: Boolean = false
    actions: any = [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' }
    ]
    pagination: any = {
        onChange: (page: any) => {
            console.log(page)
        },
        pageSize: 3
    }
    onLoadMore() {}
}
</script>
<style lang="stylus" scoped>
.home
    padding 20px
.list
    border: 1px solid #ebedf0;
    padding: 42px 24px 50px;
    color: rgba(0, 0, 0, 0.65);
</style>
