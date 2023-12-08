import React from 'react'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CustomCard, { EntityDetails } from '../Card/CustomCard';

const sampleChefData: EntityDetails[] = [
    {
        'type': 'chef',
        'name': 'Chef 1',
        'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
        'id': '1',
    },
    {
        'type': 'chef',
        'name': 'Chef 2',
        'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
        'id': '2',
    },
    {
        'type': 'chef',
        'name': 'Chef 3',
        'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
        'id': '3',
    },
    {
        'type': 'chef',
        'name': 'Chef 4',
        'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
        'id': '4',
    },
    {
        'type': 'chef',
        'name': 'Chef 5',
        'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
        'id': '5',
    },
    {
        'type': 'chef',
        'name': 'Chef 6',
        'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
        'id': '6',
    },
    {
        'type': 'chef',
        'name': 'Chef 7',
        'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
        'id': '7',
    },
    {
        'type': 'chef',
        'name': 'Chef 8',
        'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
        'id': '8',
    },
    {
        'type': 'chef',
        'name': 'Chef 9',
        'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
        'id': '9',
    },
    {
        'type': 'chef',
        'name': 'Chef 10',
        'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
        id: '10',
    }
];

type CarouselProps = {
    entities: EntityDetails[];
};

const Carousel = (props: CarouselProps) => {
    let settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        swipeToSlide: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="Carousel-container">
            <Slider {...settings}>
                {props.entities.map((entity) => (
                    <CustomCard entity={entity} styles={{"backgroundColor":"yellow", "color":"red" }} />
                ))}
            </Slider>
        </div>
    )
}

export default Carousel
