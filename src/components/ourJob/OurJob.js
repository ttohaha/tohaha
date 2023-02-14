import React from 'react'
import './OurJob.css'
import i_ourjob1 from '../../img/outJob1.png'

function OurJob() {
  return (
    <div className='ourjob'>
        <div className='ourjob_head'>Как мы работаем?</div>

        <div className='ourjob_el ourjob_el_r'>
            <div className='ourjob_img_block ourjob_border_r '><img className='ourjob_img ourjob_border_b' src={i_ourjob1}/></div>
            <div className='ourjob_text_block'>
                <div className='ourjob_text'>
                    <div className='ourjob_text_h2'>1</div>
                    <div className='ourjob_text_p'>Делаете расчет у нас на сайте или по телефону всего за 5 минут</div>
                </div>
            </div>
            
        </div>

        <div className='ourjob_el'>
        <div className='ourjob_text_block'>
            <div className='ourjob_text '>
                <div className='ourjob_text_h2'>2</div>
                <div className='ourjob_text_p'>Мы приезжаем к вам на бесплатный замер и выбор материала.</div>
            </div>
        </div>
            
            <div className='ourjob_img_block '><img className='ourjob_img ourjob_border_b' src={i_ourjob1}/></div>
        </div>

        <div className='ourjob_el ourjob_el_r'>
            <div className='ourjob_img_block ourjob_border_r'><img className='ourjob_img' src={i_ourjob1}/></div>
            <div className='ourjob_text_block'>
                <div className='ourjob_text'>
                    <div className='ourjob_text_h2'>3</div>
                    <div className='ourjob_text_p'>Всего через пару дней у вас установлен замечательный потолок.</div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default OurJob