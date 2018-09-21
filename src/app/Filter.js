import React from 'react'
//import * as actions from '../store/blog/actions'

class Filter extends React.Component {

	/*handleFilter = (param) => {
		this.props.dispatch(actions.handleFilter(param))
	}*/

	render(props){
			return(
				<div className='level column'>
					<h1 className="title has-text-right level-item">
					   Filter Post
					</h1>	
					<div className="tags has-addons level-item">
						<a onClick={() => this.props.handleFilter('')}>
							<span className="tag is-large">Category</span>
							<span className="tag is-dark is-large">All</span>
						</a>
					</div>
					<div className="tags has-addons level-item">
					  <a onClick={() => this.props.handleFilter('Life')}>
						  <span className="tag is-large">Category</span>
						  <span className="tag is-warning is-large">Life</span>
					  </a>
					</div>
					<div className="tags has-addons level-item">
						<a onClick={() => this.props.handleFilter('Rants')}>
							<span className="tag is-large">Category</span>
							<span className="tag is-danger is-large">Rants</span>
						</a>
					</div>
					<div className="tags has-addons level-item">
					  <a onClick={() => this.props.handleFilter('Learn')}>
					  	<span className="tag is-large">Category</span>
					  	<span className="tag is-success is-large">Learn</span>
					  </a>
					</div>
					<div className="tags has-addons level-item">
						<a onClick={() => this.props.handleFilter('Relationships')}>
							<span className="tag is-large">Category</span>
							<span className="tag is-link is-large">Relationships</span>
						</a>
					</div>
				</div>
		  	)
	}
	
 
}
export default Filter

