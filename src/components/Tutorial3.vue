<template>
    <div id="tutorial3">
        <div class="tutorial3_1">당신은 {{this.$store.state.strength}}이(가) 뛰어나다는 것을 아래와 같이 정의하고 있습니다.</div>
        <div class="msg"> {{this.$store.state.message}}</div>
        <div class="btn3_1">
            <button type="button" class="before" @click="before">이전단계</button>
            <button type="button" class="after3_1" @click="after3_1">다음단계</button>
        </div>
        <div class="tutorial3_2">
            <div class="experience_input">
                <div>
                    <span class="tutorial3_2_title">언제 {{this.$store.state.strength}}을(를) 뛰어나게 발휘했나요?</span>
                </div>
                <div class="content"><input type="text" v-model="activity" placeholder="스노우보드 동아리"> <span class="highlight">을(를) 할 때</span></div>
                <div>
                    <span class="tutorial3_2_title">{{this.$store.state.strength}}을(를) 발휘한 에피소드를 자세히 알려주세요.</span>
                </div>
                <textarea v-model="content" placeholder="(상황) 동아리 연말 나눔행사의 예산 부족 문제 해결을 학교 주변 가게 후원으로 해결하기 위해 (행동) 총 47개 매장의 사장님을 만나 나눔행사의 취지를 설명하고, 동아리 단톡방, 페이스북 및 안내 팜플릿 홍보를 약속하여 (결과) 4개 매장의 후원을 이끌어 냄"></textarea>
                <div class="warn">{{warn}}</div>
                <div>
                    <button type="button" @click="before">이전단계</button>
                    <button type="button" @click="after3_2">경험 저장</button>
                </div>
            </div>
            <div class="experiences">
                <div class="experience">
                    <div>나의경험</div>
                    <div>저장된 경험이 없어요 :(</div>
                </div>
                <button type="submit" @click="save">저장 후 다음단계</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'Tutorial3',
        data(){
            return{
                activity:[],
                content:[],
                warn:''
            }
        },
        methods:{
            before(){
                window.history.length > 1 ? history.back() :  this.$router.push('/');
            },
            after3_1(){
                $(function(){
                    $(".btn3_1").css("display","none");
                    $(".tutorial3_2").css("display","block");
                });
            },
            after3_2(){
                if(this.activity.length>=1 && this.content.length>=1){
                    alert("a");
                }
                else{
                    this.warn="내용을 입력해주세요!";
                }
            },
            save(){
                this.$router.push({
                    name: 'Tutorial4'
                });
            }
        }
    }
</script>

<style lang="less">
@text-border-color:#fffcc0;
@text-color:#495057;
@color:#888888;

#tutorial3{
    color:@text-color;
    margin-top:8%;
    margin-left:10%;
    margin-right:10%;
    text-align:center;
}
.tutorial3_1{
    text-align:left;
    font-size:13pt;
}
.msg{
    width:100%;
    padding:2%;
    text-align:left;
    border:0;
    background-color:#eeeeee;
    font-size:13pt;
    margin-bottom:5%;
}
.btn3_1{
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
.after3_1{
    background-color:#00c854;
    color:white;
    border:1px solid #00c854;
    width:150px;
    height:50px;
}
.after3_1:hover{
    background-color:#099c47;
    border:1px solid #099c47;
}

.tutorial3_2{
    display:none;
}
.tutorial3_2_title{
    background: linear-gradient(180deg,#fff 70%,#fffcc0 0);
    padding: 0 1%;
}
.content{
    margin-top:5%;
    margin-bottom:5%;
    width:100%;
    font-size:18pt;
}
input[type="text"]{
    width:60%;
    border:1.5px solid @text-color;
    padding:2%;
    font-size:13pt;
}
.highlight{
    font-weight:bold;
}
.experience_input{
    width:70%;
    float:left;
}
.experiences{
    width:25%;
    font-size:13pt;
    float:right;
}
.experience{
    width:100%;
    border:1px solid #aaaaaa;
}
textarea{
    margin-top:5%;
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
</style>