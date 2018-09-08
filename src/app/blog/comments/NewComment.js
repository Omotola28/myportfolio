import React from 'react';

const NewComment = () => {
         console.log(this.props);
        return (
          <div className="tile">
              <div className="tile is-parent notification is-vertical is-warning">
                  <div className="level">
                    <i className="material-icons">face</i>
                  </div>
                  <div className="level-item">
                    <a href="#0" data-username="cathbailh" className="comment-username">
                        <span className="username">
                          {}
                        </span>
                    </a>
                    <span className="on"> on </span>
                    <a href="#0">
                      <time className="block-comment-time">
                        {/*Create a date function*/}
                      </time>
                    </a>
                  </div>
              </div>
              <div className="comment-text">
                <p>{}</p>
              </div>
          </div>
        )
}
export default NewComment