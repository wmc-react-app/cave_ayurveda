import React, {Component} from 'react';
import SlickSlider from '../SlickSlider/SlickSlider'
import mindWellnessSlide1 from '../../assets/images/mindWellnessSlide6.png'
import mindWellnessSlide2 from '../../assets/images/mindWellnessSlide3.png'
import mindWellnessSlide3 from '../../assets/images/mindWellnessSlide2.png'
import mindWellnessSlide4 from '../../assets/images/mindWellnessSlide5.png'
import mindWellnessSlide5 from '../../assets/images/mindWellnessSlide4.png'
import mindWellnessSlide6 from '../../assets/images/mindWellnessSlide1.png'

import ashwagandha from "../../assets/images/hairWellnessSlide1.png";
import skinWellness from "../../assets/images/skinWellnessSlide1.png";
import hairWellness from "../../assets/images/hairWellnessSlide1.png";
import immunityBooster from "../../assets/images/immunityboosterSlide1.png";
import shilajit from "../../assets/images/ShilajitSlide1.png";
import spirulina from "../../assets/images/SpirulinaSlide1.png";
import triphala from '../../assets/images/TriphalaSlide1.png'
import SimpleSlider from "../SimpleSlider/SimpleSlider";

class MindWellness extends Component {
  imagesSrc = [
    {Slide1: mindWellnessSlide1},
    {Slide2: mindWellnessSlide2},
    {Slide3: mindWellnessSlide3},
    {Slide4: mindWellnessSlide4},
    {Slide5: mindWellnessSlide5},
    {Slide6: mindWellnessSlide6}
  ];
  bottleImagesSrc = {
    ashwagandha: ashwagandha,
    skinWellness: skinWellness,
    hairWellness: hairWellness,
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
                  <h4>MIND WELLNESS</h4>
                  <h5 className='text-success'><span><i className="fa fa-inr" aria-hidden="true"></i></span> 599</h5>
                  <span>&nbsp;</span>
                  <div className="clearfix">
                    <p><strong>Description</strong></p>
                    <p>
                      Cave Ayurveda’s Mind wellness capsule is a complete Ayurvedic formula, prepared using 13
                      handpicked pure herbs found in nature. This synergistic blend of herbs is a nerve tonic which
                      improves overall mental health and enhances blood circulation in the brain which helps to boost
                      memory and intelligence.
                    </p>
                    <p><strong>Ingredients</strong></p>
                    <p>Shankhpushpi, Brahmi, Tagar, Malkangani, Jeevanti, Ashwagandha, Jatamansi, Khurasani, Ajwain
                      Sarpagandha, Arjun Chhal, Pippali, Tulsi, Vach
                    </p>
                    <span>&nbsp;</span>
                    <p><strong>Benefits</strong></p>
                    <ul>
                      <li>Contains Shankhpushpi and Brahmi having anti-stress, antidepressant and anti-anxiety
                        properties.
                      </li>
                      <li>Useful in treating restlessness and dementia.
                      </li>
                      <li>Sharpens brain and improves memory.</li>
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

export default MindWellness
