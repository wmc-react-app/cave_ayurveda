import React, {Component} from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom'

class SimpleSlider extends Component {
  scrollTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  render() {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplaySpeed: 2000,
            autoplay: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            autoplay: true,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            autoplay: true,
          }
        }
      ]
    };
    return (
        <div>
          <Slider {...settings}>
            {this.props.bottleImagesSrc.ashwagandha ? (
                <div className='sliderLink' onClick={this.scrollTop}>
                  <Link to='/ashwagandha'>
                    <img src={this.props.bottleImagesSrc.ashwagandha} alt='ashwagandha'
                         className='img-responsive w-75 m-auto'/>
                    <h4 className='text-center'>ASHWAGANDHA</h4>
                    <p className='text-success text-center'>Rs.249</p>
                  </Link>
                </div>
            ) : (null)}
            {this.props.bottleImagesSrc.hairWellness ? (
                <div className='sliderLink' onClick={this.scrollTop}>
                  <Link to='/hairWellness'>
                    <img src={this.props.bottleImagesSrc.hairWellness} alt='hairWellness'
                         className='img-responsive w-75 m-auto'/>
                    <h4 className='text-center'>HAIR WELLNESS</h4>
                    <p className='text-success text-center'>Rs.399</p>
                  </Link>
                </div>
            ) : (null)}
            {this.props.bottleImagesSrc.immunityBooster ? (
                <div className='sliderLink' onClick={this.scrollTop}>
                  <Link to='/immunityBooster'>
                    <img src={this.props.bottleImagesSrc.immunityBooster} alt='immunityBooster'
                         className='img-responsive w-75 m-auto'/>
                    <h4 className='text-center'>IMMUNITY BOOSTER</h4>
                    <p className='text-success text-center'>Rs.499</p>
                  </Link>
                </div>
            ) : (null)}
            {this.props.bottleImagesSrc.mindWellness ? (
                <div className='sliderLink' onClick={this.scrollTop}>
                  <Link to='/mindWellness'>
                    <img src={this.props.bottleImagesSrc.mindWellness} alt='mindWellness'
                         className='img-responsive w-75 m-auto'/>
                    <h4 className='text-center'>MIND WELLNESS</h4>
                    <p className='text-success text-center'>Rs.599</p>
                  </Link>
                </div>
            ) : (null)}
            {this.props.bottleImagesSrc.shilajit ? (
                <div className='sliderLink' onClick={this.scrollTop}>
                  <Link to='/shilajit'>
                    <img src={this.props.bottleImagesSrc.shilajit} alt='shilajit'
                         className='img-responsive w-75 m-auto'/>
                    <h4 className='text-center'>SHILAJIT</h4>
                    <p className='text-success text-center'>Rs.299</p>
                  </Link>
                </div>
            ) : (null)}
            {this.props.bottleImagesSrc.skinWellness ? (
                <div className='sliderLink' onClick={this.scrollTop}>
                  <Link to='/skinWellness'>
                    <img src={this.props.bottleImagesSrc.skinWellness} alt='skinWellness'
                         className='img-responsive w-75 m-auto'/>
                    <h4 className='text-center'>SKIN WELLNESS</h4>
                    <p className='text-success text-center'>Rs.499</p>
                  </Link>
                </div>
            ) : (null)}
            {this.props.bottleImagesSrc.spirulina ? (
                <div className='sliderLink' onClick={this.scrollTop}>
                  <Link to='/spirulina'>
                    <img src={this.props.bottleImagesSrc.spirulina} alt='spirulina'
                         className='img-responsive w-75 m-auto'/>
                    <h4 className='text-center'>SPIRULINA</h4>
                    <p className='text-success text-center'>Rs.249</p>
                  </Link>
                </div>
            ) : (null)}

            {this.props.bottleImagesSrc.triphala ? (
                <div className='sliderLink' onClick={this.scrollTop}>
                  <Link to='/triphala'>
                    <img src={this.props.bottleImagesSrc.triphala} alt='triphala'
                         className='img-responsive w-75 m-auto'/>
                    <h4 className='text-center'>TRIPHALA</h4>
                    <p className='text-success text-center'>Rs.225</p>
                  </Link>
                </div>
            ) : (null)}

          </Slider>
        </div>
    )
  }
}

export default SimpleSlider
