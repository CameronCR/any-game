import React from 'react';

function ContactBanner(props){
  return(
    <div className="header_mid">
       <div className="w3layouts_header_mid">
          <ul>
             <li>
               <a href="mailto:info@anygame.io">
                <div className="header_contact_details_agile">
                   <i className="fa fa-envelope-o" aria-hidden="true"></i>
                   <div className="w3l_header_contact_details_agile">
                      <div className="header-contact-detail-title">Send us a Message</div>
                      info@anygame.io
                   </div>
                </div>
              </a>
             </li>
             <li>
                <div className="header_contact_details_agile">
                   <i className="fa fa-phone" aria-hidden="true"></i>
                   <div className="w3l_header_contact_details_agile">
                      <div className="header-contact-detail-title">Give us a Call</div>
                      <a className="w3l_header_contact_details_agile-info_inner"> 310-906-0226 </a>
                   </div>
                </div>
             </li>
             <li>
                <div className="header_contact_details_agile">
                   <i className="fa fa-clock-o" aria-hidden="true"></i>
                   <div className="w3l_header_contact_details_agile">
                      <div className="header-contact-detail-title">Opening Hours</div>
                      <a className="w3l_header_contact_details_agile-info_inner">24 hours a day</a>
                   </div>
                </div>
             </li>
             <li>
                <div className="header_contact_details_agile">
                   <i className="fa fa-map-marker" aria-hidden="true"></i>
                   <div className="w3l_header_contact_details_agile">
                      <div className="header-contact-detail-title">8331 Holy Cross Place</div>
                      <a className="w3l_header_contact_details_agile-info_inner">Los Angeles, CA 90045 </a>
                   </div>
                </div>
             </li>
          </ul>
       </div>
    </div>
  );
}

export default ContactBanner;
