import React from 'react';
import './style.css';
import styles from './custom.module.css'

const ital = {
    fontStyle: 'italic'
};

export const Styled = (props) => {

    let color = props.red ? 'red' : '';

    return (
        <div className={` ${color} lg-font ${styles.bold} `} style={ital}>
            I am Styled Text!
        </div>
    )
}

export default Styled