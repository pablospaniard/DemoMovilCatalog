import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Layout from './containers/Layout/Layout';
import reducer from './store/reducer';
import PhoneListContainer from './containers/PhoneListContainer/PhoneListContainer';
import PhoneDetailComponent from './components/PhoneDetailComponent/PhoneDetailComponent';


const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Layout} />
                <Route path='/phones' exact component={PhoneListContainer} />
                <Route path={'/phones/:id'} component={PhoneDetailComponent} />
                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

