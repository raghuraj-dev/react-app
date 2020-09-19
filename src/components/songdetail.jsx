import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import {Fullsongs} from '../App'

class Songdetail extends Component {
    render(){
        var pageURL = window.location.href;
        var lastURLSegment = (pageURL.substr(pageURL.lastIndexOf('/')+1)-1);
        return(
            <div className="container">
                <div className="row imageDetail">
                    <div className="col-sm-6">
                        <img className="bigImage" src={Fullsongs[lastURLSegment]['image']} alt="gallery"/>
                    </div>
                    <div className="col-sm-6">
                        <h1>{Fullsongs[lastURLSegment]['name']}</h1>
                        <hr/>
                        <p className="lyrics">{Fullsongs[lastURLSegment]['lyrics']}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Songdetail