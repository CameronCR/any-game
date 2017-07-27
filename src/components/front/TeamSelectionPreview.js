import React from 'react';

function TeamSelectionPreview(props) {
  const imageUri = 'images/g1.jpg';
  return(
    <li className="nbs-flexisel-item">
        <div className="wthree_gallery_grid">
            <a href="images/g1.jpg" className="lsb-preview" data-lsb-group="header">
                <div className="view second-effect">
                    <img src="images/g1.jpg" alt="" className="img-responsive" />
                    <div className="mask">
                        <p>{props.team.name}</p>
                    </div>
                </div>
            </a>
        </div>
    </li>
  );
}

export default TeamSelectionPreview;
