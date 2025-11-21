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
import { DriverDetailsPage } from "@/components/sections/DriverDetailsPage";
import { VehicleDetailsPage } from "@/components/sections/VehicleDetailsPage";
import { useAppSelector } from "@/store/hooks";
import { DocumentRequirements } from "@/components/sections/DocumentRequirements";
// import { InstructionsPage4 } from "@/components/sections/Instructions4";
// import { InstructionsPage6 } from "@/components/sections/Instructions6";

const W9FormDemo = () => {
  const drivers = useAppSelector(state => state.form.drivers);

  // Calculate dynamic page numbers
  const pageNumbers = {
    requirementsInfo: 1,
    companyInfo: 2,
    driverInfo: 3,
    vehicleInfo: 4,
    // Driver detail pages start at page 5
    firstDriverDetailsStart: 5,
    // After all driver pages, remaining pages continue
  };

  // Calculate where the driver detail pages end
  const driverDetailPageCount = (drivers?.length || 0) * 2;
  const driverDetailPagesEndPage = pageNumbers.firstDriverDetailsStart + driverDetailPageCount - 1;

  // Calculate page numbers for remaining pages
  const remainingPagesStart = driverDetailPagesEndPage + 1;
  const axperFormPage = remainingPagesStart;
  const ownerOperatorPage = remainingPagesStart + 1;
  const w9FormPage = remainingPagesStart + 2;
  const fatcaPage = remainingPagesStart + 3;
  const certificationPage = remainingPagesStart + 4;
  const w9Page4Page = remainingPagesStart + 5;
  const privacyNoticePage = remainingPagesStart + 6;
  const directDepositPage = remainingPagesStart + 7;
  const submitPage = remainingPagesStart + 8;

  return (
    <>
      <RequirementsInfo pageNumber={pageNumbers.requirementsInfo} />
      <CompanyInfoPage pageNumber={pageNumbers.companyInfo} />
      <DriverInfoPage pageNumber={pageNumbers.driverInfo} />
      <VehicleInfoPage pageNumber={pageNumbers.vehicleInfo} />
      
      {/* Render individual driver and vehicle pages */}
      {drivers && drivers.length > 0 && drivers.map((_, index) => (
        <div key={`driver-${index}`}>
          <DriverDetailsPage 
            driverIndex={index} 
            pageNumber={pageNumbers.firstDriverDetailsStart + index * 2} 
          />
          <VehicleDetailsPage 
            driverIndex={index} 
            pageNumber={pageNumbers.firstDriverDetailsStart + index * 2 + 1} 
          />
        </div>
      ))}
      
      <AxperForm pageNumber={axperFormPage} />
      <OwnerOperatorAgreement pageNumber={ownerOperatorPage} />
      <W9Form pageNumber={w9FormPage} />
      <FatcaInfoPage pageNumber={fatcaPage} />
      <CertificationPage pageNumber={certificationPage} />

      <W9Page4 pageNumber={w9Page4Page} />

      {/* <W9Page6 /> */}
      <PrivacyActNoticePage pageNumber={privacyNoticePage} />
      <DirectDepositForm pageNumber={directDepositPage} />
      <DocumentRequirements pageNumber={submitPage} />
      <SubmitFormPage pageNumber={submitPage} />

    </>
  );
};

export default W9FormDemo;
