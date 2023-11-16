import './movies.css';
import home1img from "../../images/home/home1.jpg"
import home2img from "../../images/home/home2.jpg"
const Movies = (props) => {
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