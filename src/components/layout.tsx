import React from "react";
import Footer from "./footer";
import Navigation from "./nav";

interface LayoutPropsInterface {
    children: React.ReactElement
}

const DisplayLayout = (props: LayoutPropsInterface) => {
    return (
        <div>
            <Navigation />
            {props.children}
            {/* <Footer /> */}
        </div>
    )
}

export default DisplayLayout;