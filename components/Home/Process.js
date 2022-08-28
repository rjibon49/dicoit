import Image from 'next/image'
import loding from '../../public/src/images/loding.png'

const Process = () => {
    return (
        <div className="containe-fluid py-5 gray">
            <div className="container py-5">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <Image src={loding} alt="Loding Dico IT" className=''/>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 leftSpace">
                        <h2 className='title mb-1'>Simple Process!</h2>
                        <p className='subTitle mb-5'>We can process your project with four simple steps. Just follow the steps with your project details.</p>

                        <div className='row pb-3'>
                            <div className='col-1 numberCenter'><h3 className='numberContent'>1</h3></div>
                                <div className='col-11 ps-5'>
                                    <h3 className='boldContent'>Contact Us</h3>
                                    <p className='smallContent'>Contact us via email with your project details. Otherwise you can discuss your projet with live chat.</p>
                                </div>
                        </div>
                        <div className='row pb-3'>
                            <div className='col-1 numberCenter'><h3 className='numberContent'>2</h3></div>
                                <div className='col-11 ps-5'>
                                    <h3 className='boldContent'>Budget</h3>
                                    <p className='smallContent'>Discuss about the project’s costing    </p>
                                </div>
                        </div>
                        <div className='row pb-3'>
                            <div className='col-1 numberCenter'><h3 className='numberContent'>3</h3></div>
                                <div className='col-11 ps-5 '>
                                    <h3 className='boldContent'>Place Order</h3>
                                    <p className='smallContent'>Place order with an invoice</p>
                                </div>
                        </div>
                        <div className='row pb-5'>
                            <div className='col-1 numberCenter'><h3 className='numberContent'>4</h3></div>
                                <div className='col-11 ps-5 '>
                                    <h3 className='boldContent'>Payment</h3>
                                    <p className='smallContent'>Pay us via card or paypal</p>
                                </div>
                        </div>

                        <div className='mt-3'>
                            <button className='qButton me-3'>Get Quote</button>
                            <button className='wButton ms-3 mt-lg-4'>Watch Videos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;