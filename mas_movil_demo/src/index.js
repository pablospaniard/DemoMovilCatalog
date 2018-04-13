import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Layout from './containers/Layout/Layout';
import reducer from './store/reducer';
import PhoneListContainer from './containers/PhoneListContainer/PhoneListContainer';

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <Route path='/phones' component={PhoneListContainer} />
            </Layout>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

