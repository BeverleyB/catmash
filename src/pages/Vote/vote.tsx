import React from 'react';

import Cats from '../../interfaces/cats';
import get_cats_data from '../../services/services';

import './vote.scss';

function Vote() {
	const [_Cats, set_Cats] = React.useState<Cats[]>([]);

	React.useEffect(() => {
		get_pair_of_cats();
	}, []);

	async function get_pair_of_cats() {
		const cats = await get_cats_data();
		if (typeof cats === 'boolean') return;

		const randomCats = [...cats].sort(() => 0.5 - Math.random());
		set_Cats(randomCats.slice(0, 2));
	}


	return (
		<div id="vote">
			{ _Cats.map((cat: Cats) => 
				<img key={cat.id} src={cat.url} alt="Cat" />
			)}
		</div>
	);
}
	
export default Vote;