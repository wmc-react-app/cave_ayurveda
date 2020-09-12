import React, {Component} from 'react';
import aboutUsBanner from '../../assets/images/aboutUsBanner.jpg'
import mission from '../../assets/images/abby-boggier-boadZKqd1YM-unsplash.jpg';
import vision from '../../assets/images/luca-volpe-S1g3C9xVgVs-unsplash.jpg';
import missionVision from '../../assets/images/Untitled presentation.png'

class About extends Component {
  render() {
    return (

        <div className='aboutUsBanner'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-lg-12 text-center'>
              <img src={aboutUsBanner} alt="About Us" className='img-responsive w-100 m-auto'/>
            </div>
          </div>
          <div className="container">
            <div className="row mb-80">
              <div className="col-md-12">
                <h1 className='section-title text-center'>
                  WHO <span className='colorChange'>WE ARE</span>
                </h1>
                <p>Cave Ayurveda<sup>TM</sup> is a complete wellness essential brand, owned by IIRIS NATURAL SCIENCES Pvt. Ltd. We
                  have a team of experts who are focused on day to day lifestyle related issues and work minutely on it
                  to provide the best solution and best experience to our customers. We are aiming to develop a complete
                  range of wellness products which are essential and create a positive impact on an individual’s
                  lifestyle. In the coming years, we want to emerge as a complete wellness essential brand by sticking
                  to our commitments.
                </p>
                <p>Cave Ayurveda brings an ancient Indian science of Ayurveda and traditional knowledge of
                  ethnobotanical practices from around the world to promote natural healing and the general wellbeing of
                  an individual. We believe natural healing is more effective and beneficial with no side effects.
                </p>
              </div>
            </div>
          </div>
          <div className='missionVision'>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2 className='colorChange'>MISSION</h2>
                  <p className='text-justify'>To create a positive impact on every individual’s lifestyle with our wide
                    range of high-quality products formulated by embracing natural herbs, advanced technologies and deep
                    research. </p>
                  <span>&nbsp;</span>
                  <h2 className='colorChange'>VISION</h2>
                  <p className='text-justify'>Our vision is to represent Cave Ayurveda as a global brand by providing
                    authentic natural products and make an overall contribution in transforming the lifestyle of people
                    into
                    a healthier one. </p>
                </div>
                <div className="col-md-6">
                  <img src={mission} alt="mission Vision" className='img-responsive w-100'/>
                </div>
              </div>
            </div>
          </div>
          <div className="weCare">

            <div className="container">
              <div className="row mb-80">
                <div className="col-md-12">
                  <h1 className='section-title text-center'>
                    WE <span className='colorChange'>CARE</span>
                  </h1>
                  <p className='text-justify'> Cave Ayurveda is strictly against animal testing. Our products are
                    Cruelty Free.
                    We believe in ethical, sustainable and environment friendly practices while harvesting plants and
                    herbs.
                    Respect to Mother Nature and natural beings.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default About
