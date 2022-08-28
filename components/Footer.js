import Link from 'next/link';
import Image from 'next/image'
import cell from '../public/src/images/celphone.png'
import map from '../public/src/images/map.png'
import mail from '../public/src/images/mail.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faPinterestP,
    faTwitter,
    faFacebookF
  } from '@fortawesome/free-brands-svg-icons';
  import { faPlay } from '@fortawesome/free-solid-svg-icons';
//   import emailjs from 'emailjs';
//   import useSWR from 'swr';
//   import  React from 'react';


const Footer = () => {

    // const form = React.createRef();

    // const sendEmail = (e) => {
    //     emailjs.sendForm('service_hwv6qfd', 'template_yw3apf4', form.current, '-kXtQ2UcExgETgMQL')
    //       .then((result) => {
    //           console.log(result.text)
    //       }, (error) => {
    //           console.log(error.text);
    //       });
          
    //       e.target.reset();
    //       e.preventDefault();
    //   };

    return (
        <div className="container-fluid purple py-5">
            <div className="container">
                <div className="d-flex justify-content-between my-5 flex-wrap">
                    <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-xs-12 ">
                        <div>
                            <h1 className="footerTitle mb-3">Build <br />Your Agency </h1>
                            <p className="subTitleWhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque praesent odio nam mauris proin. Suspendisse.</p>
                        </div>

                        <form className="subscription mt-5" >
                            <input className="add-email" type="email" placeholder="Your Business E-mail...." />
                            <button className="submit-email"  type="submit" value="Send">
                                <span className="before-submit">Hire Now</span>
                            </button>
                        </form>

                        <div className='pb-5 text-center mt-5 d-none d-sm-none d-md-none d-lg-block d-xl-block x-xxl-block'>
                            <FontAwesomeIcon icon={faFacebookF} className="socialIconFooter" />
                            <FontAwesomeIcon icon={faInstagram} className="socialIconFooter" />
                            <FontAwesomeIcon icon={faPinterestP} className="socialIconFooter" />
                            <FontAwesomeIcon icon={faTwitter} className="socialIconFooter" />
                            <FontAwesomeIcon icon={faPlay} className="socialIconFooter" />
                            <div className='mt-4'>
                                <p className='subTitleWhite'>English (US)</p>
                            </div>
                        </div>
                        
                    </div>

                    {/* <div className="col-xl-2 col-lg-1 col-md-12 col-sm-12 col-xs-12 d-lg-none d-xl-block"> </div> */}

                    <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-xs-12 flex-lg-wrap">
                        <nav className="navbar navbar-expand mb-5 d-none d-lg-block d-xl-block ">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 me-5">
                                    <li className="nav-item mx-2">
                                        <Link href="#home"><a className='menuLinkWhite'>Home</a></Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link href="#about"><a className='menuLinkWhite'>About Us</a></Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link href="#portfolio"><a className='menuLinkWhite'>Portfolio</a></Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link href="#service"><a className='menuLinkWhite'>Service</a></Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link href="/contact"><a className='menuLinkWhite'>FAQ</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                            <div className='pt-5 mt-5'>
                                <p className="text-center subTitleWhite mb-5" >contact Us</p>
                                
                                    <div className='row pb-3'>
                                        <div className='col-2 iconBg'>
                                            <Image src={cell} alt="DicoIT"/>
                                        </div>
                                        <div className='col-10'>
                                            <p className='subTitleWhite ps-4'>+00 123-456789</p>
                                        </div>
                                    </div>
                                    <div className='row pb-3'>
                                        <div className='col-2 iconBg'>
                                            <Image src={map} alt="DicoIT"/>
                                        </div>
                                        <div className='col-10'>
                                            <p className='subTitleWhite ps-4'>support@dicoit.com</p>
                                        </div>
                                    </div>
                                    <div className='row pb-3'>
                                        <div className='col-2 iconBg'>
                                            <Image src={mail} alt="DicoIT"/>
                                        </div>
                                        <div className='col-10'>
                                            <p className='subTitleWhite ps-4'>1968 Massachusetts Avenue <br /> Washington, DC 20005</p>
                                        </div>
                                    </div>


                                <div className='pb-5 text-center mt-5 d-sm-block d-xs-block  d-md-block d-xl-none d-xxl-none d-lg-none'>
                                    <FontAwesomeIcon icon={faFacebookF} className="socialIconFooter" />
                                    <FontAwesomeIcon icon={faInstagram} className="socialIconFooter" />
                                    <FontAwesomeIcon icon={faPinterestP} className="socialIconFooter" />
                                    <FontAwesomeIcon icon={faTwitter} className="socialIconFooter" />
                                    <FontAwesomeIcon icon={faPlay} className="socialIconFooter" />
                                <div className='mt-4'>
                                    <p className='subTitleWhite'>English (US)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="subTitleWhite">Copyright @ 2022. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;