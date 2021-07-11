import React from "react";
import styled from "styled-components";

const Detail = (props) => {

    return(
        <React.Fragment>
     
            <Center>
                <h1>상세페이지</h1>
                <WriteView></WriteView>
                <BackButton>돌아가기</BackButton>
            </Center>

        </React.Fragment>
    )
}


const Center = styled.div`
    width: 100%;
    text-align: center;
    
`;

const WriteView = styled.div`
    width: 400px;
    height: 350px;
    margin: auto;
    border-radius: 20px;
    border: solid black;

`; 

const BackButton = styled.button`
    width: 70px;
    height: 30px;
    // background-color: #212121;
    border: none;
    border-radius: 30px;
    display: block;
    margin: 10px auto;
`;

export default Detail;