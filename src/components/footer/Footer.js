import React from 'react'
import './Footer.css'
import i_vk from '../../img/vk.png'
import i_viber from '../../img/viber.png'
import i_telegram from '../../img/telegram.png'
import i_whatsaap from '../../img/whatsapp.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_h2'>У вас остались вопросы?</div>
        <div className='footer_text'>
            <div className='footer_text_number'>8 999 999-99-99</div>
            <div className='footer_text_male'>info@sokora.ru</div>
        </div>
        
        <div className='footer_apps'>
            <div className='footer_app'><a href='https://sokora-potolki.ru/?yclid=458417298416139989#!'><img className='footer_app_img' alt='img' src={i_vk}/></a></div>
            <div className='footer_app'><a href='https://sokora-potolki.ru/?yclid=458417298416139989#!'><img className='footer_app_img' alt='img' src={i_viber}/></a></div>
            <div className='footer_app'><a href='https://sokora-potolki.ru/?yclid=458417298416139989#!'><img className='footer_app_img' alt='img' src={i_telegram}/></a></div>
            <div className='footer_app'><a href='https://sokora-potolki.ru/?yclid=458417298416139989#!'><img className='footer_app_img' alt='img' src={i_whatsaap}/></a></div>
        </div>
    </div>
  )
}

export default Footer