import React from 'react'
import './Footer.css'
import i_vk from '../../img/vk.png'
import i_viber from '../../img/viber.png'
import i_telegram from '../../img/telegram.png'
import i_whatsaap from '../../img/whatsapp.png'
import i_insta from '../../img/insta.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_h2'>У вас остались вопросы?</div>
        <div className='footer_text'>
            <div className='footer_text_number'>8 992 028-80-86</div>
            <div className='footer_text_male'>info@sokora.ru</div>
        </div>
        
        <div className='footer_apps'>
            <div className='footer_app'><a href='https://vk.com/ekbpotolochki' target='_blank'><img className='footer_app_img' alt='img' src={i_vk}/></a></div>
            <div className='footer_app'><a href='http://t.me/potolochekpotolok' target='_blank'><img className='footer_app_img' alt='img' src={i_telegram}/></a></div>
            <div className='footer_app'><a href='http://wa.me/79920288086' target='_blank'><img className='footer_app_img' alt='img' src={i_whatsaap}/></a></div>
            <div className='footer_app'><a href='https://www.instagram.com/potolochki_potolki_ekb/' target='_blank'><img className='footer_app_img' alt='img' src={i_insta}/></a></div>
        </div>
    </div>
  )
}

export default Footer