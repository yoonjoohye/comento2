<template>
    <div id="tutorial4">
        <div>당신이 생각하는 {{this.$store.state.strength}}이(가) 뛰어나게 발휘된 경험들을 다시 읽어보세요.</div>
        <div v-for="(data,index) in $store.state.list">
            <button type="button" @click="showActivity(index)">{{index+1}}</button>
        </div>
        <div>
            <p>{{activity}}</p>
            <ul>
                <li>{{content}}</li>
            </ul>

        </div>
        <div>이 내용을 읽었을 때, {{this.$store.state.strength}}이(가) 있는 사람처럼 보여지나요?</div>
        <div>{{this.$store.state.message}}</div>
        <div>아니라면 수정하기 버튼을 눌러 글을 보완하거나 경험을 추가해보세요.</div>
        <div class="buttons">
            <button type="button" class="before" @click="before">수정하기</button>
            <button type="button" class="after" @click="after">다음단계</button>
        </div>
    </div>
</template>

<script>
    export default{
        name:'Tutorial4',
        data(){
            return{
                activity:this.$store.state.list[0].activity,
                content:this.$store.state.list[0].content
            }
        },
        methods:{
            showActivity(i){
                this.activity=this.$store.state.list[i].activity;
                this.content=this.$store.state.list[i].content;
            },
            before(){
                window.history.length > 1 ? this.$router.go(-1) :  this.$router.push({path:'/'});
            },
            after(){
                alert("끝입니다요!");
            }
        }
    }
</script>
<style lang="less">
    @text-border-color:#fffcc0;
    @text-color:#495057;
    @color:#888888;
    
    #tutorial4{
        color:@text-color;
        margin-top:8%;
        margin-left:10%;
        margin-right:10%;
        text-align:center;
    }
    .buttons{
        margin-top:5%;
        text-align:center;
    }
    .before{
        background-color:white;
        color:@color;
        border:1px solid #bbbbbb;
        width:150px;
        height:50px;
    }
    .before:hover{
        background-color:rgba(247, 252, 255, 0.693);
    }
    .after{
        background-color:#00c854;
        color:white;
        border:1px solid #00c854;
        width:150px;
        height:50px;
    }
    .after:hover{
        background-color:#099c47;
        border:1px solid #099c47;
    }
</style>
