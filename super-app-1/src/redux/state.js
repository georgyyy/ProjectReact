import React from 'react'

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let store = {
    _state: {
        ProfilePage: {
            PostsData: [
                {message: "It's my first post", LikesCount: "20 likes"},
                {message: "It's my second post", LikesCount: "21 likes"},
                {message: "It's my third post", LikesCount: "0 likes"},
            ],
            NewPostText: "MENYA ZOVUT GOSHAN"
        },

        MessagesPage: {
            DialogsData: [
                {name: "Георгий", id: "1"},
                {name: "Наталья", id: "2"},
                {name: "Владимир", id: "3"},
                {name: "Константин", id: "4"},
                {name: "Елизавета", id: "5"},
                {name: "Александр", id: "6"},
            ],

            MessagesData: [
                {message: "Hi", id: 1},
                {message: "BUBUBUB", id: 2},
                {message: "WOWWWW", id: 3},
                {message: "SHAKALAKA", id: 4},
            ],

            NewMessageText:"menya zovut goshan"
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer){
        this._CallSubscriber = observer;
    },
    _CallSubscriber() {
    },
    dispatch(action) {
        if (action.type ==='ADD-NEW-POST') {
            let NewPost = {
                message: this._state.ProfilePage.NewPostText,
                LikesCount: 0
            };
            this._state.ProfilePage.PostsData.push(NewPost);
            this._state.ProfilePage.NewPostText = '';
            this._CallSubscriber(this._state);
        }
        else if (action.type ==='UPDATE-POST-TEXT') {
            this._state.ProfilePage.NewPostText = action.newtext;
            this._CallSubscriber(this._state)
        }
        else if (action.type ==='ADD-NEW-MESSAGE') {
            let newMessage = {
                message: this._state.MessagesPage.NewMessageText,
                id:5,
            }
            this._state.MessagesPage.MessagesData.push(newMessage);
            this._state.MessagesPage.NewMessageText = '';
            this._CallSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.MessagesPage.NewMessageText = action.newtext;
            this._CallSubscriber(this._state);
        }
    },
}
export const AddNewPostActionCreater =()=> ({type: ADD_NEW_POST});

export const UpdatePostTextActionCreater = (text) =>
    ({type: UPDATE_POST_TEXT, newtext: text});

export default store;
window.store = store;
