import React from 'react';
import styles from "Styles.module.css";

const ImageGalleryItem = ({ picture, key, handleshowModal, setCurrentPic }) => {
	const handleModalOpen = (picture) => {
		setCurrentPic(picture);
		handleshowModal();
	};

	return (
		<div>
			<li className={styles.ImageGalleryItem} onClick={() => {handleModalOpen(picture)}}>
				<img src={picture.webformatURL} className={styles['ImageGalleryItem-image']} alt={picture.tags} key={key}/>
			</li>			
		</div>
	);
}

export default ImageGalleryItem;
