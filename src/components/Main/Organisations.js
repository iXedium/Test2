import React from "react";
import { Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import { organisationData as data } from "../../data/Organisations_data";

import plusSign from "../../assets/images/icons/button_plus.svg";

const Organisations = () => {
  return (
    <div className="x-organisations">
      <h1 className="x-page-title">Organisations</h1>
      <p className="x-breadcrumb">BREADCRUMB</p>
      <div className="x-organisations__container">
        <div className="x-organisations__container__top">
          <Button color='primary'>
            Add Organisation
            <span>
              <img src={plusSign} alt="" />
            </span>
          </Button>
        </div>
        <div className="x-organisations__container__main">
          <MDBDataTable
            btn
            hover
            data={data}
            entries={10}
            info={false}
            entriesLabel=""
            searchLabel=" "
          />
        </div>
      </div>
    </div>
  );
};

export default Organisations;
