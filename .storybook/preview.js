import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/macro';
import { BrowserRouter } from 'react-router-dom';

import myTheme from '../src/theme';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

addDecorator(storyFn => (
    <ThemeProvider theme={myTheme}>
        <BrowserRouter>
            <Wrapper>{storyFn()}</Wrapper>
        </BrowserRouter>
    </ThemeProvider>
));
