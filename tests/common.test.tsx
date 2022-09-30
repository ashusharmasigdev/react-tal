import * as React from 'react'
import { render } from '@testing-library/react'
import { HelmetProvider } from "react-helmet-async";

import 'jest-canvas-mock'

import { TALPage as Page } from '../src'

describe('Common render', () => {
    it('renders without crashing', () => {
        render(<HelmetProvider><Page><h1>Child</h1></Page></HelmetProvider>)
    })
})
