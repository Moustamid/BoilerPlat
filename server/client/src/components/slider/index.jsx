import { useState, useEffect } from 'react';
//-styled-components :
import {
  Slider,
  Slide,
  wrapper,
  Img,
  Content,
  ButtonRight,
  ButtonLeft,
} from './styles.jsx';
//-Components :

//-data :
import slidesData from '../../data/HeroSlider';
//-react-icons :
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const SliderComponent = () => {
  //-hooks :
  const [current, setCurrent] = useState(0);
  const lenght = slidesData.length;

  //-Helpers :

  //- Slider Animation :
  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };

  //-Slider Timer :

  useEffect(() => {
    //  effect
    const nextSlide = () => {
      setCurrent((current) => (current === lenght - 1 ? 0 : current + 1));
    };

    const timer = () => setTimeout(nextSlide, 8000);

    const timerId = timer();
    return () => {
      clearTimeout(timerId);
    };
  }, [current, lenght]);

  return (
    <Slider>
      {slidesData.map((slide, index) => {
        return (
          <Slide key={index}>
            {index === current && (
              <wrapper>
                <Img src={slide.image} alt={slide.alt} />
                <Content>
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                </Content>
              </wrapper>
            )}
          </Slide>
        );
      })}
      {/*Slider Btn*/}
      <ButtonRight>
        <IoIosArrowForward onClick={nextSlide} />
      </ButtonRight>
      <ButtonLeft>
        <IoIosArrowBack onClick={prevSlide} />
      </ButtonLeft>
    </Slider>
  );
};

export default SliderComponent;
