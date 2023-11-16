import './coming.css'
import home1img from "../../images/home/home1.jpg"
const Coming=()=>{
    return(
        <div>
            <section className="coming" id='coming'>
                <h2 className="heading">Coming Soon</h2>
           
            <div className="coming-container swiper">
                <div className='swiper-wrapper'>
                <div className="swiper-slide box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>120 min | Action</span>
                </div>
                <div className="swiper-slide box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>120 min | Action</span>
                </div>
                <div className="swiper-slide box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>120 min | Action</span>
                </div>
                <div className="swiper-slide box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>120 min | Action</span>
                </div>
                <div className="swiper-slide box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>120 min | Action</span>
                </div>
                <div className="swiper-slide box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>120 min | Action</span>
                </div>
                <div className="swiper-slide box">
                    <div className="box-img">
                        <img src={home1img} alt="" />
                    </div>
                    <h3>Vemon</h3>
                    <span>120 min | Action</span>
                </div>
                
                </div>
            </div>
            </section>
        </div>
    )
}
export default Coming;