import React from 'react'
import { Swiper, div } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import i_acc1 from '../../img/acc1.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import './Coments.css'

function Coments() {
  return (
  <div className='coments_block'>
    <div className='coments_h2'>Комментарии наших клиентов</div>

    <div className='coments'>

        <div className='coment'>
            <div className="coment_swiper">
                <div className='coment_swiper_head_block'>
                    <div className='coment_swiper_head'>
                        <div className='coment_swiper_head_img_block'>
                            <img className='coment_swiper_head_img' src={i_acc1}/>
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
                            <img className='coment_swiper_head_img' src={i_acc1}/>
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
                            <img className='coment_swiper_head_img' src={i_acc1}/>
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
            
              
    </div>
  </div>
    
  )
}

export default Coments