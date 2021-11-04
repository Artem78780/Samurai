import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, message: 'Привіт! Як ти?', likes: 15},
  {id: 2, message: 'Це мій перший пост =)', likes: 27},
  {id: 3, message: 'Що робиш?', likes: 2000}
]
let dialogsData = [
  { id: 1, name: 'Аня' },
  { id: 2, name: 'Денис' },
  { id: 3, name: 'Богдан' },
  { id: 4, name: 'Іван' },
  { id: 5, name: 'Сергій' }
]
let messagesData = [
  { id: 1, message: 'Привіт' },
  { id: 2, message: 'Як справи?' },
  { id: 3, message: 'Що робиш?' }
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
