import React from 'react'
import Head from 'next/head';
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Emailer from '../components/emailer.js'
import Gallery from '../components/gallery.js'
import { LargeTopo } from '../components/topography.js'
import { Component } from 'react'
const { getGalleries, getGallery, getArticles } = require('../utils/strapi.js')

import {
  Row,
  Col,
  Layout,
  Carousel,
  Button,
} from 'antd';
import stylesheet from 'antd/dist/antd.min.css'

class HomeHero extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imageUrl: "https://storage.googleapis.com/cdn.sacshiki.com/slide/sacshiki_hero_rough_1_lite-compressor.jpg",
      mobileImageUrl: "https://storage.googleapis.com/cdn.sacshiki.com/slide/sacshiki_hero_rough_1_mobile.jpg",
      slug: "hp-hero"
    }

    let gallery = getGallery(this.state.slug, props.galleries)
    if (gallery.slides.length > 0) {
      // this one doesnt seem to work
      this.state = {
        imageUrl: gallery.slides[0].link,
        mobileImageUrl: gallery.slides[0].mobileLink
      }
    }
  }

  render () {
    return (
      <div id='card1' className='card'>
        <img id='model1' className='splash' src={this.state.imageUrl} alt="model1" />
        <img id='mobilemodel1' className='splash' src={this.state.mobileImageUrl} alt="model1" />
        <div id='maintext'>
          <div className='title'>Your new favorite pocket</div>
          <div className='subtitle'>A bag so useful and comfortable</div>
          <div className='subtitle'>you'll leave the house not realizing you're already wearing it.</div>
        </div>

        <style jsx>{`
          #card1 {
            height: 100vh;
            width: 100vw;
            background: black;
          }
          .splash {
            height: 100%;
            width: 100%;
            overflow: hidden;
            object-fit: cover;
            object-position: center top;
            opacity: 0.65;
          }
          #model1 {
            display: inline;
          }
          #mobilemodel1 {
            display: none;
          }
          #maintext {
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            color: #FDF8F1;
          }
          .title {
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-size: 50px;
            line-height: 68px;
            text-align: center;
            padding-bottom: 20px;
          }
          .subtitle {
            font-weight: 300;
            font-size: 25px;
            line-height: 30px;
            text-align: center;
          }

          @media only screen and (max-width: 850px) {
            #model1 {
              display: none;
            }
            #mobilemodel1 {
              display: inline;
            }
            #maintext {
              padding: 30px
            }
          }

          @media only screen and (max-width: 650px) {
            .title {
              font-size: 40px;
            }
            .subtitle {
              font-size: 19px;
            }
          }
        `}</style>
      </div>
    )
  }
}

class Card2 extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id='card2'>
        <LargeTopo/>
        <div id='row'>
          <div id='slide1'>
            <Gallery slug='hp-fashion' captions={true} speed={7000} {...this.props}/>
          </div>
          <div id='card2content'>
            <h1>Functional fashion</h1>
            <h3 className="mb-20">Sacshiki began as a tool for the urban forager that evolved from furoshiki, a centuries-old Japanese craft of folding and knotting fabric for parcels, gifts, and anything that needs to be carried. Now the tradition is evolving with Sacshiki, a thoughtfully designed alternative to the single-use plastics that harm our environment.</h3>
            <div id='maincta'>
              <h3><em>Sign up to learn more about this useful and beautiful, soon-to-be indispensable piece of fashion and join us at our next pop-up:</em></h3>
              <Emailer dark={false} isAddContact={true}/>
            </div>
          </div>
        </div>
        <div id='secondarycta'>
          <h3><em>Sign up to learn more about this useful and beautiful, soon-to-be-indispensable piece of fashion and join us at our next pop-up:</em></h3>
          <Emailer dark={false} isAddContact={true}/>
        </div>

        <style jsx>{`
          .mb-20 {
            margin-bottom:20px
          }
          #card2 {
            width: 100%;
            background: rgba(243, 215, 198, 0.6);
            position: relative;
          }
          #row {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          #slide1 {
            width: 50vw;
            min-width: 50vw;
            height: 50vw;
            padding: 50px;
            margin-left: 40px;
            // margin-right: -50px;
          }
          #card2content h1 {
            font-size: 24px;
            font-family: 'Montserrat', sans-serif;
          }
          #card2content h3 {
            font-size: 14px;
          }
          #card2content {
            color: #171717;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 40px;
            padding-right: 90px;
            margin-left: -20px;
            margin-bottom: 0px;
          }
          #maincta {
            display: inline;
          }
          #secondarycta {
            display: none;
          }

          @media only screen and (max-width: 750px) {
            #secondarycta {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              padding: 0px 90px 40px 90px;
              font-size: 13px;
              color: #171717;
            }
            #maincta {
              display: none;
            }
          }

          @media only screen and (max-width: 650px) {
            #row {
              display: flex;
              flex-direction: column-reverse;
              justify-content: center;
            }
            #slide1 {
              height: 100vw;
              width: 100vw;
              margin-left: 0px;
              margin-right: 0px;
              padding: 40px;
            }
            #card2content {
              width: 100vw;
              margin-bottom: -35px;
              margin-left: 0px;
              padding-right: 40px;
            }
            #secondarycta {
              display: none;
            }
            #maincta {
              display: inline;
            }
          }
        `}</style>
      </div>
    )
  }
}

class Card3 extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id='card3'>
        <div id='row'>
          <div id='card3content'>
            <h1>Reconnect with nature</h1>
            <h3 className="mb-20">There&#8217;s no other way to connect with nature than to be a part of it. The Sacshiki team is also building foraging gardens and showing the people in our community how to plant, care for and harvest wild edibles. This is what drives Sacshiki and keeps us moving forward.</h3>
            <h3><em>Proceeds from Sacshiki sales go directly towards our foraging initiatives.</em></h3>
          </div>
          <div id='slide2'>
            <Gallery slug='hp-foraging' {...this.props}/>
          </div>
        </div>
        <style jsx>{`
          .mb-20 {
            margin-bottom:20px
          }
          #card3 {
            width: 100%;
            background: white;
            overflow: hidden;
          }

          #row {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          #slide2 {
            width: 50vw;
            height: 50vw;
            padding: 50px;
          }
          #card3content h1 {
            font-size: 24px;
            font-family: 'Montserrat', sans-serif;
          }
          #card3content h3 {
            font-size: 14px;
          }

          #card3content {
            color: #171717;

            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 15px;
            padding-left: 90px;
          }

          @media only screen and (max-width: 650px) {
            #row {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            #slide2 {
              height: 100vw;
              width: 100vw;
            }
            #card3content {
              width: 100vw;
              padding-left: 40px;
            }
          }


        `}</style>
      </div>
    )
  }
}

function Index({ galleries, articles }) {
  return <>

    <Head>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
      <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
      <title>Sacshiki - Your Favorite Pocket</title>
    </Head>

    <Header galleries={galleries} articles={articles}/>
    <HomeHero galleries={galleries}/>
    <Card2 galleries={galleries}/>
    <Card3 galleries={galleries}/>
    <Footer/>

    <style jsx global>{`
      body {
        font-family: 'Open Sans', sans-serif;
        // font-family: 'Montserrat', sans-serif;
        margin: 0px;
        color: #fff;
        overflow-x: hidden;
      }
    `}</style>
  </>;
}

Index.getInitialProps = async () => {
  const galleries = await getGalleries();
  const articles = await getArticles();
  return { galleries, articles };
};

export default Index;
