import React, { useState } from 'react';

import globalUtil from '../Utils/globalUtil'

function SendMsg(props) {
    const [txtMsg, setTxtMsg] = useState(props.msg);

    const sendWhatsApp = () =>{
        //window.open(`https://wa.me?text=${txtMsg}`)
        globalUtil.sendWhatsAppMsg(txtMsg);
    }

    return (
        <div>
            <form>
                <div class="form-group purple-border">
                    <textarea class="form-control" id="exampleInputMessage1" rows="10" value={txtMsg} onChange={(e) => setTxtMsg(e.target.value)} />
                </div>

                <button type="button" class="btn btn-primary sendBtn" onClick={() => sendWhatsApp()}>שלחי הודעת whatsapp</button>
                
            </form>
        </div>
    )
}

export default SendMsg;
