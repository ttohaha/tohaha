import React from 'react'
// import i_acc1 from '../../img/acc1.png'
import i_acc2 from '../../img/acc2.jpg'
import i_acc3 from '../../img/acc3.jpg'
import i_acc4 from '../../img/acc4.jpg'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import './Coments.css'

function Coments() {
  return (
  <div className='coments_block'>
    <div className='coments_h2'>Комментарии наших клиентов</div>

    <div className='coments'>

        <div className='coment_block'>
            <div className='coment'>
                <div>
                    <div className='coment_header_block'>
                        <div className='coment_header'>
                            <img className='coment_header_img' alt='img' src={i_acc2}/>
                        </div>
                    </div>
                </div>
                <div className='coment_body_block'>
                    <div className='coment_body'>
                        <div className='coment_body_text' style={{fontSize:'12.9px'}}>Оперативное и самое главное качественное обслуживание. Очень понравилось. Вся семья довольна. Сделали натяжные потолки, а ощущение будто в новую уютную квартиру переехали. Рекомендую. Потолки топ</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='coment_block'>
            <div className='coment'>
                <div>
                    <div className='coment_header_block'>
                        <div className='coment_header'>
                            <img className='coment_header_img' alt='img' src={i_acc3}/>
                        </div>
                    </div>
                </div>
                <div className='coment_body_block'>
                    <div className='coment_body'>
                        <div className='coment_body_text' style={{fontSize:'12.9px'}}>Долго с мужем думали, оставить потолки от застройщика, или сделать натяжные потолки. Сделав выбор в пользу потолков сейчас удивляемся, почему у нас вообще были сомнения. Натяжные потолки придали уют нашему гнëздышку) А мастера установили потолки очень хорошо и быстро. Большое вам спасибо</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='coment_block'>
            <div className='coment'>
                <div>
                    <div className='coment_header_block'>
                        <div className='coment_header'>
                            <img className='coment_header_img' alt='img' src={i_acc4}/>
                        </div>
                    </div>
                </div>
                <div className='coment_body_block'>
                    <div className='coment_body'>
                        <div className='coment_body_text' style={{fontSize:'12.9px'}}>Все очень понравилось🤩 сделали все быстро, качественно и очень красиво. Заранее подписали договор, приехали в назначенное время. Остались очень довольны. Из нескольких фирм выбрали именно их, самые приемлемые цены. Всем рекомендую!</div>
                    </div>
                </div>
            </div>
        </div>


    </div>

    {/* <div className='coments'>

        <div className='coment'>
            <div className="coment_swiper">
                <div className='coment_swiper_head_block'>
                    <div className='coment_swiper_head'>
                        <div className='coment_swiper_head_img_block'>
                            <img className='coment_swiper_head_img' alt='img' src={i_acc1}/>
                        </div>
                    </div>
                </div>
                <div className='coment_swiper_body_block'>
                    <div className='coment_swiper_body'>
                        <div className='coment_swiper_body_text'>asasasasa as .as asaas.asdsdsdsaf dgd sg f gfgfgfd.dfgfdgdfg, fgf. asasasasa as .as asaas.asdsdsdsaf dgd sg f gfgfgfd.dfgfdgdfg, fgf.</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='coment'>
            <div className="coment_swiper">
                <div className='coment_swiper_head_block'>
                    <div className='coment_swiper_head'>
                        <div className='coment_swiper_head_img_block'>
                            <img className='coment_swiper_head_img' alt='img' src={i_acc1}/>
                        </div>
                    </div>
                </div>
                <div className='coment_swiper_body_block'>
                    <div className='coment_swiper_body'>
                        <div className='coment_swiper_body_text'>asasasasa as .as asaas.asdsdsdsaf dgd sg f gfgfgfd.dfgfdgdfg, fgf. asasasasa as .as asaas.asdsdsdsaf dgd sg f gfgfgfd.dfgfdgdfg, fgf.</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='coment'>
            <div className="coment_swiper">
                <div className='coment_swiper_head_block'>
                    <div className='coment_swiper_head'>
                        <div className='coment_swiper_head_img_block'>
                            <img className='coment_swiper_head_img' alt='img' src={i_acc1}/>
                        </div>
                    </div>
                </div>
                <div className='coment_swiper_body_block'>
                    <div className='coment_swiper_body'>
                        <div className='coment_swiper_body_text'>asasasasa as .as asaas.asdsdsdsaf dgd sg f gfgfgfd.dfgfdgdfg, fgf. asasasasa as .as asaas.asdsdsdsaf dgd sg f gfgfgfd.dfgfdgdfg, fgf.</div>
                    </div>
                </div>
            </div>
        </div>
            
              
    </div> */}
  </div>
    
  )
}

export default Coments