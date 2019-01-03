import React from 'react';
import PageHeader from './../components/PageHeader';
import PageContent from './../components/PageContent';
import GameImage from './../components/resources/videogame.gif';
import Website from './../components/resources/website.gif';
import ButtonCount from './ButtonCount';
import {loadState} from '../store/LocalStorage';
import { connect } from 'react-redux';

class Projects extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
         <PageHeader color="hero is-small" title="Projects Page" addonText="Improving one project at a time"></PageHeader>
         <PageContent className="scrollBar projectsBox">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-vertical is-parent">
                    <article className="tile is-child box">
                             <p className="title has-text-left">Photosynthesis Game</p>
                             <p className="subtitle has-text-justified">This was an assignment given to build a game to teach primary school kids 
                             an science related topic. The came was built with Java, JavaFX, using design patterns like Factory,
                             Command, Delegation etc. </p>
                             <figure className="image is-4by3">
                               <img alt='Photosynthesis game' src={GameImage}/>
                             </figure>
                             <footer className="card-footer">
                                <p className="card-footer-item">
                                  <a href="https://github.com/Omotola28/Photosynthesis-Game" target='_blank' rel='noopener noreferrer' className="button is-medium">
                                     <span className="icon is-medium">
                                       <i className="fab fa-github"></i>
                                     </span>
                                     <span>GitHub</span>
                                   </a>
                                </p>

                                <div className="card-footer-item">
                                  <div className="clapEffect">
                                      <span>{this.props.buttonData.photosynthesis.counter}</span>
                                      <ButtonCount id={'box1'}/>
                                  </div>
                                </div>
                              </footer>
                     </article>
                     <div className="tile is-child box">
                         <p className="title">More Projects Loading ..</p>
                     </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                             <p className="title has-text-left">Advertisement Website</p>
                             <p className="subtitle has-text-justified">This website was built using HTML&CSS , Javascript and PHP. It is an advertisement website,
                             where users can register and upload their products for other users to purchase. Second year client server course work</p>
                             <figure className="image">
                               <img alt="Website gif" src={Website}/>
                             </figure>
                             <footer className="card-footer">
                                <p className="card-footer-item">
                                  <a href="https://github.com/Omotola28/Advertisement-Website" target='_blank' rel='noopener noreferrer' className="button is-medium">
                                     <span className="icon is-medium">
                                       <i className="fab fa-github"></i>
                                     </span>
                                     <span>GitHub</span>
                                   </a>
                                </p>
                                <div className="card-footer-item">
                                  <div className="clapEffect">
                                      <span>{this.props.buttonData.ad.counter}</span>
                                      <ButtonCount id={'box2'}/>
                                  </div>
                                </div>
                              </footer>
                     </article>
                  </div>
              </div>
         </PageContent>
      </div>
    )
  }
}
function mapStateToProps(state, ownProps) {
  return {
    buttonData: {
      photosynthesis:{
          counter: state.buttonData.photosynthesis.counter,
          data: state.buttonData.photosynthesis.data
        },
      ad:{
          counter: state.buttonData.ad.counter,
          data: state.buttonData.ad.data
        }
    }
    
  }
}
export default connect(mapStateToProps)(Projects)