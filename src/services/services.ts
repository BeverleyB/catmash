import axios from 'axios';

import Cats from '../interfaces/cats';

export default async function get_cats_data(): Promise<Cats[] | boolean> {
    try {
		const req = await axios.get(`https://data.latelier.co/cats.json`);
		return (req.data.images);
	}
	catch (e) {
		return (false);
	}
}