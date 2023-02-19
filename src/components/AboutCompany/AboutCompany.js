import React from 'react'
import './AboutCompany.css'

function AboutCompany() {
  return (
    <div className='aboutcompany'>
        <div className='aboutcompany_h2'>О компании</div>
        <div className='aboutcompany_text_block'>
            <div className='aboutcompany_text'><b style={{fontWeight:'900', fontSize:'18.5px', color:'rgb(204, 204, 204)'}}>-Обладаем большим опытом</b> в области натяжных потолков, и готовы делиться им, помогая найти лучшие решения и материалы для Вас!</div>
            <div className='aboutcompany_text'><b style={{fontWeight:'900', fontSize:'18.5px', color:'rgb(204, 204, 204)'}}>-Безопасный монтаж </b>- oдин из самых важных аспектов нашей работы. Используем взрывобезопасное оборудование</div>
            <div className='aboutcompany_text'><b style={{fontWeight:'900', fontSize:'18.5px', color:'rgb(204, 204, 204)'}}>-Экологичные материалы</b>. Работаем с проверенными и сертифицированными материалам, которые имеют санитарно- гигиенические и пожарные сертификаты.</div>
        </div>
    </div>
  )

  


}

export default AboutCompany