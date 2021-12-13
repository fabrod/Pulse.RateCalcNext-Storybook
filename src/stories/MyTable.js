import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import MyTable from '../components/MyTable'

storiesOf('MyTable', module)
    .addDecorator(withKnobs)
    .addDecorator(withThemeProvider)
    .add('MyTable', () => (
        <MyTable />
    ));

