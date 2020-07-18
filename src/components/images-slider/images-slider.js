import React, {Fragment, useEffect, useState} from 'react';
import {Dot, Slide, SlideBtn, Wrapper} from "./style";

const ImagesSlider = ({items = []}) => {
    const [activeSlideId, setActiveSlideId] = useState(0);

    return (
        <Wrapper>
            {items.map((item, index) =>
                <Slide key={index} active={index === activeSlideId}>
                    <img src={item} />
                </Slide>
            )}
            <SlideBtn hide={activeSlideId <= 0} onClick={() => setActiveSlideId(activeSlideId-1)}>&#10094;</SlideBtn>
            <SlideBtn next hide={activeSlideId >= items.length - 1} onClick={() => setActiveSlideId(activeSlideId+1)}>&#10095;</SlideBtn>

            <div style={{textAlign: 'center'}}>
                {items.map((item, index) =>
                    <Dot key={index} active={index === activeSlideId} onClick={() => setActiveSlideId(index)} />
                )}
            </div>
        </Wrapper>
    )
};

export default ImagesSlider;