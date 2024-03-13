import React from 'react';

import Cat from '../../interfaces/cats';
import get_cats_data from '../../services/services';

import './result.scss';

function Result() {
	const [_Cats, set_Cats] = React.useState<Cat[]>([]);
	const [_CatsToShow, set_CatsItemsToShow] = React.useState<number>(3);

	React.useEffect(() => {
		get_all_cats();
	}, []);

	async function get_all_cats() {
		const cats = await get_cats_data();
		if (typeof cats !== 'boolean') {
			// Sort array by vote
			cats.sort((a, b) => b.vote - a.vote);
			set_Cats(cats);
		}
	}

	return (
		<div id="result">

			<div className="container-logo">
				<div className="logo" />
				<h1>Le podium</h1>
			</div>


			{ _Cats.slice(0, _CatsToShow).map((cat: Cat, index: number) => 
				<div className="container-cat" key={cat.id}>
					<h2 className="ranked">#{index + 1}</h2>
					<img className='cat-pic' src={cat.url} alt="Cat" />
					<div className="number-vote">{cat.vote} vote{cat.vote > 1 ? 's': ''}</div>
				</div>
			)}

			{_CatsToShow < _Cats.length && (
				<button onClick={() => set_CatsItemsToShow(_CatsToShow + 10)}>Load More</button>
			)}
		</div>
	);
}
	
export default Result;