const sendWhatsAppMsgLink = 'https://wa.me?text=';

const sendWhatsAppMsg = (msgtext) =>{
    window.open(`${sendWhatsAppMsgLink}${msgtext}`);
}

export default {sendWhatsAppMsg} 