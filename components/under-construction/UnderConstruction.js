import React, { useEffect, useState } from 'react';
import styles from './underConstruction.module.css';

// Components
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';

function UnderConstruction() {

    const [active, setActive] = useState(0);

    useEffect(() => {
        let url = window.location.pathname;
        switch (url) {
            case '/careers':
                setActive(5);
                break;
            case '/tos':
                setActive(4);
                break;
            default:
                setActive(0);
                break;
        }
    }, []);

    return (
        <div className={styles.max_height}>
            <div className={styles.content}>
                <header className={styles.logo_holder}>
                    <a href='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 96" className={styles.logo}>
                            <defs />
                            <g fill="none" stroke="#45a3e2" strokeWidth="5">
                                <path stroke="none" d="M0 0h179v96H0z" />
                                <path d="M2.5 2.5h174v91H2.5z" />
                            </g>
                            <text fill='#000' className={styles.logo_text}>
                                <tspan x="0" y="78">WEBER</tspan>
                            </text>
                        </svg>
                    </a>
                    <Menu active={active} />
                </header>

                <div className={styles.construction}>
                    <img src='../../assets/illustrations/under_construction.svg' alt='under construction page' className={styles.image}/>
                    <div>
                        <h1 className={styles.construction_title}>Page is currently under construction.</h1>
                        <p className={styles.construction_desc}>Please check back at a later time. We are sorry for the inconvenience! </p>
                    </div>
                </div>
            </div>
            <div className={styles.footer_holder}>
                <Footer/> 
            </div>
        </div>
    );
}

export default UnderConstruction
