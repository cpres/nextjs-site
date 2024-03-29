import { withRouter, useRouter } from "next/router";
const { getGalleries, getArticle, getArticles } = require('../../utils/strapi.js')
import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import Banner from '../../components/banner.js'
// import Gallery from '../../components/gallery.js'

// import ReactMarkdown from "react-markdown";
import ReactHtmlParser from 'react-html-parser'; 

import Moment from "react-moment";
import stylesheet from 'antd/dist/antd.min.css'

function flatten(text, child) {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(flatten, text)
  }
  
function HeadingRenderer(props) {
    var children = React.Children.toArray(props.children)
    var text = children.reduce(flatten, '')
    var slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, {id: slug}, props.children)
}

function Article({ article, articles, galleries }) {

  const router = useRouter();

  let videoPlay = (article.slug == 'how-to-tie-a-sacshiki') ? 
    <div>
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/tGUuIYy1Iqo`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
      {/* <iframe src="https://player.vimeo.com/video/388789317" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" align="center" allowFullScreen></iframe> */}
      <br /><br /><br />
      <h2>Drawn Step by Step Instructions:</h2>
      <img src="https://storage.googleapis.com/cdn.sacshiki.com/knowledge-files/V3-Hangtag-07-web.jpg"></img>
      <br /><br /><br />
    </div> : '';

  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
      <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
      <script async charSet="utf-8" src="//cdn.iframe.ly/embed.js" ></script>
      <title>Sacshiki - Your Favorite Pocket</title>
    </Head>
    <Header galleries={galleries} articles={articles} disabledArticleSlug={article.slug}/>

    <div>
      <Banner images={article.media} text={article.title}/>
      {/* {article.galleries && article.galleries.length > 0 ? 
        <div id='slide1'>
          <Gallery gallery={article.galleries[0]} slug={article.galleries[0].slug} captions={true} speed={7000} />
        </div>
        : ''
      }  */}
      <div id="section">
        
        <article>
          { videoPlay }
          
          { ReactHtmlParser (article.content) }
        </article>
      </div>

    </div>

    <Footer/>

    <style jsx global>{`
      body {
        font-family: 'Open Sans', sans-serif;
        // font-family: 'Montserrat', sans-serif;
        margin: 0px;
        color: #171717;
        overflow-x: hidden;
      }
      .textContainer {
        padding: 40px 90px 40px 90px;
      }
      article > * {
        min-width: 0;
    }

    article {
      margin-top: 15px
    }
    
    article > h1 {
        font-family: Lucida Grande;
    }
    
    article > p {    
        --x-height-multiplier: 0.375;
        --baseline-multiplier: 0.17;
        font-family: Georgia,Cambria,"Times New Roman",Times,serif;
        letter-spacing: .01rem;
        font-weight: 400;
        font-style: normal;
        font-size: 21px;
        line-height: 1.58;
        letter-spacing: -.003em;
        color: rgba(0,0,0,.84);
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
    
    article > .aside {
        font-family: Lucida Grande;
        margin: 30px 20px;
        color: #666;
        font-size: 0.8em;
    }
    
    img {
        width: 100%;
    }
    
    .line-numbers a {
        text-decoration: none;
        color: #000;
        padding-right: 1em;
    }
    
    code {
        background: #eee;
        padding: 2px 5px;
    }
    
    pre {
        background: #eee;
        padding: 10px 15px;
        overflow: auto;
    }
    
    pre > code {
        padding: 0;
    }
    
    figure {
        margin: 0;
    }
    
    figure figcaption {
        color: #666;
        font-style: italic;
        font-size: 0.8em;
    }
      article {
            display: grid;
            /* I'm using 440px instead of 740px as it makes it easier to view it in the Scrimba simulator additive-symbols: */
            grid-template-columns: 1fr 1fr 10px 740px 10px 1fr 1fr;
        }
        
        article > * {
            grid-column: 4;
        }
        
        article > figure {
            grid-column: 1 / -1;
            margin: 20px 0;
        }
        
        article > .aside {
            grid-column: 5 / -1;
        }
        
        article > blockquote {
            grid-column: 3 / span 2;
            margin: 0px 0;
            color: #666;
            border-left: 3px solid black;
            padding-left: 10px;
        }

        iframe {
          margin: auto;
          display: block;
        }
        
        /* General styling */
        
        html, body {
            margin: 0;
            padding: 0;
            line-height: 1.4;
        }
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
          margin-right: -50px;
        }    
    


      @media only screen and (max-width: 650px) {
        .textContainer {
          padding: 20px;
        }
        article {
          grid-template-columns: 1fr 1fr 10px 340px 10px 1fr 1fr;
        }
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
      }
    `}</style>
  </>;
}

Article.getInitialProps = async (router) => {
  const articles = await getArticles();
  const article = getArticle(router.query.slug, articles);
  const galleries = await getGalleries();
  return { article, articles, galleries };
};

export default withRouter(Article);
