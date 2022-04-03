import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "../actions/dialogs";

const initialState = {
    dialogsData: [
        {id: 1, name: 'Katya'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Nastya'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Wow'},
        {id: 3, message: 'Yay'}
    ],
    newMessageBody: ''
}

const dialogs = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            const body = state.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: state.messagesData.length + 1, message: body}],
                newMessageBody: ''
            };
        default:
            return state;
    }
}

export default dialogs;