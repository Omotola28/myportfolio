import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/project/projectAction';
import {saveState, loadState} from '../store/LocalStorage';


class ButtonCount extends React.Component {
	constructor(props) {
		super(props);
		//this.addCountInteraction = this.addCountInteraction.bind(this);
	}

	componentWillMount(){
		let savedCount = loadState();

		this.props.dispatch(actions.storeGameCount(savedCount));
		this.props.dispatch(actions.storeAdCount(savedCount));
	}

    addCountInteraction = (e, btnId) => {
      const count = 1;
      const dataObj = {data: {id: '', photosynthesis: {count: 0}}, id: '', ad: {count: 0}};
      let noOfCount = 0;
      
      switch(btnId) {
        case 'box1':
          noOfCount = this.props.buttonData.photosynthesis.count + count;
          Object.assign(dataObj,{data: {id: btnId, photosynthesis: {count: noOfCount }}});
          this.props.dispatch(actions.storeData(dataObj));
          break;

        case 'box2':
           noOfCount = this.props.buttonData.ad.count + count;
           Object.assign(dataObj, {data: {id: btnId, ad: {counter: noOfCount, count: noOfCount }}});

           this.props.dispatch(actions.storeData(dataObj));
           break;
        case '':
        
        default:
          return null;
      }

     }



     componentWillUpdate(nextProps, nextState){
     	saveState(nextProps);
     }

     

	render() {
	return(
		<div className="clapEffect">
			<div className="clickButton">
				<a className="button" name={this.props.id} onClick={(e) => this.addCountInteraction(e, this.props.id)}><i className="material-icons">thumb_up_alt</i></a>
		    </div>
		    
		</div>
		
	)
		
}

}
function mapStateToProps(state, ownProps) {
  return {
  	buttonData: {
  		photosynthesis:{
  		    counter: state.buttonData.photosynthesis.count,
  		    data: state.buttonData.photosynthesis.data
  		  },
  		ad:{
  		    counter: state.buttonData.ad.count,
  		    data: state.buttonData.ad.data
  	    }
  	}
  	
  }
}
export default connect(mapStateToProps)(ButtonCount)

