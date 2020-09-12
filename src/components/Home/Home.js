import React, {Component} from 'react';
import CarouselComponent from '../CarouselComponent/CarouselComponent'
import whyCaveAyurveda from '../../assets/images/annie-spratt-JLpDkdcuceI-unsplash (1).jpg'
import gmp from '../../assets/images/GMp.png';
import ISO from '../../assets/images/hiclipart.com.png'
import ayush from '../../assets/images/ayush-certification-500x500.jpg'
import triphala from '../../assets/images/triphala.png'
import hairWellness from '../../assets/images/hairWellness.png'
import skinWellness from '../../assets/images/skinWellness.png'
import mindWellness from '../../assets/images/mindWellness.png'
import immunityBooster from '../../assets/images/immunityBooster.png'
import ashwagandha from '../../assets/images/ashwagandha.png'
import spirulina from '../../assets/images/spirulina.png'
import shilajit from '../../assets/images/shilajit.png'
import {Link} from 'react-router-dom';
import HomeBanner1 from '../../assets/images/homeBanner1.jpg'
import HomeBanner2 from '../../assets/images/homeBanner2.jpg'
import HomeBanner3 from '../../assets/images/homeBanner3.jpg'
import HomeBanner4 from '../../assets/images/homeBanner4.jpg'
import HomeBanner5 from '../../assets/images/homeBanner5.jpg'
import HomeBanner1_Resp from '../../assets/images/homeBannerResp1.jpg'
import HomeBanner2_Resp from '../../assets/images/homeBannerResp2.jpg'
import HomeBanner3_Resp from '../../assets/images/homeBannerResp3.jpg'
import HomeBanner4_Resp from '../../assets/images/homeBannerResp4.jpg'
import HomeBanner5_Resp from '../../assets/images/homeBannerResp5.jpg'

const HomeBannerImages = [HomeBanner1, HomeBanner2, HomeBanner3, HomeBanner4, HomeBanner5];

const HomeBannerResImages = [HomeBanner1_Resp, HomeBanner2_Resp, HomeBanner3_Resp, HomeBanner4_Resp, HomeBanner5_Resp];

class Home extends Component {
  state = {};

  scrollTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  constructor(props) {
    super(props);
    this.state = {flag: 0}
  }

  componentDidMount() {
    const width = window.innerWidth;
    if (width > 768) {
      this.setState({images: HomeBannerImages})
    } else {
      this.setState({images: HomeBannerResImages})
    }
  }


