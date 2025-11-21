// import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';
import { DocumentSheet } from './DocumentSheet';

export const FatcaInfoPage = ({ }: { pageNumber?: number }) => {
  return (
    <DocumentSheet>
      {/* <AutoSaveStatus /> */}
      <div className="font-sans text-[11px] leading-snug text-black text-justify h-full">
         {/* Header */}
         <div className="flex justify-between border-b-2 border-black pb-1 mb-6 font-bold text-[12px]">
            <span>Form W-9 (Rev. 3-2024)</span>
            <span>Page 3</span>
         </div>

         <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
               <p>Certain payees and payments are exempt from backup withholding. See <i>Exempt payee code</i>, later, and the separate Instructions for the Requester of Form W-9 for more information.</p>
               <p>See also <i>Establishing U.S. status for purposes of chapter 3 and chapter 4 withholding</i>, earlier.</p>

               <div className="pt-2">
                 <h2 className="text-[16px] font-bold mb-1 text-black">What Is FATCA Reporting?</h2>
                 <p>The Foreign Account Tax Compliance Act (FATCA) requires a participating foreign financial institution to report all U.S. account holders that are specified U.S. persons. Certain payees are exempt from FATCA reporting. See <i>Exemption from FATCA reporting code</i>, later, and the Instructions for the Requester of Form W-9 for more information.</p>
               </div>

               <div className="pt-2">
                 <h2 className="text-[16px] font-bold mb-1 text-black">Updating Your Information</h2>
                 <p>You must provide updated information to any person to whom you claimed to be an exempt payee if you are no longer an exempt payee and anticipate receiving reportable payments in the future from this person. For example, you may need to provide updated information if you are a C corporation that elects to be an S corporation, or if you are no longer tax exempt. In addition, you must furnish a new Form W-9 if the name or TIN changes for the account, for example, if the grantor of a grantor trust dies.</p>
               </div>

               <div className="pt-2">
                 <h2 className="text-[16px] font-bold mb-1 text-black">Penalties</h2>
                 <div className="space-y-2">
                   <p><b>Failure to furnish TIN.</b> If you fail to furnish your correct TIN to a requester, you are subject to a penalty of $50 for each such failure unless your failure is due to reasonable cause and not to willful neglect.</p>
                   <p><b>Civil penalty for false information with respect to withholding.</b> If you make a false statement with no reasonable basis that results in no backup withholding, you are subject to a $500 penalty.</p>
                   <p><b>Criminal penalty for falsifying information.</b> Willfully falsifying certifications or affirmations may subject you to criminal penalties including fines and/or imprisonment.</p>
                   <p><b>Misuse of TINs.</b> If the requester discloses or uses TINs in violation of federal law, the requester may be subject to civil and criminal penalties.</p>
                 </div>
               </div>

               <div className="pt-4">
                 <h2 className="text-[22px] font-bold mb-2 text-black tracking-tight">Specific Instructions</h2>
                 
                 <h3 className="font-bold text-[14px] mb-1">Line 1</h3>
                 <p className="mb-2">You must enter one of the following on this line; <b>do not</b> leave this line blank. The name should match the name on your tax return.</p>
                 <p className="mb-2">If this Form W-9 is for a joint account (other than an account maintained by a foreign financial institution (FFI)), list first, and then circle, the name of the person or entity whose number you entered in Part I of Form W-9. If you are providing Form W-9 to an FFI to document a joint account, each holder of the account that is a U.S. person must provide a Form W-9.</p>
                 
                 <ul className="space-y-2 pl-1">
                   <li className="flex gap-1">
                     <span className="block mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                     <span><b>Individual.</b> Generally, enter the name shown on your tax return. If you have changed your last name without informing the Social Security Administration (SSA) of the name change, enter your first name, the last name as shown on your social security card, and your new last name.</span>
                   </li>
                   <li className="flex gap-1">
                     <span className="block mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                     <span><b>Note for ITIN applicant:</b> Enter your individual name as it was entered on your Form W-7 application, line 1a. This should also be the same as the name you entered on the Form 1040 you filed with your application.</span>
                   </li>
                   <li className="flex gap-1">
                     <span className="block mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                     <span><b>Sole proprietor.</b> Enter your individual name as shown on your Form 1040 on line 1. Enter your business, trade, or "doing business as" (DBA) name on line 2.</span>
                   </li>
                   <li className="flex gap-1">
                     <span className="block mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                     <span><b>Partnership, C corporation, S corporation, or LLC, other than a disregarded entity.</b> Enter the entity's name as shown on the entity's tax return on line 1 and any business, trade, or DBA name on line 2.</span>
                   </li>
                   <li className="flex gap-1">
                     <span className="block mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                     <span><b>Other entities.</b> Enter your name as shown on required U.S. federal tax documents on line 1. This name should match the name shown on the charter or other legal document creating the entity. Enter any business, trade, or DBA name on line 2.</span>
                   </li>
                   <li className="flex gap-1">
                     <span className="block mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                     <span><b>Disregarded entity.</b> In general, a business entity that has a single owner, including an LLC, and is not a corporation, is disregarded as an entity separate from its owner (a disregarded entity). See Regulations section 301.7701-2(c)(2). A disregarded entity should check the appropriate box for the tax classification of its owner. Enter the owner's name on line 1. The name of the owner entered on line 1 should never be a disregarded entity. The name on line 1 should be the name shown on the income tax return on which the income should be reported. For</span>
                   </li>
                 </ul>
               </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
               <p>example, if a foreign LLC that is treated as a disregarded entity for U.S. federal tax purposes has a single owner that is a U.S. person, the U.S. owner's name is required to be provided on line 1. If the direct owner of the entity is also a disregarded entity, enter the first owner that is not disregarded for federal tax purposes. Enter the disregarded entity's name on line 2. If the owner of the disregarded entity is a foreign person, the owner must complete an appropriate Form W-8 instead of a Form W-9. This is the case even if the foreign person has a U.S. TIN.</p>

               <div className="pt-1">
                  <h3 className="font-bold text-[14px] mb-1">Line 2</h3>
                  <p>If you have a business name, trade name, DBA name, or disregarded entity name, enter it on line 2.</p>
               </div>

               <div className="pt-1">
                  <h3 className="font-bold text-[14px] mb-1">Line 3a</h3>
                  <p className="mb-2">Check the appropriate box on line 3a for the U.S. federal tax classification of the person whose name is entered on line 1. Check only one box on line 3a.</p>
                  
                  <table className="w-full border border-black text-[10px] mb-2 text-black bg-white text-left">
                     <thead>
                       <tr className="border-b border-black bg-gray-200">
                         <th className="text-left p-1.5 border-r border-black w-1/2 align-top font-bold text-black">
                            IF the entity/individual on line 1 is a(n) . . .
                         </th>
                         <th className="text-left p-1.5 align-top font-bold text-black">
                            THEN check the box for . . .
                         </th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-black">
                       <tr>
                         <td className="p-1.5 border-r border-black align-top">
                            <div className="flex gap-1 items-start">
                                <span className="mt-1 w-1 h-1 bg-black rounded-full shrink-0"></span>
                                <span>Corporation</span>
                            </div>
                         </td>
                         <td className="p-1.5 align-top">
                            Corporation.
                         </td>
                       </tr>
                       <tr>
                         <td className="p-1.5 border-r border-black align-top">
                            <div className="flex gap-1 items-start mb-0.5">
                                <span className="mt-1 w-1 h-1 bg-black rounded-full shrink-0"></span>
                                <span>Individual or</span>
                            </div>
                            <div className="flex gap-1 items-start">
                                <span className="mt-1 w-1 h-1 bg-black rounded-full shrink-0"></span>
                                <span>Sole proprietorship</span>
                            </div>
                         </td>
                         <td className="p-1.5 align-top">
                            Individual/sole proprietor.
                         </td>
                       </tr>
                       <tr>
                         <td className="p-1.5 border-r border-black align-top">
                            <div className="flex gap-1 items-start mb-0.5">
                                <span className="mt-1 w-1 h-1 bg-black rounded-full shrink-0"></span>
                                <span>LLC classified as a partnership for</span>
                            </div>
                            <div className="mb-0.5 ml-2">
                                U.S. federal tax purposes or
                            </div>
                            <div className="flex gap-1 items-start">
                                <span className="mt-1 w-1 h-1 bg-black rounded-full shrink-0"></span>
                                <span>LLC that has filed Form 8832 or</span>
                            </div>
                             <div className="mb-0.5 ml-2">
                                2553 electing to be taxed as a
                            </div>
                             <div className="ml-2">
                                corporation
                            </div>
                         </td>
                         <td className="p-1.5 align-top">
                             <div className="mb-0.5">Limited liability company and enter</div>
                             <div className="mb-0.5">the appropriate tax classification:</div>
                             <div className="mb-0.5">P = Partnership,</div>
                             <div className="mb-0.5">C = C corporation, or</div>
                             <div>S = S corporation.</div>
                         </td>
                       </tr>
                       <tr>
                         <td className="p-1.5 border-r border-black align-top">
                            <div className="flex gap-1 items-start">
                                <span className="mt-1 w-1 h-1 bg-black rounded-full shrink-0"></span>
                                <span>Partnership</span>
                            </div>
                         </td>
                         <td className="p-1.5 align-top">
                            Partnership.
                         </td>
                       </tr>
                       <tr>
                         <td className="p-1.5 border-r border-black align-top">
                            <div className="flex gap-1 items-start">
                                <span className="mt-1 w-1 h-1 bg-black rounded-full shrink-0"></span>
                                <span>Trust/estate</span>
                            </div>
                         </td>
                         <td className="p-1.5 align-top">
                            Trust/estate.
                         </td>
                       </tr>
                     </tbody>
                  </table>
               </div>

               <div className="pt-1">
                  <h3 className="font-bold text-[14px] mb-1">Line 3b</h3>
                  <p className="mb-2">Check this box if you are a partnership (including an LLC classified as a partnership for U.S. federal tax purposes), trust, or estate that has any foreign partners, owners, or beneficiaries, and you are providing this form to a partnership, trust, or estate, in which you have an ownership interest. You must check the box on line 3b if you receive a Form W-8 (or documentary evidence) from any partner, owner, or beneficiary establishing foreign status or if you receive a Form W-9 from any partner, owner, or beneficiary that has checked the box on line 3b.</p>
                  <p className="mb-2"><b>Note:</b> A partnership that provides a Form W-9 and checks box 3b may be required to complete Schedules K-2 and K-3 (Form 1065). For more information, see the Partnership Instructions for Schedules K-2 and K-3 (Form 1065).</p>
                  <p>If you are required to complete line 3b but fail to do so, you may not receive the information necessary to file a correct information return with the IRS or furnish a correct payee statement to your partners or beneficiaries. See, for example, sections 6698, 6722, and 6724 for penalties that may apply.</p>
               </div>

               <div className="pt-1">
                  <h3 className="font-bold text-[14px] mb-1">Line 4 Exemptions</h3>
                  <p className="mb-2">If you are exempt from backup withholding and/or FATCA reporting, enter in the appropriate space on line 4 any code(s) that may apply to you.</p>
                  
                  <p className="font-bold mb-1">Exempt payee code.</p>
                  <ul className="space-y-1 pl-1">
                     <li className="flex gap-1">
                       <span className="block mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                       <span>Generally, individuals (including sole proprietors) are not exempt from backup withholding.</span>
                     </li>
                     <li className="flex gap-1">
                       <span className="block mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                       <span>Except as provided below, corporations are exempt from backup withholding for certain payments, including interest and dividends.</span>
                     </li>
                     <li className="flex gap-1">
                       <span className="block mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                       <span>Corporations are not exempt from backup withholding for payments made in settlement of payment card or third-party network transactions.</span>
                     </li>
                     <li className="flex gap-1">
                       <span className="block mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                       <span>Corporations are not exempt from backup withholding with respect to attorneys’ fees or gross proceeds paid to attorneys, and corporations that provide medical or health care services are not exempt with respect to payments reportable on Form 1099-MISC.</span>
                     </li>
                  </ul>
                  <p className="mt-2">The following codes identify payees that are exempt from backup withholding. Enter the appropriate code in the space on line 4.</p>
                  <p className="mt-2">1—An organization exempt from tax under section 501(a), any IRA, or a custodial account under section 403(b)(7) if the account satisfies the requirements of section 401(f)(2).</p>
               </div>

            </div>
         </div>
      </div>
    </DocumentSheet>
  );
};