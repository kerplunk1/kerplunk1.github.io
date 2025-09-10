import gmail from '../../assets/gmail.svg'
import telegram from '../../assets/telegram.svg'
import github from '../../assets/github.svg'
import twitch from '../../assets/twitch.svg'
import './Contacts.css'

export default function Contacts() {
  return (
    <div className='contacts'> 
      <div className='social'>
        <a href="mailto:cynepsonic@gmail.com" target='_blank' className='social-description'>
          <img src={gmail} alt="gmail" />
          <span>cynepsonic@gmail.com</span>
        </a>
      </div>

      <div className='social'>
        <a href="https://t.me/cynepsonic" target='_blank' className='social-description'>
          <img src={telegram} alt="telegram" />
          <span>https://t.me/cynepsonic</span>
        </a>
      </div>

      <div className='social'>
        <a href="https://github.com/kerplunk1" target='_blank' className='social-description'>
          <img src={github} alt="github" />
          <span>https://github.com/kerplunk1</span>
        </a>
      </div>

      <div className='social'>
        <a href="https://www.twitch.tv/cynepsonic" target='_blank' className='social-description'>
          <img src={twitch} alt="twitch" />
          <span>https://www.twitch.tv/cynepsonic</span>
        </a>
      </div>

    </div>
  );
}