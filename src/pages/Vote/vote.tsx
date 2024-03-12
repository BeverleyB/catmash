import React from 'react';

import Cat from '../../interfaces/cats';
import get_cats_data from '../../services/services';

import './vote.scss';

function Vote() {
	const [_Cats, set_Cats] = React.useState<Cat[]>([]);

	React.useEffect(() => {
		get_pair_of_cats();
	}, []);

	async function get_pair_of_cats() {
		const cats = await get_cats_data();
		if (typeof cats === 'boolean') return;

		const randomCats = [...cats].sort(() => 0.5 - Math.random());
		set_Cats(randomCats.slice(0, 2));
	}

	function vote_for_cute_cat(cat: Cat) {
		// Increase the vote number by 1 in the imaginary db :)
		set_Cats(_Cats.map(newCat => {
			return newCat.id === cat.id ? { ...newCat, vote: newCat.vote += 1 } : newCat;
		}));

		get_pair_of_cats();
	}

	return (
		<div id="vote">
			{ _Cats.map((cat: Cat, index: number) => 
				<img key={cat.id} src={cat.url} alt="Cat" onClick={() => vote_for_cute_cat(cat)}/>
			)}
		</div>
	);
}
	
export default Vote;