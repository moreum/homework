import React,{useEffect} from "react";
import styled from "styled-components";
import Header from "../component/Header"
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux" 
import { loadPost, loadPostFB } from "../redux/modules/board";

const Main = ({history}) => {
    const dispatch = useDispatch(); 
    const post_list = useSelector((state)=> state.board.list);

    useEffect(() => {
        dispatch(loadPostFB());
      }, [dispatch]);
    return(
        <React.Fragment>
            <Header/>
            <Table>
                <thead>
                    <TR >
                        <th>글번호</th>
                        <th>작성자</th>
                        <th>제목</th>
                    </TR>
                    {post_list.map((p,index)=>{
                    return(
                        <TR
                            key={index}
                            onClick={()=> {
                            history.push("/detail/" + index);
                        }}>
                        <th>{index+1}</th>
                        <th>{p.name}</th>
                        <th>{p.title}</th>
                        </TR>
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
    border-collapse: collapse;
    margin: 30px auto;
`;

const TR = styled.tr`
& > th {
    // border-top: 3px solid #5F8CB2;
    border-bottom: 1px solid #5F8CB2;
    width: 100px;
    padding: 10px;
    cursor: pointer;
  }
  :hover {
    background-color: #F0F6FC;
  }
`;


export default withRouter(Main);