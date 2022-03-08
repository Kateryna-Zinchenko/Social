import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.bg_image} alt='#'
                     src='https://cdn.pixabay.com/photo/2015/11/15/18/42/white-1044659_1280.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;