<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <!-- <h3>新闻详情----{{$route.params.id}}</h3> -->
        <!-- <h3>新闻详情----{{id}}</h3> -->
        <h3 class="title">新闻标题{{newsinfo.title}}</h3>
       
       <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间:{{newsinfo.time|dateFormat}}</span>
            <span>点击:{{newsinfo.click}}次</span>
        </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content">

        </div>

        <!-- 评论子组件 -->
        <comment-box :id="this.id"></comment-box>

    </div>
</template>


<script>
import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return{
            id:this.$route.params.id,
            //将URL地址中传递过来的Id值，挂载到data上，方便调用
            newsinfo:{}
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/'+this.id)
            .then(result=>{
                if(result.body.status===0){

                }else{

                }
            })
        }
    },
    components:{
        "comment-box":comment
    }
}
</script>


<style lang="scss" scoped>
.newsinfo-container{
    padding:0 4px;
    .title{
        font-size:16px;
        text-align:center;
        margin: 15px 0;
        color:red;
    }
    .subtitle{
        font-size:14px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{

    }
}
</style>
