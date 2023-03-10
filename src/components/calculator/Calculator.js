import React, { useState } from 'react'
import './Calculator.css'
import i_calculator from '../../img/calculator.png'
import i_calculator2 from '../../img/calculator2.png'
import MaskedInput from 'react-text-mask'

import i_vk from '../../img/vk.png'
import i_telegram from '../../img/telegram.png'
import i_whatsaap from '../../img/whatsapp.png'
import i_insta from '../../img/insta.png'

function Calculator() {
    const [text1, setText1] = useState(0)
    const [text2, setText2] = useState(0)
    const [price, setPrice] = useState(0)

    function changetext1(e){
        setText1(e.target.value)
        let el2 = text2

        if(text2 === undefined || text2 < 0 ){
            el2 = 0
        }
        
        setPrice(e.target.value*700 + el2*150)
    }

    function changetext2(e){
        setText2(e.target.value)
        let el2 = text1

        if(text1 === undefined || text1 < 0 ){
            el2 = 0
        }
        
        setPrice(el2*700 + e.target.value*150)
    }


  return (
    <div className='calculator'>
        <div className='calculator_h2'>Рассчитать стоимость</div>
        <div className='calculator_block'>
            <div className='calculator_fields_block'>
                <div className='calculator_fields'>
                    <div className='calculator_field'>
                        <div className='calculator_field_name'>Площадь потолка</div>
                        <MaskedInput
                            className='calculator_field_type'
                            mask={[/[1-9]/, /\d/, /\d/]}
                            showMask={false}
                            guide={false}
                            value={text1}
                            onChange={changetext1}
                            required
                        />
                        <div className='calculator_field_name'>м²</div>
                    </div>
                    <div className='calculator_field'>
                        <div className='calculator_field_name'>Точек освещения</div>
                        {/* <input className='calculator_field_type' type='number' value={text2} onChange={changetext2}/> */}
                        <MaskedInput
                            className='calculator_field_type'
                            mask={[/[1-9]/, /\d/]}
                            showMask={false}
                            guide={false}
                            value={text2}
                            onChange={changetext2}
                            required
                        />
                        <div className='calculator_field_name'>шт.</div>
                    </div>
                </div> 
            </div>
            
            <div className='calculator_price_block'>
                <div className='calculator_price'>
                    <div className='calculator_price_s'>Цена для вас</div>
                    <div className='calculator_price_b'>{price} ₽</div>
                </div>
            </div>
            
        </div>
        <div className='footer_apps'>
            <div className='footer_app'><a href='https://vk.com/ekbpotolochki' target='_blank' rel="noopener"><img className='footer_app_img' alt='img' src={i_vk}/></a></div>
            <div className='footer_app'><a href='http://t.me/potolochekpotolok' target='_blank' rel="noopener"><img className='footer_app_img' alt='img' src={i_telegram}/></a></div>
            <div className='footer_app'><a href='http://wa.me/79920288086' target='_blank' rel="noopener"><img className='footer_app_img' alt='img' src={i_whatsaap}/></a></div>
            <div className='footer_app'><a href='https://www.instagram.com/potolochki_potolki_ekb/' target='_blank' rel="noopener"><img className='footer_app_img' alt='img' src={i_insta}/></a></div>
        </div>
        
        <img src={i_calculator} alt='img' className='calculator_calculator'/>
        <img src={i_calculator2} alt='img' className='calculator_calculator2'/>
        <div className='calculator_paper'/>
    </div>
  )
}

export default Calculator