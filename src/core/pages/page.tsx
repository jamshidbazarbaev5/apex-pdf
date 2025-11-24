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
import { FieldNavigator } from "@/components/ui/FieldNavigator";
// import { InstructionsPage4 } from "@/components/sections/Instructions4";
// import { InstructionsPage6 } from "@/components/sections/Instructions6";

const W9FormDemo = () => {
  const drivers = useAppSelector((state) => state.form.drivers);

  // Calculate dynamic page numbers
  const pageNumbers = {
    requirementsInfo: 1, // Has 2 pages internally: 1 (Basic) and 2 (Vehicle)
    companyInfo: 3,
    driverInfo: 4,
    vehicleInfo: 5,
    // Driver detail pages start at page 6
    firstDriverDetailsStart: 6,
    // After all driver pages, remaining pages continue
  };

  // Calculate where the driver detail pages end
  const driverDetailPageCount = (drivers?.length || 0) * 2;
  const driverDetailPagesEndPage =
    pageNumbers.firstDriverDetailsStart + driverDetailPageCount - 1;

  // Calculate page numbers for remaining pages
  const remainingPagesStart = driverDetailPagesEndPage + 1;
  const axperFormPage = remainingPagesStart; // Has 2 pages internally
  const ownerOperatorPage = remainingPagesStart + 2; // Starts after AxperForm's 2 pages
  const w9FormPage = remainingPagesStart + 3;
  const fatcaPage = remainingPagesStart + 4;
  const certificationPage = remainingPagesStart + 5;
  const w9Page4Page = remainingPagesStart + 6;
  const privacyNoticePage = remainingPagesStart + 7;
  const directDepositPage = remainingPagesStart + 8;
  const submitPage = remainingPagesStart + 9;

  return (
    <>
      <RequirementsInfo pageNumber={pageNumbers.requirementsInfo} />
      <CompanyInfoPage pageNumber={pageNumbers.companyInfo} />
      <DriverInfoPage pageNumber={pageNumbers.driverInfo} />
      <VehicleInfoPage pageNumber={pageNumbers.vehicleInfo} />

      {/* Render individual driver and vehicle pages */}
      {drivers &&
        drivers.length > 0 &&
        drivers.map((_, index) => (
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

      {/* Floating Field Navigator */}
      <div className="fixed top-4 right-4 z-50 max-w-sm sm:max-w-xs lg:max-w-sm">
        <div className="hidden md:block">
          <FieldNavigator
            className="shadow-2xl bg-white rounded-lg border border-gray-200"
            showFieldInfo={false}
            compact={true}
          />
        </div>
        {/* Mobile version - bottom positioned */}
        <div className="md:hidden fixed bottom-4 left-4 right-4 top-auto max-w-none">
          <FieldNavigator
            className="shadow-2xl bg-white rounded-lg border border-gray-200"
            showFieldInfo={false}
            compact={true}
          />
        </div>
      </div>
    </>
  );
};

export default W9FormDemo;
