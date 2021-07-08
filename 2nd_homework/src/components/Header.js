import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";


const Header = (props) => {
  const dispatch = useDispatch();

  //   리덕스에서 로그인 중인지 상태값 가져오기
  const is_login = useSelector((state) => state.user.is_login);

  //   세션에 기록된 로그인 정보 가져오기
  // 어떻게 생겼는 지는 파이어베이스에서 결정해요! (우리가 결정할 수 있는 건 저장 위치뿐..!)
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  //   세션이(로그인 정보겠죠!) 있나없나 확인해요!
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  //  아래 주석을 풀고 세션이 있나 없나 확인해볼까요? :)
  //   console.log(is_session);

  // 리덕스에서 is_login이 true로 저장되어 있고, 세션도 있으면 로그인 중인 것으로 판단해요!
  // 로그인 한 뒤 헤더를 보여줄거예요.
 
  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              HELLO
            </Text>
          </Grid>

          <Grid is_flex>
            <Button text="내정보"></Button>
            <Button text="알림" _onClick={() => {
              history.push('/noti');
            }}></Button>
            <Button
              text="로그아웃"
              _onClick={() => {
                dispatch(userActions.logoutFB());
              }}
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            헬로
          </Text>
        </Grid>

        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
              history.push("/login");
            }}
          ></Button>
          <Button
            text="회원가입"
            _onClick={() => {
              history.push("/signup");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;