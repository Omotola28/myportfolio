import React from 'react';
import PageHeader from './../components/PageHeader';
import PageContent from './../components/PageContent';
import GameImage from './../components/resources/videogame.gif';

class Projects extends React.Component {

  render() {
    return (
      <div>
         <PageHeader color="hero is-small" title="Projects Page" addonText="Growing one project at a time"></PageHeader>
         <PageContent className="scrollBar">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-vertical is-parent">
                    <article className="tile is-child box">
                             <p className="title has-text-left">Photosynthesis Game</p>
                             <p className="subtitle has-text-justified">This was an assignment given to build a game to teach primary school kids 
                             an science related topic. The came was built with Java, JavaFX, using design patterns like Factory,
                             Command, Delegation etc. </p>
                             <figure className="image is-4by3">
                               <img src={GameImage}/>
                             </figure>
                             <footer className="card-footer">
                                <p className="card-footer-item">
                                  <a href="https://github.com/Omotola28/Photosynthesis-Game" target='_blank' rel='noopener' className="button is-medium">
                                     <span className="icon is-medium">
                                       <i className="fab fa-github"></i>
                                     </span>
                                     <span>GitHub</span>
                                   </a>
                                </p>
                                <p className="card-footer-item">
                                  <span>
                                    <i className="material-icons">
                                    thumb_up
                                    </i>
                                  </span>
                                </p>
                              </footer>
                     </article>
                     <div className="tile is-child box">
                         <p className="title">Two</p>
                     </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child box">
                        <p className="title">Three</p>
                    </div>
                  </div>
              </div>
         </PageContent>
      </div>
    )
  }
}
export default Projects