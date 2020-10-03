import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Fullsongs} from '../App'


class Song extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    {
                        Fullsongs.map((item, i) => {
                            return(
                                <div className="card" key={i}>
                                    <img className="card-img-top" src={item.image} alt={item.name+"'s image"}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.movie}</h5>
                                        <p className="card-text">{item.name}</p>
                                        <Link to={"song/"+item.id} className="btn btn-success">View Lyrics</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Song