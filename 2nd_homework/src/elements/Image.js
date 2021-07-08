import styled from "styled-components";
import React from "react";


// 이미지 컴포넌트
/**
 * 
 * @param {*} props 
 * - shape 이미지를 동그랗게 보여줄 지, 네모로 보여줄 지 모양을 결정합니다.
 * - src 이미지 경로
 * - size 이미지 사이즈
 * @returns 
 */
 const Image = (props) => {
  const {shape, src, size} = props;

  const styles = {
      src: src,
      size: size,
  }

  if(shape === "circle"){
      return (
          <ImageCircle {...styles}></ImageCircle>
      )
  }

  if(shape === "rectangle"){
      return (
          <AspectOutter>
              <AspectInner {...styles}></AspectInner>
          </AspectOutter>
      )
  }

  return (
      <React.Fragment>
          <ImageDefault {...styles}></ImageDefault>
      </React.Fragment>
  )
}
Image.defaultProps = {
  shape: "circle",
  src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqSlHC%2Fbtq89NrxDoK%2F0pVE26nR4kzAeHVmF2epf0%2Fimg.jpg",
  size: 36,
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;