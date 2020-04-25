import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store/store';
import HomePage from './pages/HomePage/HomePage';
import myTheme from './theme';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <ThemeProvider theme={myTheme}>
                    <Router>
                        <Route path="/:movieId?" component={HomePage} />
                    </Router>
                </ThemeProvider>
            </Provider>
        </div>
    );
}

export default App;
