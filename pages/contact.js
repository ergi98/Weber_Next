import { useState } from 'react';

import Head from 'next/head';
import styles from '../styles/contact.module.css';

// Axios
import axios from 'axios';

// Forms
import { Formik, ErrorMessage } from 'formik';

// Components
import InputField from '../components/fields/InputField';
import TextField from '../components/fields/TextField';
import Menu from '../components/menu/Menu';

export default function About() {

    let yup = require('yup')

    // Establish the validation schema
    const schema = yup.object({
        name: yup.string().required("Field is required!"),
        email: yup.string().required("Field is required!").matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, { message: "Format: foo@foo.foo" }),
        tel: yup.string().required("Field is required!").matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, { message: "Format: +xxx xx xxx xxxx" }),
        desc: yup.string().required("Field is required!")
    })

    const [success, setSuccess] = useState(false);

    async function sendInquiry(event) {

        let date = new Date().toUTCString();

        let inquiry = {
            date: date,
            name: event.name,
            tel: event.tel,
            email: event.email,
            desc: event.desc
        };

        try {
            await axios.post(`/api/inquiries`, { inquiry });
            // Display success message
            setSuccess(true);

        }
        catch (err) {
            // To display error message
            setSuccess(false);
        }
    }

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="../favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="google-site-verification" content="WOGUalplDuCjzI9CkM7nSUnHMFJrmYUinVYK_nM5NeY" />
                <meta
                    name="description"
                    content="Get in touch and give your business the website it deserves!"
                />
                <link rel="apple-touch-icon" href="../apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png" />
                <link rel="manifest" href="../manifest.json" />
                <title>Contact Weber</title>
            </Head>

            <main className={styles.no_scroll}>
                <img src='../assets/blobs/blob_1.svg' className={styles.hidden_blob} alt='' />
                <div className={styles.shrink}>
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
                        <Menu active={3} />
                    </div>

                    <div className={styles.row_display}>
                        <div className={styles.inquiries_section}>
                            <h1 className={styles.inquiry_title}>Business Inquiries?</h1>
                            <p className={styles.inquiry_p}>
                                Fill in the form and our staff will
                                get right back to you.
                    </p>
                        </div>
                        <div className={styles.contact_holder}>
                            <img src='../assets/blobs/blob_1.svg' className={styles.contact_blob} alt='' />
                            <div className={styles.contact_div}>
                                <img src='../assets/illustrations/contact_girl.svg' className={styles.contact_girl} alt='' />
                                {
                                    success ?
                                        <div className={styles.success_div}>
                                            <img src='../assets/illustrations/success_girl.svg' alt='' className={styles.success_girl} />
                                            <h3 className={styles.success_title}>Inquiry Sent!</h3>
                                            <p className={styles.success_p}>
                                                Thank you for getting in touch. We are looking forward to working with you!
                                        </p>
                                        </div>
                                        :
                                        <Formik
                                            initialValues={{
                                                name: '',
                                                tel: '',
                                                email: '',
                                                desc: ''
                                            }}
                                            validationSchema={schema}
                                            onSubmit={sendInquiry}
                                        >
                                            {({
                                                handleChange,
                                                handleSubmit,
                                                isSubmitting,
                                            }) => (
                                                    <form onSubmit={handleSubmit} noValidate>
                                                        <div className={styles.relative_holder}>
                                                            <InputField
                                                                type='text'
                                                                name='name'
                                                                placeholder='Full Name'
                                                                inputmode='text'
                                                                onChange={handleChange}
                                                            />
                                                            <ErrorMessage name="name" component="div" className={styles.error_message} />
                                                        </div>
                                                        <div className={styles.relative_holder}>
                                                            <InputField
                                                                type='tel'
                                                                name='tel'
                                                                placeholder='Phone Number'
                                                                inputmode='tel'
                                                                onChange={handleChange}
                                                            />
                                                            <ErrorMessage name="tel" component="div" className={styles.error_message} />
                                                        </div>
                                                        <div className={styles.relative_holder}>
                                                            <InputField
                                                                type='email'
                                                                name='email'
                                                                placeholder='Email'
                                                                inputmode='email'
                                                                onChange={handleChange}
                                                            />
                                                            <ErrorMessage name="email" component="div" className={styles.error_message} />
                                                        </div>
                                                        <div className={styles.relative_holder}>
                                                            <TextField onChange={handleChange} name='desc' />
                                                            <ErrorMessage name="email" component="div" className={styles.error_message} />
                                                        </div>
                                                        <button type='submit' className={styles.submit_button} disabled={isSubmitting}>
                                                            {
                                                                isSubmitting ?
                                                                    <div className='small_loader'></div>
                                                                    :
                                                                    'SEND'
                                                            }
                                                        </button>
                                                    </form>
                                                )}
                                        </Formik>
                                }
                            </div>
                        </div>

                        <div className={styles.other_options}>
                            <div className={styles.or_div}>
                                <div className={styles.line}></div>
                                <label className={styles.or_label}>OR</label>
                                <div className={styles.line}></div>
                            </div>

                            <p className={styles.email_p}>
                                Send us an email at
                        <a href='mailto:webersoftal@gmail.com' className={styles.email_link}> webersoftal@gmail.com</a>.
                    </p>

                            <div className={styles.urgent_div}>
                                <h2 className={styles.urgent_title}>Urgent matter?</h2>
                                <p className={styles.urgent_p}>
                                    Dial our client support number for any issues or questions you may have.
                        </p>
                                <div className={styles.support}>
                                    <label className={styles.client_title}>Client Support</label>
                                    <a href='tel:+355676993783' className={styles.phone_link}>+355 67 699 3783</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src='../assets/blobs/blob_1.svg' className={styles.second_blob} alt='' />
                </div>
            </main>
        </>
    )
}
