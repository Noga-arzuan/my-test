const sendWhatsAppMsgLink = 'https://wa.me?text=';

const sendWhatsAppMsg = (msgtext) =>{
    alert('1111')
    window.open(`${sendWhatsAppMsgLink}${msgtext}`);
}

export default {sendWhatsAppMsg} 