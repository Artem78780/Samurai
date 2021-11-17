import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {


    return (
        < BrowserRouter >
            <div className='appWrapper' >
                < Header />
                < Navbar />
                <div className='appWrapperContent' >
                
                    <Route path='/dialogs' render={() =>
                        < DialogsContainer />} 
                    />
                    <Route path='/profile' render={() =>
                        < Profile />
                    }/>    
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;