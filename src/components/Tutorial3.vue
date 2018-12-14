<template>
    <div id="tutorial3">
        <!-- tutorial 3-1 -->
        <div class="tutorial3_1">당신은 {{this.$store.state.strength}}이(가) 뛰어나다는 것을 아래와 같이 정의하고 있습니다.</div>
        <div class="msg"> {{this.$store.state.message}}</div>
        <div class="btn3_1">
            <button type="button" class="before" @click="before3_1">수정하기</button>
            <button type="button" class="after3_1" @click="after3_1">다음단계</button>
        </div>
        <!-- tutorial 3-2 -->
        <div class="tutorial3_2">
            <div class="experience_input">
                <div>
                    <span class="tutorial3_2_title">언제 {{this.$store.state.strength}}을(를) 뛰어나게 발휘했나요?</span>
                </div>
                <div class="content"><input type="text" v-model="activity" @change="activity_input" placeholder="스노우보드 동아리"> <span class="highlight">을(를) 할 때</span></div>
                <div>
                    <span class="tutorial3_2_title">{{this.$store.state.strength}}을(를) 발휘한 에피소드를 자세히 알려주세요.</span>
                </div>
                <textarea v-model="content" class="textarea" placeholder="(상황) 동아리 연말 나눔행사의 예산 부족 문제 해결을 학교 주변 가게 후원으로 해결하기 위해 (행동) 총 47개 매장의 사장님을 만나 나눔행사의 취지를 설명하고, 동아리 단톡방, 페이스북 및 안내 팜플릿 홍보를 약속하여 (결과) 4개 매장의 후원을 이끌어 냄"></textarea>
                <div v-if="isWarn" class="warn">내용을 입력해주세요!</div>
                <div class="buttons">
                    <button type="button" class="before" @click="before3_2">이전단계</button>
                    <button type="button" class="before" @click="after3_2">경험저장</button>
                </div>
            </div>
            <div class="experiences">
                <div class="experience">
                    <div class="myEx">나의경험</div>
                    <div>
                        <ul>
                        <!--vuex에 저장된 나의 경험-->
                        <li v-if="isList" v-for="(data, index) in $store.state.list">
                            <span class="saveActivity" v-line-clamp="1" @click="showActivity(index)">{{data.activity}}</span>
                            <button type="button" class="delbtn" @click="delActivity(index)">X</button>
                        </li>
                        <!--입력하고 있는 나의 경험-->
                        <li v-if="isOK">
                            <span class="myActivity" v-line-clamp:3="1">{{activity}}</span>
                            <button type="button" class="delbtn" @click="nullActivity">X</button>
                        </li>
                        <li v-else>
                            <span v-if="isList" class="newActivity" v-line-clamp:3="1" @click="nullActivity">새로운 경험 작성하기</span>
                            <span v-else class="myActivity" v-line-clamp:3="1">저장된 경험이 없어요 :(</span>
                        </li>
                        </ul>
                    </div>
                </div>
                <button v-if="isList" type="button" class="saveBtn1" @click="save">저장 후 다음단계</button>
                <button v-else type="button" class="saveBtn2" disabled> 저장 후 다음단계</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'Tutorial3',
        data(){
            return{
                activity:[], //활동명
                content:[], //활동내용
                isWarn:false,//유효성 검사
                isOK:false,//활동명을 적고있는지
                isList:false//vuex의 list에 값이 있는지
            }
        },
        created(){
            /* vuex의 list에 값이 있는지 검사*/
            if(this.$store.state.list.length>=1){
                this.isList=true;
            }
            else{
                this.isList=false;
            }
        },
        methods:{
            /* 수정하기 */
            before3_1(){
                window.history.length > 1 ? this.$router.go(-1) :  this.$router.push({path:'/'});
            },
            /* 다음단계 */
            after3_1(){
                $(function(){
                    $(".btn3_1").css("display","none"); //3-1 버튼 숨기기
                    $(".tutorial3_2").css("display","block"); //tutorial3-2 보이기
                });
            },
            /* 활동명을 적을때 실시간으로 체크 */
            activity_input(){
                if(this.activity.length>=1){
                    this.isOK=true;
                }
                else{
                    this.isOK=false;
                }
            },
            /* 이전단계 */
            before3_2(){
                $(".btn3_1").css("display","block"); //3-2 버튼 보이기
                $(".tutorial3_2").css("display","none"); // tutorial3-2 숨기기
            },
            /* 경험저장 */
            after3_2(){
                if(this.activity.length>=1 && this.content.length>=1){
                    /*vuex에 활동명, 활동내용 값 등록 */
                    this.$store.commit('editList', {
                        activity:this.activity,
                        content:this.content
                    });
                    //console.log(this.$store.state.list);
                    
                    /* 초기화 */
                    this.activity='';
                    this.content='';
                    this.isWarn=false;
                    this.isList=true; 
                    this.isOK=false;
                }
                else{
                    this.isWarn=true;
                }
            },
            /* vuex에 저장한 나의 경험 삭제 */
            delActivity(i){
                this.$store.state.list.splice(i,1);
                if(this.$store.state.list.length>=1){
                    this.isList=true;
                }
                else{
                    this.isList=false;
                }
            },
            /* vuex에 저장한 나의 경험 보기 */
            showActivity(i){
               this.activity = this.$store.state.list[i].activity;
               this.content = this.$store.state.list[i].content;

               this.isWarn=false;
            },
            /* 입력하고 있는 나의 경험 삭제*/
            nullActivity(){
                this.activity='';
                this.content='';
                this.isWarn=false;
                this.isOK=false;
            },
            /* 저장 후 다음 단계 */
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
    word-wrap: break-word;
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
    font-size:18pt;
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
.myEx{
    border-bottom:1px solid #aaaaaa;
}
.textarea{
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
.buttons{
    margin-top:5%;
    text-align:center;
}
.myActivity{
    color:#aaaaaa;
    float:left;
    text-align:left;
    width:70%;
}
.newActivity{
    .myActivity;
    cursor:pointer; 
}
.saveActivity{
    float:left;
    width:70%;
    text-align:left;
    color:black;
    word-wrap: break-word;
    cursor:pointer;
}
.delbtn{
    width:25%;
    border:0;
    background-color:white;
    color:#aaaaaa;
    cursor:pointer; 
}
.saveBtn1{
    margin-top:2%;
    background-color:#00c854;
    color:white;
    border:1px solid #00c854;
    width:100%;
    height:50px;
}
.saveBtn1:hover{
    background-color:#099c47;
    border:1px solid #099c47;
}
.saveBtn2{
    margin-top:2%;
    background-color:#eeeeee;
    color:gray;
    border:1px solid #aaaaaa;
    width:100%;
    height:50px;
}
</style>