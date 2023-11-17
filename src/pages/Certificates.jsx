import './Certificates.css';
import { Link } from 'react-router-dom';
import Sertifi from "../assets/img223.jpg"
import Sertifi2 from "../assets/img224.jpg"
import Sertifi3 from "../assets/img225.jpg"
import Sertifi4 from "../assets/img227.jpg"
import Sertifi5 from "../assets/img228.jpg"
import Sertifi6 from "../assets/img229.jpg"
import Close from "../assets/close-button.png"
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Certificates() {
      const[Toggle, showSlider] = useState(false)
      const[showSlider2] = useState(false)
  return (
    <div className="Certificates">
    <h1>CERTIFICATES <Link className='Link' to='/'>/ <span> Home</span></Link></h1> 

    <h2 className='h2'>Certificates</h2>
    <div className="Certificate" >
      <div className="Certificat"  onClick={()=> showSlider(!Toggle)}>
<img src={Sertifi} alt="" />
      </div>
      <div className="Certificat" onClick={()=> showSlider2(!Toggle)}> 
<img src={Sertifi2} alt="" />
        
        </div>
        <div className="Certificat">
<img src={Sertifi3} alt="" />
        
        </div>
        <div className="Certificat">
<img src={Sertifi4} alt="" />
        
        </div>
        <div className="Certificat">
<img src={Sertifi5} alt="" />
        
        </div>
        <div className="Certificat">
       <img src={Sertifi6} alt="" /> 
        </div>
    </div>
    <img className="ultra" src={Close}  onClick={()=> showSlider(!Toggle)}  alt="" />
    <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={Toggle ? "showSlide" : "swiper"}
      >

        <SwiperSlide><img src={Sertifi} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sertifi2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sertifi3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sertifi4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sertifi5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Sertifi6} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Certificates;
