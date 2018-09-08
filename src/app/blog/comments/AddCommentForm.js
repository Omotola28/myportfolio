import React from 'react';

class AddCommentForm extends React.Component {

    processComment = (event) => {
        event.preventDefault();
        // 1. Take data from from form
        const commentData = {
          commentName: this.refs.name.value,
          commentBody: this.refs.desc.value
    }

    // 2. Pass data back to App
    this.props.addComment(commentData);

    // 3. Reset the form
    this.refs.commentForm.reset();
    }

    render() {
        return (
             <div className="commentBox">
                <form className="" ref="commentForm" onSubmit={this.processComment}>
                  <div className="field">
                     <label className="label level is-size-5">Name</label>
                    <div className="control">
                        <input className="input"  ref="name" type="text" required/>
                    </div>
                  </div>
                  <div className="field">
                      <label className="label level is-size-5">Comment</label>
                      <div className="control">
                        <textarea className="textarea is-size-5" ref="desc"></textarea>
                      </div>
                  </div>
                  <div className="control">
                    <button className="button is-outlined is-medium">Add a Comment</button>
                  </div>
                </form>
            </div>
        );
    }
}
export default AddCommentForm