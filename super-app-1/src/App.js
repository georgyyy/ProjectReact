import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import { BrowserRouter } from "react-router-dom";
import Route from "react-router-dom/es/Route";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/profile" render={() => <Profile ProfilePage={props.state.ProfilePage} dispatch={props.dispatch}/> } />
                    <Route path="/dialogs" render={() => <Dialogs DialogsData={props.state.MessagesPage.DialogsData} NewMessageText={props.state.MessagesPage.NewMessageText} MessagesData={props.state.MessagesPage.MessagesData}  dispatch={props.dispatch}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
