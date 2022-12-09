import React from "react";
import Header from "./header"
import BottomNav from "./bottomNav";
import Topnav from "./topnav";
import Footer from "./footer";

const Layout = props => {
    return(
        <div>
            <Header />
            {props.children}
            <Topnav />
            <BottomNav />
            <Footer />
        </div>
    )
}
export default Layout