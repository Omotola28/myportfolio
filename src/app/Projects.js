import React from 'react';
import './project/Project.css';
//import PageHeader from './../components/PageHeader';
//import PageContent from './../components/PageContent';
import GameImage from './../components/resources/videogame.gif';
import Website from './../components/resources/website.gif';
//import ButtonCount from './ButtonCount';
//import { loadState } from '../store/LocalStorage';
//import { connect } from 'react-redux';
import FlutterApp from './../components/resources/hmq.webp'
import ComingSoon from './../components/resources/coming-soon.png'

class Projects extends React.Component {
   
    render() {
        return (
            <div className="grid-container">
                <div className="year1 animate__animated animate__fadeIn year-banner">
                    <p>Projects 2019-2020</p>
                </div>
                <div className="appHmq">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title has-text-left">Hightlight My Quotes - App</p>
                            <p className="subtitle has-text-justified">This project used the language
                            Dart, the Flutter UI kit and Firebase to build an application that aims to 
                            allow users do more with their highlights. How many times do you remember 
                            the key take aways from books you have read? The tool helps with syncing in you highlights, categorising them and finally resurfacing the highlights at varied intervals </p>
                            <figure className="image is-4by3">
                                <img id="app-gif" alt='Flutter App' src={FlutterApp} />
                            </figure>
                            <footer className="card-footer">
                                <div className="card-footer-item">
                                    <a href="https://github.com/Omotola28/reading_retention_tool" target='_blank' rel='noopener noreferrer' className="button is-medium">
                                        <span className="icon is-medium">
                                            <i className="fa fa-github"></i>
                                        </span>
                                        <span>GitHub</span>
                                    </a>
                                </div>
                                <div className="card-footer-item">
                                    <a href="https://www.youtube.com/watch?v=OZBNmJ5tS0A&feature=youtu.be" target='_blank' rel='noopener noreferrer' className="button is-medium">
                                        <span className="icon is-medium">
                                            <i className="fa fa-youtube"></i>
                                        </span>
                                        <span>Watch Demo</span>
                                    </a>
                                </div>  
                                <div className="card-footer-item">
                                    <a href="https://play.google.com/store/apps/details?id=com.oshogunle.reading_retention_tool" target='_blank' rel='noopener noreferrer' className="button is-medium">
                                        <span className="icon is-medium">
                                            <i className="fa fa-android"></i>
                                        </span>
                                        <span>Android</span>
                                    </a>
                                </div>   
                                <div className="card-footer-item">
                                    <a href="https://blog.oshogunle.com/how-i-built-my-first-flutter-app-highlightmyquotes-ckcgu968y002xvrs1b7waavi5" target='_blank' rel='noopener noreferrer' className="button is-medium">
                                        <span className="icon is-medium">
                                            <i className="fa fa-pencil"></i>
                                        </span>
                                        <span>Blog Post</span>
                                    </a>
                                </div>           
                            </footer>
                        </article>
                    </div>
                </div>
                <div className="moreComing">
                <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title has-text-left">Working on more projects</p>
                            <p className="subtitle has-text-justified">Coming soon...... </p>
                            <figure className="image is-4by3">
                                <img alt='Flutter App' src={ComingSoon} />
                            </figure>
                        </article>
                    </div>
                </div>
                <div className="year0 animate__animated animate__fadeIn year-banner">
                    <p>Projects 2017-2018</p>
                </div>
                <div className="gameJava">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title has-text-left">Photosynthesis Game</p>
                            <p className="subtitle has-text-justified">This was an assignment given to build a game to teach primary school kids
                                    an science related topic. The came was built with Java, JavaFX, using design patterns like Factory,
                                Command, Delegation etc. </p>
                            <figure className="image is-4by3">
                                <img alt='Photosynthesis game' src={GameImage} />
                            </figure>
                            <footer className="card-footer">
                                <div className="card-footer-item">
                                    <a href="https://github.com/Omotola28/Photosynthesis-Game" target='_blank' rel='noopener noreferrer' className="button is-medium">
                                        <span className="icon is-medium">
                                            <i className="fa fa-github"></i>
                                        </span>
                                        <span>GitHub</span>
                                    </a>
                                </div>
                                {/* <div className="card-footer-item">
                                            <div className="clapEffect">
                                                <span>{this.props.buttonData.photosynthesis.counter}</span>
                                                <ButtonCount id={'box1'} />
                                            </div>
                                </div>  */}           
                            </footer>
                        </article>
                    </div>
                </div>
                <div className="adWeb">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title has-text-left">Advertisement Website</p>
                            <p className="subtitle has-text-justified">This website was built using HTML&CSS , Javascript and PHP. It is an advertisement website,
                             where users can register and upload their products for other users to purchase. Second year client server course work</p>
                            <figure className="image">
                                <img alt="Website gif" src={Website} />
                            </figure>
                            <footer className="card-footer">
                                <div className="card-footer-item">
                                    <a href="https://github.com/Omotola28/Advertisement-Website" target='_blank' rel='noopener noreferrer' className="button is-medium">
                                        <span className="icon is-medium">
                                            <i className="fa fa-github"></i>
                                        </span>
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </footer>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects