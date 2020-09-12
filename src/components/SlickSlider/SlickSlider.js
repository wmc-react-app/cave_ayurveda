import React, {Component} from "react";
import Slider from "react-slick";

let img = '';

class SlickSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    }
    const {
      imagesSrc
    } = props
    img = imagesSrc;
    console.log(props);
    this.state = {
      backgroundImage: null,
      backgroundPosition: '0% 0%'
    }

    console.log(this.state);
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  handleMouseMove = e => {
    const {left, top, width, height} = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({
      backgroundPosition: `${x}% ${y}%`
    })
  }
  handleMouseLeave = e => {
    this.setState({backgroundImage: null})
  }
  handleMouseEnter = (imageUrl) => {
    this.setState({backgroundImage: `url(${imageUrl})`})
  }

  render() {
    const {backgroundPosition, backgroundImage} = this.state;
    console.log(backgroundPosition, 'bbb', backgroundImage);
    return (
        <div className='commonSlider'>
          <Slider
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}>
            <div>
              <figure style={this.state} onMouseMove={this.handleMouseMove}
                      onMouseLeave={this.handleMouseLeave}
                      onMouseEnter={() => this.handleMouseEnter(img[0].Slide1)}>
                <img src={img[0].Slide1} className='img-responsive w-75 m-auto'/>
              </figure>
            </div>
            <div>
              <figure style={this.state} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave}
                      onMouseEnter={() => this.handleMouseEnter(img[1].Slide2)}>
                <img src={img[1].Slide2} className='img-responsive w-50 m-auto'/>
              </figure>
            </div>

            <div>
              <figure style={this.state} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave}
                      onMouseEnter={() => this.handleMouseEnter(img[2].Slide3)}>
                <img src={img[2].Slide3} className='img-responsive w-50 m-auto'/>
              </figure>
            </div>

            <div>
              <figure style={this.state} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave}
                      onMouseEnter={() => this.handleMouseEnter(img[3].Slide4)}>
                <img src={img[3].Slide4} className='img-responsive w-50 m-auto'/>
              </figure>
            </div>
            <div>
              <figure style={this.state} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave}
                      onMouseEnter={() => this.handleMouseEnter(img[4].Slide5)}>
                <img src={img[4].Slide5} className='img-responsive w-50 m-auto'/>
              </figure>
            </div>
            <div>
              <figure style={this.state} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave}
                      onMouseEnter={() => this.handleMouseEnter(img[5].Slide6)}>
                <img src={img[5].Slide6} className='img-responsive w-75 m-auto'/>
              </figure>
            </div>
          </Slider>
          <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}>
            <div>
              <img src={this.props.imagesSrc[0].Slide1} className='img-responsive w-75 m-auto'/>
            </div>
            <div>
              <img src={this.props.imagesSrc[1].Slide2} className='img-responsive w-50 m-auto'/>
            </div>
            <div>
              <img src={this.props.imagesSrc[2].Slide3} className='img-responsive w-50 m-auto'/>
            </div>
            <div>
              <img src={this.props.imagesSrc[3].Slide4} className='img-responsive w-50 m-auto'/>
            </div>
            <div>
              <img src={this.props.imagesSrc[4].Slide5} className='img-responsive w-50 m-auto'/>
            </div>
            <div>
              <img src={this.props.imagesSrc[5].Slide6} className='img-responsive w-75 m-auto'/>
            </div>
          </Slider>
        </div>
    )
  }
}


export default SlickSlider;
