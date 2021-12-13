import React from 'react';
import { RecoilRoot } from 'recoil';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import TextBlock from '../components/TextBlock'

storiesOf('TextBlock', module)
    .addDecorator(withKnobs)
    .addDecorator(withThemeProvider)
    .add('TextBlock', () => (
        <RecoilRoot >
            <TextBlock />
        </RecoilRoot>
        
    ));

