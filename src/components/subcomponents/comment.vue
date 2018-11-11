<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120"  id="" cols="10" rows="5"></textarea>
    
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2018-11-11
                </div>
                <div class="cmt-body">
                    黑黑恶黑hi欸黑
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain>加载更多</mt-button>


    </div>
</template>


<script>
import {Toast} from "mint-ui"

export default {
    data(){
        return{
            pageIndex:1
        }
    },
    methods:{
        getComments(){
            // this.$http.get('api/getcomments/:artid?pageindex=1')
            this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex)
            .then(result=>{
                // this.comments=result.body.message
                this.comments=this.comments.concat(result.body.message)
            });
        },
        getMore(){
            this.pageIndex++;
            this.getComments();
            // 点击加载更多按钮  调下一页的数据
        }
    },
    props:["id"]
}
</script>


<style lang="scss" scoped>

</style>
