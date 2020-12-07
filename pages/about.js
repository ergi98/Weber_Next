import Head from 'next/head';
import styles from '../styles/about.module.css';

// Components
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

export default function About() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="../favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="google-site-verification" content="WOGUalplDuCjzI9CkM7nSUnHMFJrmYUinVYK_nM5NeY" />
                <link rel="apple-touch-icon" href="../apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png" />
                <link rel="manifest" href="../manifest.json" />
                <title>About Weber</title>
            </Head>

            <main className={styles.minify}>
                <div className={styles.header_div}>
                    <a href='/' className={styles.logo_holder}>
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
                    <Menu active={2} />
                </div>
                <div className={styles.title_holder}>
                    <h5 className={styles.small_title}>OUR SERVICES</h5>
                    <h2 className={styles.big_title}>All challenges accepted.</h2>
                </div>

                <ul className={styles.offer_list}>
                    <li className={styles.offer}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" className={styles.offer_svg}>
                            <defs />
                            <path fill="none" stroke="#306385" strokeMiterlimit="10" strokeWidth="4" d="M120 110c0 2.2-1.8 4-4 4H35c-2.2 0-4-1.8-4-4V42c0-2.2 1.8-4 4-4h81c2.2 0 4 1.8 4 4v68z" />
                            <path fill="#306385" d="M38 63h30v44H38z" />
                            <path fill="none" stroke="#306385" strokeMiterlimit="10" strokeWidth="3" d="M48.5 51c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5 4.5 2 4.5 4.5z" />
                            <path fill="#306385" d="M74 63h39v19H74zM74 89h16v18H74z" />
                            <path fill="none" stroke="#306385" strokeMiterlimit="10" strokeWidth="3" d="M111.5 54c0 .3-.2.5-.5.5H58c-.3 0-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5h53c.3 0 .5.2.5.5v6z" />
                            <path fill="#306385" d="M96 89h17v18H96z" />
                        </svg>
                        <h3 className={styles.offer_title}>Web & Interactive Design</h3>
                        <p className={styles.offer_p}>
                            The most impressive websites and app experiences are
                            rooted in smart design, embody clear vision,
                            and are backed by the right technology.
                    </p>
                        <ul className={styles.mini_list}>
                            <li>Website Design</li>
                            <li>Website Application Design</li>
                            <li>Search Optimization (SEO)</li>
                        </ul>
                    </li>
                    <li className={styles.offer}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" className={styles.offer_svg}>
                            <defs />
                            <path fill="#badff8" d="M104.9 66.4c-2.4 10.1-9.8 18.2-19.5 21.5.5 2.2.8 4.6.8 7 0 9.2-4.1 17.4-10.6 22.9 5.2 4.5 12 7.2 19.5 7.2 16.6 0 30.1-13.5 30.1-30.1 0-13.2-8.5-24.4-20.3-28.5zM75.6 71.9c-4.8 4.1-8.3 9.6-9.8 16 3.1 1.1 6.4 1.6 9.8 1.6 3.4 0 6.7-.6 9.8-1.6-1.5-6.3-5-11.9-9.8-16z" />
                            <circle cx="56.1" cy="94.9" r="30.1" fill="none" stroke="#306385" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" />
                            <circle cx="95.1" cy="94.9" r="30.1" fill="none" stroke="#306385" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" />
                            <circle cx="75.6" cy="59.5" r="30.1" fill="none" stroke="#306385" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" />
                            <path fill="none" stroke="#306385" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M26 94.9l22.4-22.5M27.7 105l25.4-25.4M31.8 112.7l27.8-27.8M37.7 118.7l27.5-27.5M45.3 122.9l20.6-20.6M55 125l14.4-14.4" />
                        </svg>
                        <h3 className={styles.offer_title}>Branding & Strategy</h3>
                        <p className={styles.offer_p}>
                            How do your customers see you? How do you see yourself?
                            We’re experts in deftly focusing, aligning and advancing those perceptions.
                    </p>
                        <ul className={styles.mini_list}>
                            <li>Brand Positioning</li>
                            <li>Logo & Identity Systems</li>
                            <li>Naming</li>
                            <li>Social Media Strategy</li>
                        </ul>
                    </li>
                    <li className={styles.offer}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" className={styles.offer_svg}>
                            <defs />
                            <path fill="none" stroke="#306385" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M83 77H50l.1-16h33zM83 106H50l.1-16h33zM129.9 106H97l.1-16H130zM77.1 36.5L66.6 46.9 56.1 36.5 66.6 26zM67 46v14M48 69H26v29h23M84 98h13M84 69h12M110 69.5c0 3.6-2.9 6.5-6.5 6.5S97 73.1 97 69.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5zM67 107v12M66.5 133c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z" />
                            <path fill="none" stroke="#badff8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M60 69h13M60 98h13M107 98h14" />
                        </svg>
                        <h3 className={styles.offer_title}>Web Development</h3>
                        <p className={styles.offer_p}>
                            Best-in-class digital projects require technology that perfectly supports the design.
                            We rely on the right tools for the job, not a one-size-fits-all tech stack.
                    </p>
                        <ul className={styles.mini_list}>
                            <li>Front and Backend Web Development</li>
                            <li>API Integrations</li>
                            <li>Shopping & E-Commerce Integration</li>
                            <li>Content Management Systems (CMS)</li>
                            <li>WordPress</li>
                            <li>Node.js</li>
                        </ul>
                    </li>
                </ul>

                <div className={styles.teamwork_holder}>
                    <div className={styles.dark_bg}>
                        <h5 className={styles.teamwork_title}>WORKING WITH US</h5>
                        <h2 className={styles.teamwork_big_title}>Teamwork as an artform.</h2>
                        <p className={styles.teamwork_p}>
                            Weber Company is an experienced and passionate group of designers, developers, project managers, writers and artists.
                            Every client we work with becomes a part of the team. Together we face the challenges and celebrate the victories.
                    </p>
                    </div>
                </div>

                <ul className={styles.our_values}>
                    <li className={styles.value}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 225" className={styles.offer_svg}>
                            <defs />
                            <g fill="#badff8">
                                <path d="M42.2 85.5c-.9 0-1.7.2-2.5.5v-.8c0-6.2-5-11.2-11.2-11.2-5.2 0-9.6 3.5-10.8 8.4-1.2-.6-2.5-.9-4-.9-5.1 0-9.2 4.1-9.2 9.2s4.1 9.2 9.2 9.2h28.5c3.9 0 7.1-3.2 7.1-7.1 0-4.1-3.2-7.3-7.1-7.3zM91.8 97.5c-.6 0-1.1.1-1.6.3v-.5c0-3.9-3.2-7.1-7.1-7.1-3.3 0-6.1 2.2-6.8 5.3-.8-.4-1.6-.6-2.5-.6-3.2 0-5.8 2.6-5.8 5.8 0 3.2 2.6 5.8 5.8 5.8h18c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5zM166.6 85.5c-.9 0-1.7.2-2.5.5v-.8c0-6.2-5-11.2-11.2-11.2-5.2 0-9.6 3.5-10.8 8.4-1.2-.6-2.5-.9-4-.9-5.1 0-9.2 4.1-9.2 9.2s4.1 9.2 9.2 9.2h28.5c3.9 0 7.1-3.2 7.1-7.1.1-4.1-3.1-7.3-7.1-7.3zM216.2 97.5c-.6 0-1.1.1-1.6.3v-.5c0-3.9-3.2-7.1-7.1-7.1-3.3 0-6.1 2.2-6.8 5.3-.8-.4-1.6-.6-2.5-.6-3.2 0-5.8 2.6-5.8 5.8 0 3.2 2.6 5.8 5.8 5.8h18c2.5 0 4.5-2 4.5-4.5.1-2.5-2-4.5-4.5-4.5z" />
                            </g>
                            <path fill="#FFF" d="M0 0v225h225V0H0zm182 144.7c0 8.4-6.9 15.3-15.3 15.3H58.3c-8.4 0-15.3-6.9-15.3-15.3V74.3C43 65.9 49.9 59 58.3 59h108.4c8.4 0 15.3 6.9 15.3 15.3v70.4z" />
                            <path fill="#badff8" d="M112.9 119.4c-23.7 0-46.9 2.4-69.3 6.9v17.4c0 8.4 6.9 15.3 15.3 15.3h108.9c8.4 0 15.3-6.9 15.3-15.3v-17.2c-22.7-4.7-46.2-7.1-70.2-7.1z" />
                            <path fill="none" stroke="#306385" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5" d="M182.5 144.2c0 8.4-6.9 15.3-15.3 15.3H58.8c-8.4 0-15.3-6.9-15.3-15.3V73.8c0-8.4 6.9-15.3 15.3-15.3h108.4c8.4 0 15.3 6.9 15.3 15.3v70.4z" />
                            <path fill="none" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5" d="M35 109.5h15M112.5 50v15" />
                            <path fill="none" stroke="#badff8" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5" d="M112.5 156v6" />
                            <path fill="none" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5" d="M189 109.5h-15" />
                            <path fill="#badff8" d="M70.3 157c0 12 0 16-8 21.3 14.6.5 26.7-8 26.7-21.3v-8H70l.3 8z" />
                            <path fill="none" stroke="#306385" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5" d="M89 157c0 13.3-12.1 21.8-26.7 21.3 8-5.3 8-9.3 8-21.3" />
                        </svg>
                        <div>
                            <h3 className={styles.offer_title}>Honestly Open.</h3>
                            <h5 className={styles.offer_desc}>Transparent Communication</h5>
                            <p className={styles.offer_p}>
                                How do your customers see you? How do you see yourself?
                                We’re experts in deftly focusing, aligning and advancing those perceptions.
                        </p>
                        </div>
                    </li>
                    <li className={styles.value}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 225" className={styles.offer_svg}>
                            <defs />
                            <path fill="none" stroke="#306385" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5" d="M183.4 63.8v106.3l-47.6-14.6-47.6 14.6-47.6-14.6V49.2l47.6 14.6 47.6-14.6 47.6 14.6" />
                            <path fill="#badff8" d="M54.4 145.3V67.9l33.8 10.4 47.6-14.6L169.6 74v77.4L135.8 141l-47.6 14.6z" />
                            <path fill="none" stroke="#FFF" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" d="M88.5 57v121M135.5 42v121" />
                            <g>
                                <path fill="none" stroke="#306385" strokeDasharray="7.2 3.6" strokeMiterlimit="10" strokeWidth="3.6" d="M64.3 102.9c2.8 13.6 8.3 34.4 23.4 35.1 19.8.9 28.8-51.3 48.6-51.3s24.3 22.5 27 33.3" />
                            </g>
                            <g>
                                <path fill="#FFF" d="M67.9 89.8c0-4.2-3.4-7.7-7.7-7.7s-7.7 3.4-7.7 7.7c0 4.2 3.4 7.7 7.7 7.7s7.7-3.4 7.7-7.7z" />
                                <path fill="none" stroke="#306385" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" d="M67.9 89.8c0-4.2-3.4-7.7-7.7-7.7s-7.7 3.4-7.7 7.7c0 4.2 3.4 7.7 7.7 7.7s7.7-3.4 7.7-7.7z" />
                            </g>
                            <g fill="#306385" stroke="#306385" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5">
                                <path d="M157.9 124.9L171 138M171 124.9L157.9 138" />
                            </g>
                        </svg>
                        <div>
                            <h3 className={styles.offer_title}>World's best guide.</h3>
                            <h5 className={styles.offer_desc}>Your Project Manager</h5>
                            <p className={styles.offer_p}>
                                Every project with Weber is assigned a dedicated project manager.
                                Your project manager is your direct line to Weber, ensuring that you always know what’s going on,
                                what’s next, and what we need from you.
                                An expert in putting out fires (and lighting fires under people, occasionally).
                        </p>
                        </div>
                    </li>
                    <li className={styles.value}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 225" className={styles.offer_svg}>
                            <defs />
                            <path fill="none" stroke="#306385" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" d="M115.3 28.5c44 1.4 79.8 37.2 81.2 81.2 1.6 48.6-38.2 88.3-86.7 86.7-44-1.4-79.8-37.2-81.2-81.2C27 66.7 66.7 27 115.3 28.5" />
                            <circle cx="112.5" cy="112.5" r="111.5" fill="none" />
                            <path fill="#FFF" d="M136.1 195.9c0-13.1-10.7-23.8-23.8-23.8s-23.8 10.7-23.8 23.8c0 13.1 10.7 23.8 23.8 23.8s23.8-10.7 23.8-23.8z" />
                            <path fill="#306385" d="M120 185c.5 0 1 .5 1 1v20c0 .5-.5 1-1 1h-15c-.5 0-1-.5-1-1v-20c0-.5.5-1 1-1h15m0-3h-15c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h15c2.2 0 4-1.8 4-4v-20c0-2.2-1.8-4-4-4z" />
                            <path fill="none" stroke="#306385" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M108 190h7M108 194h9M108 198h7M108 202h9" />
                            <g>
                                <path fill="#FFF" d="M203.1 60.1c0-13.7-11.2-25-25-25-13.7 0-25 11.2-25 25s11.2 25 25 25 25-11.3 25-25z" />
                                <path fill="#306385" d="M178 52c1.3 0 2.7.7 2.9 1 1.6 2.6 5.2 4 8.1 4h1c.5 0 1 .5 1 1v13c0 .5-.5 1-1 1h-23c-.5 0-1-.5-1-1V58c0-.5.5-1 1-1 2.8 0 6.5-1.4 8.1-3.9.2-.4 1.6-1.1 2.9-1.1m0-3c-2.2 0-4.7 1.1-5.5 2.5S169.2 54 167 54s-4 1.8-4 4v13c0 2.2 1.8 4 4 4h23c2.2 0 4-1.8 4-4V58c0-2.2-1.8-4-4-4h-1c-2.2 0-4.7-1.1-5.5-2.5S180.2 49 178 49z" />
                                <path fill="#306385" d="M178.5 60c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5m0-2c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zM168 59h3v3h-3z" />
                                <path fill="none" stroke="#306385" strokeMiterlimit="10" strokeWidth="2" d="M171 49l-4-4M185 49l4-4M178 47v-6" />
                            </g>
                            <g>
                                <path fill="#FFF" d="M51.6 103.3c0-13.1-10.7-23.8-23.8-23.8S4 90.3 4 103.3s10.7 23.8 23.8 23.8 23.8-10.7 23.8-23.8z" />
                                <path fill="#306385" d="M37 96c.5 0 1 .5 1 1v13c0 .5-.5 1-1 1H17c-.5 0-1-.5-1-1V97c0-.5.5-1 1-1h20m0-3H17c-2.2 0-4 1.8-4 4v13c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4V97c0-2.2-1.8-4-4-4z" />
                                <path fill="#306385" d="M43 99h-2.6v2H42v4h-1.6v2H43c0-.6.4-1 1-1v-6c-.6 0-1-.4-1-1z" />
                                <path fill="none" stroke="#306385" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M43 100l4-2v10l-4-2" />
                                <path fill="#306385" d="M27 108h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1zm-6-2h5v-5h-5v5z" />
                                <path fill="none" stroke="#306385" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M30 100h4M30 103h4" />
                            </g>
                            <g>
                                <path fill="#badff8" stroke="#306385" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" d="M114.3 58.4c28.3.9 51.4 24 52.3 52.3 1 31.3-24.6 56.9-55.9 55.9-28.3-.9-51.4-24-52.3-52.3-1-31.3 24.6-56.9 55.9-55.9" />
                            </g>
                            <g>
                                <circle cx="112.5" cy="112.5" r="65.5" fill="none" />
                                <path fill="#FFF" d="M163.7 141.9c0-4.2-3.4-7.6-7.7-7.6s-7.6 3.4-7.6 7.6c0 4.2 3.4 7.7 7.6 7.7s7.7-3.5 7.7-7.7zM109.3 59.6c0-4.2-3.4-7.6-7.7-7.6-4.2 0-7.7 3.4-7.7 7.6s3.4 7.6 7.7 7.6c4.2 0 7.7-3.4 7.7-7.6z" />
                                <path fill="none" stroke="#306385" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" d="M163.7 141.9c0-4.2-3.4-7.6-7.7-7.6s-7.6 3.4-7.6 7.6c0 4.2 3.4 7.7 7.6 7.7s7.7-3.5 7.7-7.7zM109.3 59.6c0-4.2-3.4-7.6-7.7-7.6-4.2 0-7.7 3.4-7.7 7.6s3.4 7.6 7.7 7.6c4.2 0 7.7-3.4 7.7-7.6z" />
                            </g>
                        </svg>
                        <div>
                            <h3 className={styles.offer_title}>A thriving partner ecosystem.</h3>
                            <h5 className={styles.offer_desc}>Built to Expand</h5>
                            <p className={styles.offer_p}>
                                Every project has its own unique goals and vision.
                                Whatever your project demands, our extended network of strategists,
                                creatives and technology specialists is always eager to pitch in.
                                We know it helps to know good people.
                        </p>
                        </div>
                    </li>
                </ul>
                <Footer />
            </main>
        </>
    )
}
