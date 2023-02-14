import React from 'react'
import './Calculator.css'
import i_calculator from '../../img/calculator.png'
import i_calculator2 from '../../img/calculator2.png'

function Calculator() {
  return (
    <div className='calculator'>
        <div className='calculator_h2'>Рассчитать стоимость</div>
        <div className='calculator_block'>
            <div className='calculator_fields_block'>
                <div className='calculator_fields'>
                    <div className='calculator_field'>
                        <div className='calculator_field_name'>Площадь потолка</div>
                        <input className='calculator_field_type' type='number'/>
                        <div className='calculator_field_name'>м²</div>
                    </div>
                    <div className='calculator_field'>
                        <div className='calculator_field_name'>Точек освещения</div>
                        <input className='calculator_field_type' type='number'/>
                        <div className='calculator_field_name'>шт.</div>
                    </div>
                </div> 
            </div>
            
            <div className='calculator_price_block'>
                <div className='calculator_price'>
                    <div className='calculator_price_s'>Цена для вас</div>
                    <div className='calculator_price_b'>999 ₽</div>
                </div>
            </div>
            
        </div>
        
        <img src={i_calculator} className='calculator_calculator'/>
        <img src={i_calculator2} className='calculator_calculator2'/>
    </div>
  )
}

export default Calculator