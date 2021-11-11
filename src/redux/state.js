

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
                { id: 3, message: 'Що робиш?' }
            ]
        },
        sidebar: {}
    },
    _callSubscriber (){
        console.log('state changed')
    },

    getState(){
        return this._state
    },
    subscribe (observer){
        this._callSubscriber = observer
    },
 
    dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 4, 
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }  else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
       
}


export default store;