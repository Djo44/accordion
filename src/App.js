import React from "react";

import Bootstrap from "bootstrap";

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-6 imgs-container'>
          <div>
            <img src='./images/illustration-woman-online-desktop.svg' alt='' className='woman' />
          </div>
          <div>
            <img src='./images/bg-pattern-desktop.svg' alt='' className='pattern' />
          </div>
          <div>
            <img src='./images/illustration-box-desktop.svg' alt='' className='box' />
          </div>
        </div>
        <div className='col-sm-6 accordion-container'>
          <h1>FAQ</h1>
          <div className='accordion accordion-flush' id='accordionFlushExample'>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='flush-headingOne'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseOne'
                  aria-expanded='false'
                  aria-controls='flush-collapseOne'
                >
                  How many team members can I invite?
                </button>
              </h2>
              <div id='flush-collapseOne' className='accordion-collapse collapse' aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
                <div className='accordion-body'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, inventore!</div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='flush-headingTwo'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseTwo'
                  aria-expanded='false'
                  aria-controls='flush-collapseTwo'
                >
                  What is the maximum file upload size?
                </button>
              </h2>
              <div id='flush-collapseTwo' className='accordion-collapse collapse' aria-labelledby='flush-headingTwo' data-bs-parent='#accordionFlushExample'>
                <div className='accordion-body'>No more than 2GB. All files in your account must fit your allotted storage space.</div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='flush-headingThree'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseThree'
                  aria-expanded='false'
                  aria-controls='flush-collapseThree'
                >
                  How do i reset my passwords?
                </button>
              </h2>
              <div id='flush-collapseThree' className='accordion-collapse collapse' aria-labelledby='flush-headingThree' data-bs-parent='#accordionFlushExample'>
                <div className='accordion-body'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur vel rem iusto quidem illo nobis natus molestias nostrum ullam!
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header' id='flush-headingFour'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseFour'
                  aria-expanded='false'
                  aria-controls='flush-collapseFour'
                >
                  Can I cancel my subscription?
                </button>
              </h2>
              <div id='flush-collapseFour' className='accordion-collapse collapse' aria-labelledby='flush-headingFour' data-bs-parent='#accordionFlushExample'>
                <div className='accordion-body'>
                  Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body.
                  Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of
                  how this would look in a real-world application.
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header' id='flush-headingFive'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseFive'
                  aria-expanded='false'
                  aria-controls='flush-collapseFive'
                >
                  Do you provide additional support?
                </button>
              </h2>
              <div id='flush-collapseFive' className='accordion-collapse collapse' aria-labelledby='flush-headingFive' data-bs-parent='#accordionFlushExample'>
                <div className='accordion-body'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam amet quod, in omnis minima ad nesciunt, iusto nisi laborum eligendi pariatur vel ipsa. Optio
                  fugiat, voluptatum nesciunt id itaque totam!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
