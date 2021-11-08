import { renderEntireTree } from "../render"

const state = {
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
}

export let addPost = (postMessage) =>{
    let newPost = {
        id: 4, 
        message: postMessage,
        likes: 0
    }
    state.profilePage.postsData.push(newPost);
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state)
}


export default state;