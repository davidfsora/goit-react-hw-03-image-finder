import React from 'react';
import styles from "Styles.module.css";
import { ProgressBar } from 'react-loader-spinner'

export default function Loader({ loading }) {
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			height: '100%',
		}} className={`${styles.Loader} ${!loading && styles['is-hidden']}`}>
			<ProgressBar
				height="80"
				width="80"
				ariaLabel="progress-bar-loading"
				wrapperStyle={{}}
				wrapperClass="progress-bar-wrapper"
				borderColor='#303f9f'
				barColor='#51E5FF'
			/>
		</div>
	);
}
