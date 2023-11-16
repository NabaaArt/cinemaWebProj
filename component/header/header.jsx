import './header.css'

const MainHeader= ()=>{

    return (
    <header>
        
        <a href="#" className='logo'>    
        <i className='bx bxs-menu' id='menu-icon'></i> Movies

        </a>
            <div className="bx bx-menu" id='menu-icon'></div>

                <ul className='navbar'>
                    <li><a href='#home' className='home-active'>Home</a></li>
                    <li><a href='#movies'>Movies</a></li>
                    <li><a href='#coming'>Coming</a></li>  
                    <li><a href='#newsletter'>Newsletteer</a></li>  
                </ul>
                <a href="#" className='btn'>Sign In</a>
             
    </header>)
}

export default MainHeader;