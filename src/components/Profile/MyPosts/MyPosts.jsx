import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = () => {
    let postsData = [
        {id: 1, postText: 'Hi!', likesCount: 10000},
        {id: 2, postText: "It's my first post!", likesCount: 5689}
    ]
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
                <Post postText={postsData[0].postText} likesCount={postsData[0].likesCount}/>
                <Post postText={postsData[1].postText} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;