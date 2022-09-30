import React, { forwardRef, ReactElement } from "react";
// import {Helmet} from "react-helmet-async";

type TALPageProps = {
    children?: ReactElement | ReactElement[],
    title?: string
}

const TALPage = forwardRef<HTMLDivElement, TALPageProps>(({
    children,
}, ref) => {

    return (
        <>
            <div
                ref={ref}>
                    
                    {children}
            </div>
        </>
    );

})

export default TALPage;