<template>
    <div class="add-box">
       <a-form :layout="formLayout.layout">
            <a-form-item label="Field A" :label-col="formLayout.labelCol"
        :wrapper-col="formLayout.wrapperCol">
                <a-input placeholder="input placeholder" />
            </a-form-item>
            <a-form-item label="Field A" :label-col="formLayout.labelCol"
        :wrapper-col="formLayout.wrapperCol">
                <a-input placeholder="input placeholder" />
            </a-form-item>
            <a-form-item
            :label-col="formLayout.labelCol"
            :wrapper-col="formLayout.wrapperCol"
            label="Success"
            has-feedback
            validate-status="success"
            >
                <a-date-picker style="width: 100%" />
            </a-form-item>
            <a-form-item
            :label-col="formLayout.labelCol"
            :wrapper-col="formLayout.wrapperCol"
            label="Success"
            has-feedback
            validate-status="success"
            >
                <a-textarea placeholder="Autosize height with minimum and maximum number of lines" :autosize="{ minRows: 2, maxRows: 6 }" />
            </a-form-item>

           
       </a-form>
    </div>
</template>
<script lang="ts">
import axios from 'axios'
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Add extends Vue {
    formLayout:any = {
        layout: 'horizontal',
        wrapperCol: {
            span: 20
        },
        labelCol: {
            span: 4
        }
    }
}
</script>
<style lang="stylus" scoped>
.add-box
    width 600px
    margin 50px auto
</style>
