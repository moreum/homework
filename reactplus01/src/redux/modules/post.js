import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { firestore } from "../../shared/firebase";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

const initialState = {
    list: [],
}

// 게시글 하나에는 어떤 정보가 있어야 하는 지 하나 만들어둡시다! :)
const initialPost = {	
  id: 0,
  user_info: {
    user_name: "mean0",
    user_profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjy-f7Apa--0mVsOmzPZSI-u5T01wYU3NF2g&usqp=CAU",
},
  image_url: "https://pbs.twimg.com/media/Dw8NAzaUYAEvAyM.jpg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};
const getPostFB = () => {
    return function (dispatch, getState, { history }) {
      const postDB = firestore.collection("post");
  
      postDB.get().then((docs) => {
        let post_list = [];  
        docs.forEach((doc) => {
          // 잘 가져왔나 확인하기! :)
          // 앗! DB에서 가져온 것하고 우리가 Post 컴포넌트에서 쓰는 데이터 모양새가 다르네요!
          // console.log(doc.id, doc.data());
  
          // 데이터 모양을 맞춰주자!
          let _post = doc.data();
          // ['comments_cnt', 'contents',..]
          let post = Object.keys(_post).reduce((acc, cur) =>{
                if(cur.indexOf("user_") !== -1){
                    return{
                        ...acc,
                        user_info: {...acc.user_info, [cur]: _post[cur]}
                    };
                }
                return{...acc, [cur]: _post[cur]}
          },
          {id: doc.id, user_info: {}}
        );
        post_list.push(post);
        });
  
        // 리스트 확인하기!
        console.log(post_list);
  
        dispatch(setPost(post_list));


        
      });
    };
  };
  
// reducer
export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.post_list;
        }),
  
        [ADD_POST]: (state, action) => produce(state, (draft) => {
            
        })
    },
    initialState
  );

  // action creator export
const actionCreators = {
    setPost,
    addPost,
    getPostFB,
  };
  
export { actionCreators };