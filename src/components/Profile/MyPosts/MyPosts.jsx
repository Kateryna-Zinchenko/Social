import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post postText='Hi!' likesCount='0'/>
                <Post postText="It's my first post!" likesCount='3'/>
            </div>
        </div>
    )
}

export default MyPosts;