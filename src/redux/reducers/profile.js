import {ADD_POST, SET_USERS_PROFILE, UPDATE_NEW_POST_TEXT} from "../actions/profile";

const initialState = {
    postsData: [
        {id: 0, postText: 'Hi!', likesCount: 10000},
        {id: 1, postText: "It's my first post!", likesCount: 5689}
    ],
    newPostText: '',
    profile: null
}

const profile = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.postsData.length + 1,
                postText: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
            case SET_USERS_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
}

export default profile;