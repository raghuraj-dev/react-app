import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Trending from '../components/trnding'

class Home extends Component {
    render(){
        return(
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://wallup.net/wp-content/uploads/2016/12/07/139539-Boyce_Avenue-music-musicians-singing-man_candy.jpg" alt="music" className="d-block w-100 slide"/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://avante.biz/wp-content/uploads/Headphone-Girl-Wallpapers/Headphone-Girl-Wallpapers-016.jpg" alt="music"  className="d-block w-100 slide"/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://allhdwallpapers.com/wp-content/uploads/2015/05/girl-freedom-sunset-wallpaper.jpeg" alt="music" className="d-block w-100 slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> 
                <div className="container">
                    <div className="jumbotron mt-5">
                        <h1 className="text-success">Music is a powerful tool <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">🎵</span></h1>      
                        <p className="text-success">You can read tamil songs lyrics. Trending song lyrics are available..</p>
                        <Link to="/song"><button className="btn btn-success float-right">Read Lyrics</button></Link>
                    </div>
                    <hr/>
                    <Trending/>
                </div>         
            </div>
        )
    }
}

export default Home