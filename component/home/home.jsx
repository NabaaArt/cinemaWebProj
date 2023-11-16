import './home.css';
import home1img from "../../images/home/home1.jpg"
import home2img from "../../images/home/home2.jpg"
//import 'boxicons';
const Home = () => {
    return (
        <div className='hh'>

            <section className="home swiper" id="home">
                <div className='swiper-wrapper'>

                    <div className='swiper-slide container'>
                        <img src={home2img} alt="" />
                        <div className="home-text">
                            <span>Marval Universe</span>
                            <h1>Venom :Let There <br />Be carnge</h1>
                            <a href="#" className="btn"> Book Now</a>
                            <a href="" className="play">
                         
                            </a>

                        </div>
                        </div>
                </div>

            </section>
            <div className='.swiper-pagination'></div>
        </div>


    )
}
export default Home;