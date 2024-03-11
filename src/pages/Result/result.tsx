import React from 'react';

import Cats from '../../interfaces/cats';
import get_cats_data from '../../services/services';

function Result() {
	const [_Cats, set_Cats] = React.useState<Cats[]>([]);

	React.useEffect(() => {
		async function get_all_cats() {
			const cats = await get_cats_data();
			if (typeof cats !== 'boolean') set_Cats(cats);
		}

		get_all_cats();
	}, []);

	return (
		<div id="result">
			{ _Cats.map((cat: Cats) => 
				<img key={cat.id} src={cat.url} alt="Cat" />
			)}
		</div>
	);
}
	
export default Result;