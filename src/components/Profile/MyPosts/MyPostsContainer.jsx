import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/actions/profile";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
      postsData: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      updateNewPostText: (text) => {
          const action = updateNewPostActionCreator(text);
          dispatch(action);
      },
      addPost: () => {
          dispatch(addPostActionCreator());
      }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;