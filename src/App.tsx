import React from 'react';
import { ThemeProvider } from 'styled-components';

import HomePage from './pages/HomePage/HomePage';
import myTheme from './theme';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={myTheme}>
                <HomePage />
            </ThemeProvider>
        </div>
    );
}

export default App;
