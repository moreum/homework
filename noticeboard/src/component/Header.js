import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Header = ({history}) => {
    return(
        <React.Fragment>
            <Top>
            <Title onClick={()=>{history.push("/");}}>게시판 만들기</Title>
                <SmallTitle>아주 간단한 게시판을 만들어봅시다</SmallTitle>
                <BackButton onClick={()=>{history.push('/write');}}>글쓰기</BackButton>
            </Top>
           
        </React.Fragment>
    )
}

const Top = styled.div`
    width: 60%;
    height: 300px;
    margin: auto;
    background-color: #E9ECEF;
    text-align: center;
`
const Title = styled.div`
    font-size: 50px;
    font-weight: bold;
    padding-top: 50px;
`;

const SmallTitle = styled.div`
    font-size: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
`;  

const BackButton = styled.button`
    width: 100px;
    height: 50px;
    font-size: 20px;
    border-radius: 20px;
    background-color: #5F8CB2;
    border: 0px;
    color: white;
    margin: 30px;
`;

export default withRouter(Header);