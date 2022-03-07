import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg" alt="#"/>
                post1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    )

}

export default Post;