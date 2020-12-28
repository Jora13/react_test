import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content_wrap">
          <Navbar state={props.state.sidebarFriends} />
          <div className="content_page_block">
            <Route path="/dialogs"
              render={() => <Dialogs store={props.state.dialogPage} dispatch={props.dispatch} />} />

            <Route path="/profile"
              render={() => <Profile state={props.state.profilePage}
                dispatch={props.dispatch} />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
