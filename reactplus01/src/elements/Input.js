import React from "react";
import styled from "styled-components";
import {Text,Grid} from "./index";
const Input = (props) => {
    const {label, placeholder,_onChange, type} = props;
    return(
        <React.Fragment>
            <Grid>
            <Text margin="0px">{label}</Text>
            <ElInput type={type} placeholder={placeholder} onChange={_onChange}/>
            </Grid>

        </React.Fragment> 

    )
}

Input.defaultProps = {
    label: '텍스트',
    placeholder: '텍스트를 입력해주세요',// 아무것도 안들어 있을때에 써져있을 값
    type: "text",
    _onChange: () => {},

}

const ElInput = styled.input`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`


export default Input;