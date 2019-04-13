import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Site from './layout/Site';
import Navigation from './layout/Navigation';
import Router from './layout/Router';
import Content from './layout/Content';

const Layout = ({ children }) => (
	<Site id="landscapeView">
		<Helmet
            title="Omotola Shogunle portfolio"
            meta={[
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no' },
              { name: 'theme-color', content: 'yellow, gray and black' },
              { name: 'Omotola Shogunle', content: 'Omotola Shogunle\'s personal wedsite, portfolio, blog, tutorials on all things programming languages,concepts'},
              { name: 'languages', content: 'html, css, python, JavaScript, react' },
              { name: 'p:domain_verify', content: 'b0b7327bfec7351bd84907ea143b002ch' },
            ]}
            script={[
              { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
            ]}
            link={[
              {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
              {'rel':'manifest', 'href': '%PUBLIC_URL%/manifest.json'},
              {'rel':'stylesheet', 'href': 'https://fonts.googleapis.com/icon?family=Material+Icons'},
              {'rel':'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=La+Belle+Aurore'},
              {'rel':'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Oswald'}
            ]}
    />
		<Navigation />
		<Content>
		  <Router/>
		</Content>
    </Site>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;












