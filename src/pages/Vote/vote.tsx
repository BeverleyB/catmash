import React from 'react';
import { useNavigate } from 'react-router-dom';

import Cat from '../../interfaces/cats';
import get_cats_data from '../../services/services';

import './vote.scss';

function Vote() {
	const [_Cats, set_Cats] = React.useState<Cat[]>([]);
	const [_NumberVotes, set_NumberVotes] = React.useState<number>(Math.floor(Math.random() * 5000));

	const navigate = useNavigate();

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
		set_NumberVotes(_NumberVotes + 1)

		get_pair_of_cats();
	}

	return (
		<div id="vote">

			<div className="container-logo">
				<div className="logo" />
				<h1>CATMASH</h1>
			</div>
			

			<div className="cats-pictures">
				{ _Cats.map((cat: Cat) => 
				<div className="img-container" key={cat.id} onClick={() => vote_for_cute_cat(cat)}>
					<img src={cat.url} alt="Cat"/>
				</div>
				)}
			</div>

			<button className="btn" type="button" onClick={() => navigate('/result')}>
				Voir les plus beaux chats <br />
				<span className='vote-result'>{_NumberVotes} votes</span>
			</button>
		</div>
	);
}
	
export default Vote;