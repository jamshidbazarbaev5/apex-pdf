import React from 'react';
import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';
import { DocumentSheet } from './DocumentSheet';

export const W9Page4: React.FC = () => {
  return (
    <DocumentSheet className="text-[10px] leading-[1.3] text-black">
      <AutoSaveStatus />
      {/* Header */}
      <div className="flex justify-between border-b border-black pb-1 mb-4 font-bold">
        <span>Form W-9 (Rev. 3-2024)</span>
        <span>Page 4</span>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-2">
          <p>2—The United States or any of its agencies or instrumentalities.</p>
          <p>3—A state, the District of Columbia, a U.S. commonwealth or territory, or any of their political subdivisions or instrumentalities.</p>
          <p>4—A foreign government or any of its political subdivisions, agencies, or instrumentalities.</p>
          <p>5—A corporation.</p>
          <p>6—A dealer in securities or commodities required to register in the United States, the District of Columbia, or a U.S. commonwealth or territory.</p>
          <p>7—A futures commission merchant registered with the Commodity Futures Trading Commission.</p>
          <p>8—A real estate investment trust.</p>
          <p>9—An entity registered at all times during the tax year under the Investment Company Act of 1940.</p>
          <p>10—A common trust fund operated by a bank under section 584(a).</p>
          <p>11—A financial institution as defined under section 581.</p>
          <p>12—A middleman known in the investment community as a nominee or custodian.</p>
          <p>13—A trust exempt from tax under section 664 or described in section 4947.</p>

          <p className="my-2">The following chart shows types of payments that may be exempt from backup withholding. The chart applies to the exempt payees listed above, 1 through 13.</p>

          {/* Table */}
          <table className="w-full border-collapse border-t-2 border-b-2 border-black text-[9px]">
            <thead>
              <tr className="border-b border-black">
                <th className="text-left p-1 align-top w-1/2">IF the payment is for . . .</th>
                <th className="text-left p-1 align-top w-1/2">THEN the payment is exempt for . . .</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="p-1 align-top flex items-start"><span className="mr-1">•</span> Interest and dividend payments</td>
                <td className="p-1 align-top">All exempt payees except for 7.</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-1 align-top flex items-start"><span className="mr-1">•</span> Broker transactions</td>
                <td className="p-1 align-top">Exempt payees 1 through 4 and 6 through 11 and all C corporations. S corporations must not enter an exempt payee code because they are exempt only for sales of noncovered securities acquired prior to 2012.</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-1 align-top flex items-start"><span className="mr-1">•</span> Barter exchange transactions and patronage dividends</td>
                <td className="p-1 align-top">Exempt payees 1 through 4.</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-1 align-top flex items-start"><span className="mr-1">•</span> Payments over $600 required to be reported and direct sales over $5,000<sup>1</sup></td>
                <td className="p-1 align-top">Generally, exempt payees 1 through 5.<sup>2</sup></td>
              </tr>
              <tr>
                <td className="p-1 align-top flex items-start"><span className="mr-1">•</span> Payments made in settlement of payment card or third-party network transactions</td>
                <td className="p-1 align-top">Exempt payees 1 through 4.</td>
              </tr>
            </tbody>
          </table>

          <div className="text-[8px] space-y-1 mt-1">
            <p><sup>1</sup> See Form 1099-MISC, Miscellaneous Information, and its instructions.</p>
            <p><sup>2</sup> However, the following payments made to a corporation and reportable on Form 1099-MISC are not exempt from backup withholding: medical and health care payments, attorneys' fees, gross proceeds paid to an attorney reportable under section 6045(f), and payments for services paid by a federal executive agency.</p>
          </div>

          <p className="font-bold mt-2">Exemption from FATCA reporting code.</p>
          <p className="text-justify">
            The following codes identify payees that are exempt from reporting under FATCA. These codes apply to persons submitting this form for accounts maintained outside of the United States by certain foreign financial institutions. Therefore, if you are only submitting this form for an account you hold in the United States, you may leave this field blank. Consult with the person requesting this form if you are uncertain if the financial institution is subject to these requirements. A requester may indicate that a code is not required by providing you with a Form W-9 with “Not Applicable” (or any similar indication) entered on the line for a FATCA exemption code.
          </p>

          <p className="pl-4 indent-[-10px]">A—An organization exempt from tax under section 501(a) or any individual retirement plan as defined in section 7701(a)(37).</p>
          <p className="pl-4 indent-[-10px]">B—The United States or any of its agencies or instrumentalities.</p>
          <p className="pl-4 indent-[-10px]">C—A state, the District of Columbia, a U.S. commonwealth or territory, or any of their political subdivisions or instrumentalities.</p>
          <p className="pl-4 indent-[-10px]">D—A corporation the stock of which is regularly traded on one or more established securities markets, as described in Regulations section 1.1472-1(c)(1)(i).</p>
          <p className="pl-4 indent-[-10px]">E—A corporation that is a member of the same expanded affiliated group as a corporation described in Regulations section 1.1472-1(c)(1)(i).</p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2">
          <p className="pl-4 indent-[-10px]">F—A dealer in securities, commodities, or derivative financial instruments (including notional principal contracts, futures, forwards, and options) that is registered as such under the laws of the United States or any state.</p>
          <p className="pl-4 indent-[-10px]">G—A real estate investment trust.</p>
          <p className="pl-4 indent-[-10px]">H—A regulated investment company as defined in section 851 or an entity registered at all times during the tax year under the Investment Company Act of 1940.</p>
          <p className="pl-4 indent-[-10px]">I—A common trust fund as defined in section 584(a).</p>
          <p className="pl-4 indent-[-10px]">J—A bank as defined in section 581.</p>
          <p className="pl-4 indent-[-10px]">K—A broker.</p>
          <p className="pl-4 indent-[-10px]">L—A trust exempt from tax under section 664 or described in section 4947(a)(1).</p>
          <p className="pl-4 indent-[-10px]">M—A tax-exempt trust under a section 403(b) plan or section 457(g) plan.</p>

          <p className="font-bold mt-2">Note:</p>
          <p>You may wish to consult with the financial institution requesting this form to determine whether the FATCA code and/or exempt payee code should be completed.</p>

          <h3 className="font-bold text-[11px] mt-2">Line 5</h3>
          <p className="text-justify">
            Enter your address (number, street, and apartment or suite number). This is where the requester of this Form W-9 will mail your information returns. If this address differs from the one the requester already has on file, enter “NEW” at the top. If a new address is provided, there is still a chance the old address will be used until the payor changes your address in their records.
          </p>

          <h3 className="font-bold text-[11px] mt-2">Line 6</h3>
          <p>Enter your city, state, and ZIP code.</p>

          <h2 className="font-bold text-[14px] mt-3 mb-1">Part I. Taxpayer Identification Number (TIN)</h2>
          <p className="text-justify">
            <b>Enter your TIN in the appropriate box.</b> If you are a resident alien and you do not have, and are not eligible to get, an SSN, your TIN is your IRS ITIN. Enter it in the entry space for the Social security number. If you do not have an ITIN, see <i>How to get a TIN</i> below.
          </p>
          <p className="text-justify mt-1">
            If you are a sole proprietor and you have an EIN, you may enter either your SSN or EIN.
          </p>
          <p className="text-justify mt-1">
            If you are a single-member LLC that is disregarded as an entity separate from its owner, enter the owner’s SSN (or EIN, if the owner has one). If the LLC is classified as a corporation or partnership, enter the entity’s EIN.
          </p>
          <p className="text-justify mt-1">
            <b>Note:</b> See <i>What Name and Number To Give the Requester</i>, later, for further clarification of name and TIN combinations.
          </p>
          <p className="text-justify mt-1">
            <b>How to get a TIN.</b> If you do not have a TIN, apply for one immediately. To apply for an SSN, get Form SS-5, Application for a Social Security Card, from your local SSA office or get this form online at <i>www.SSA.gov</i>. You may also get this form by calling 800-772-1213. Use Form W-7, Application for IRS Individual Taxpayer Identification Number, to apply for an ITIN, or Form SS-4, Application for Employer Identification Number, to apply for an EIN. You can apply for an EIN online by accessing the IRS website at <i>www.irs.gov/EIN</i>. Go to <i>www.irs.gov/Forms</i> to view, download, or print Form W-7 and/or Form SS-4. Or, you can go to <i>www.irs.gov/OrderForms</i> to place an order and have Form W-7 and/or Form SS-4 mailed to you within 15 business days.
          </p>
          <p className="text-justify mt-1">
            If you are asked to complete Form W-9 but do not have a TIN, apply for a TIN and enter “Applied For” in the space for the TIN, sign and date the form, and give it to the requester. For interest and dividend payments, and certain payments made with respect to readily tradable instruments, you will generally have 60 days to get a TIN and give it to the requester before you are subject to backup withholding on payments. The 60-day rule does not apply to other types of payments. You will be subject to backup withholding on all such payments until you provide your TIN to the requester.
          </p>
          <p className="text-justify mt-1">
            <b>Note:</b> Entering “Applied For” means that you have already applied for a TIN or that you intend to apply for one soon. See also <i>Establishing U.S. status for purposes of chapter 3 and chapter 4 withholding</i>, earlier, for when you may instead be subject to withholding under chapter 3 or 4 of the Code.
          </p>
          <p className="text-justify mt-1">
            <b>Caution:</b> A disregarded U.S. entity that has a foreign owner must use the appropriate Form W-8.
          </p>
        </div>
      </div>
    </DocumentSheet>
  );
};