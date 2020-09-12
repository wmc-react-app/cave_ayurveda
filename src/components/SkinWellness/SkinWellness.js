import React, {Component} from 'react';
import SlickSlider from '../SlickSlider/SlickSlider'
import skinWellnessSlide1 from '../../assets/images/skinWellnessSlide6.png'
import skinWellnessSlide2 from '../../assets/images/skinWellnessSlide3.png'
import skinWellnessSlide3 from '../../assets/images/skinWellnessSlide2.png'
import skinWellnessSlide4 from '../../assets/images/skinWellnessSlide5.png'
import skinWellnessSlide5 from '../../assets/images/skinWellnessSlide4.png'
import skinWellnessSlide6 from '../../assets/images/skinWellnessSlide1.png'
import ashwagandha from "../../assets/images/hairWellnessSlide1.png";
import mindWellness from "../../assets/images/AshwagandhaSlide1.png";
import hairWellness from "../../assets/images/hairWellnessSlide1.png";
import immunityBooster from "../../assets/images/immunityboosterSlide1.png";
import shilajit from "../../assets/images/ShilajitSlide1.png";
import spirulina from "../../assets/images/SpirulinaSlide1.png";
import triphala from '../../assets/images/TriphalaSlide1.png'
import SimpleSlider from "../SimpleSlider/SimpleSlider";

class HairWellness extends Component {
  imagesSrc = [
    {Slide1: skinWellnessSlide1},
    {Slide2: skinWellnessSlide2},
    {Slide3: skinWellnessSlide3},
    {Slide4: skinWellnessSlide4},
    {Slide5: skinWellnessSlide5},
    {Slide6: skinWellnessSlide6}
  ];
  bottleImagesSrc = {
    ashwagandha: ashwagandha,
    mindWellness: mindWellness,
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
                  <h4>SKIN WELLNESS</h4>
                  <h5 className='text-success'><span><i className="fa fa-inr" aria-hidden="true"></i></span> 499</h5>
                  <span>&nbsp;</span>
                  <div className="clearfix">
                    <p><strong>Description</strong></p>
                    <p>
                      Cave Ayurveda’s Skin Wellness capsule is a plant based formula prepared using 17 pure herbs. This
                      perfect composition is tested having anti-bacterial, anti-fungal, anti-inflammatory and blood
                      purifying properties that are helpful in treating acne, blemishes to keep the skin healthy and
                      radiant.
                    </p>
                    <p><strong>Ingredients</strong></p>
                    <p>Neem, Yashtimadhu, Manjishtha, Pittapapda, Kaishore Guggul, Kakamachi, Haldi, Giloy, Triphala,
                      Kutki, Tulsi, Bakuchi, Aloe vera, Praval Pishti, Chobchini, Karanj, Ras Manikya</p>
                    <span>&nbsp;</span>
                    <p><strong>Benefits</strong></p>
                    <ul>
                      <li>Treats acne, pimples and soreness of skin.</li>
                      <li>Fight against signs of premature aging like wrinkles, fine lines and age spots.
                      </li>
                      <li>Natural antioxidant for clear and healthy skin.</li>
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
