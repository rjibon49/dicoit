import Image from 'next/image';
import Link from 'next/link';
import design from '../../public/src/images/redesign.png';


const RedesignNote = () => {
    return (
        <div className="container-fluid py-5">
           <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 mb-md-5">
                        <h4 className='reTitle'>Lets</h4>
                        <h4 className='reTitle'><span className='reTitleBold'>redesign</span> Your Brand</h4>
                        <p className='subTitle'>Websites are now essential for every business and non-profits.  They are create ways to develop a brand and engage the target audience. Websites can provide information to those in end and help to raise funds.  Every non-profit has a website. However, is it meeting their needs and presenting the right image to the world. Importantly are they contributing to the goals of the non-profit. <br /> At Dico IT we are experts in website design. We can make your website more user friendly and improve the interaction between the user and the organization. At Dico IT we can re-design your website and this will improve your brand image. <br /> <br /> <b >Here is what we can do</b> <br /> <br />
                        <li>Create an engaging story</li>
                        <li>An improved interface</li>
                        <li>Add videos for marketing</li>
                        <li>Improve the website graphics.</li>
                        Dico IT can help social enterprises, charities, and non-profits to manage events, within budget and to generate leads for fundraising. We can help to re-brand your non-profits with our videos. <br /> <br />
                        <b>References</b><br /> Hayes, S.W., Priestley, J.L., Moore, B.A. and Ray, H.E., 2021. Perceived stress, work-related burnout, and working from home before and during COVID-19: An examination of workers in the United States. SAGE Open, 11(4), p.21582440211058193. </p>
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 text-md-center reSpace">
                        <Image src={design} alt="Price" className='' />
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default RedesignNote;