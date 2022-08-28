import Image from 'next/image'
import aboutImage from '../../public/src/images/aboutImage1.png'


const AboutBanner = () => {
    return (
        <div className="container my-5 py-5" id='about'>
            <div className=" my-5 py-xl-5 py-lg-0">
                <div className="my-5" style={{position:"relative"}}>
                    <div className='text-center'>
                        <p className='about nagetiveMargin'>About Us</p>
                        <Image src={aboutImage} alt="topBannerImage" className='aboutImage' />
                    </div>
                    <div className="">
                        <div className='row'>
                            <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 aboutPosiTionLeft'>
                                <div className='ps-xl-2 ps-lg-2'>
                                    <p className='title text-center'>OUR MISSION</p>
                                    <p className='italicFont'>Dico IT educate and develop IT software for non-profit to assist them in effectively carrying out their mission.
</p>
                                </div>
                            </div>

                            <div className='col-6'></div>

                            <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 aboutPosiTionRight'>
                                <div className='ps-xl-2 ps-lg-2'>
                                    <p className='title text-center'>OUR VISION</p>
                                    <p className='italicFont'>Innovating Non-profit with IT solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;