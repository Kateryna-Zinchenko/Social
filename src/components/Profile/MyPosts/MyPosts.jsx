import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    const postsElements = props.postsData.map((p) => (<Post key={p.id} postText={p.postText} likesCount={p.likesCount}/>))
    const onAddPost =() => {
        props.addPost();
    }

    const newPostElement = React.createRef();

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea className={s.textarea} onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button className={s.addPostButton} onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements.reverse()}
            </div>
        </div>
    )
}

export default MyPosts;