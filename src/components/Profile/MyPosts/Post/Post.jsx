import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg" alt="#"/>
                {props.postText}
                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>
        </div>
    )

}

export default Post;