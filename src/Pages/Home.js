import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="Top-navbar">
        <div>
          <p className="Navbar-text">LIQUID.FINANCIAL</p>
        </div>
        <div>
          <button className='btn btn-primary Navbar-button'>Launch App</button>
        </div>

      </div>

      <div className="Site-header">
        <div className="Site-header-text">

          <h1>All in one DeFi Platform</h1>
          <h2>Changing Decentralized Finance</h2>


        </div>
        <div className='Front-images'>
          <div className="front-para">

            <p> There are so many moving pieces and new additions to the DeFi and Crypto <br />
              spaces everyday. The Liquid.Financial suite of DeFi tools will help you stay <br />
              ahead of the trend and grow your portfolio.
            </p>
          </div>

          <div className='Token-images'>

            <img className='img1' src={require('../Images/token1.png')} alt="tokenimg1" />
            <img className='img2' src={require('../Images/token2.png')} alt="tokenimg2" />
            <img className='glare' src={require('../Images/blue-flare.png')} alt="tokenimg2" />


          </div>

          <div className='launchbutton'>
            <button className='btn btn-primary launchbtn2'>Launch App</button>
          </div>

        </div>
      </div>



      <div id='Blocks' section='Blocks'>

        <div class="blocks container d-flex justify-content-center">

          <div class="row">
            <div className="col-md-4 single">
              <div>
                <img src={require('../Images/1.png')} alt="1" />
              </div>
              <h2>LiquidSwap</h2>
              <p>Using aggregated liquidity traders
                can perform fast paced swaps
                across multiple blockchains</p>

            </div>
            <div className="col-md-4 single">
              <div>
                <img src={require('../Images/2.png')} alt="2" />
              </div>
              <h2>LiquidFrame</h2>
              <p>an easy to use DEX configurator so any
                project can add the LiquidFrame DEX to
                their dashboard.</p>

            </div>
            <div className="col-md-4 single">
              <div>
                <img src={require('../Images/3.png')} alt="3" />
              </div>
              <h2>LiquidCharts</h2>
              <p>Using aggregated liquidity traders
                can perform fast paced swaps
                across multiple blockchains</p>
            </div>
          </div>
        </div>
        <div class="blocks container d-flex justify-content-center">

          <div class="row">
            <div className="col-md-4 single">
              <div>
                <img src={require('../Images/1.png')} alt="1" />
              </div>
              <h2>LiquidSwap</h2>
              <p>Using aggregated liquidity traders
                can perform fast paced swaps
                across multiple blockchains</p>

            </div>
            <div className="col-md-4 single">
              <div>
                <img src={require('../Images/2.png')} alt="2" />
              </div>
              <h2>LiquidFrame</h2>
              <p>an easy to use DEX configurator so any
                project can add the LiquidFrame DEX to
                their dashboard.</p>

            </div>
            <div className="col-md-4 single">
              <div>
                <img src={require('../Images/3.png')} alt="3" />
              </div>
              <h2>LiquidCharts</h2>
              <p>Using aggregated liquidity traders
                can perform fast paced swaps
                across multiple blockchains</p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4 ">
          <button className="tool-button">Tools</button>
        </div>

      </div>

      <div id='blockchain' section='Blockchains' className='pt-5'>
        <div className="container border-gradient">
          <h1>Supported Blockchains</h1>
          <div className="container">
            <div class="row myicons">
              <div class="col-lg-2">
                <img src={require('../Images/icon1.png')} alt="i1" />
              </div>
              <div class="col-lg-2 ">
                <img src={require('../Images/icon2.png')} alt="i2" />
              </div>
              <div class="col-lg-2">
                <img src={require('../Images/icon3.png')} alt="i3" />
              </div>
              <div class="col-lg-2">
                <img src={require('../Images/icon4.png')} alt="i4" />
              </div>
              <div class="col-lg-2">
                <img src={require('../Images/icon5.png')} alt="i5" />
              </div>
              
            </div>

          </div>
        </div>
      </div>


      <div id="roadmap" section="roadmap">

        <h1>Q2 2022 Roadmap</h1>
      </div>










    </div>
  )
}

export default Home