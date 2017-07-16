import React from 'react';

function HeaderBottom(props){
  return(
    <div className="banner-bottom">
        <div className="container">
            <div className="col-md-6 w3ls_banner_bottom_left">
                <div className="w3ls_banner_bottom_right1">
                    <h2>Find Loan Products We Offers</h2>
                    <p>Pellentesque convallis diam consequat magna vulputate malesuada.
                        Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac.</p>
                        <p>Lorem Ipsum convallis diam consequat magna vulputate malesuada.
                        Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac.</p>
                    <ul className="some_agile_facts">
                        <li><i className="fa fa-long-arrow-right" aria-hidden="true"></i> Home Loan.</li>
                        <li><i className="fa fa-long-arrow-right" aria-hidden="true"></i> Personal Loan</li>
                        <li><i className="fa fa-long-arrow-right" aria-hidden="true"></i> Education Loan</li>
                        <li><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Car Loan</li>
                    </ul>
                </div>
                <div className="clearfix"> </div>
            </div>
            <div className="col-md-6 w3ls_banner_bottom_right">
                <section className="slider">
                    <div className="flexslider">
                        <ul className="slides">
                            <li>
                                <div className="agileits_w3layouts_banner_bottom_grid">
                                    <img src="images/1.jpg" alt=" " className="img-responsive" />
                                </div>
                            </li>
                            <li>
                                <div className="agileits_w3layouts_banner_bottom_grid">
                                    <img src="images/2.jpg" alt=" " className="img-responsive" />
                                </div>
                            </li>
                            <li>
                                <div className="agileits_w3layouts_banner_bottom_grid">
                                    <img src="images/3.jpg" alt=" " className="img-responsive" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <div className="clearfix"> </div>
        </div>
    </div>
  );
}

export default HeaderBottom;
