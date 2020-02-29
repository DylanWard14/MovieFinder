import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store/store';

import HomePage from './pages/HomePage/HomePage';
import myTheme from './theme';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <ThemeProvider theme={myTheme}>
                    <HomePage />
                </ThemeProvider>
            </Provider>
        </div>
    );
}

export default App;
