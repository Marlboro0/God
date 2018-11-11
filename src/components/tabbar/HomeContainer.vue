<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

         <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻列表</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div></a></li>
        </ul> 

        <h3>Home</h3>
    </div>
</template>


<script>
export default {
    data(){
        return{};
    },
    created(){
         this.getLunbotu()
    },
    methods:{
        getLunbotu(){
            this.$http.jsonp("http://vue.studyit.io/api/getlunbo",{ credentials: true })
            .then(result=>{
                console.log(result.body);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;

    .mint-swipe-item{
        &:nth-child(1){
              background-color: green;
        }
         &:nth-child(2){
              background-color: orange;
        }
         &:nth-child(3){
              background-color: greenyellow;
        }
    }
}
// .mint-swipe-item:nth-child(1){
//     background-color: green;
// }
// .mint-swipe-item:nth-child(2){
//     background-color: orange;
// }
// .mint-swipe-item:nth-child(3){
//     background-color: greenyellow;
// }
.mui-grid-view.mui-grid-9{
    background-color: #fff;
}
</style>
