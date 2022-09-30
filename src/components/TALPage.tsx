import React, { forwardRef, ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'

type TALPageProps = {
    children?: ReactElement | ReactElement[]
    title?: string
}

const TALPage = forwardRef<HTMLDivElement, TALPageProps>(({ children, title }, ref) => {
    return (
        <>
            <div ref={ref}>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                {children}
            </div>
        </>
    )
})

export default TALPage
