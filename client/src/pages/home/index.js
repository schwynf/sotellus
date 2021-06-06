//dependencies
import React from 'react';
import { connect } from 'react-redux'
//components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
//images
import homeImage from '../../images/can.jpg';
import beerImage from '../../images/can2.jpg';
import bottleImage from '../../images/bottle.jpg';
//css
import "./index.css";

function Home() {

    return (
        <>
            <Grid container spacing={0}>
                {/* left side */}
                <Grid item xs={12} md={8} className="grid-item-left-home">
                    <h3 id="h3-the-finest">The Finest Craft Beers From America's Best Micro Breweries</h3>
                    <h3>From America's Best Micro Breweries</h3>
                    <img src={homeImage} alt='club' id="image-group-drinking"></img>
                    <p>Our Craft Beer of the month club searches out exceptional craft beers from around the country and then delivers the monthly beer club selections direct-to-you or your gift recipient's door. You can choose an ongoing beer club membership or Craft Beer Club gifts to ship monthly, every-other-month or even quarterly. This is a fantastic gift for the Craft Beer enthusiast in your life. Give 1 to 12 shipments and receive up to 3 bonus gifts and an additional $30 bonus with your order.</p>
                    <h2>Beer of the Month Club shipment includes:</h2>
                    <div className="div-club-deals">
                        <img src={beerImage} alt='beer club' id="image-beers-cheers"></img>
                        <p><b>12 World-Class Craft Beers</b></p>
                        <p className="p-club-deals">  12 oz. beers</p>
                        <p className="p-club-deals"> 4 different styles</p>
                        <p className="p-club-deals"> 3 beers each (cans featured 4x per year)</p>
                        <p><b>FREE Bonus Gifts:</b></p>
                        <p>Up to 3 BONUS gifts in the first shipment.</p>
                        <p><b>Monthly Beer Club Newsletter:</b></p>
                        <p>The story behind the beer, where it originated and what pairs with it.</p>
                        <p><b>Craft Beer Club Selections:</b></p>
                        <p>The best selection of premium craft beers you'll find from any beer of the month club.</p>
                    </div>
                </Grid>
                {/* right side */}
                <Grid item xs={12} md={4} className="grid-item-right-home">
                    <h3 id="h3-dads-grads">Dads & Grads Gifts</h3>
                    <h4 id="h4-buy-get">Buy 2 Get 1 Free</h4>
                    <h4>When will my order arrive during the COVID-19 disruption?</h4>
                    <p>Your order is processed within 1-2 days after submitting your order. Deliveries typically arrive between 10-15 weekdays after processing depending on the destination zip code. However, it may take extra days as long as the COVID-19 shutdowns and slowdowns are occurring. <a href="/">read more</a></p>
                    <div className="div-right-arrow-icon">
                        <h4 id="h4-arrow-title">Recently featured Beer</h4>
                        <span className="span-right-arrow-icon">
                            <ArrowForwardIosIcon fontSize="large"></ArrowForwardIosIcon>
                        </span>
                    </div>
                    <Paper elevation={3} className="paper-stories" >
                        <h2 id="h-popular-stories">Popular Stories</h2>
                        <h4 className="h-stories">How to Take Beer on a Plane</h4>
                        <h4 className="h-stories">What's The Meaning Of IBU?</h4>
                        <h4 className="h-stories">Top 41 IPAs</h4>
                        <h4 className="h-stories">The Difference Between Porter and Stout</h4>
                        <h4 id="h-top-38" className="h-stories">Top 38 Sour Beers</h4>
                        <h4>Popular Beer Sizes</h4>
                    </Paper>
                    <Paper elevation={3} className='paper-image-beers'>
                        <img id="image-beers-cheers" alt='beers bottle' src={bottleImage}></img>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Home);

