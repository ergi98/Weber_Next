import React from 'react';
import styles from './input.module.css';

function InputField(props) {
    return (
        <div className={styles.input_holder}>
            <input 
              name={props.name}
              className={`${styles.effect} ${styles.my_input}`} 
              type={props.type} 
              placeholder={props.placeholder} 
              autoComplete='new-password'
              inputMode={props.inputmode}
              required
              onChange={props.onChange}
            />
            <span className={styles.focus_border}>
              <i></i>
            </span>
        </div>
    )
}

export default InputField
