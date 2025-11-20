import AxperForm from "@/components/sections/AxperForm";
import RequirementsInfo from "@/components/sections/RequirementsInfo";
import OwnerOperatorAgreement from "@/components/sections/OwnerOperatorAgreement";
import W9Form from "@/components/forms/W9Form";
// import { InstructionsPage4 } from "@/components/sections/Instructions4";
// import { InstructionsPage6 } from "@/components/sections/Instructions6";

const W9FormDemo = () => {
  return (
    <>
      <RequirementsInfo />
      <AxperForm />
      <OwnerOperatorAgreement />
      <W9Form />
      {/* <InstructionsPage4/> */}
      {/* <InstructionsPage6/> */}
    </>
  );
};

export default W9FormDemo;
