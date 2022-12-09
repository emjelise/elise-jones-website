import React from 'react'
import * as footerStyles from "./footer.module.css"

const Footer = () => {
    const year = new Date().getFullYear();

    return <p className={footerStyles.footer}>{'Copyright ⓒ Elise Jones 2022'}</p>
};

export default Footer;