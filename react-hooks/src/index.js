import React from 'react';
import ReactDOM from 'react-dom'
import {
    Switch, Route, Link, HashRouter
} from 'react-router-dom'

import App from './App'
import UseMemo from './UseMemo'
import UseCallBack from './UseCallBack'
import UseCallBack2 from './UseCallBack2'
let style = {
    height: '100%',
    width: 200,
    float: 'left',
}




ReactDOM.render(
    <>
        <HashRouter>
            <div style={style}>
                <Link to="/useMemo"  >useMemo</Link><br/>
                <Link to="/UseCallBack"  >UseCallBack</Link><br/>
                <Link to="/UseCallBack2"  >UseCallBack2</Link>
            </div>
            <div style={{ float: 'left' }}  >
                <Switch>
                    <Route path='/useMemo' component={UseMemo}></Route>
                    <Route path='/UseCallBack' component={UseCallBack}></Route>
                    <Route path='/UseCallBack2' component={UseCallBack2}></Route>
                </Switch>
            </div>
        </HashRouter></>

    , document.querySelector('#root'))