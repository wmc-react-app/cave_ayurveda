import React, {Component} from 'react';
import SlickSlider from '../SlickSlider/SlickSlider'
import AshwagandhaSlide1 from '../../assets/images/AshwagandhaSlide6.jpg'
import AshwagandhaSlide2 from '../../assets/images/AshwagandhaSlide3.png'
import AshwagandhaSlide3 from '../../assets/images/AshwagandhaSlide2.png'
import AshwagandhaSlide4 from '../../assets/images/AshwagandhaSlide4.png'
import AshwagandhaSlide5 from '../../assets/images/AshwagandhaSlide5.png'
import AshwagandhaSlide6 from '../../assets/images/AshwagandhaSlide1.png'

import hairWellness from "../../assets/images/hairWellnessSlide1.png";
import mindWellness from "../../assets/images/mindWellnessSlide1.png";
import skinWellness from "../../assets/images/skinWellnessSlide1.png";
import immunityBooster from "../../assets/images/immunityboosterSlide1.png";
import shilajit from "../../assets/images/ShilajitSlide1.png";
import spirulina from "../../assets/images/SpirulinaSlide1.png";
import triphala from '../../assets/images/TriphalaSlide1.png'
import SimpleSlider from "../SimpleSlider/SimpleSlider";

class Ashwagandha extends Component {
  imagesSrc = [
    {Slide1: AshwagandhaSlide1},
    {Slide2: AshwagandhaSlide2},
    {Slide3: AshwagandhaSlide3},
    {Slide4: AshwagandhaSlide4},
    {Slide5: AshwagandhaSlide5},
    {Slide6: AshwagandhaSlide6}
  ];
  bottleImagesSrc = {
    hairWellness: hairWellness,
    mindWellness: mindWellness,
    skinWellness: skinWellness,
    immunityBooster: immunityBooster,
    shilajit: shilajit,
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
                  <h4>ASHWAGANDHA</h4>
                  <h5 className='text-success'><span><i className="fa fa-inr" aria-hidden="true"></i></span> 249</h5>
                  <span>&nbsp;</span>
                  <div className="clearfix">
                    <p><strong>Description</strong></p>
                    <p>
                      Cave ayurveda’s Ashwagandha is a natural herb that rejuvenates mind and body. It is a powerful
                      anti- stress agent which helps to relieve mental, physical and emotional stress. It also improves
                      muscle strength by promoting muscle growth.
                    </p>
                    <p><strong>Ingredients</strong></p>
                    <p>
                      Ashwagandha extract
                    </p>

                    <span>&nbsp;</span>
                    <p><strong>Benefits</strong></p>
                    <ul>
                      <li>Relieves anxiety and stress.</li>
                      <li>Builds overall strength and immunity.</li>
                      <li>Good for overall physical and mental well being.</li>
                      <li>Promote muscle growth by improving hormone levels.</li>
                    </ul>

                    <span>&nbsp;</span>
                    <p><strong>Recommended Usage</strong></p>
                    <p>1 capsule twice a day after meals or as directed by your Ayurvedic practitioner. Safe for long
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

export default Ashwagandha
