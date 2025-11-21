
import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';
import { DocumentSheet } from './DocumentSheet';

export const PrivacyActNoticePage = ({  }: { pageNumber?: number }) => {
  return (
    <DocumentSheet>
      <AutoSaveStatus />
      <div className="font-sans text-[11px] leading-snug text-black text-justify h-full">
          {/* Header */}
         <div className="flex justify-between border-b-2 border-black pb-1 mb-6 font-bold text-[12px]">
            <span>Form W-9 (Rev. 3-2024)</span>
            <span>Page 6</span>
         </div>

         <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
               <p>Victims of identity theft who are experiencing economic harm or a systemic problem, or are seeking help in resolving tax problems that have not been resolved through normal channels, may be eligible for Taxpayer Advocate Service (TAS) assistance. You can reach TAS by calling the TAS toll-free case intake line at 877-777-4778 or TTY/TDD 800-829-4059.</p>
               
               <p><b>Protect yourself from suspicious emails or phishing schemes.</b> Phishing is the creation and use of email and websites designed to mimic legitimate business emails and websites. The most common act is sending an email to a user falsely claiming to be an established legitimate enterprise in an attempt to scam the user into surrendering private information that will be used for identity theft.</p>

               <p>The IRS does not initiate contacts with taxpayers via emails. Also, the IRS does not request personal detailed information through email or ask taxpayers for the PIN numbers, passwords, or similar secret access information for their credit card, bank, or other financial accounts.</p>

               <p>If you receive an unsolicited email claiming to be from the IRS, forward this message to <i>phishing@irs.gov</i>. You may also report misuse of the IRS name, logo, or other IRS property to the Treasury Inspector General for Tax Administration (TIGTA) at 800-366-4484. You can forward suspicious emails to the Federal Trade Commission at <i>spam@uce.gov</i> or report them at <i>www.ftc.gov/complaint</i>. You can contact the FTC at <i>www.ftc.gov/idtheft</i> or 877-IDTHEFT (877-438-4338). If you have been the victim of identity theft, see <i>www.IdentityTheft.gov</i> and Pub. 5027.</p>

               <p>Go to <i>www.irs.gov/IdentityTheft</i> to learn more about identity theft and how to reduce your risk.</p>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <h2 className="text-[16px] font-bold mb-1 text-black">Privacy Act Notice</h2>
              <p>Section 6109 of the Internal Revenue Code requires you to provide your correct TIN to persons (including federal agencies) who are required to file information returns with the IRS to report interest, dividends, or certain other income paid to you; mortgage interest you paid; the acquisition or abandonment of secured property; the cancellation of debt; or contributions you made to an IRA, Archer MSA, or HSA. The person collecting this form uses the information on the form to file information returns with the IRS, reporting the above information. Routine uses of this information include giving it to the Department of Justice for civil and criminal litigation and to cities, states, the District of Columbia, and U.S. commonwealths and territories for use in administering their laws. The information may also be disclosed to other countries under a treaty, to federal and state agencies to enforce civil and criminal laws, or to federal law enforcement and intelligence agencies to combat terrorism. You must provide your TIN whether or not you are required to file a tax return. Under section 3406, payors must generally withhold a percentage of taxable interest, dividends, and certain other payments to a payee who does not give a TIN to the payor. Certain penalties may also apply for providing false or fraudulent information.</p>
            </div>
         </div>
      </div>
    </DocumentSheet>
  );
}