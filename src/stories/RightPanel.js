import React from 'react';
import { RecoilRoot } from 'recoil';

import { storiesOf } from '@storybook/react';
import { withKnobs} from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import RightPanel from '../Views/RateCalcNext/components/RightPanel'

storiesOf('RightPanel', module)
    .addDecorator(withKnobs)
    .addDecorator(withThemeProvider)
    .add('RightPanel', () => (
        <RecoilRoot>
            <RightPanel label="RightPanel for Storybook"/>
        </RecoilRoot>
    ));

