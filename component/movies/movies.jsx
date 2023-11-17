import './movies.css';
import { useState } from "react";
import home1img from "../../images/home/home1.jpg";
import home2img from "../../images/home/home2.jpg";
import {useStore} from "../../store";


const Movies = () => {
    const {movies, setMovies} = useState([]);
    const [loading, setLoading] = useState(false);
  
    return (
        <div> 
          {/*    {props.movies.map((movie,index)=>  <div>
            */} 
       
            <section className="movies" id='movies'>
                <h2 className='heading'>Opening This Week</h2>
             
            <div className="movies-container">
                <div className="box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>{}</span>
                </div>
                <div className="box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>120 min | Action</span>
                </div>
                <div className="box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>120 min | Action</span>
                </div>
                <div className="box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>120 min | Action</span>
                </div>
                <div className="box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>120 min | Action</span>
                </div>
                <div className="box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>120 min | Action</span>
                </div>
                <div className="box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>120 min | Action</span>
                </div>
            </div>
            </section>
            {/* </div>)} */}
        </div>
    )
}

export default Movies;