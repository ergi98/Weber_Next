import React, { useState } from 'react';
import styles from './menu.module.css';

function Menu(props) {

    const [opened, setOpenend] = useState(false);

    return (
        <>
            <span onClick={() => setOpenend(true)}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 21' className={opened ? '' : styles.menu_burger}>
                    <defs />
                    <g fill='none' stroke={props.variant==='light'? '#fff' : '#000'} strokeLinecap='round' strokeLinejoin='round' strokeWidth='3'>
                        <path d='M1.5 10.5h27M1.5 1.5h27M1.5 19.5h27' />
                    </g>
                </svg>
            </span>
            <div id='contactMenu' className={opened ? styles.opened : styles.side_nav}>
                <span className={styles.close_button} onClick={() => setOpenend(false)}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.953 20.953' className={styles.close_icon}>
                        <defs />
                        <path d='M20.954 2.096l-2.1-2.1-8.377 8.381L2.096 0l-2.1 2.1 8.381 8.377L0 18.858l2.1 2.1 8.377-8.381 8.381 8.381 2.1-2.1-8.381-8.381z' />
                    </svg>
                </span>
                {
                    props.variant==='light'?
                    <ul className={styles.menu_links}>
                        <li className={styles.light_item}><a className={props.active===1? styles.light_active : styles.light_link} href='/'>Home</a></li>
                        <li className={styles.light_item}><a href='/about' className={props.active===2? styles.light_active : styles.light_link}>About</a></li>
                        <li className={styles.light_item}><a href='/contact' className={props.active===3? styles.light_active : styles.light_link}>Contact</a></li>
                        <li className={styles.light_item}><a className={props.active===4? styles.light_active : styles.light_link} href='/tos'>TOS</a></li>
                        <li className={styles.light_item}><a className={props.active===5? styles.light_active : styles.light_link} href='/careers'>Careers</a></li>
                    </ul>
                    :
                    <ul className={styles.menu_links}>
                        <li className={styles.menu_item}><a className={props.active===1? styles.active_link : styles.link} href='/'>Home</a></li>
                        <li className={styles.menu_item}><a href='/about' className={props.active===2? styles.active_link : styles.link}>About</a></li>
                        <li className={styles.menu_item}><a href='/contact' className={props.active===3? styles.active_link : styles.link}>Contact</a></li>
                        <li className={styles.menu_item}><a className={props.active===4? styles.active_link : styles.link} href='/tos'>TOS</a></li>
                        <li className={styles.menu_item}><a className={props.active===5? styles.active_link : styles.link} href='/careers'>Careers</a></li>
                    </ul>
                }
            </div>
        </>
    );
}

export default Menu