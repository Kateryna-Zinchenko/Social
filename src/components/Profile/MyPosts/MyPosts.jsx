import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        my posts
        <div>
            <textarea/>
            <button>Add</button>
        </div>
        <div >
            <Post/>
            <Post/>
            <Post/>
            <Post/>


        </div>
    </div>

}

export default MyPosts;