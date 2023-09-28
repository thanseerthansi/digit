import React from "react";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Filestack from "../Commonpages/Filestack";
import { useContext } from "react";
import { Simplecontext } from "../Commonpages/Simplecontext";
import Axioscall from "../Commonpages/Axioscall";
import { notify } from "../Commonpages/toast";
import { useNavigate } from "react-router-dom";

function CompleteProfile() {
  const [validated, setValidated] = useState(false);
  const { userdetail, Check_Validation,getUser } = useContext(Simplecontext);

  const [employeedata, setemployeedata] = useState({});
  console.log(employeedata, "employeedata");
  const [carddata, setcarddata] = useState({});
  console.log(carddata, "carddata");
  const [addressproof, setaddressproof] = useState({});
  console.log(addressproof, "addressproof");
    const navigate = useNavigate();
  useEffect(() => {
    if (userdetail) {
      console.log(userdetail);
      setemployeedata({
        ...employeedata,
        id: userdetail._id,
        is_verified: userdetail.is_verified,
      });
    }
  }, [userdetail]);

  const handleSubmit = async () => {
    let data = { ...employeedata };
    data.is_verified = "requested";
    try {
      if (carddata.frontUrl && carddata.backUrl) {
        data.idcard = [{ ...carddata }];
      }
      if (addressproof.frontUrl && addressproof.backUrl) {
        data.addressproof = [{ ...addressproof }];
      }
      const response = await Axioscall("put", "employee/personal", data);
      if (response.status === 200) {
        notify("successfully updated");
        getUser()
        return navigate("/employee-profile")
        // console.log("successfully updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Filestackhandler = async (ratio, setvalue, value, keypair) => {
    try {
      let data = await Filestack(ratio);
      if (data) {
        setvalue({ ...value, [keypair]: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <>
          <div className="container">
              <div className="row justify-content-center">
       
                  <Form
                      className="reg-form"
                      noValidate
                      validated={validated}
                      onSubmit={(e) => Check_Validation(e, handleSubmit, setValidated)}>
                      <div className="col-md-12 mb-3">
                          <h5>Verify your profile</h5>
                      </div>
                      <div className="form-card row">

                          <label className="dropdown  col-lg-4 col-md-12 col-sm-12 mt-30">
                              <div className="text__center ">
                                  <select
                                      required
                                      onChange={(e) =>
                                          setcarddata({ ...carddata, type: e.target.value })
                                      }
                                      value={carddata.type ?? ""}
                                      className="cs-select form-control  cs-skin-elastic cs-skin-elastic1">
                                      <option value="" defaultValue="" disabled>
                                          ID Card Type
                                      </option>
                                      <option
                                          disabled={addressproof.type === "Driving License"}
                                          value="Driving License">
                                          Driving License{" "}
                                      </option>
                                      <option
                                          disabled={addressproof.type === "Aadhar"}
                                          value="Aadhar">
                                          Aadhar{" "}
                                      </option>
                                      <option
                                          disabled={addressproof.type === "Passport"}
                                          value="Passport">
                                          Passport
                                      </option>
                                  </select>
                                  <Form.Control.Feedback type="invalid">
                                      Please provide Id card type
                                  </Form.Control.Feedback>
                              </div>
                          </label>
                          <div className="form-group col-lg-4 col-sm-12">
                              <label className="col-sm-12 font-sm color-text-mutted">
                                  Upload ID card front Side*
                              </label>
                              <div className="imageselectorborder d-flex ">
                                  <button
                                      onClick={() =>
                                          Filestackhandler(
                                              "landscape",
                                              setcarddata,
                                              carddata,
                                              "frontUrl"
                                          )
                                      }
                                      type="button"
                                      className="imageselector">
                                      {" "}
                                      Choose Image
                                  </button>
                                  <p style={{ overflow: "hidden" }}>
                                      &nbsp;{carddata.frontUrl ?? <span>No file chosen</span>}
                                  </p>
                              </div>
                          </div>
                          <div className="form-group col-lg-4 col-sm-12">
                              <label className="col-sm-12 font-sm color-text-mutted">
                                  Upload ID card Back Side*
                              </label>
                              <div className="imageselectorborder d-flex ">
                                  <button
                                      onClick={() =>
                                          Filestackhandler(
                                              "landscape",
                                              setcarddata,
                                              carddata,
                                              "backUrl"
                                          )
                                      }
                                      type="button"
                                      className="imageselector">
                                      {" "}
                                      Choose Image
                                  </button>
                                  <p style={{ overflow: "hidden" }}>
                                      &nbsp;{carddata.backUrl ?? <span>No file chosen</span>}
                                  </p>
                              </div>
                          </div>
                          <label className="dropdown col-lg-4 col-sm-12 mt-30">
                              <div className="text__center">
                                  <select
                                      required
                                      onChange={(e) =>
                                          setaddressproof({ ...addressproof, type: e.target.value })
                                      }
                                      value={addressproof.type ?? ""}
                                      className=" form-control cs-select cs-skin-elastic cs-skin-elastic1">
                                      <option value="" defaultValue="" disabled>
                                          Address Proof
                                      </option>
                                      <option
                                          disabled={carddata.type === "Driving License"}
                                          value="Driving License">
                                          Driving License{" "}
                                      </option>
                                      <option
                                          disabled={carddata.type === "Aadhar"}
                                          value="Aadhar">
                                          Aadhar{" "}
                                      </option>
                                      <option
                                          disabled={carddata.type === "Passport"}
                                          value="Passport">
                                          Passport
                                      </option>
                                  </select>
                                  <Form.Control.Feedback type="invalid">
                                      Please provide Address Proof{" "}
                                  </Form.Control.Feedback>
                              </div>
                          </label>
                          <div className="form-group col-lg-4 col-sm-12">
                              <label className="col-sm-12 font-sm color-text-mutted">
                                  Upload Address Proof Front Side*
                              </label>
                              <div className="imageselectorborder d-flex ">
                                  <button
                                      onClick={() =>
                                          Filestackhandler(
                                              "landscape",
                                              setaddressproof,
                                              addressproof,
                                              "frontUrl"
                                          )
                                      }
                                      type="button"
                                      className="imageselector">
                                      {" "}
                                      Choose Image
                                  </button>
                                  <p style={{ overflow: "hidden" }}>
                                      &nbsp;{addressproof.frontUrl ?? <span>No file chosen</span>}
                                  </p>
                              </div>
                          </div>
                          <div className="form-group col-lg-4 col-sm-12 font-sm color-text-mutted">
                              <label className="col-sm-12">
                                  Upload Address Proof Back Side*
                              </label>
                              <div className="imageselectorborder d-flex ">
                                  <button
                                      onClick={() =>
                                          Filestackhandler(
                                              "landscape",
                                              setaddressproof,
                                              addressproof,
                                              "backUrl"
                                          )
                                      }
                                      type="button"
                                      className="imageselector">
                                      {" "}
                                      Choose Image
                                  </button>
                                  <p style={{ overflow: "hidden" }}>
                                      &nbsp;{addressproof.backUrl ?? <span>No file chosen</span>}
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="row d-flex justify-content-end  mt-10 float-right">
                          <div className="">
                              <button
                                  style={{ backgroundColor: "#56b39c", color: "white" }}
                                  className="btn  1 hover-up "
                                  type="submit"
                                  name="login">
                                  update
                              </button>
                          </div>
                      </div>
                  </Form>
              </div>
          </div>
    </>
  );
}

export default CompleteProfile;
