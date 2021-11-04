import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
    

    return (
        < BrowserRouter >
       
            <div className='appWrapper' >
                < Header />
                < Navbar />
                
                <div className='appWrapperContent' >
                    <Route path='/dialogs' render={ () => < Dialogs 
                        dialogsData={props.dialogsData}
                        messagesData={props.messagesData}/>} 
                    />       
                    <Route path='/profile' render={ () => < Profile postsData={props.postsData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;