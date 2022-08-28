import Image from 'next/image'
import bag from '../../public/src/images/portfolio/bag.png'
import car from '../../public/src/images/portfolio/car.png'
import cates from '../../public/src/images/portfolio/cates.png'
import headphone from '../../public/src/images/portfolio/headphone.png'
import seat from '../../public/src/images/portfolio/seat.png'
import shoe from '../../public/src/images/portfolio/shoe.png'
import stool from '../../public/src/images/portfolio/stool.png'
import watch from '../../public/src/images/portfolio/watch.png'

const PortfolioData = () => {
    return (
        <div className="container-fluid py-5" id='portfolio'>
            <div className="container py-5">
                <div className='mb-5'>
                    <h4 className='midContent'>Portfolio</h4>
                    <h3 className='title mb-3'>Latest Works!</h3>
                    <p className='subTitle'>Here you can check our latest projects but at this moment some projects are ongoing and some upcoming. So you can check it our later.</p>
                </div>

                <div className="row pt-5" >
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <div className='text-center'>
                            <Image src={watch} alt="Watch" className='' />
                            {/* <img src={watch} alt="Watch" className=''/> */}
                        </div>
                        <div className='row'>
                            <div className="col-6">
                                <div>
                                    <Image src={cates} alt="Watch" className='' />
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <Image src={headphone} alt="Watch" className='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <div className='row'>
                            <div className="col-6">
                                <div>
                                    <Image src={shoe} alt="Watch" className='' />
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <Image src={car} alt="Watch" className='' />
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <Image src={stool} alt="Watch" className='' />
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <Image src={bag} alt="Watch" className='' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={seat} alt="Watch" className='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioData;