import React, { useState, useEffect, useRef } from 'react';

import globalUtil from '../Utils/globalUtil'

function SendMsg(props) {
    const [txtMsg, setTxtMsg] = useState(props.msg);
    const focusSendMagTxt = useRef();


    const sendWhatsApp = () =>{
        //window.open(`https://wa.me?text=${txtMsg}`)
        globalUtil.sendWhatsAppMsg(txtMsg);
    }

    useEffect(() => {
        if(focusSendMagTxt.current){
            focusSendMagTxt.current.focus(); 
        }
    }, [focusSendMagTxt]);

    return (
        <div>
            <form>
                <div class="form-group purple-border">
                    <textarea ref={focusSendMagTxt} class="sendMsgToFriend" id="exampleInputMessage1"  value={txtMsg} onChange={(e) => setTxtMsg(e.target.value)} />
                </div>
                <button type="button" class="btn btn-primary sendBtn" onClick={() => sendWhatsApp()}>שלחי הודעת whatsapp</button>
            </form>
        </div>
    )
}

export default SendMsg;
