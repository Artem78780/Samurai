import profileReducer from "./profileReducer"
import dialogsReducer from './dialogsReducer'
import sidebarReducer from "./sidebarReducer"




let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Привіт! Як ти?', likes: 15 },
                { id: 2, message: 'Це мій перший пост =)', likes: 27 },
                { id: 3, message: 'Що робиш?', likes: 2000 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);

    }
}


export default store;
window.store = store;