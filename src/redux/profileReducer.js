export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
}

let initialState = {
    postsData: [
        { id: 1, message: 'Привіт! Як ти?', likes: 15 },
        { id: 2, message: 'Це мій перший пост =)', likes: 27 },
        { id: 3, message: 'Що робиш?', likes: 2000 }
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 4,
                message: state.newPostText,
                likes: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;

