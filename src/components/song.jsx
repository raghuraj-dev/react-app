import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Song extends Component {
    render(){
        return(
            <div>
                <div className="card">
                    <img className="card-img-top" src="https://townsquare.media/site/812/files/2018/03/TheWeeknd.jpg?w=1200&amp;h=0&amp;zc=1&amp;s=0&amp;a=t&amp;q=89" alt="music"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/song/id" className="btn btn-primary">View lyrics</Link>
                    </div>
                </div>
            </div>
        )
    }
}

class Songs extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                </div>
            </div>
        )
    }
}

export default Songs