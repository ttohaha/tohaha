import React from 'react'
import './OurWorkers.css'
import i_worker1 from '../../img/worker1.jpg'

function OurWorkers() {
  return (
    <div className='ourworkers'>
        <div className='ourworkers_head'>Наши работники</div>
        <div className='ourworkers_cards'>
            <div className='ourworkers_card_block'>
                <div className='ourworkers_card'>
                    <div className='ourworkers_card_img_block'><img alt='img' className='ourworkers_card_img' src={i_worker1}/></div>
                    <div className='ourworkers_card_name'>Александр</div>
                    <div className='ourworkers_card_experience'>Опыт работы в компании 8 лет</div>
                    <div className='ourworkers_card_line'/>
                    <div className='ourworkers_card_about'>Старожил нашей фирмы, профессионал с Большой буквы. Готов к работе и задачам любой сложности!</div>
                </div>
            </div>

            <div className='ourworkers_card_block'>
                <div className='ourworkers_card'>
                    <div className='ourworkers_card_img_block'><img alt='img' className='ourworkers_card_img' src={i_worker1}/></div>
                    <div className='ourworkers_card_name'>Александр</div>
                    <div className='ourworkers_card_experience'>Опыт работы в компании 8 лет</div>
                    <div className='ourworkers_card_line'/>
                    <div className='ourworkers_card_about'>Старожил нашей фирмы, профессионал с Большой буквы. Готов к работе и задачам любой сложности!</div>
                </div>
            </div>

            <div className='ourworkers_card_block'>
                <div className='ourworkers_card ourworkers_card_last'>
                    <div className='ourworkers_card_img_block'><img alt='img' className='ourworkers_card_img' src={i_worker1}/></div>
                    <div className='ourworkers_card_name'>Александр</div>
                    <div className='ourworkers_card_experience'>Опыт работы в компании 8 лет</div>
                    <div className='ourworkers_card_line'/>
                    <div className='ourworkers_card_about'>Старожил нашей фирмы, профессионал с Большой буквы. Готов к работе и задачам любой сложности!</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OurWorkers