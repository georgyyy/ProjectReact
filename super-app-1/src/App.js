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
import { DialogsElements, MessageElements, PostsElements } from "./index";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/profile" render={() => <Profile /> } />
                    <Route path="/dialogs" render={() => <Dialogs DialogElements={DialogsElements} MessageElements={MessageElements}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
