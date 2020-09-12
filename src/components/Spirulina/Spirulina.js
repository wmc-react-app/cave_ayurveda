import React, {Component} from 'react';
import SlickSlider from '../SlickSlider/SlickSlider'
import SpirulinaSlide1 from '../../assets/images/SpirulinaSlide6.png'
import SpirulinaSlide2 from '../../assets/images/SpirulinaSlide3.png'
import SpirulinaSlide3 from '../../assets/images/SpirulinaSlide2.png'
import SpirulinaSlide4 from '../../assets/images/SpirulinaSlide4.png'
import SpirulinaSlide5 from '../../assets/images/SpirulinaSlide5.png'
import SpirulinaSlide6 from '../../assets/images/SpirulinaSlide1.png'
import hairWellness from "../../assets/images/hairWellnessSlide1.png";
import mindWellness from "../../assets/images/mindWellnessSlide1.png";
import skinWellness from "../../assets/images/skinWellnessSlide1.png";
import immunityBooster from "../../assets/images/immunityboosterSlide1.png";
import shilajit from "../../assets/images/ShilajitSlide1.png";
import ashwagandha from "../../assets/images/AshwagandhaSlide1.png";
import triphala from '../../assets/images/TriphalaSlide1.png'
import SimpleSlider from "../SimpleSlider/SimpleSlider";

class Spirulina extends Component {
  imagesSrc = [
    {Slide1: SpirulinaSlide1},
    {Slide2: SpirulinaSlide2},
    {Slide3: SpirulinaSlide3},
    {Slide4: SpirulinaSlide4},
    {Slide5: SpirulinaSlide5},
    {Slide6: SpirulinaSlide6}
  ];
  bottleImagesSrc = {
    hairWellness: hairWellness,
    mindWellness: mindWellness,
    skinWellness: skinWellness,
    immunityBooster: immunityBooster,
    shilajit: shilajit,
    ashwagandha: ashwagandha,
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
                  <h4>SPIRULINA</h4>
                  <h5 className='text-success'><span><i className="fa fa-inr" aria-hidden="true"></i></span> 249</h5>
                  <span>&nbsp;</span>
                  <div className="clearfix">
                    <p><strong>Description</strong></p>
                    <p>
                      Spirulina is a type of supplement obtained from sea algae. It includes high value of minerals,
                      vitamins, proteins, and powerful antioxidants. This green superfood helps in lowering cholesterol,
                      improving gut health, and managing diabetes.
                    </p>
                    <p><strong>Ingredients</strong></p>
                    <p>Spirulina extract</p>

                    <span>&nbsp;</span>
                    <p><strong>Benefits</strong></p>
                    <ul>
                      <li>High protein and vitamin content.</li>
                      <li>Preserve healthy gut bacteria.</li>
                      <li>Rich in nutrition with low calorie, low fat and low cholesterol.</li>
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

export default Spirulina
