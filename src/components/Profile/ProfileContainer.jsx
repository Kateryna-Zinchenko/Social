import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/actions/profile";
import {usersAPI} from "../../API/api";
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
       usersAPI.getProfile(this.props.userId)
           .then(response => {
            this.props.setUsersProfile(response.data);
        });
    }

    render() {
        if (this.props.isAuth === false) {
            return <Navigate to={'/login'} />
        }
        return (
           <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setUsersProfile}) (ProfileContainer);