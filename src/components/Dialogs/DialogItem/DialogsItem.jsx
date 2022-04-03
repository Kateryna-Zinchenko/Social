import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    const navLinkStyles = ({isActive}) => {
        return {
            color: isActive ? 'yellow' : 'black',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
    return (
        <div>
            <NavLink style={navLinkStyles} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;