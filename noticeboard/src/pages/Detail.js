import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import { useHistory } from "react-router";
import { deletePost, deletePostFB, loadPost, loadPostFB, uploadPostFB } from "../redux/modules/board";


import styled from "styled-components";

const Detail = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    //                                          redux파일 이름!!!!!!!!!!!!!!!!!!!!!!
    const post_list = useSelector((state)=>state.board.list);
    //       parseInt=string을 int형으로 전환
    let post_index = parseInt(props.match.params.index);
    // console.log(post_list[post_index].title);

    const _post = post_list.filter((p) => {
        return p.post_id === post_index;
      });


    useEffect(() => {
        dispatch(loadPostFB());
    }, [dispatch]);
    return(
        <React.Fragment>
            <Center>
                <h1>{post_list[post_index].title}</h1>
                <p>{post_list[post_index].name}</p>
                <WriteView>{post_list[post_index].content}</WriteView>
                <ButtonBox>
                <Button onClick={()=>{props.history.push("/")}}>돌아가기</Button>
                <Button 
                    onClick={()=>{
                        dispatch(deletePostFB(post_index));
                        props.history.push("/");
                        console.log(post_list[post_index].title)
                }}>삭제하기</Button> 
                </ButtonBox>
            </Center>
FB
        </React.Fragment>
    );
}


const Center = styled.div`
    width: 100%;
    text-align: center;
`;

const WriteView = styled.div`
    width: 40%;
    height: 350px;
    margin: auto;
    border-radius: 20px;
    border: none;
    background-color: #E9ECEF;
`; 

const Button = styled.button`
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 30px;
    display: block;
    margin: 10px auto;
    background-color: #C0C0C0;
`;
const ButtonBox = styled.div`
  width: 40%;
  display: flex;
  margin: auto;
`;

export default Detail;