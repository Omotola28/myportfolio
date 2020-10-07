import React from 'react';

import Site from './layout/Site';
import Navigation from './layout/Navigation';
import RouterBox from './layout/RouterBox';

const Layout = () => (
	<Site>
		<RouterBox>
			<Navigation />
		</RouterBox>
    </Site>
)

export default Layout;