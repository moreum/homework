import React,{useEffect} from "react";
import styled from "styled-components";
import Header from "../component/Header"
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux" 

const Main = ({history}) => {
    // const dispatch = useDispatch(); 
    const post_list = useSelector((state)=> state.board.list);
    return(
        <React.Fragment>
            <Header/>
            <Table>
                <thead>
                    <tr>
                        <Th>글번호</Th>
                        <Th>작성자</Th>
                        <Th>제목</Th>
                    </tr>
                    {post_list.map((p,index)=>{
                    return(
                        <tr key={index}
                            onClick={()=> {
                            history.push("/detail" + index);
                        }}>
                        <Th>{index+1}</Th>
                        <Th>{p.name}</Th>
                        <Th>{p.title}</Th>
                        </tr>
                    );
                })}                        
                </thead>
            </Table>
        );
        </React.Fragment>
    )
}

const Table = styled.table`
    width: 60%;
    border-top: 2px solid rgba(29, 161, 242, 1);
    // border-bottom: 2px solid rgba(29, 161, 242, 1);
    border-collapse: collapse;
    margin: 30px auto;
`;

const Th = styled.th`
    border-bottom: 2px solid rgba(29, 161, 242, 1);
    padding: 10px;
`;


export default withRouter(Main);