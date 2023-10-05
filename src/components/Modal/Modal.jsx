import React from 'react';
import styles from "Styles.module.css";

export default function Modal({ showModal, handleCloseModal, currentPic }) {
	return (
		<div>
			<div className={`${styles.Overlay} ${!showModal && styles['is-hidden']}`}
				data-modal
				onClick={handleCloseModal}>
				<div className={styles.Modal}>
					<img src={currentPic.largeImageURL} alt="" />
				</div>
			</div>
		</div>
	);
}

