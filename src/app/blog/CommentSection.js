import React from 'react';
import NewComment from './comments/NewComment';
import AddCommentForm from './comments/AddCommentForm';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comments: {} };
    }

    commentStamp = commentData => {
        const timeStamp = (new Date()).getTime();
        const commentpost = this.state.comments;
       this.state.comments['comment-id' + timeStamp] = commentData;
        //commentpost = commentData;
        this.setState({
           //console.log(state)
           //commentpost['comment-id' + timeStamp] = commentData
           //this.setState({ currentPage }, () => onPageChanged(paginationData));
           //comments: {commentpost['comment-id'+timeStamp] :commentData}
           comments: this.state.comments
          //comments: ['comment-id' + timeStamp: commentData]
        });
    }

    renderComment = key => {
        return (
            <li className="">
             <NewComment key={key} index={key} details={this.state.comments[key]} />
            </li>
        )
    }

    render() {
        return (
            <div className="column commentBoxScroll scrollBar">  
                <AddCommentForm addComment={this.commentStamp}/>

                <ol className="menu-list">
                    {
                      console.log(this.renderComment())
                      // Object.keys(this.state.comments).map(this.renderComment)
                    }
                </ol>
                  
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
        );
    }
}
export default CommentSection

/*
Smart. Does data stuff.
var App = React.createClass({
  
  getInitialState: function() {
    return { 
      comments: {}
    }
  },
  
  addComment: function(commentData) {
    
    (foo, bar, ...args) => {
      
    }
    
    var timeStamp = (new Date()).getTime();
    
    this.state.comments['comment-id' + timeStamp] = commentData;
    this.setState({
      comments: this.state.comments
    });
  },
  
  renderComment: function(key) {
    return (
      <li className="">
        <NewComment key={key} index={key} details={this.state.comments[key]} />
      </li>
    )
  },
  
  render : function() {
    return (
        <div className="row medium-8 large-7 columns">
        
          <ol className="comment-list block-comments">
            {
              Object
                .keys(this.state.comments)
                 // Creating a NEW array
                .map(this.renderComment)
            }
          </ol>
        
          <AddCommentForm addComment={this.addComment}/>
        
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        
        </div>
    )
  }
});


  Add comment Form
  <AddCommentForm />

// Semi-Dumb
var AddCommentForm = React.createClass({
  
  processComment: function(event) {
    event.preventDefault();
    
    // 1. Take data from from form
    var commentData = {
      commentName: this.refs.name.value,
      commentBody: this.refs.desc.value
    }
    
    // 2. Pass data back to App
    this.props.addComment(commentData);
    
    // 3. Reset the form
    this.refs.commentForm.reset();
    
  },
  
  render : function() {
    return (
      <div className="callout secondary">
        <h4 className="leave-comment">Add a Comment</h4>
        <form className="post-edit" ref="commentForm" onSubmit={this.processComment}>
          <input type="text" ref="name" placeholder="Your Name" required/>
          <textarea ref="desc" placeholder="Add your comment here" required/>
          <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Add Comment</button>
        </form>
      </div>
    )
  }
});



  Newcomment
  <NewComment />

var NewComment = React.createClass({
  render : function() {
    return (
      <div className="block-comment-content module text">
        <div className="comment-user">
          <div className="comment-user-avatar-wrap">
            <a>
              <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/3/profile/profile-512_29.jpg" className="comment-avatar" alt="" />
            </a>
          </div>
          <div className="comment-user-text">
            <a href="#0" data-username="cathbailh" className="comment-username">
                <span className="username">
                  {this.props.details.commentName}
                </span>
            </a>
            <span className="on"> on </span>
            <a href="#0">
              <time className="block-comment-time">
                {h.getTime()}
              </time>
            </a>
          </div>
        </div>

        <div className="comment-text">
          <p>{this.props.details.commentBody}</p>
        </div>
      </div>
      
    )
  }
});


React.render(<App/>, document.querySelector("#main"));
*/