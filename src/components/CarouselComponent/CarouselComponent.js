import React, {useState} from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators

} from 'reactstrap'

const CarouselComponent = (props) => {
  console.log(props.images);
  const items = props.images;
  console.log(items);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  }
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex)
  }
  const slides = items.map((item, index) => {
        return (

            <CarouselItem onExiting={() => setAnimating(true)}
                          onExited={() => setAnimating(false)}
                          key={index}>
              <img src={item} className='w-100' />
            </CarouselItem>
        )
      }
  )

  return (
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
        {slides}
        <CarouselControl direction="prev" directionText='previous' onClickHandler={previous}/>
        <CarouselControl direction="next" directionText='next' onClickHandler={next}/>
      </Carousel>
  )
}

export default CarouselComponent

