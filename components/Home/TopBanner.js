import Image from 'next/image'
import topBannerImage from '../../public/src/images/topBannerImage1.png'
import send from '../../public/src/images/talk.png'
import arrow from '../../public/src/images/arrow.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDribbble,
    faInstagram,
    faBehance,
    faFacebookSquare,
    faFigma,
    faWhatsapp
  } from '@fortawesome/free-brands-svg-icons';

const TopBanner = () => {
    return (
        // <div className='purple'>
            <div className="container-fluid mb-5 purple" id="home" style={{position:"relative"}}>
            <div className="">
                <div className='textPadding'>
                    <h1 className="LargeContentWhite">DESIGN <br />YOUR <span className="redText">WEBSITE</span> <br /> WITH OUR <br /> <span className="redText">EXPERT DESIGNER</span></h1>
                    {/* <p className="miniContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nam pellentesque pharetra platea arcu blandit. Risus luctus ut nullam elit maecenas. Enim aenean diam scelerisque nisi, morbi eget metus. Purus ultricies sit maecenas est massa eget vitae eget aenean.</p> */}
                    <div className='mt-5 topButton'>
                        <button className='tButton me-3'> <Image src={send} alt="Send" className='sendImage' /></button>
                        <button className='pButton ms-3'>Portfolio <span className='ps-5'> <Image src={arrow} alt="Send" className='sendImage' /> </span> </button>
                    </div>
                    <div className='pb-5'>
                        <span className='checkOut'>Check Out Us</span>
                        <FontAwesomeIcon icon={faDribbble} className="socialIcon" />
                        <FontAwesomeIcon icon={faInstagram} className="socialIcon" />
                        <FontAwesomeIcon icon={faBehance} className="socialIcon" />
                        <FontAwesomeIcon icon={faFacebookSquare} className="socialIcon" />
                        <FontAwesomeIcon icon={faFigma} className="socialIcon" />
                        <FontAwesomeIcon icon={faWhatsapp} className="socialIcon" />
                    </div>
                </div>
            </div>    
                    <div className='bannerDiv'>
                        <Image src={topBannerImage} alt="topBannerImage" className='bannerImage' />
                    </div>
        </div>
        // </div>
    );
};

export default TopBanner;