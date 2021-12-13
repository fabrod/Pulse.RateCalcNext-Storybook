import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import RequiredLabel from '../components/RequiredLabel'

storiesOf('RequiredLabel', module)
    .addDecorator(withKnobs)
    .addDecorator(withThemeProvider)
    .add('RequiredLabel', () => (
        <RequiredLabel label="RequiredLabel for Storybook" mark="*"/>
    ));

