import './newsLetter.css'

const NewsLetter=()=>{
    return(
        <div>
            <section className='newsletter' id='newsletter'>
                <h2>Subsceibe to get Newsletter</h2>
                <form>
                    <input type="email" className="email" placeholder='enter email'required />
               <input type="submit" value='subsicribe' className='btn' />
                </form >
            </section>
        </div>
    )
}

export default NewsLetter;