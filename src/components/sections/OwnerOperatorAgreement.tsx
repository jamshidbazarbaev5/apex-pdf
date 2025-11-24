import { AgreementSection1 } from "./agreement/AgreementSection1";
import { AgreementSection2 } from "./agreement/AgreementSection2";
import { AgreementSection3and4 } from "./agreement/AgreementSection3and4";
import { AgreementSections5to11 } from "./agreement/AgreementSections5to11";
import { AgreementAcceptance } from "./agreement/AgreementAcceptance";
import { AgreementAppendix } from "./agreement/AgreementAppendix";

export default function OwnerOperatorAgreement({
  pageNumber: startPageNumber = 6,
}: {
  pageNumber?: number;
}) {
  return (
    <>
      <AgreementSection1 pageNumber={startPageNumber} />
      <AgreementSection2 pageNumber={startPageNumber + 2} />
      <AgreementSection3and4 pageNumber={startPageNumber + 3} />
      <AgreementSections5to11 pageNumber={startPageNumber + 5} />
      <AgreementAcceptance pageNumber={startPageNumber + 12} />
      <AgreementAppendix pageNumber={startPageNumber + 13} />
    </>
  );
}
