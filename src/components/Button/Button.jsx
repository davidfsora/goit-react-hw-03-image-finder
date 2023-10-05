import React from 'react';
import styles from "Styles.module.css";

export default function Button({ handleLoadMore, totalHits, perPage, page, loading }) {
	console.log('totalHits%perPage',totalHits%perPage)
	console.log('totalHits%perPage === 0',totalHits%perPage === 0)
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
		}}>
			<button className={`${styles.Button} ${(loading || Math.floor(totalHits/perPage)<page) && styles['is-hidden']}`}
				onClick={handleLoadMore}>Load More
			</button>
		</div>
	);
}