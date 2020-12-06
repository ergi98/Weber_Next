import React from 'react';
import styles from './input.module.css';

function TextField(props) {
    return (
        <div className={styles.input_holder}>
            <textarea 
                name={props.name}
                style={{resize: 'none'}}
                className={`${styles.effect} ${styles.my_textarea}`} 
                rows='4' 
                maxLength='100' 
                required placeholder='Briefly describe what your inquiry is about ...'
                onChange={props.onChange}
            >
            </textarea>
            <span className={styles.focus_border}>
                <i></i>
            </span>
        </div>
    )
}

export default TextField
