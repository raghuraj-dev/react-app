import React, { Component } from 'react';

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
                <div className="gradian"></div>               
            </div>
        )
    }
}

export default Home