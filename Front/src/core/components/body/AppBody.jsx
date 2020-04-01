import React from 'react';
import './AppBody.css';
import 'font-awesome/css/font-awesome.min.css';

import AppSidebar from '../sidebar/AppSidebar'
import AppFooter from '../footer/AppFooter';
import AppMarket from '../../../components/market/AppMarket';
import AppNotImplemented from '../not_implemented/AppNotImplemented';

import { Switch, Route } from 'react-router-dom';


function AppBody() {

    const not_implemented = ['/dashboard', '/job_orders', '/companies', '/projects', '/map', '/tasks_tools', '/sendouts'];

    const renderNotImplemented = () => {
        return not_implemented.map(module => {
            return <Route
                key={new Date().getTime()}
                exact
                path={module}
                component={ AppNotImplemented }></Route>
        });
    }

    return (
        <div id="page-container" className="bg-black-3">
            <div id="content-wrap" >
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-2 sidebar bg-black-1 px-0">
                            <AppSidebar/>
                        </nav>
                        <main className="col-10" role="main">
                            <Switch>
                                <Route 
                                    exact 
                                    path="/"
                                    component={ AppMarket }></Route>
                                <Route 
                                    exact 
                                    path="/market" 
                                    component={ AppMarket }></Route>
                                {/* <Route 
                                    exact 
                                    path="/dashboard"
                                    component={ AppNotImplemented }></Route> */}
                                    { renderNotImplemented() }
                            </Switch>
                        </main>
                    </div>
                </div>
            </div>    
            <AppFooter/>
        </div>
    );
}

export default AppBody;