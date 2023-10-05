import React from 'react';
import styles from "Styles.module.css";

const ImageGallery = ({ children }) => {
	return (
		<div>
			<ul className={styles.ImageGallery}>
				{children}
			</ul>			
		</div>
	);
}

export default ImageGallery;
