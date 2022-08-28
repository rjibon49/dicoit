import logo from '../public/src/logo/DicoItLogo.png'
import Link from 'next/link';
import Image from 'next/image';
import search from '../public/src/images/search.png';

const Header = () => {
   

    return (
    <>
        <div className="container-fluid navbar-light bg-light">
            <div className="mx-xl-5">
                <nav className="navbar navbar-expand-md">
                        <Link href="/"><a><Image src={logo} alt="DicoIT" className='logo'/></a></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        {/* <form className="d-flex ms-auto searchTop">
                            <input className="form-control me-2" type="search" placeholder="Type Here" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <form className="headerSearch me-auto searchTop" >
                            <input className="add-search" type="text" placeholder="Search.." />
                            <button className="submit-search"  type="submit" value="Send">
                                {/* <span className="before-submit">Hire Now</span> */}
                                <Image src={search} alt="Search Icon" className='' />
                            </button>
                        </form>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                            {/* <li className="nav-item mx-2">
                                <Link href="#service"><a className='menuLinkBlack'>Home</a></Link>
                            </li> */}
                            <li className="nav-item mx-3">
                                <Link href="#about"><a className='menuLinkBlack'>About Us</a></Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="#portfolio"><a className='menuLinkBlack'>Portfolio</a></Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="#service"><a className='menuLinkBlack'>Service</a></Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="/contact"><a className='menuLinkBlack'>Contact Us</a></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </>
    );
};

export default Header;