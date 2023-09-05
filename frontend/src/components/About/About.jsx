import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
         {/* ======= about  ======= */}

         <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="image" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                <img src={aboutCardImg} alt="image" />
            </div>
         </div>
             
             {/* about content */}

             <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to be one of the nations best</h2>
                <p className='text_para'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum libero saepe, quam error sapiente culpa veritatis, consequuntur ea placeat atque voluptate ratione in obcaecati vero aspernatur ducimus, quia voluptatibus possimus!
                </p>

                <p className="text_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ducimus odit laboriosam, suscipit deserunt at perspiciatis iusto laborum exercitationem voluptatum accusamus rem beatae ipsam esse. Facere corporis aperiam eum numquam?</p>

                <Link to='/'>
                    <button className='btn'>Learn More</button>
                </Link>
             </div>



        </div>
    </div>
  )
}

export default About