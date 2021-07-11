import React from "react";
import styled from "styled-components";

const Write = () => {

    
    return(
        <React.Fragment>
            <Center>
                <h1>글쓰기 페이지</h1>
                <InputBox placeholder= "제목" ></InputBox> 
                <InputBox placeholder= "작성자" ></InputBox>
                <TextBox placeholder= "내용"></TextBox>
                <WriteButton>글쓰기</WriteButton>
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

const WriteButton = styled.button`
    width: 70px;
    height: 30px;
    // background-color: #212121;
    border: none;
    border-radius: 30px;
    display: block;
    margin: auto
`;

export default Write;