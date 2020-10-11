import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Food from '../assets/pexels-elle-hughes-2241838.jpg'
import Basketball from '../assets/pexels-wallace-chuck-5286173.jpg'
import Sky from '../assets/pexels-wendy-wei-5041858.jpg'

export default class CaruselComponent extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ Food }
                        alt="Food"
                    />
                    <Carousel.Caption>
                        <h3>Food image</h3>
                        <p>lorem ewrger gwre gerg erg erg erg</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ Basketball }
                        alt="Basketball"
                    />
                    <Carousel.Caption>
                        <h3>Basketball image</h3>
                        <p>lorem ewrger gwre gerg erg erg erg</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ Sky }
                        alt="Sky"
                    />
                    <Carousel.Caption>
                        <h3>Sky image</h3>
                        <p>lorem ewrger gwre gerg erg erg erg</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}