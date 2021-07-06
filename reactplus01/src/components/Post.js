import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import {Grid, Image, Text} from "../elements";


const Post = (props) => {

    return (
      <React.Fragment>
        <Grid>
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Image shape="circle" src={props.src} />
              <Text bold>{props.user_info.user_name}</Text>
            </Grid>
            <Grid is_flex width="auto">
              <Text>{props.insert_dt}</Text>
            </Grid>
          </Grid>
          <Grid padding="16px">
            <Text>{props.contents}</Text>
          </Grid>
          <Grid>
            <Image shape="rectangle" src={props.src} />
          </Grid>
          <Grid padding="16px">
            <Text margin="0px" bold>댓글 {props.comment_cnt}개</Text>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}


// 필요한 프롭스 미리 넘겨놓는 방식
Post.defaultProps = {
    user_info: {
        user_name: "hopang",
        user_profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjy-f7Apa--0mVsOmzPZSI-u5T01wYU3NF2g&usqp=CAU",
    },
    image_url: "https://pbs.twimg.com/media/Dw8NAzaUYAEvAyM.jpg",
    contents: "먹고 힘내",
    comment_cnt: 10,
    insert_dt: "2021-07-02 10:00:00",
};


export default Post;