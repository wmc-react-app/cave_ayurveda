import React, {Component} from 'react';
import SlickSlider from '../SlickSlider/SlickSlider'
import ShilajitSlide1 from '../../assets/images/ShilajitSlide6.png'
import ShilajitSlide2 from '../../assets/images/ShilajitSlide3.png'
import ShilajitSlide3 from '../../assets/images/ShilajitSlide2.png'
import ShilajitSlide4 from '../../assets/images/ShilajitSlide4.png'
import ShilajitSlide5 from '../../assets/images/ShilajitSlide5.png'
import ShilajitSlide6 from '../../assets/images/ShilajitSlide1.png'
import hairWellness from "../../assets/images/hairWellnessSlide1.png";
import mindWellness from "../../assets/images/mindWellnessSlide1.png";
import skinWellness from "../../assets/images/skinWellnessSlide1.png";
import immunityBooster from "../../assets/images/immunityboosterSlide1.png";
import ashwagandha from "../../assets/images/AshwagandhaSlide1.png";
import spirulina from "../../assets/images/SpirulinaSlide1.png";
import triphala from '../../assets/images/TriphalaSlide1.png'
import SimpleSlider from "../SimpleSlider/SimpleSlider";

class Shilajit extends Component {
  imagesSrc = [
    {Slide1: ShilajitSlide1},
    {Slide2: ShilajitSlide2},
    {Slide3: ShilajitSlide3},
    {Slide4: ShilajitSlide4},
    {Slide5: ShilajitSlide5},
    {Slide6: ShilajitSlide6}
  ];
  bottleImagesSrc = {
    hairWellness: hairWellness,
    mindWellness: mindWellness,
    skinWellness: skinWellness,
    immunityBooster: immunityBooster,
    ashwagandha: ashwagandha,
    spirulina: spirulina,
    triphala: triphala
  }

  render() {
    return (
        <div>
          <div className='TriphalaProduct'>
            <div className='container'>
              <div className='row mt-80'>
                <div className="col-md-6 slickPadding">
                  <SlickSlider imagesSrc={this.imagesSrc}/>
                </div>
                <div className="col-md-6">
                  <h4>SHILAJIT</h4>
                  <h5 className='text-success'><span><i className="fa fa-inr" aria-hidden="true"></i></span> 299</h5>
                  <span>&nbsp;</span>
                  <div className="clearfix">
                    <p><strong>Description</strong></p>
                    <p>
                      Cave Ayurveda’s Shilajit is attributed with more than 84 minerals which works as an energy
                      booster. This herbo-mineral combination from the Himalayas is a potent rejuvenator and anti-ageing
                      compound which improves strength, stamina and sexual power. </p>
                    <p><strong>Ingredients</strong></p>
                    <p>Pure Shilajit extract </p>

                    <span>&nbsp;</span>
                    <p><strong>Benefits</strong></p>
                    <ul>
                      <li>Improves brain activity.</li>
                      <li>Natural energizer, boost sexual power and stamina.</li>
                      <li>Good for Male fertility and hormone improvement.</li>
                    </ul>

                    <span>&nbsp;</span>
                    <p><strong>Recommended Usage</strong></p>
                    <p> 1 capsule twice a day after meals or as directed by your Ayurvedic practitioner. Safe for long
                      term use.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='purchased'>
            <div className="container">
              <div className="row section-title">
                <div className="col-md-12">
                  <h1>ALSO <span className='colorChange'>PURCHASED</span></h1>
                </div>
              </div>
              <div className='row'>
                <div className="col-md-12">
                  <SimpleSlider bottleImagesSrc={this.bottleImagesSrc}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Shilajit
