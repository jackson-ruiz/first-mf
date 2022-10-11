import React from "react";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

const SamplePage = () => {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <div>Name: microf1</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <div>
        First MF Input:{" "}
        <InputField
          id="Input1"
          testId="TestId1"
          defaultLabel="Texto desde first-mf"
          type="text"
          required={true}
        />
      </div>
      <div>
        First MF Input:{" "}
        <CustomButton
          id="btn1"
          testId="btnTest1"
          onClick={() => {
            console.log("Click interno desde first-mf");
          }}
          children={<h4>TEXTO DEL BOTON 1</h4>}
        />
      </div>
    </div>
  );
};

export default SamplePage;
