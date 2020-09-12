import React, {Component} from 'react';
import AccordionComponent from "../AccordionComponent/AccordionComponent";

// import FaqData from '../FaqData'
class FAQs extends Component {
  render() {
    return (
        <div className='termsConditions'>
          <div className='container'>
            <div className='row mb-80'>
              <div className='col-md-12 col-sm-12 col-lg-12'>
                <h2 className='section-title'>Frequently <span className='colorChange'>Asked Questions</span></h2>

                <AccordionComponent/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default FAQs;
