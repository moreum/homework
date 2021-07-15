import React, {useEffect} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addPost, addPostFB } from "../redux/modules/board";
import { useSelector } from "react-redux";

const Write = ({history}) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.board.list);

    const title_ref = React.useRef();
    const name_ref = React.useRef();
    const content_ref = React.useRef();

    // const addpost = () => {

    //     const post = {
    //         title: title_ref.current.value,
    //         name: name_ref.current.value,
    //         content: content_ref.current.value,
    //     }   

    //     console.log(post)

    // }
    
    return(
        <React.Fragment>
            <Center>
                <h1>글쓰기 페이지</h1>
                <InputBox placeholder= "  제목을 입력하세요" ref={title_ref}></InputBox> 
                <InputBox placeholder= "  작성자를 입력하세요" ref={name_ref}></InputBox>
                <TextBox placeholder= "  내용을 입력하세요" ref={content_ref}></TextBox>
                <ButtonBox> 
                    <Button 
                        onClick={()=> {
                            let input_text={

                                title: title_ref.current.value,
                                name: name_ref.current.value,
                                content: content_ref.current.value,
                            };
                            dispatch(addPostFB(input_text));
                            history.push("/");
                        }}
                    >글쓰기</Button>
                    <Button 
                        onClick={()=>{
                            history.goBack()
                        }}
                    >
                    뒤로가기
                    </Button>
                </ButtonBox>

            </Center>
        </React.Fragment>
    )
}

const Center = styled.div`
    width: 100%;
    text-align: center;
`;


const InputBox = styled.input`
    width: 50%;
    height: 30px;
    margin: 7px;
    // background-color: 
    border-radius: 30px;
`;

const TextBox = styled.textarea`
    width: 50%;
    height: 350px;
    margin: 7px;
    border-radius: 10px;
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

export default Write;