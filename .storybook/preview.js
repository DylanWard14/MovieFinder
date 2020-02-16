import React from 'react';
import {addDecorator} from '@storybook/react';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components/macro';

import myTheme from '../src/theme';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
`;

addDecorator(storyFn => <ThemeProvider theme={myTheme}><Wrapper>{storyFn()}</Wrapper></ThemeProvider>);