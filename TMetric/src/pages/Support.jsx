
import '../styles/Support.module.css'
// import { BsArrowRightShort } from 'react-icons/bs'
 const Support = () => {
    return (
        <div className='WhyTMatricMainDiv'>
            <div>
                <div >
                    <div className='WhyTMatricHeading'>Contact US</div>
                    <div className='WhyTMatricSmallDiv'>
                        <div className='WhyTMatricTitle'>Talk to Sales</div>
                        <span className='WhyTMatricText'>Schedule a product tour with TMetric expert</span>
                    </div>
                    <div className='WhyTMatricSmallDiv'>
                        <div className='WhyTMatricTitle'>Contact Support</div>
                        <span className='WhyTMatricText'>If you need help, please reach out to the TMetric product specialist</span>
                    </div>
                    {/* <div className='WhyTMatricSmallDiv'>
                        <div className='WhyTMatricTitle'>Try a Fre Trial</div>
                        <span className='WhyTMatricText'>Experience a complete set of features wotha a 30-day trial</span>
                    </div> */}
                </div>
            </div>
            <div >
                <div className='WhyTMatricHeading'>Support Center</div>
                <div className='WhyTMatricGrid'>
                    <div>
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/i4xhj2a4/icon-tmetric-help.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>TMetric Help</div>
                                <span className='WhyTMatricText'>Get how-to help step-by-step instructions for specific features in Help</span>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/odvlbddv/icon-admin-guide.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>Admin Guide</div>
                                <span className='WhyTMatricText'>Learn how to configure and maintain the software</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/bavd0nex/icon-how-to-videos.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>How to Videos</div>
                                <span className='WhyTMatricText'>Watch quick videos to learn the basics of TMetric</span>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/id3emm3n/icon-user-guide.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>User Guide</div>
                                <span className='WhyTMatricText'>This guide provides detailed instructions, tips, and best practices</span>
                            </div>
                        </div>
                    </div>
                   
                </div>
              
            </div>
        </div>
    )
}
export default Support;