  render() {
    const {images = []} = this.state;
    console.log(images);
    return (
        <div>
          <CarouselComponent images={images}/>
          <div className='whyCaveAyurveda'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-lg-12'>
                  <h1 className='section-title'>WHY <span className='colorChange'>CAVE AYURVEDA?</span></h1>
                </div>
                <div className='col-md-6 whyCAMargin'>
                  <p className='text-justify'>At Cave Ayurveda, our team of experts formulate products with proven
                    methodologies to cure the day to
                    day
                    common problems related to health and grooming. We embrace completely natural ingredients for a
                    healthier
                    lifestyle and better living.</p>
                  <Link to='/about'>
                    <button className='btn btn-success btn-rounded' onClick={this.scrollTop}>KNOW MORE</button>
                  </Link>
                </div>
                <div className='col-md-6 col-xs-12 text-center'>
                  <img src={whyCaveAyurveda} alt='whyCaveAyurveda' className='w-100'/>
                </div>
              </div>
            </div>
          </div>

          <div className='pureHerbs'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-lg-12'>
                  <h1 className='section-title'>PURE <span className='colorChange'>SINGLE HERBS</span></h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-3 col-sm-6 col-xs-12 productCard' onClick={this.scrollTop}>
                  <Link to='/ashwagandha'>
                    <div className='card-header'>
                      <img src={ashwagandha} alt='ashwagandha' className='img-responsive m-auto w-100'/>

                    </div>
                    <div className="card-body">
                      <h4>Ashwagandha</h4>
                      <p className='text-success'><i className="fa fa-inr" aria-hidden="true"></i> 249</p>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 productCard' onClick={this.scrollTop}>
                  <Link to='/shilajit'>
                    <div className='card-header'>
                      <img src={shilajit} alt='shilajit' className='img-responsive m-auto w-100'/>

                    </div>
                    <div className="card-body">
                      <h4>Shilajit</h4>
                      <p className='text-success'><i className="fa fa-inr" aria-hidden="true"></i> 299</p>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 productCard' onClick={this.scrollTop}>
                  <Link to='/triphala'>
                    <div className='card-header'>
                      <img src={triphala} alt='triphala' className='img-responsive m-auto w-100'/>
                    </div>
                    <div className="card-body">
                      <h4>Triphala</h4>
                      <p className='text-success'><i className="fa fa-inr" aria-hidden="true"></i> 225</p>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12 productCard' onClick={this.scrollTop}>
                  <Link to='/spirulina'>
                    <div className='card-header'>
                      <img src={spirulina} alt='spirulina' className='img-responsive m-auto w-100'/>

                    </div>
                    <div className="card-body">
                      <h4>Spirulina</h4>
                      <p className='text-success'><i className="fa fa-inr" aria-hidden="true"></i> 249</p>

                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>

          <div className='mixedHerbs'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-lg-12'>
                  <h1 className='section-title'>ESSENTIAL <span className='colorChange'>MIXED HERBS</span></h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-3 col-sm-6 col-xs-12  productCard'>
                  <Link to='/immunityBooster'>
                    <div className='card-header'>
                      <img src={immunityBooster} alt='immunityBooster' className='img-responsive m-auto w-100'/>

                    </div>
                    <div className="card-body">
                      <h4>Immunity Booster</h4>
                      <p className='text-success'><i className="fa fa-inr" aria-hidden="true"></i> 499</p>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12  productCard' onClick={this.scrollTop}>
                  <Link to='/hairWellness'>
                    <div className='card-header'>
                      <img src={hairWellness} alt='hairWellness' className='img-responsive m-auto w-100'/>

                    </div>
                    <div className="card-body">
                      <h4>Hair Wellness</h4>
                      <p className='text-success'><i className="fa fa-inr" aria-hidden="true"></i> 399</p>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12  productCard'>
                  <Link to='/mindWellness'>
                    <div className='card-header'>
                      <img src={mindWellness} alt='mindWellness' className='img-responsive m-auto w-100'/>

                    </div>
                    <div className="card-body">
                      <h4>Mind Wellness</h4>
                      <p className='text-success'><i className="fa fa-inr" aria-hidden="true"></i> 599</p>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-sm-6 col-xs-12  productCard' onClick={this.scrollTop}>
                  <Link to='/skinWellness'>
                    <div className='card-header'>
                      <img src={skinWellness} alt='skinWellness' className='img-responsive m-auto w-100'/>

                    </div>
                    <div className="card-body">
                      <h4>Skin Wellness</h4>
                      <p className='text-success'><i className="fa fa-inr" aria-hidden="true"></i> 499</p>
                    </div>
                  </Link>
                </div>


              </div>

            </div>
          </div>

          <div className='certifications'>
            <div className='container'>
              <h1 className='section-title'> CERTIFICATIONS </h1>
              <div className='row text-center mb-80'>
                <div className='col-lg-4 col-md-12 col-xs-12'>
                  <div className="row certificationsRow">
                    <div className="col-md-6">
                      <img src={ayush} alt='Ayush'/>
                    </div>
                    <div className="col-md-6 ayushCenter">
                      <p>Certified Formulations from ministry of <strong>AYUSH</strong></p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-12 col-xs-12'>
                  <div className="row certificationsRow">
                    <div className="col-md-6">
                      <img src={gmp} alt='GMP'/>
                    </div>
                    <div className="col-md-6 gmpCenter">
                      <p><strong>GMP</strong> Certified manufacturing</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-12 col-xs-12'>
                  <div className="row certificationsRow">
                    <div className="col-md-6">
                      <img src={ISO} alt='ISO'/>
                    </div>
                    <div className="col-md-6 isoCenter">
                      <p><strong>ISO</strong> Certified 9001:2015</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Home
