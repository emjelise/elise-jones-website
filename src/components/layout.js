import React from "react";
import Header from "./header"
import BottomNav from "./bottomNav";
import Topnav from "./topnav";

const Layout = props => {
    return(
        <div>
            <Header />
            {props.children}
            <Topnav />
            <BottomNav />
        </div>
    )
}
export default Layout