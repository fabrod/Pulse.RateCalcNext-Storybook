import React from 'react';
import { RecoilRoot } from 'recoil';

import { storiesOf } from '@storybook/react';
import { withKnobs} from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import Contents from '../Views/RateCalcNext/components/Contents'

storiesOf('Contents', module)
    .addDecorator(withKnobs)
    .addDecorator(withThemeProvider)
    .add('Contents', () => (
        <RecoilRoot>
            <Contents label="Contents for Storybook"/>
        </RecoilRoot>
    ));

