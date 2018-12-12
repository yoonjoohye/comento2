import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ability:[
            "책임감",
            "도전정신",
            "성과지향",
            "글로벌 마인드",
            "능동성",
            "팀워크 지향",
            "문제해결능력",
            "분석력",
            "학습능력",
            "창의력",
            "꼼꼼함",
            "의사소통능력",
            "열정/근성",
            "대인관계 (신뢰, 친화력)",
            "계획/조직화"
        ],//보기에 보여줄 강점들
        strength:'', //선택한 강점
        message:'',// 강점 정의
        list:[] //활동명, 활동내용
    },
    mutations:{
        /*strength(선택한 강점) 업데이트 */
        editStrength:function(state, payload){
            state.strength = payload[0];
        },
        /*list(활동명, 활동내용) 업데이트 */
        editList:function(state,payload){
            state.list.push(payload);
        }
    }
});