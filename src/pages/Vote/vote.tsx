import React from 'react';

import Cats from '../../interfaces/cats';
import get_cats_data from '../../services/services';

function Vote() {
	const [_Cats, set_Cats] = React.useState<Cats[]>([]);


	return (
		<div id="vote">

		</div>
	);
}
	
export default Vote;