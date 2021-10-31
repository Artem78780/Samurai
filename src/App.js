

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header />
        <Navbar />
        <div className='appWrapperContent'>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
