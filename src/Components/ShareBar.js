import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  TwitterIcon,
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from 'react-share';

export function ShareBar() {
  return (
    <div className='share'>
      {/* <div className='timerNote'>לביטחונך השאלון מאובטח ויסגר תוך:</div> */}

      <h6 >

        מכירה חברה שצריכה עזרה?    <br /> שלחי גם לה את השאלון
      </h6>
      <EmailShareButton url={window.location.href}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <FacebookShareButton url={window.location.href}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton url={window.location.href}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <TwitterShareButton url={window.location.href}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton url={window.location.href}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
    </div>
  );
}
