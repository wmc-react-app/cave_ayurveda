import React, {Component} from 'react';
import SlickSlider from '../SlickSlider/SlickSlider'
import hairWellnessSlide1 from '../../assets/images/hairWellnessSlide6.png'
import hairWellnessSlide2 from '../../assets/images/hairWellnessSlide3.png'
import hairWellnessSlide3 from '../../assets/images/hairWellnessSlide2.png'
import hairWellnessSlide4 from '../../assets/images/hairWellnessSlide5.png'
import hairWellnessSlide5 from '../../assets/images/hairWellnessSlide4.png'
import hairWellnessSlide6 from '../../assets/images/hairWellnessSlide1.png'
import ashwagandha from "../../assets/images/hairWellnessSlide1.png";
import mindWellness from "../../assets/images/AshwagandhaSlide1.png";
import skinWellness from "../../assets/images/skinWellnessSlide1.png";
import immunityBooster from "../../assets/images/immunityboosterSlide1.png";
import shilajit from "../../assets/images/ShilajitSlide1.png";
import spirulina from "../../assets/images/SpirulinaSlide1.png";
import triphala from '../../assets/images/TriphalaSlide1.png'
import SimpleSlider from "../SimpleSlider/SimpleSlider";

class HairWellness extends Component {
  imagesSrc = [
    {Slide1: hairWellnessSlide1},
    {Slide2: hairWellnessSlide2},
    {Slide3: hairWellnessSlide3},
    {Slide4: hairWellnessSlide4},
    {Slide5: hairWellnessSlide5},
    {Slide6: hairWellnessSlide6}
  ];
  bottleImagesSrc = {
    ashwagandha: ashwagandha,
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
                  <h4>HAIR WELLNESS</h4>
                  <h5 className='text-success'><span><i className="fa fa-inr" aria-hidden="true"></i></span> 399</h5>
                  <span>&nbsp;</span>
                  <div className="clearfix">
                    <p><strong>Description</strong></p>
                    <p>
                      Cave Ayurveda’s Hair wellness capsule is a complete herbal formula enriched with finest quality
                      plant extracts, which revitalize the hair follicles to stimulate hair growth. It also prevents
                      hair fall and hair thinning by nurturing dry and damaged hair.
                    </p>
                    <p><strong>Ingredients</strong></p>
                    <p>Bhringraj, Mandukaparni, Arogyavardhini, Narsingh Churna, Saptamrit Loh, Amla, Abhrak Bhasma
                    </p>
                    <span>&nbsp;</span>
                    <p><strong>Benefits</strong></p>
                    <ul>
                      <li>Promotes hair growth and helps in maintaining lush and voluminous hair.</li>
                      <li>Treats dry scalp and reduces hair fall.</li>
                      <li>Prevents premature greying of hair.</li>
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

export default HairWellness
