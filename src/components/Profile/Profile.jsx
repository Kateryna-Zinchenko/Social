import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    const name = props.person.name;
    return <div className={s.content}>
        <div>
            <img className={s.bg_image} alt='#' src='https://cdn.pixabay.com/photo/2015/11/15/18/42/white-1044659_1280.jpg'/>
            <div>
                {name}
            </div>
        </div>
        <div>
            ava+description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;