import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Trending extends Component{
    render(){
        return(
            <div>
            <h3 className="text-success">Trending songs</h3>
                    <div className="row">
                        <div className="card border-success mb-3 mt-3">
                            <div className="card-header bg-transparent border-success text-success">Master</div>
                            <div className="card-body text-success">
                                <h5 className="card-title">Quit pannuda</h5>
                                <p className="card-text">என் ஜீவனே என் போதையே நீ போதுமென்று தோன்றும்...</p>
                            </div>
                            <div className="card-footer bg-transparent border-success"><Link to="/song/1"><button className="btn btn-success">Read more</button></Link></div>
                        </div>
                        <div className="card border-success mb-3 mt-3">
                            <div className="card-header bg-transparent border-success text-success">Oh my kadavule</div>
                            <div className="card-body text-success">
                                <h5 className="card-title">Friendship anthem</h5>
                                <p className="card-text">நட்புக்கு வயதில்லை என்று ஒரு ஞானி சொன்னானே ஓ சொன்னானே மெய்யான...</p>
                            </div>
                            <div className="card-footer bg-transparent border-success"><Link to="/song/4"><button className="btn btn-success">Read more</button></Link></div>
                        </div>
                        <div className="card border-success mb-3 mt-3">
                            <div className="card-header bg-transparent border-success text-success">Psycho</div>
                            <div className="card-body text-success">
                                <h5 className="card-title">Neenga mudiyuma?</h5>
                                <p className="card-text">நீங்க முடியுமா நினைவு தூங்குமா நீங்க முடியுமா நினைவு தூங்குமா காலம்...</p>
                            </div>
                            <div className="card-footer bg-transparent border-success"><Link to="/song/7"><button className="btn btn-success">Read more</button></Link></div>
                        </div>
                        <div className="card border-success mb-3 mt-3">
                            <div className="card-header bg-transparent border-success text-success">Puppy</div>
                            <div className="card-body text-success">
                                <h5 className="card-title">5 manikku</h5>
                                <p className="card-text">அந்த சாலை ஓரம் அந்தி சாயும் நேரம் உன் சேலை ஆடுதே என் நெஞ்சம்</p>
                            </div>
                            <div className="card-footer bg-transparent border-success"><Link to="/song/15"><button className="btn btn-success">Read more</button></Link></div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Trending