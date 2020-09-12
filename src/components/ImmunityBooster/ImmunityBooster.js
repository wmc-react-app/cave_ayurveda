import React, {Component} from 'react';
import SlickSlider from '../SlickSlider/SlickSlider'
import immunityboosterSlide1 from '../../assets/images/immunityBoosterSlide6.png'
import immunityboosterSlide2 from '../../assets/images/immunityboosterSlide3.png'
import immunityboosterSlide3 from '../../assets/images/immunityboosterSlide2.png'
import immunityboosterSlide4 from '../../assets/images/immunityBoosterSlide5.png'
import immunityboosterSlide5 from '../../assets/images/immunityboosterSlide4.png'
import immunityboosterSlide6 from '../../assets/images/immunityboosterSlide1.png'

import ashwagandha from "../../assets/images/hairWellnessSlide1.png";
import skinWellness from "../../assets/images/skinWellnessSlide1.png";
import hairWellness from "../../assets/images/hairWellnessSlide1.png";
import mindWellness from "../../assets/images/mindWellnessSlide1.png";
import shilajit from "../../assets/images/ShilajitSlide1.png";
import spirulina from "../../assets/images/SpirulinaSlide1.png";
import triphala from '../../assets/images/TriphalaSlide1.png'
import SimpleSlider from "../SimpleSlider/SimpleSlider";

class ImmunityBooster extends Component {
  imagesSrc = [
    {Slide1: immunityboosterSlide1},
    {Slide2: immunityboosterSlide2},
    {Slide3: immunityboosterSlide3},
    {Slide4: immunityboosterSlide4},
    {Slide5: immunityboosterSlide5},
    {Slide6: immunityboosterSlide6}
  ];
  bottleImagesSrc = {
    ashwagandha: ashwagandha,
    skinWellness: skinWellness,
    hairWellness: hairWellness,
    mindWellness: mindWellness,
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
                  <h4>IMMUNITY BOOSTER</h4>
                  <h5 className='text-success'><span><i className="fa fa-inr" aria-hidden="true"></i></span> 499</h5>
                  <span>&nbsp;</span>
                  <div className="clearfix">
                    <p><strong>Description</strong></p>
                    <p>
                      Cave Ayurveda’s Immunity booster capsule is a complete Ayurvedic formula, which helps in fighting
                      against harmful pathogens. It’s essential nutrients effectively boosts up immunity, provides
                      strength, guards against common illnesses like cough and cold to keep you energetic.
                    </p>
                    <p><strong>Ingredients</strong></p>
                    <p>Tulsi, Ashwagandha, Giloy, Brahmi, Mulethi, Gokhru, Soond, Dalchini, Kali Mirch</p>

                    <span>&nbsp;</span>
                    <p><strong>Benefits</strong></p>
                    <ul>
                      <li>Enriched with ‘Queen of herbs’ Tulsi, having vitamin A, C and K. It also has a good amount of
                        Calcium, Magnesium, Phosphorus, Iron and Potassium.
                      </li>
                      <li>Helps in fighting respiratory and digestive ailments and ward off infection causing bacteria.
                      </li>
                      <li>Powerhouse of antioxidants which fight free radicals and keeps your cells healthy.</li>
                      <li>Naturally increases T helper cells and natural killer (NK) cells activity, boosting the immune
                        system.
                      </li>
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

export default ImmunityBooster
