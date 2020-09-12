import React, {Component} from 'react';
import SlickSlider from '../SlickSlider/SlickSlider'
import TriphalaSlide1 from '../../assets/images/TriphalaSlide6.png'
import TriphalaSlide2 from '../../assets/images/TriphalaSlide3.png'
import TriphalaSlide3 from '../../assets/images/TriphalaSlide2.png'
import TriphalaSlide4 from '../../assets/images/TriphalaSlide4.png'
import TriphalaSlide5 from '../../assets/images/TriphalaSlide5.png'
import TriphalaSlide6 from '../../assets/images/TriphalaSlide1.png'
import hairWellness from '../../assets/images/hairWellnessSlide1.png'
import mindWellness from '../../assets/images/mindWellnessSlide1.png'
import skinWellness from '../../assets/images/skinWellnessSlide1.png'
import immunityBooster from '../../assets/images/immunityboosterSlide1.png'
import shilajit from '../../assets/images/ShilajitSlide1.png'
import spirulina from '../../assets/images/SpirulinaSlide1.png'
import ashwagandha from '../../assets/images/AshwagandhaSlide1.png'
import SimpleSlider from '../SimpleSlider/SimpleSlider'

class Triphala extends Component {
  imagesSrc = [
    {Slide1: TriphalaSlide1},
    {Slide2: TriphalaSlide2},
    {Slide3: TriphalaSlide3},
    {Slide4: TriphalaSlide4},
    {Slide5: TriphalaSlide5},
    {Slide6: TriphalaSlide6}
  ];
  bottleImagesSrc = {
    hairWellness: hairWellness,
    mindWellness: mindWellness,
    skinWellness: skinWellness,
    immunityBooster: immunityBooster,
    shilajit: shilajit,
    spirulina: spirulina,
    ashwagandha: ashwagandha
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
                  <h4>TRIPHALA</h4>
                  <h5 className='text-success'><span><i className="fa fa-inr" aria-hidden="true"></i></span> 225</h5>
                  <span>&nbsp;</span>
                  <div className="clearfix">
                    <p><strong>Description</strong></p>
                    <p>
                      Triphala (the three fruits) is an Ayurvedic, polyherbal formula consisting of equal parts of three
                      myrobalans - Emblica officinalis, Terminalia chebula and Terminalia bellerica . It is a
                      time-tested
                      formulation that cleanses & supports the entire gastro-intestinal (GI) tract, improving digestion
                      and
                      helps to regulate metabolism. It is rich in Vitamin C & antioxidants and improves vision.
                    </p>
                    <p><strong>Ingredients</strong></p>
                    <p>Amalaki, Bibhitaki, Haritaki</p>

                    <span>&nbsp;</span>
                    <p><strong>Benefits</strong></p>
                    <ul>
                      <li>Helps in proper digestion and absorption of food.</li>
                      <li>Restores glutathione level in eyes and helps in improving vision.</li>
                      <li>Promotes bowel movement, relieves constipation and abdominal issues.</li>
                    </ul>

                    <span>&nbsp;</span>
                    <p><strong>Recommended Usage</strong></p>
                    <p> 1 capsule in the morning before breakfast and 1 capsule after dinner or as directed by your
                      Ayurvedic practitioner. Safe for long term use.</p>
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

export default Triphala
