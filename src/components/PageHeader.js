import React from 'react'

const PageHeader = (props) => {
  return (
      <section className={`hero ${props.color}`}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              {props.title}
              <span id="backslash">{` //`}</span>
              <span id="journalFont">{props.addonText}</span>
            </h1>
          </div>
        </div>
      </section>

  );
} 
export default PageHeader