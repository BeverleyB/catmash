import axios from 'axios';

import Cat from '../interfaces/cats';

export default async function get_cats_data(): Promise<Cat[] | boolean> {
    try {
		const req = await axios.get(`https://data.latelier.co/cats.json`);
		// Add random vote on each cat
		const newReqWithVote = req.data.images.map((cat: Cat) => ({...cat, vote: Math.floor(Math.random() * 1000)}));
		return (newReqWithVote);
	}
	catch (e) {
		console.error('No data founds, please contact support.');
		return (false);
	}
}