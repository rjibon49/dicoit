import Image from 'next/image';
import Link from 'next/link';
import price from '../../public/src/images/price.png';


const Affordable = () => {
    return (
        <div className="container-fluid py-5 gray">
           <div className="container py-xl-5 py-lg-0 my-5">
               <div className='text-center pb-5'>
                   <h2 className='title'>Affordable Price!</h2>
                   <p className='subtitleCenter'>You will get wide range of discount offer  for your project. Contact us with your project details to get a affordable price offer.</p>
               </div>
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                        <Image src={price} alt="Price" className='' />
                    </div>

                    <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12">
                        <h4 className='secoundTitle'>Lets Chat For</h4>
                        <h4 className='secoundTitle whiteText'>A Affordable Price</h4>
                        <h4 className='secoundTitle'>With <span className='whiteText'>A Luxurius Package</span></h4>
                        <Link href="/contact"><button className='oButton mt-5'>Contact</button></Link>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Affordable;