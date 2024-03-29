import { Component } from 'react'
import { LargeTopo } from './topography.js'
import { IgIcon, SacshikiLogo } from './logo.js'
import { initGA, logPageView } from '../utils/analytics'

import Emailer from './emailer.js'

class Footer extends Component {

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render () {
    return (
      <div id='footer'>
        <div id='topography'>
          <LargeTopo opacity={0.1}/>
        </div>
        <div id='footerrow'>
          <div id='logo'>
            <SacshikiLogo/>
          </div>
          <div id='email'>
            <Emailer isDark={true} isAddContact={true}/>
          </div>
          <div id='ig'>
            <IgIcon width={"23px"} height={"24px"}/>
          </div>
        </div>
        <h3 id='cc'>2021 © Sacshiki. All rights reserved</h3>

        <style jsx>{`
          #footer {
            position: relative;
            background: #171717;
            width: 100%;
            min-height: 200px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
          }
          #footerrow {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 20px;
            padding: 0px 90px;
          }
          #logo {
            width: 125.7px;
            height: 56.01px;
            z-index: 101;
            margin-bottom: 20px
          }
          #ig {
            width: 33px;
            height: 33px;
            margin-top: 11px;
            z-index: 101;
          }
          #cc {
            font-size: 10px;
            width: 100%;
            text-align: center;
            color: white;
            position: absolute;
            bottom: 4px;
          }
          #topography {
            height: 100%;
            width: 100%;
            top: 0;
            position: absolute;
            overflow: hidden;
          }

          @media only screen and (max-width: 650px) {
            #footerrow {
              padding-top: 20px;
              padding-bottom: 20px;
              height: 100%;
              align-items: center;
              justify-content: space-around;
            }
            #ig {
              margin-left: 20px;
            }
          }
        `}</style>
        
      </div>
    )
  }
}

export default Footer
