<template>
  <div  id="tutorial1">
    <div class="tutorial_title">
      <span class='tutorial1_title'>작성한 우수자의 모습 중 한 가지와 관련된 나의 강점을 하나 선택하세요.</span>
    </div>
    <!--선택할 강점들-->
    <div class="abilities" v-for="(data) in $store.state.ability">
      <input type="checkbox" v-bind:id="data" v-bind:value="data" v-model="isChecked" @change="check">
      <label v-bind:for="data"><span class="checkbox"></span><span class="ability">{{data}}</span></label>
    </div>
    <div v-if="isWarn" class="warn">강점을 선택해주세요!</div>
    <div class="buttons">
      <button type="button" class="before" @click="before">이전단계</button>
      <button type="button" class="after" @click="after">저장 후 다음단계</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tutorial1',
  data () {
    return{
      isChecked:[], //체크한 값
      isWarn:false //유효성 검사
    } 
  },
  methods:{
    /*체크박스 유효성 검사(가장 최근에 체크한 값 외 자르기)*/
    check(){
      if(this.isChecked.length>1){
        this.isChecked.splice(0,this.isChecked.length-1);
      }
    },
    /*이전단계*/
    before(){
      alert("더이상 페이지가 없습니다!");
    },
    /*저장 후 다음단계*/
    after(){
      if(this.isChecked.length==1){
        /* vuex에 가장 최근에 체크한 값 등록 */
        this.$store.commit('editStrength', this.isChecked);
        /* tutorial2로 이동 */
        this.$router.push({
          name: 'Tutorial2'
        });
      }
      else{
        this.isWarn=true;
      }
    }
  }
}
</script>
<style lang="less">
@text-border-color:#fffcc0;
@text-color:#495057;
@color:#888888;
  #tutorial1{
    color:@text-color;
    margin-top:8%;
    margin-left:10%;
    margin-right:10%;
    text-align:center;
  }
  .tutorial_title{
    margin-bottom:5%;
  }
  /*제목에 밑줄 넣기*/
  .tutorial1_title{
    background: linear-gradient(180deg,#fff 70%,#fffcc0 0);
    padding: 0 1%;
  }
  .abilities{
    margin:1%;
    text-align:left;
    display:inline-block;
    width:30%;
  }
  /*가짜 체크박스 만들기*/
  input[type="checkbox"] + label span.checkbox {
    display: inline-block;
    margin-right:1%;
    text-align:center;
    width: 30px;
    height: 30px;
    background-color:#eeeeee;
    color:#aaaaaa;
    cursor: pointer;
  }
  /*가짜 체크박스에 체크모양 넣기*/
  input[type="checkbox"]+label span.checkbox:before{
    content: '\2714';
  }
  /*가짜 체크박스 체크하면 초록색으로 변경*/
  input[type="checkbox"]:checked+label span.checkbox{
    background-color:#00c854;
    color:white;
  }
  /*진짜 체크박스 숨기기*/
  input[type="checkbox"]{
    display:none;
  }
  .ability{
    cursor: pointer;
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

