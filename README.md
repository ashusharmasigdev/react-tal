# react-tal

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

TAL ⭐ includes components that makes your devlife easier as easier.

[**Docs & Demo**](https://ashusharmasigdev.github.io/react-tal/)

## Installation:

```bash
npm install react-tal --save-dev
```

or

```bash
yarn add -D react-tal
```

## Components & Usage:

NOTE: You might need ```HelmetProvider``` by ```react-helmet-async`` to use TALPage.

### TALPage
```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { TALPage as Page } from 'react-tal'

import { HelmetProvider } from 'react-helmet-async'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <Page
                title={"Sample page title"}>
                <h1>Just a text on a page</h1>
            </Page>
        </HelmetProvider>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/react-tal
[npm-image]: https://img.shields.io/npm/v/react-tal
[github-license]: https://img.shields.io/github/license/ashusharmasigdev/react-tal
[github-license-url]: https://github.com/ashusharmasigdev/react-tal/blob/master/LICENSE
[github-build]: https://github.com/ashusharmasigdev/react-tal/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/ashusharmasigdev/react-tal/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-tal
