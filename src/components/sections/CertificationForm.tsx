import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';
import { DocumentSheet } from './DocumentSheet';

export const CertificationPage = () => {
  return (
    <DocumentSheet>
      <AutoSaveStatus />
      <div className="font-sans text-[10px] leading-tight text-black h-full">
         {/* Header */}
         <div className="flex justify-between border-b-2 border-black pb-1 mb-4 font-bold text-[12px]">
            <span>Form W-9 (Rev. 3-2024)</span>
            <span>Page 5</span>
         </div>

         <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
               {/* Part II Certification */}
               <h2 className="text-[16px] font-bold mb-2 text-black">Part II. Certification</h2>
               <p className="mb-2">To establish to the withholding agent that you are a U.S. person, or resident alien, sign Form W-9. You may be requested to sign by the withholding agent even if item 1, 4, or 5 below indicates otherwise.</p>
               <p className="mb-2">For a joint account, only the person whose TIN is shown in Part I should sign (when required). In the case of a disregarded entity, the person identified on line 1 must sign. Exempt payees, see <i>Exempt payee code</i>, earlier.</p>
               <p className="mb-2"><b>Signature requirements.</b> Complete the certification as indicated in items 1 through 5 below.</p>

               <div className="space-y-2 mb-6">
                  <p><b>1. Interest, dividend, and barter exchange accounts opened before 1984 and broker accounts considered active during 1983.</b> You must give your correct TIN, but you do not have to sign the certification.</p>
                  <p><b>2. Interest, dividend, broker, and barter exchange accounts opened after 1983 and broker accounts considered inactive during 1983.</b> You must sign the certification or backup withholding will apply. If you are subject to backup withholding and you are merely providing your correct TIN to the requester, you must cross out item 2 in the certification before signing the form.</p>
                  <p><b>3. Real estate transactions.</b> You must sign the certification. You may cross out item 2 of the certification.</p>
                  <p><b>4. Other payments.</b> You must give your correct TIN, but you do not have to sign the certification unless you have been notified that you have previously given an incorrect TIN. "Other payments" include payments made in the course of the requester's trade or business for rents, royalties, goods (other than bills for merchandise), medical and health care services (including payments to corporations), payments to a nonemployee for services, payments made in settlement of payment card and third-party network transactions, payments to certain fishing boat crew members and fishermen, and gross proceeds paid to attorneys (including payments to corporations).</p>
                  <p><b>5. Mortgage interest paid by you, acquisition or abandonment of secured property, cancellation of debt, qualified tuition program payments (under section 529), ABLE accounts (under section 529A), IRA, Coverdell ESA, Archer MSA or HSA contributions or distributions, and pension distributions.</b> You must give your correct TIN, but you do not have to sign the certification.</p>
               </div>

               {/* Table Header */}
               <h2 className="text-[16px] font-bold mb-1 text-black border-b-2 border-black pb-0.5">What Name and Number To Give the Requester</h2>
               
               {/* Table 1 */}
               <table className="w-full text-left border-collapse mb-4">
                  <thead>
                     <tr className="border-b border-black">
                        <th className="w-1/2 font-bold py-1 pr-2 align-bottom text-[10px]">For this type of account:</th>
                        <th className="w-1/2 font-bold py-1 align-bottom border-l border-black pl-2 text-[10px]">Give name and SSN of:</th>
                     </tr>
                  </thead>
                  <tbody className="align-top">
                     <tr>
                        <td className="py-1 pr-2">1. Individual</td>
                        <td className="py-1 border-l border-black pl-2">The individual</td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2">2. Two or more individuals (joint account) other than an account maintained by an FFI</td>
                        <td className="py-1 border-l border-black pl-2">The actual owner of the account or, if combined funds, the first individual on the account<sup>1</sup></td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2">3. Two or more U.S. persons (joint account maintained by an FFI)</td>
                        <td className="py-1 border-l border-black pl-2">Each holder of the account</td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2">4. Custodial account of a minor (Uniform Gift to Minors Act)</td>
                        <td className="py-1 border-l border-black pl-2">The minor<sup>2</sup></td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2">5. a. The usual revocable savings trust (grantor is also trustee)</td>
                        <td className="py-1 border-l border-black pl-2">The grantor-trustee<sup>1</sup></td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2 pl-3">b. So-called trust account that is not a legal or valid trust under state law</td>
                        <td className="py-1 border-l border-black pl-2">The actual owner<sup>1</sup></td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2">6. Sole proprietorship or disregarded entity owned by an individual</td>
                        <td className="py-1 border-l border-black pl-2">The owner<sup>3</sup></td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2">7. Grantor trust filing under Optional Filing Method 1 (see Regulations section 1.671-4(b)(2)(i)(A))**</td>
                        <td className="py-1 border-l border-black pl-2">The grantor*</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            {/* Right Column */}
            <div>
               {/* Table 2 (Continuation) */}
               <table className="w-full text-left border-collapse mb-4 border-t-2 border-black">
                  <thead>
                     <tr className="border-b border-black">
                        <th className="w-1/2 font-bold py-1 pr-2 align-bottom text-[10px]">For this type of account:</th>
                        <th className="w-1/2 font-bold py-1 align-bottom border-l border-black pl-2 text-[10px]">Give name and EIN of:</th>
                     </tr>
                  </thead>
                  <tbody className="align-top">
                     <tr>
                        <td className="py-1 pr-2">8. Disregarded entity not owned by an individual</td>
                        <td className="py-1 border-l border-black pl-2">The owner</td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2">9. A valid trust, estate, or pension trust</td>
                        <td className="py-1 border-l border-black pl-2">Legal entity<sup>4</sup></td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2">10. Corporation or LLC electing corporate status on Form 8832 or Form 2553</td>
                        <td className="py-1 border-l border-black pl-2">The corporation</td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2">11. Association, club, religious, charitable, educational, or other tax-exempt organization</td>
                        <td className="py-1 border-l border-black pl-2">The organization</td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2">12. Partnership or multi-member LLC</td>
                        <td className="py-1 border-l border-black pl-2">The partnership</td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2">13. A broker or registered nominee</td>
                        <td className="py-1 border-l border-black pl-2">The broker or nominee</td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2">14. Account with the Department of Agriculture in the name of a public entity (such as a state or local government, school district, or prison) that receives agricultural program payments</td>
                        <td className="py-1 border-l border-black pl-2">The public entity</td>
                     </tr>
                     <tr>
                        <td className="py-1 pr-2">15. Grantor trust filing Form 1041 or under the Optional Filing Method 2, requiring Form 1099 (see Regulations section 1.671-4(b)(2)(i)(B))**</td>
                        <td className="py-1 border-l border-black pl-2">The trust</td>
                     </tr>
                  </tbody>
               </table>
               
               {/* Footnotes */}
               <div className="space-y-1 text-[9px] mb-6">
                 <p><sup>1</sup> List first and circle the name of the person whose number you furnish. If only one person on a joint account has an SSN, that person’s number must be furnished.</p>
                 <p><sup>2</sup> Circle the minor’s name and furnish the minor’s SSN.</p>
                 <p><sup>3</sup> You must show your individual name on line 1, and enter your business or DBA name, if any, on line 2. You may use either your SSN or EIN (if you have one), but the IRS encourages you to use your SSN.</p>
                 <p><sup>4</sup> List first and circle the name of the trust, estate, or pension trust. (Do not furnish the TIN of the personal representative or trustee unless the legal entity itself is not designated in the account title.)</p>
                 <p>* <b>Note:</b> The grantor must also provide a Form W-9 to the trustee of the trust.</p>
                 <p>** For more information on optional filing methods for grantor trusts, see the Instructions for Form 1041.</p>
                 <p><b>Note:</b> If no name is circled when more than one name is listed, the number will be considered to be that of the first name listed.</p>
               </div>

               {/* Identity Theft Section */}
               <div>
                 <h2 className="text-[16px] font-bold mb-2 text-black tracking-tight">Secure Your Tax Records From Identity Theft</h2>
                 <p className="mb-2">Identity theft occurs when someone uses your personal information, such as your name, SSN, or other identifying information, without your permission to commit fraud or other crimes. An identity thief may use your SSN to get a job or may file a tax return using your SSN to receive a refund.</p>
                 <p className="mb-2">To reduce your risk:</p>
                 <ul className="space-y-1 pl-1 list-none mb-2">
                   <li>• Protect your SSN,</li>
                   <li>• Ensure your employer is protecting your SSN, and</li>
                   <li>• Be careful when choosing a tax return preparer.</li>
                 </ul>
                 <p className="mb-2">If your tax records are affected by identity theft and you receive a notice from the IRS, respond right away to the name and phone number printed on the IRS notice or letter.</p>
                 <p className="mb-2">If your tax records are not currently affected by identity theft but you think you are at risk due to a lost or stolen purse or wallet, questionable credit card activity, or a questionable credit report, contact the IRS Identity Theft Hotline at 800-908-4490 or submit Form 14039.</p>
                 <p>For more information, see Pub. 5027, Identity Theft Information for Taxpayers.</p>
               </div>
            </div>
         </div>
      </div>
    </DocumentSheet>
  );
};