import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import store from './store/store';
import HomePage from './pages/HomePage/HomePage';
import myTheme from './theme';
import history from './history';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <ThemeProvider theme={myTheme}>
                    <Router history={history}>
                        <Switch>
                            <Route path="/:movieId?" component={HomePage} />
                        </Switch>
                    </Router>
                </ThemeProvider>
            </Provider>
        </div>
    );
}

export default App;
