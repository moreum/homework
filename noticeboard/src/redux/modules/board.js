import { createAction } from "redux-actions";
import { firestore } from "../../firebase";


// const db이름지정 = firestore.collection("파이어스토어베이스이름")
const notice_db = firestore.collection("notice");


const ADD = "board/ADD";
const LOAD = "board/LOAD";


const initialState = {
    list:[

        {
          id: "list_0",
          name: "이름이름11111111",
          title: "제목제목제목11111111111",
          content: "내용내용내용1111111111",
        },
        {
            id: "list_1",
            name: "dlfmadlfma2222222222",
            title: "wpahrwpahr2222222222",
            content: "sodydsodyd22222222",
        },
    ],
}

export const loadPost = (board)=> {
    return{type: LOAD, board};
}

export const addPost = (board)=> {
    return{type: ADD, board};
}

export const loadPostFB = () => {
    return function(dispatch){
        //then은 비동기
        // 파이어스토어에서 가져온 값을 notice_data에 []에넣어줌
        notice_db.get().then((docs)=>{ 
            let notice_data = [];
            dispatch(loadPost(notice_data));
        })
    }
}
export const addPostFB = (board) => {


}

// Reducer
export default function reducer(state = initialState, action={}){
    switch (action.type){
        case "board/LOAD": {
            if(action.board.length > 0){
                return {list: action.board};
            }
            return state;
        }

        case "board/ADD": {
            const new_post_list = [
                ...state.list, action.board,
            ]
            return {list: new_post_list}
        }
        default:
            return state;
        
    }
}