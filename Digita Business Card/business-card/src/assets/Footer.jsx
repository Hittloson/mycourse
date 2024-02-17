import Facebookimg from '../assets/img/facebook.png'
import Twitterimg from '../assets/img/twitter.png'
import Intaimg from '../assets/img/IG.png'
import Linkedinimg from '../assets/img/LinkedIn.png'


function Footer() {
  return (
    <div className="w-[317px] h-[64px] m-auto bg-[#161619]
     text-[#fff] text-center rounded-b-lg flex justify-center
     pt-[8px]">
        <img src={Facebookimg} className='w-[25px] h-[25px] m-3 rounded-md'/>
        <img src={Twitterimg} className='w-[25px] h-[25px] m-3 rounded-md'/>
        <img src={Intaimg} className='w-[25px] h-[25px] m-3 rounded-md'/>
        <img src={Linkedinimg} className='w-[25px] h-[25px] m-3 rounded-md'/>
    </div>
  )
}

export default Footer