const sendWhatsAppMsgLink = 'https://wa.me?text=';

const sendWhatsAppMsg = (msgtext) =>{
    window.open(`${sendWhatsAppMsgLink}${msgtext}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {sendWhatsAppMsg} 