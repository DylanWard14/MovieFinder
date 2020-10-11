import React from 'react';
import { render, shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import myTheme from '../../theme';

export const renderWrapper = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={myTheme}>{component}</ThemeProvider>);
};

export const shallowWrapper = (component: React.ReactNode) => {
    return shallow(<ThemeProvider theme={myTheme}>{component}</ThemeProvider>);
};

export const mountWrapper = (component: React.ReactNode) => {
    return mount(<ThemeProvider theme={myTheme}>{component}</ThemeProvider>);
};
