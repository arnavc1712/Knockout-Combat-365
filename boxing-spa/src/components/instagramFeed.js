import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { ChatBubble, Favorite } from '@material-ui/icons'
import '../App.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    adaptiveHeight: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    dots: false,
    centerPadding:'50px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

export default class instagramFeed extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            instagramApiData: []
        }
    }

    componentDidMount() {
        let url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='
        let accessToken= '335298764.5f03155.5c2151a9bb344dc083e01fcbb6b4f2fc'
        this.callApi(url,accessToken)
        .then((res) => {
                      this.setState({ instagramApiData: res.data})
                    })
        .catch(err => console.log(err))
    }

    callApi = async(url,accessToken) => {
        const response = await fetch(url + accessToken);
        const body = await response.json()
        return body
      }

    
    render(){
        return(
        <div style={{width:'100%'}}>
            <Slider {...settings}>
                {this.state.instagramApiData.map((slide, index) => { 
                return (
                    <a key={index} href={slide.link} target="blank_">
                    <div  className="img-featured-container">
                <div className="img-backdrop"></div>
                <div className="description-container">
                    {/* // '<p class="caption">{{caption}}</p>'+ */}
                    <span className="likes"><Favorite className="icon-text"/>{slide.likes.count}</span>
                    <span className="comments"><ChatBubble className="icon-text"/>{slide.comments.count}</span>
                </div>
                <img src={slide.images.standard_resolution.url} width={200} height={300} className="img-responsive"/>
                </div>
                </a>
                )
                })}
            </Slider>
        </div>
        )
    }

}
