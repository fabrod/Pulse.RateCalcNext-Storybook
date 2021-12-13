import React from 'react';
import { RecoilRoot } from 'recoil';

import { storiesOf } from '@storybook/react';
import { withKnobs} from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import LeftPanel from '../Views/RateCalcNext/components/LeftPanel'

storiesOf('LeftPanel', module)
    .addDecorator(withKnobs)
    .addDecorator(withThemeProvider)
    .add('LeftPanel', () => (
        <RecoilRoot>
            <LeftPanel label="LeftPanel for Storybook"/>
        </RecoilRoot>
    ));

