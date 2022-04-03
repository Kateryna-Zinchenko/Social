import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../images/user.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.pagesCountCursor}>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress
                                .some( id => id === u.id)} className={s.followButton}
                                      onClick={() => {props.unfollow(u.id)}}> Unfollow </button>
                            : <button disabled={props.followingInProgress
                                .some( id => id === u.id)} className={s.followButton}
                                      onClick={() => {props.follow(u.id)}}>Follow</button>
                        }

                    </div>
                </div>
                    <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>
                </div>)
            }
        </div>
    )
}

export default Users;