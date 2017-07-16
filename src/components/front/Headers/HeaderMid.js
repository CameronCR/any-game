import React from 'react';

function HeaderMid(props){
  return(
    <div className="header_mid">
       <div className="w3layouts_header_mid">
          <ul>
             <li>
                <div className="header_contact_details_agile">
                   <i className="fa fa-envelope-o" aria-hidden="true"></i>
                   <div className="w3l_header_contact_details_agile">
                      <div className="header-contact-detail-title">Send us a Message</div>
                      <a href="mailto:info@example.com">info@example.com</a>
                   </div>
                </div>
             </li>
             <li>
                <div className="header_contact_details_agile">
                   <i className="fa fa-phone" aria-hidden="true"></i>
                   <div className="w3l_header_contact_details_agile">
                      <div className="header-contact-detail-title">Give us a Call</div>
                      <a className="w3l_header_contact_details_agile-info_inner"> 919-993-1000 </a>
                   </div>
                </div>
             </li>
             <li>
                <div className="header_contact_details_agile">
                   <i className="fa fa-clock-o" aria-hidden="true"></i>
                   <div className="w3l_header_contact_details_agile">
                      <div className="header-contact-detail-title">Opening Hours</div>
                      <a className="w3l_header_contact_details_agile-info_inner">Mon - Sat: 7:00 - 18:00</a>
                   </div>
                </div>
             </li>
             <li>
                <div className="header_contact_details_agile">
                   <i className="fa fa-map-marker" aria-hidden="true"></i>
                   <div className="w3l_header_contact_details_agile">
                      <div className="header-contact-detail-title">3007 Sarah Drive</div>
                      <a className="w3l_header_contact_details_agile-info_inner">Franklin, LA 70538 </a>
                   </div>
                </div>
             </li>
          </ul>
       </div>
    </div>
  );
}

export default HeaderMid;
