import AxperForm from "@/components/sections/AxperForm";
import RequirementsInfo from "@/components/sections/RequirementsInfo";
import OwnerOperatorAgreement from "@/components/sections/OwnerOperatorAgreement";
import W9Form from "@/components/forms/W9Form";
import { W9Page4 } from "@/components/sections/Instructions4";
// import { W9Page6 } from "@/components/sections/Instructions6";
import { DirectDepositForm } from "@/components/sections/DirectDepositForm";
import { FatcaInfoPage } from "@/components/sections/FatcalInfo";
import { PrivacyActNoticePage } from "@/components/sections/PrivacyActNotice";
import { DriverInfoPage } from "@/components/sections/DriverInfoPage";
import { CompanyInfoPage } from "@/components/sections/CompanyInfoPage";
import { VehicleInfoPage } from "@/components/sections/VehileInfoPage";
import { CertificationPage } from "@/components/sections/CertificationForm";
import { SubmitFormPage } from "@/components/sections/SubmitFormPage";
// import { InstructionsPage4 } from "@/components/sections/Instructions4";
// import { InstructionsPage6 } from "@/components/sections/Instructions6";

const W9FormDemo = () => {
  return (
    <>
      <RequirementsInfo />
      <CompanyInfoPage />
      <DriverInfoPage />
      <VehicleInfoPage />
      <AxperForm />
      <OwnerOperatorAgreement />
      <W9Form />
      <FatcaInfoPage />
      <CertificationPage />

      <W9Page4 />

      {/* <W9Page6 /> */}
      <PrivacyActNoticePage />
      <DirectDepositForm />
      <SubmitFormPage />
    </>
  );
};

export default W9FormDemo;
