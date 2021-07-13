import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loadPost, loadPostFB } from "../redux/modules/board";
import { firestore } from "firebase";

import styled from "styled-components";

const Detail = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    //                                          redux파일 이름!!!!!!!!!!!!!!!!!!!!!!
    const post_list = useSelector((state)=>state.board.list);
    //       parseInt=string을 int형으로 전환
    let post_index = parseInt(props.match.params.index);

    console.log(post_list[post_index].title);

    useEffect(() => {
        dispatch(loadPostFB());
    }, [dispatch]);
    return(
        <React.Fragment>
            <Center>
                <h1>{post_list[post_index].title}</h1>
                <p>{post_list[post_index].name}</p>
                <WriteView>{post_list[post_index].content}</WriteView>
                <BackButton onClick={()=>{props.history.push("/")}}>돌아가기</BackButton>
            </Center>

        </React.Fragment>
    )
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

const BackButton = styled.button`
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 30px;
    display: block;
    margin: 10px auto;
    background-color: #C0C0C0;
`;

export default Detail;