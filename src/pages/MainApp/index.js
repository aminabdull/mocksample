import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header2, Footer2 } from '../../components';
import News from '../News';
import NewsDetail from '../NewsDetail';
import './MainApp.scss'

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Header2 />
            <div className="content-wrapper">
            <Router>
                <Switch>
                    <Route path="/news">
                        <News />
                    </Route>
                    <Route path="/newsdetail/:id">
                        <NewsDetail />
                    </Route>
                    <Route path="/">
                        <News />
                    </Route>
                </Switch>
            </Router>
            </div>
            <Footer2 />
        </div>
    )
}

export default MainApp;
