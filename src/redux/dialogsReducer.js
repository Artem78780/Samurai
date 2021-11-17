
let initialState = {
    dialogsData: [
        { id: 1, name: 'Аня' },
        { id: 2, name: 'Денис' },
        { id: 3, name: 'Богдан' },
        { id: 4, name: 'Іван' },
        { id: 5, name: 'Сергій' }
    ],
    messagesData: [
        { id: 1, message: 'Привіт' },
        { id: 2, message: 'Як справи?' },
        { id: 3, message: 'Що робиш?' },
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.body;
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageText;
            state.newMessageText = ''
            state.messagesData.push({ id: 4, message: body })
            return state;
        default:
            return state;
    }
}
export const updateNewMessageText = (body) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT', body: body
    }
}
export const sendMessage = () => {
    return {
        type: 'SEND-MESSAGE'
    }
}
export default dialogsReducer;