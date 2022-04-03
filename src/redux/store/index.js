import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import profile from "../reducers/profile";
import dialogs from "../reducers/dialogs";
import users from "../reducers/users";
import auth from "../reducers/auth";

const reducers = combineReducers({
    profilePage: profile,
    dialogsPage: dialogs,
    usersPage: users,
    auth: auth
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
