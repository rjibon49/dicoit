import Image from 'next/image'
import ui from '../../public/src/images/UiUX-Design.png'
import web from '../../public/src/images/Web-Design.png'
import app from '../../public/src/images/App-Design.png'
import product from '../../public/src/images/Product-Design.png'
import video from '../../public/src/images/Video-Editing.png'


const OurService = () => {
    return (
        <div id='service' className="container-fluid py-5">
           <div className="container py-xl-5 y-lg-0 my-5">
                <div className="row py-5" style={{alignItems:"center"}}>
                    <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-md-5">
                        <h4 className='midContent'>Our Service</h4>
                        <h3 className='serviceItalic'>We Offer A Wide Range Of Services And Provide Complete Client Satisfication</h3>
                        <p className='subTitle pt-3'>Dico, IT develop IT software for non-profit to assist them in effectively carrying out their mission. We also offer education and training on IT to non-profit organizations so that they can achieve their goals.  We offer help and support with the following: UI/UX, Web Design, App design, Product Design, and video editing. </p>

                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="row" style={{alignItems:"center"}}>
                            <div className="col-6 ">
                                <div className='text-center rightContentBg'>
                                    <div className='squareSpace'>
                                        <Image src={ui} alt="Ui/Ux Design" className='' />
                                        <h4 className='rightContent'>Ui/Ux Design</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 ">
                                <div className='text-center rightContentBg'>
                                    <div className='squareSpace'>
                                        <Image src={web} alt="Ui/Ux Design" className='' />
                                        <h4 className='rightContent'>Web Design</h4>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-6 ">
                                <div className='text-center rightContentBg'>
                                    <div className='squareSpace'>
                                        <Image src={app} alt="Ui/Ux Design" className='' />
                                        <h4 className='rightContent'>App Design</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 ">
                                <div className='text-center rightContentBg'>
                                    <div className='squareSpace'>
                                        <Image src={product} alt="Ui/Ux Design" className='' />
                                        <h4 className='rightContent'>Product Design</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className=" ">
                                    <div className='text-center rightContentVideo'>
                                        <div className='squareSpace'>
                                            <Image src={video} alt="Ui/Ux Design" className='' />
                                            <h4 className='rightContent'>Video Editing <br /> & <br />Explainer Video</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div> 
        </div>
    );
};

export default OurService;