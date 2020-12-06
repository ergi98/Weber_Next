import React from 'react';
import styles from './footer.module.css';

function Footer() {
    return (
        <footer className={styles.page_footer}>
            <div className={styles.footer_content}>
                <ul className={styles.footer_list}>
                    <li className={styles.footer_title}>Contact</li>
                    <li className={styles.footer_item}>Phone: <a href='tel:+355206994647'>+355 20 699 4647</a></li>
                    <li className={styles.footer_item}>Email: <a href="mailto: webersoftal@gmail.com">webersoftal@gmail.com</a></li>
                </ul>
                <ul className={styles.footer_list}>
                    <li className={styles.footer_title}>Company</li>
                    <li className={styles.footer_item}><a href='/about'>About</a></li>
                    <li className={styles.footer_item}><a href='/careers'>Careers</a></li>
                    <li className={styles.footer_item}><a href='/privacy'>Privacy</a></li>
                    <li className={styles.footer_item}><a href='/tos'>Terms of Service</a></li>
                </ul>
                <ul className={styles.footer_list}>
                    <li className={styles.footer_title}>Social</li>
                    <ul className={styles.social}>
                        <li className={styles.footer_item}>
                            <a href='https://www.instagram.com/webersoft.al/' target="_blank" rel="noreferrer">
                                <svg xmlns='http://www.w3.org/2000/svg' width='31.518' height='31.51'
                                    viewBox='0 0 31.518 31.51' className={styles.social_icons}>
                                    <path d='M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,
                                        13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,
                                        1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,
                                        0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,
                                        2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,
                                        9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,
                                        0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,
                                        .633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,
                                        5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,
                                        .633,9.288S28.863,25.214,28.041,27.281Z'
                                        transform='translate(0.005 -2.238)' />
                                </svg>
                            </a>
                        </li>
                        <li className={styles.footer_item}>
                            <a href='https://www.facebook.com/webersoft.al' target="_blank" rel="noreferrer">
                                <svg width='34.875' height='34.664' viewBox='0 0 34.875 34.664' className={styles.social_icons}>
                                    <path
                                        d='M35.438,18A17.438,17.438,0,1,0,15.275,35.227V23.041h-4.43V18h4.43V14.158c0-4.37,
                                        2.6-6.784,6.586-6.784a26.836,26.836,0,0,1,3.9.34V12h-2.2a2.52,2.52,0,0,0-2.841,
                                        2.723V18h4.836l-.773,5.041H20.725V35.227A17.444,17.444,0,0,0,35.438,18Z'
                                        transform='translate(-0.563 -0.563)' />
                                </svg>
                            </a>
                        </li>
                        {/* <li className={styles.footer_item}>
                        <a href='./'>
                            <svg width='36' height='29.239' viewBox='0 0 36 29.239' className={styles.social_icons}>
                                <path d='M32.3,10.668c.023.32.023.64.023.959,0,9.754-7.424,20.992-20.992,20.992A20.85,
                                        20.85,0,0,1,0,29.307a15.263,15.263,0,0,0,1.782.091,14.776,14.776,0,0,0,9.16-3.152,
                                        7.391,7.391,0,0,1-6.9-5.117,9.3,9.3,0,0,0,1.393.114,7.8,7.8,0,0,0,1.942-.251,7.379,
                                        7.379,0,0,1-5.916-7.241V13.66A7.431,7.431,0,0,0,4.8,14.6,7.389,7.389,0,0,1,2.513,
                                        4.728a20.972,20.972,0,0,0,15.213,7.721,8.329,8.329,0,0,1-.183-1.69A7.385,7.385,0,0,1,30.312,
                                        5.711a14.526,14.526,0,0,0,4.683-1.782,7.358,7.358,0,0,1-3.244,4.066A14.791,14.791,0,0,0,36,
                                        6.853a15.86,15.86,0,0,1-3.7,3.815Z' transform='translate(0 -3.381)' />
                            </svg>
                        </a>
                    </li> */}
                    </ul>

                </ul>
            </div>
            <div className={styles.signature}>&#169; 2020 - 2024 WEBER, INC.</div>
        </footer>
    )
}

export default Footer
