import fb from '../../assets/images/icons/facebook.svg';
import ig from '../../assets/images/icons/instagram.svg';
import whatsapp from '../../assets/images/icons/whatsapp.svg';
import pinterest from '../../assets/images/icons/pinterest.svg';

const SocialMedia = () =>{
    return(
        <div className='social-media'>
            <img src={fb} alt='facebook'/>
            <img src={ig} alt='instagram'/>
            <img src={whatsapp} alt='whatsapp'/>
            <img src={pinterest} alt='pinterest'/>
        </div>
    )
}
export default SocialMedia;