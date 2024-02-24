import React from "react";
import HOME_FLAGBOX from "../home-components/Home_FlagBox";

export default function ORIGINAL_TEXT() {
  return (
    <>
      <div className="col-12 home-input">
        <div className="row home-input-row mt-2">
          <div className="col-12 col-md-7 col-lg-offset-3 mb-2 home-title">
            <div className="row flag-box-title-row">
              <div className="col-2 offset-1  pr-5 flagbox-div">
                <HOME_FLAGBOX />
              </div>
              <div className="col-9 mr-0 home-text">Original Text</div>
            </div>
          </div>
          <div className="col-12 col-md-7 home-textarea-div">
            <div className="row d-flex justify-content-center  home-textarea-row">
              <div className="col-10 textarea-div mb-5 ">
                <textarea className="main-textarea"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
