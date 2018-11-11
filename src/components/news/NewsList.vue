<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsinfo'+item.id">
                    <img class="mui-media-object mui-pull-left" src="https://d.ifengimg.com/w340_h202/p0.ifengimg.com/pmop/2018/1111/129F78127DCD7D81317A432B8F15FA58179F6C5F_size446_w866_h489.png">
                    <div class="mui-media-body">
                       <h1>{{item.title}}</h1>
                       <p class='mui-ellipsis'>
                            <span>发表时间:{{item.time|dateFormat}}</span>
                            <span>点击: {{item.click}}次</span>
                       </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
import {Toast} from "mint-ui"

export default {
    data(){
        return{
            newslist:[
                {
                    id:0,
                    title:"嘿",
                    time:"2018-11-11",
                    click:9
                }
            ]
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('api/getnewslist')
            .then(result=>{
                if(result.body.status===0){
                    this.newslist=result.body.message
                }else{
                    Toast('获取新闻列表失败')
                }
            })
        }
    }
}
</script>


<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{font-size: 14px;}
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
