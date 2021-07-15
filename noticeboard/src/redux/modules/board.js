import { createAction } from "redux-actions";
import { firestore } from "../../firebase";


// const db이름지정 = firestore.collection("파이어스토어베이스이름")
const notice_db = firestore.collection("notice");


const ADD = "board/ADD";
const LOAD = "board/LOAD";
const DELETE = "board/DELETE"
const UPLOAD = "board/UPLOAD"

const initialState = {
    list:[

        {
          id: "list_0",
          name: "이름이름",
          title: "제목제목제목",
          content: "내용내용내용",
        },
        {
            id: "list_1",
            name: "dlfmadlfma",
            title: "wpahrwpah",
            content: "sodydsodyd",
        },
    ],
}

export const loadPost = (board)=> {
    return{type: LOAD, board};
}

export const addPost = (board)=> {
    return{type: ADD, board};
}

export const deletePost = (board)=> {
    return{type: DELETE, board};
}

export const uploadPost = (board)=> {
    return{type: UPLOAD, board}
}

export const loadPostFB = () => {
    return function(dispatch){
        //then은 비동기
        // 파이어스토어에서 가져온 값을 notice_data에 []에넣어줌
        notice_db
        .orderBy("board_id","desc")
        .get()
        .then((docs)=>{

            let notice_data = [];
            docs.forEach((doc)=>{
                if(doc.exists){
                    notice_data = [...notice_data, {id: doc.id , ...doc.data()}]
                }
            })
            dispatch(loadPost(notice_data));
        })
    }
}
export const addPostFB = (board) => {
    return function (dispatch) {
        let new_board;
        notice_db.add(board).then((doc)=>{
            new_board = {...board, id: doc.id};
        })
        .then(()=>dispatch(addPost(new_board)));
    }
}
export const deletePostFB =(board) => {
    return function (dispatch, getState) {
        const _board_data = getState().board.list[board];
        notice_db
        .doc(_board_data.id)
        .delete()
        .then((res)=>{
            dispatch(deletePost(board))
        })
        .catch((err)=> {
            console.log("err")
        })
    }

}
export const uploadPostFB = (board) => {
    return function (dispatch,getState){
        const post_list = getState().board.list;
        const _post_list = post_list.filter((p, index)=>{
            return p.post_id === board.post_id;
        });
        const result = {
            post_id: board.post_id,
            name: board.name,
            content: board.content,
            title: board.title,
        };
        notice_db
        .doc(_post_list[0].id)
        .update(result)
        .then((docRef)=>{
            dispatch(uploadPost(board));
        })
        .catch((err) => {
            console.log(err);
        })

    }
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
                 action.board,...state.list
            ]
            return {list: new_post_list};
        }

        case "board/DELETE": {
            const post_list = state.list.filter((p, index)=> {
                if (index !== action.board) {
                    return p;
                }
            });
            return {list:post_list}
        }

        case "board/UPLOAD": {
            const post_list = state.list.map((p, index)=>{
                if (index === action.board.index){
                    return {
                        ...p,
                         name: action.board.name,
                        title: action.board.title,
                        content: action.board.content,
                    };
                }
                return p;
            });
            return {p: post_list};           
        }
        default:
            return state;
        
    }
}

