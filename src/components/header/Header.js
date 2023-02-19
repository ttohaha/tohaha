import React, { useState, useRef } from 'react'
import './Header.css'
import MaskedInput from 'react-text-mask'
import emailjs from 'emailjs-com'
import i_logo from '../../img/logo.jpg'
import i_cross from '../../img/cross.png'
import i_e_male from '../../img/e-male.png'

function Header() {
  const [myNumber, setMyNumber] = useState()
  const [myNumberColor, setMyNumberColor] = useState(false)
  const [formAct, setFormAct] = useState(false)
  const form = useRef()

  function tapMale(e){  
    e.preventDefault()
    
    let test_ = /_/
    let mes = '+8('+myNumber 
    let sentIt={ message:mes }

    if(test_.test(mes)){
      setMyNumberColor(true)
      console.log();
    }else{
      // emailjs.send('service_askk1km', 'template_lo92gy4', sentIt, '90yHpAPFFgTeZTZVY'
      emailjs.send('service_fdfuaft', 'template_clhsaom', sentIt, 'J9caGvnAf62MFUDqM'
      ).catch(err=> console.log(err))
      actIsNo()
    }
  }

  function actIsNo(){
    setMyNumberColor(false)
    setMyNumber('')
    setFormAct(false)
  }

  const myMenu = ()=>{
    return(
          <div className='header_form_light'>
            <form ref={form} onSubmit={tapMale} className='header_form'>
              <div className='header_form_img_block'>
                <img className='header_form_img' alt='img' src={i_cross} onClick={actIsNo}/>
              </div>
              
              <div className='header_form_fields'>
                <div className='header_form_fields_h2'>Оставить номер телефона</div>
                <div className='header_form_fields_p'>В самое ближайшее время с Вами свяжется наш очень вежливый менеджер и уточнит детали.</div>
                <div className='header_form_fields_type'>
                  <img className='header_form_img_male' alt='img' src={i_e_male}/>
                  <div className='header_block_phone'>
                    

                    {myNumberColor ? 
                      <MaskedInput
                        className='header_form_fields_type_text'
                        mask={[/[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        showMask={true}
                        guide={true}
                        value={myNumber}
                        onChange={(e)=> setMyNumber(e.target.value)}
                        name='message'
                        required
                        style={{backgroundColor:'rgb(255, 211, 211)'}}
                      />
                    : 
                      <MaskedInput
                        className='header_form_fields_type_text'
                        mask={[/[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        showMask={true}
                        guide={true}
                        value={myNumber}
                        onChange={(e)=> setMyNumber(e.target.value)}
                        name='message'
                        required
                      />
                    }
                    <div className='header_block_phone_8'>+7{'('}</div>
                  </div>
                </div>
                <div className='header_form_fields_button_block'>
                  {/* <div className='header_form_fields_button' onClick={(e)=> tapMale(e)}>Отправить</div> */}
                  <button className='header_form_fields_button' onClick={tapMale}>Отправить</button>
                </div>
              </div>
            </form>
        </div>
    )
  }

  return (
    <header>
        <div className='header_ln'>
            <img alt='img' className='header_logo' src={i_logo}/>
            <div className='header_name_block'>
              <div className='header_name'>Потолочки Потолки</div>
              <div className='header_name_text'> Монтаж современных натяжных потолков</div> 
            </div>
        </div>
        <div className='header_els'>
            <div className='header_els_telephone'>
                <div className='header_els_telephone_number'>8 992 028-80-86</div>
                <div className='header_els_telephone_text'>Работаем без выходных!</div>
            </div>
            {/* <input className='header_els_button' type='button' value='Перезвоните мне'/> */}
            <div className='header_els_button' onClick={()=> setFormAct(true)}>Перезвоните мне</div>
        </div>
        {formAct && myMenu()}
    </header>
  )
}

export default Header