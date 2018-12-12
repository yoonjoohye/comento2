<template>
    <div id="tutorial2">
        <div class="tutorial_title">
            <span class="tutorial2_title">{{this.$store.state.strength}}이(가) 뛰어나다는 것은 어떤 의미인가요?</span>
        </div>
        <div class="content">
            <div class="content1">저는 {{this.$store.state.strength}}이(가) 뛰어나다는 것을</div>
            <textarea class="meaning" v-model="message" placeholder="의사소통능력 / 단순히 내가 하고싶은 말을 상대방에게 잘 전달하는 것이 아니라, 상대가 공동의 문제에 공감하게 하고 협력을 이끌어 낼 수 있는 것"></textarea>
            <div class="content2">이라고 생각해요.</div>
        </div>
        <div class="warn">{{warn}}</div>
        <div class="buttons">
            <button type="button" class="before" @click="before">이전단계</button>
            <button type="button" class="after" @click="after">저장 후 다음단계</button>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Tutorial2',
        data(){
            return{
                message:'', //강점 정의
                warn:'' //유효성 검사
            }
        },
        methods:{
            /*이전단계 */
            before(){
                window.history.length > 1 ? this.$router.go(-1) :  this.$router.push({path:'/'})
            },
            /*저장 후 다음단계*/
            after(){
                if(this.message.length>=1){
                    /*vuex에 강점 정의 값 등록 */
                    this.$store.state.message=this.message;
                    /* tutorial3로 이동*/
                    this.$router.push({
                        name: 'Tutorial3'
                    });
                }
                else{
                    this.warn="내용을 입력해주세요!";
                }
            }
        }
    }
</script>
<style lang="less">
@text-border-color:#fffcc0;
@text-color:#495057;
@color:#888888;
#tutorial2{
    color:@text-color;
    margin-top:8%;
    margin-left:10%;
    margin-right:10%;
    text-align:center;
}
.tutorial_title{
    margin-bottom:5%;
}
.tutorial2_title{
    background: linear-gradient(180deg,#fff 70%,#fffcc0 0);
    padding: 0 1%;
}
.content{
    width:100%;
}
.content1{
    text-align:left;
    font-size:18pt;
    font-weight:bold;
}
.content2{
    text-align:right;
    font-size:18pt;
    font-weight:bold;
}
.meaning{
    width:100%;
    height:150px;
    border:1.5px solid @text-color;
    padding:2%;
    font-size:13pt;
}
.warn{
    color:red;
    font-size:10pt;
    margin-top:5%;
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
