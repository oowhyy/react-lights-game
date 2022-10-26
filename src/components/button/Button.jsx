import React from 'react';
import styles from './Button.module.css';

export default function Button({ children, onClick }) {
	return (
		<button className={styles.myButton} onClick={onClick}>{children}</button>
	)
}