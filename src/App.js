import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homescreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import WatchScreen from './screens/watchScreen/WatchScreen';
import SearchScreen from './screens/searchScreen/SearchScreen';

import './_app.scss';
import Subscriptions from './screens/subscriptions/Subscriptions';
import ChannelScreen from './screens/channelScreen/ChannelScreen';


const Layout = ({children}) => {

    const [sidebar, toggleSidebar] = useState(false);

    const handleToggleSidebar = () => {
        toggleSidebar(value => !value);
    }

    return (
        <Fragment>
            <Header handleToggleSidebar = {handleToggleSidebar}/>
            <div className="app__container">
                <Sidebar sidebar = {sidebar}  handleToggleSidebar = {handleToggleSidebar}/>

                <Container fluid className="app__main">
                    {children}
                </Container>
            </div>
        </Fragment>
    )
}

const App = () => {
    
    const {accessToken, loading} = useSelector(state => state.auth);
    const history = useHistory();

    useEffect(() => {

        if(!loading && !accessToken){
            history.push('/auth');
        }

    }, [accessToken, loading, history])
    
    return (
            <Switch>
                <Route path="/" exact>
                    <Layout>
                        <HomeScreen/>
                    </Layout>
                </Route>
                <Route path="/auth" exact>
                    <LoginScreen/>
                </Route>
                <Route path="/search/:query" exact>
                    <Layout>
                        <SearchScreen/>
                    </Layout>
                </Route>
                <Route path="/watch/:id" exact>
                    <Layout>
                        <WatchScreen/>
                    </Layout>
                </Route>
                <Route path="/feed/subscriptions" exact>
                    <Layout>
                        <Subscriptions/>
                    </Layout>
                </Route>
                <Route path="/channel/:channelId" exact>
                    <Layout>
                        <ChannelScreen/>
                    </Layout>
                </Route>

                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
    )
}

export default App
