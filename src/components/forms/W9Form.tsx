import React from "react";
import { SignButton } from "@/components/ui/SignButton";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";
import { AutoSaveStatus } from "@/components/ui/AutoSaveStatus";

const W9Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.form);

  const handleChange = (name: string, value: string | boolean) => {
    dispatch(updateFormData({ [name]: value }));
  };

  return (
    <div className="w-full max-w-none mx-auto bg-white font-serif text-black">
      <AutoSaveStatus />
      {/* PAGE 1 */}
      <div className="w-[8.5in] mx-auto p-0 print:p-0 mb-8">
        <div className="border border-black">
          {/* Header */}
          <div className="flex border-b-2 border-black">
            <div className="w-[2.2in] border-r-2 border-black p-2 flex flex-col items-center justify-center">
              <div className="text-5xl font-bold leading-none">W-9</div>
              <div className="text-[7pt] leading-tight text-center mt-0.5">
                Form
              </div>
              <div className="text-[7pt] leading-tight text-center">
                (Rev. March 2024)
              </div>
              <div className="text-[7pt] leading-tight text-center mt-1">
                Department of the Treasury
              </div>
              <div className="text-[7pt] leading-tight text-center">
                Internal Revenue Service
              </div>
            </div>

            <div className="flex-1 border-r-2 border-black p-3 flex flex-col justify-center">
              <div className="text-xl font-bold text-center leading-tight">
                Request for Taxpayer
              </div>
              <div className="text-xl font-bold text-center leading-tight">
                Identification Number and Certification
              </div>
              <div className="text-[8pt] text-center mt-2">
                <span className="font-bold">Go to </span>
                <span className="italic">www.irs.gov/FormW9</span>
                <span className="font-bold">
                  {" "}
                  for instructions and the latest information.
                </span>
              </div>
            </div>

            <div className="w-[1.8in] p-2 flex flex-col justify-center">
              <div className="text-[8pt] font-bold text-center leading-tight">
                Give form to the requester. Do not send to the IRS.
              </div>
            </div>
          </div>

          {/* Instructions Row */}
          <div className="bg-gray-100 p-2 border-b border-black text-[7pt]">
            <span className="font-bold">Before you begin.</span> For guidance
            related to the purpose of Form W-9, see{" "}
            <span className="italic">Purpose of Form</span>, below.
          </div>

          {/* Form Fields Section */}
          <div className="border-b-2 border-black">
            {/* Field 1 */}
            <div className="flex border-b border-black">
              <div className="w-8 border-r border-black p-1 flex items-start justify-center text-[9pt] font-bold">
                1
              </div>
              <div className="flex-1 p-2">
                <div className="text-[16px] leading-tight mb-1">
                  Name of entity/individual. An entry is required. (For a sole
                  proprietor or disregarded entity, enter the owner's name on
                  line 1, and enter the business/disregarded entity's name on
                  line 2.)
                </div>
                <input
                  type="text"
                  name="w9Name"
                  value={formData.w9Name}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  className="w-full border-b border-black outline-none bg-transparent text-[10pt] py-1"
                />
              </div>
            </div>

            {/* Field 2 */}
            <div className="flex border-b border-black">
              <div className="w-8 border-r border-black p-1 flex items-start justify-center text-[9pt] font-bold">
                2
              </div>
              <div className="flex-1 p-2">
                <div className="text-[16px] leading-tight mb-1">
                  Business name/disregarded entity name, if different from
                  above.
                </div>
                <input
                  type="text"
                  name="w9BusinessName"
                  value={formData.w9BusinessName}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  className="w-full border-b border-black outline-none bg-transparent text-[10pt] py-1"
                />
              </div>
            </div>

            {/* Field 3 - Tax Classification */}
            <div className="flex border-b border-black">
              <div className="w-8 border-r border-black flex flex-col">
                <div className="p-1 text-[9pt] font-bold text-center border-b border-black">
                  3a
                </div>
                <div className="flex-1"></div>
                <div className="p-1 text-[9pt] font-bold text-center border-t border-black">
                  3b
                </div>
              </div>
              <div className="flex-1">
                {/* 3a */}
                <div className="p-2 border-b border-black">
                  <div className="text-[16px] leading-tight mb-2">
                    Check the appropriate box for federal tax classification of
                    the entity/individual whose name is entered on line 1. Check
                    only one of the following seven boxes.
                  </div>
                  <div className="grid grid-cols-3 gap-x-4 gap-y-1.5 text-[8pt]">
                    <label className="flex items-center gap-1.5">
                      <input
                        type="checkbox"
                        name="w9TaxClassification"
                        value="individual"
                        checked={formData.w9TaxClassification === "individual"}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.checked ? "individual" : "")
                        }
                        className="w-3 h-3 border border-black"
                      />
                      <span>Individual/sole proprietor</span>
                    </label>
                    <label className="flex items-center gap-1.5">
                      <input
                        type="checkbox"
                        name="w9TaxClassification"
                        value="c-corp"
                        checked={formData.w9TaxClassification === "c-corp"}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.checked ? "c-corp" : "")
                        }
                        className="w-3 h-3 border border-black"
                      />
                      <span>C corporation</span>
                    </label>
                    <label className="flex items-center gap-1.5">
                      <input
                        type="checkbox"
                        name="w9TaxClassification"
                        value="s-corp"
                        checked={formData.w9TaxClassification === "s-corp"}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.checked ? "s-corp" : "")
                        }
                        className="w-3 h-3 border border-black"
                      />
                      <span>S corporation</span>
                    </label>
                    <label className="flex items-center gap-1.5">
                      <input
                        type="checkbox"
                        name="w9TaxClassification"
                        value="partnership"
                        checked={formData.w9TaxClassification === "partnership"}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.checked ? "partnership" : "")
                        }
                        className="w-3 h-3 border border-black"
                      />
                      <span>Partnership</span>
                    </label>
                    <label className="flex items-center gap-1.5">
                      <input
                        type="checkbox"
                        name="w9TaxClassification"
                        value="trust"
                        checked={formData.w9TaxClassification === "trust"}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.checked ? "trust" : "")
                        }
                        className="w-3 h-3 border border-black"
                      />
                      <span>Trust/estate</span>
                    </label>
                  </div>
                  <div className="mt-1.5 text-[8pt]">
                    <label className="flex items-start gap-1.5">
                      <input
                        type="checkbox"
                        name="w9TaxClassification"
                        value="llc"
                        checked={formData.w9TaxClassification === "llc"}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.checked ? "llc" : "")
                        }
                        className="w-3 h-3 border border-black mt-0.5"
                      />
                      <div>
                        <span>
                          LLC. Enter the tax classification (C=C corporation,
                          S=S corporation, P=partnership){" "}
                        </span>
                        <span className="font-bold">Note:</span>
                        <span className="text-[7pt]">
                          {" "}
                          Check the "LLC" box above and, in the entry space,
                          enter the appropriate code (C, S, or P) for the tax
                          classification of the LLC, unless it is a disregarded
                          entity. A disregarded entity should instead check the
                          appropriate box for the tax classification of its
                          owner.
                        </span>
                      </div>
                    </label>
                    <input
                      type="text"
                      name="w9LlcClassification"
                      value={formData.w9LlcClassification}
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                      className="ml-5 w-12 border-b border-black outline-none bg-transparent text-[10pt] mt-1"
                    />
                  </div>
                  <div className="mt-1.5 text-[8pt]">
                    <label className="flex items-center gap-1.5">
                      <input
                        type="checkbox"
                        name="w9TaxClassification"
                        value="other"
                        checked={formData.w9TaxClassification === "other"}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.checked ? "other" : "")
                        }
                        className="w-3 h-3 border border-black"
                      />
                      <span>Other (see instructions) </span>
                    </label>
                  </div>
                </div>

                {/* 3b */}
                <div className="p-2">
                  <div className="text-[16px] leading-tight">
                    If on line 3a you checked "Partnership" or "Trust/estate,"
                    or checked "LLC" and entered "P" as its tax classification,
                    and you are providing this form to a partnership, trust, or
                    estate in which you have an ownership interest, check this
                    box if you have any foreign partners, owners, or
                    beneficiaries. See instructions
                    <input
                      type="checkbox"
                      name="w9HasForeignPartners"
                      checked={formData.w9HasForeignPartners}
                      onChange={(e) => handleChange(e.target.name, e.target.checked)}
                      className="w-3 h-3 border border-black ml-2"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Exemptions */}
              <div className="w-[2.5in] border-l border-black p-2">
                <div className="text-[16px] font-bold mb-1">
                  4 Exemptions (codes apply only to certain entities, not
                  individuals; see instructions on page 3):
                </div>
                <div className="text-[16px] mb-2">
                  Exempt payee code (if any)
                </div>
                <input
                  type="text"
                  name="w9ExemptPayeeCode"
                  value={formData.w9ExemptPayeeCode}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  className="w-full border border-black outline-none bg-transparent text-[10pt] px-1 py-0.5 mb-3"
                />
                <div className="text-[16px] mb-2">
                  Exemption from Foreign Account Tax Compliance Act (FATCA)
                  reporting code (if any)
                </div>
                <input
                  type="text"
                  name="w9FatcaCode"
                  value={formData.w9FatcaCode}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  className="w-full border border-black outline-none bg-transparent text-[10pt] px-1 py-0.5 mb-3"
                />
                <div className="text-[6pt] italic leading-tight">
                  (Applies to accounts maintained outside the United States.)
                </div>
              </div>
            </div>

            {/* Field 5 & 6 */}
            <div className="flex border-b border-black">
              <div className="flex-1 border-r border-black">
                <div className="flex border-b border-black">
                  <div className="w-8 border-r border-black p-1 flex items-center justify-center text-[9pt] font-bold">
                    5
                  </div>
                  <div className="flex-1 p-2">
                    <div className="text-[16px] leading-tight mb-1">
                      Address (number, street, and apt. or suite no.). See
                      instructions.
                    </div>
                    <input
                      type="text"
                      name="w9Address"
                      value={formData.w9Address}
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                      className="w-full border-b border-black outline-none bg-transparent text-[10pt] py-1"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 border-r border-black p-1 flex items-center justify-center text-[9pt] font-bold">
                    6
                  </div>
                  <div className="flex-1 p-2">
                    <div className="text-[16px] leading-tight mb-1">
                      City, state, and ZIP code
                    </div>
                    <input
                      type="text"
                      name="w9CityStateZip"
                      value={formData.w9CityStateZip}
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                      className="w-full border-b border-black outline-none bg-transparent text-[10pt] py-1"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[2.5in] p-2">
                <div className="text-[16px] leading-tight">
                  Requester's name and address (optional)
                </div>
                <textarea className="w-full h-20 mt-1 outline-none bg-transparent text-[9pt] resize-none" />
              </div>
            </div>

            {/* Field 7 */}
            <div className="flex">
              <div className="w-8 border-r border-black p-1 flex items-center justify-center text-[9pt] font-bold">
                7
              </div>
              <div className="flex-1 p-2">
                <div className="text-[16px] leading-tight mb-1">
                  List account number(s) here (optional)
                </div>
                <input
                  type="text"
                  name="w9AccountNumbers"
                  value={formData.w9AccountNumbers}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  className="w-full border-b border-black outline-none bg-transparent text-[10pt] py-1"
                />
              </div>
            </div>
          </div>

          {/* Part I - TIN Section */}
          <div className="border-b-2 border-black">
            <div className="bg-gray-800 text-white px-2 py-1 text-[9pt] font-bold flex items-center gap-2">
              <span>Part I</span>
              <span className="font-normal">
                Taxpayer Identification Number (TIN)
              </span>
            </div>
            <div className="p-2">
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="text-[16px] leading-tight mb-2">
                    Enter your TIN in the appropriate box. The TIN provided must
                    match the name given on line 1 to avoid backup withholding.
                    For individuals, this is generally your social security
                    number (SSN). However, for a resident alien, sole
                    proprietor, or disregarded entity, see the instructions for
                    Part I, later. For other entities, it is your employer
                    identification number (EIN). If you do not have a number,
                    see <span className="italic">How to get a TIN</span>, later.
                  </div>
                  <div className="text-[16px] leading-tight mb-2">
                    <span className="font-bold">Note:</span> If the account is
                    in more than one name, see the instructions for line 1. See
                    also{" "}
                    <span className="italic">
                      What Name and Number To Give the Requester
                    </span>{" "}
                    for guidelines on whose number to enter.
                  </div>
                </div>
                <div className="w-[2.8in]">
                  <div className="border border-black p-2">
                    <div className="text-[8pt] font-bold mb-2">
                      Social security number
                    </div>
                    <div className="flex gap-1 mb-3">
                      <input
                        type="text"
                        name="w9Ssn1"
                        value={formData.w9Ssn1}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        maxLength={3}
                        className="w-12 h-8 border border-black text-center outline-none bg-transparent text-[12pt]"
                      />
                      <span className="text-xl flex items-center">–</span>
                      <input
                        type="text"
                        name="w9Ssn2"
                        value={formData.w9Ssn2}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        maxLength={2}
                        className="w-10 h-8 border border-black text-center outline-none bg-transparent text-[12pt]"
                      />
                      <span className="text-xl flex items-center">–</span>
                      <input
                        type="text"
                        name="w9Ssn3"
                        value={formData.w9Ssn3}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        maxLength={4}
                        className="w-14 h-8 border border-black text-center outline-none bg-transparent text-[12pt]"
                      />
                    </div>
                    <div className="text-[8pt] text-center mb-1">or</div>
                    <div className="text-[8pt] font-bold mb-2">
                      Employer identification number
                    </div>
                    <div className="flex gap-1 justify-center">
                      <input
                        type="text"
                        name="w9Ein1"
                        value={formData.w9Ein1}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        maxLength={2}
                        className="w-10 h-8 border border-black text-center outline-none bg-transparent text-[12pt]"
                      />
                      <span className="text-xl flex items-center">–</span>
                      <input
                        type="text"
                        name="w9Ein2"
                        value={formData.w9Ein2}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        maxLength={7}
                        className="w-20 h-8 border border-black text-center outline-none bg-transparent text-[12pt]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Part II - Certification */}
          <div className="border-b-2 border-black">
            <div className="bg-gray-800 text-white px-2 py-1 text-[9pt] font-bold flex items-center gap-2">
              <span>Part II</span>
              <span className="font-normal">Certification</span>
            </div>
            <div className="p-2 text-[16px] leading-tight">
              <div className="mb-1">
                Under penalties of perjury, I certify that:
              </div>
              <div className="mb-1">
                1. The number shown on this form is my correct taxpayer
                identification number (or I am waiting for a number to be issued
                to me); and
              </div>
              <div className="mb-1">
                2. I am not subject to backup withholding because (a) I am
                exempt from backup withholding, or (b) I have not been notified
                by the Internal Revenue Service (IRS) that I am subject to
                backup withholding as a result of a failure to report all
                interest or dividends, or (c) the IRS has notified me that I am
                no longer subject to backup withholding; and
              </div>
              <div className="mb-1">
                3. I am a U.S. citizen or other U.S. person (defined below); and
              </div>
              <div className="mb-2">
                4. The FATCA code(s) entered on this form (if any) indicating
                that I am exempt from FATCA reporting is correct.
              </div>
              <div className="mb-2">
                <span className="font-bold">Certification instructions.</span>{" "}
                You must cross out item 2 above if you have been notified by the
                IRS that you are currently subject to backup withholding because
                you have failed to report all interest and dividends on your tax
                return. For real estate transactions, item 2 does not apply. For
                mortgage interest paid, acquisition or abandonment of secured
                property, cancellation of debt, contributions to an individual
                retirement arrangement (IRA), and generally, payments other than
                interest and dividends, you are not required to sign the
                certification, but you must provide your correct TIN. See the
                instructions for Part II, later.
              </div>
            </div>
            <div className="flex border-t border-black">
              <div className="w-24 border-r border-black bg-gray-100 p-2 flex flex-col items-center justify-center">
                <div className="text-[8pt] font-bold">Sign</div>
                <div className="text-[8pt] font-bold">Here</div>
              </div>
              <div className="flex-1 flex">
                <div className="flex-1 border-r border-black p-2">
                  <div className="text-[16px] mb-1 text-center font-bold">
                    Signature of U.S. person
                  </div>
                  <div className="flex justify-center items-center">
                    <SignButton
                      value={formData.signature1}
                      onChange={(value) => {
                        dispatch(updateFormData({ 
                          signature1: value,
                          globalSignature: value,
                        }));
                      }}
                      placeholder="Click to add signature"
                      fieldName="w9Signature"
                    />
                  </div>
                </div>
                <div className="w-32 p-2">
                  <div className="text-[16px] mb-1">Date</div>
                  <input
                    type="text"
                    name="date1"
                    value={formData.date1}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    className="w-full border-b border-black outline-none bg-transparent text-[10pt] h-8"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* General Instructions Section */}
          <div className="p-3">
            <div className="flex gap-6">
              <div className="flex-1">
                <h2 className="text-[11pt] font-bold mb-2">
                  General Instructions
                </h2>
                <div className="text-[16px] leading-tight space-y-2">
                  <p>
                    Section references are to the Internal Revenue Code unless
                    otherwise noted.
                  </p>
                  <p>
                    <span className="font-bold">Future developments.</span> For
                    the latest information about developments related to Form
                    W-9 and its instructions, such as legislation enacted after
                    they were published, go to{" "}
                    <span className="italic">www.irs.gov/FormW9</span>.
                  </p>
                </div>

                <h3 className="text-[10pt] font-bold mt-3 mb-2">What's New</h3>
                <div className="text-[16px] leading-tight">
                  <p>
                    Line 3a has been modified to clarify how a disregarded
                    entity completes this line. An LLC that is a disregarded
                    entity should check the appropriate box for the tax
                    classification of its owner. Otherwise, it should check the
                    "LLC" box and enter its appropriate tax classification.
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <div className="text-[16px] leading-tight space-y-2 mb-4">
                  <p>
                    New line 3b has been added to this form. A flow-through
                    entity is required to complete this line to indicate that it
                    has direct or indirect foreign partners, owners, or
                    beneficiaries when it provides the Form W-9 to another
                    flow-through entity in which it has an ownership interest.
                    This line does not apply if the flow-through entity has no
                    information regarding the status of its indirect foreign
                    partners, owners, or beneficiaries, so that it can satisfy
                    any applicable reporting requirements. For example, a
                    partnership that has any indirect foreign partners may be
                    required to complete Schedules K-2 and K-3 (Form 1065). See
                    the Partnership Instructions for Schedules K-2 and K-3 (Form
                    1065).
                  </p>
                </div>

                <h3 className="text-[10pt] font-bold mb-2">Purpose of Form</h3>
                <div className="text-[16px] leading-tight">
                  <p>
                    An individual or entity (Form W-9 requester) who is required
                    to file an information return with the IRS is giving you
                    this form because they
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center px-3 py-1 text-[6pt] border-t border-black">
            <div>Cat. No. 10231X</div>
            <div>
              Form <span className="font-bold text-[8pt]">W-9</span> (Rev.
              3-2024)
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 2 */}
      <div className="w-[8.5in] mx-auto p-0 print:p-0">
        <div className='border-1 border-black'>
          {/* Page Header */}
          <div className="flex justify-between items-start px-3 py-2 border-b border-black">
            <div className="text-[8pt]">Form W-9 (Rev. 3-2024)</div>
            <div className="text-[8pt]">
              Page <span className="font-bold text-[10pt]">2</span>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="flex px-3 py-2">
            {/* Left Column */}
            <div className="flex-1 pr-4 text-[16px] leading-[1.3] space-y-1">
              <p>
                must obtain your correct taxpayer identification number (TIN),
                which may be your social security number (SSN), individual
                taxpayer identification number (ITIN), adoption taxpayer
                identification number (ATIN), or employer identification number
                (EIN), to report on an information return the amount paid to
                you, or other amount reportable on an information return.
                Examples of information returns include, but are not limited to,
                the following.
              </p>

              <div className="space-y-0">
                <p>• Form 1099-INT (interest earned or paid).</p>
                <p>
                  • Form 1099-DIV (dividends, including those from stocks or
                  mutual funds).
                </p>
                <p>
                  • Form 1099-MISC (various types of income, prizes, awards, or
                  gross proceeds).
                </p>
                <p>• Form 1099-NEC (nonemployee compensation).</p>
                <p>
                  • Form 1099-B (stock or mutual fund sales and certain other
                  transactions by brokers).
                </p>
                <p>• Form 1099-S (proceeds from real estate transactions).</p>
                <p>
                  • Form 1099-K (merchant card and third-party network
                  transactions).
                </p>
                <p>
                  • Form 1098 (home mortgage interest), 1098-E (student loan
                  interest), and 1098-T (tuition).
                </p>
                <p>• Form 1099-C (canceled debt).</p>
                <p>
                  • Form 1099-A (acquisition or abandonment of secured
                  property).
                </p>
              </div>

              <p>
                Use Form W-9 only if you are a U.S. person (including a resident
                alien), to provide your correct TIN.
              </p>

              <p>
                <span className="font-bold">Caution:</span> If you don't return
                Form W-9 to the requester with a TIN, you might be subject to
                backup withholding. See{" "}
                <span className="italic">What is backup withholding</span>,
                later.
              </p>

              <p className="font-bold pt-1">
                By signing the filled-out form, you:
              </p>

              <p>
                1. Certify that the TIN you are giving is correct (or you are
                waiting for a number to be issued);
              </p>

              <p>
                2. Certify that you are not subject to backup withholding; or
              </p>

              <p>
                3. Claim exemption from backup withholding if you are a U.S.
                exempt payee; and
              </p>

              <p>
                4. Certify to your non-foreign status for purposes of
                withholding under chapter 3 or 4 of the Code (if applicable);
                and
              </p>

              <p>
                5. Certify that FATCA code(s) entered on this form (if any)
                indicating that you are exempt from the FATCA reporting is
                correct. See{" "}
                <span className="italic">What Is FATCA Reporting</span>, later,
                for further information.
              </p>

              <p>
                <span className="font-bold">Note:</span> If you are a U.S.
                person and a requester gives you a form other than Form W-9 to
                request your TIN, you must use the requester's form if it is
                substantially similar to this Form W-9.
              </p>

              <p className="font-bold pt-1">
                Definition of a U.S. person. For federal tax purposes, you are
                considered a U.S. person if you are:
              </p>

              <div className="space-y-0">
                <p>
                  • An individual who is a U.S. citizen or U.S. resident alien;
                </p>
                <p>
                  • A partnership, corporation, company, or association created
                  or organized in the United States or under the laws of the
                  United States;
                </p>
                <p>• An estate (other than a foreign estate); or</p>
                <p>
                  • A domestic trust (as defined in Regulations section
                  301.7701-7).
                </p>
              </div>

              <p className="font-bold pt-1">
                Establishing U.S. status for purposes of chapter 3 and chapter 4
                withholding.
              </p>

              <p>
                Payments made to foreign persons, including certain
                distributions, allocations of income, or transfers of sales
                proceeds, may be subject to withholding under chapter 3 or
                chapter 4 of the Code (sections 1441–1474). Under those rules,
                if a Form W-9 or other certification of non-foreign status has
                not been received, a withholding agent, transferee, or
                partnership (payor) generally applies presumption rules that may
                require the payor to withhold applicable tax from the recipient,
                owner, transferor, or partner (payee). See Pub. 515, Withholding
                of Tax on Nonresident Aliens and Foreign Entities.
              </p>

              <p>
                The following persons must provide Form W-9 to the payor for
                purposes of establishing its non-foreign status.
              </p>

              <div className="space-y-0">
                <p>
                  • In the case of a disregarded entity with a U.S. owner, the
                  U.S. owner of the disregarded entity and not the disregarded
                  entity.
                </p>
                <p>
                  • In the case of a grantor trust with a U.S. grantor or other
                  U.S. owner, generally, the U.S. grantor or other U.S. owner of
                  the grantor trust and not the grantor trust.
                </p>
                <p>
                  • In the case of a U.S. trust (other than a grantor trust),
                  the U.S. trust and not the beneficiaries of the trust.
                </p>
              </div>

              <p>
                See Pub. 515 for more information on providing a Form W-9 or a
                certification of non-foreign status to avoid withholding.
              </p>
            </div>

            {/* Right Column */}
            <div className="flex-1 pl-4 text-[16px] leading-[1.3] space-y-1">
              <p className="font-bold">Foreign person.</p>

              <p>
                If you are a foreign person or the U.S. branch of a foreign bank
                that has elected to be treated as a U.S. person (under
                Regulations section 1.1441-1(b)(2)(iv) or other applicable
                section for chapter 3 or 4 purposes), do not use Form W-9.
                Instead, use the appropriate Form W-8 or Form 8233 (see Pub.
                515). If you are a qualified foreign pension fund under
                Regulations section 1.897(l)-1(d), or a partnership that is
                wholly owned by qualified foreign pension funds, that is treated
                as a non-foreign person for purposes of section 1445
                withholding, do not use Form W-9. Instead, use Form W-8EXP (or
                other certification of non-foreign status).
              </p>

              <p className="font-bold pt-1">
                Nonresident alien who becomes a resident alien.
              </p>

              <p>
                Generally, only a nonresident alien individual may use the terms
                of a tax treaty to reduce or eliminate U.S. tax on certain types
                of income. However, most tax treaties contain a provision known
                as a saving clause. Exceptions specified in the saving clause
                may permit an exemption from tax to continue for certain types
                of income even after the payee has otherwise become a U.S.
                resident alien for tax purposes.
              </p>

              <p>
                If you are a U.S. resident alien who is relying on an exception
                contained in the saving clause of a tax treaty to claim an
                exemption from U.S. tax on certain types of income, you must
                attach a statement to Form W-9 that specifies the following five
                items.
              </p>

              <p>
                1. The treaty country. Generally, this must be the same treaty
                under which you claimed exemption from tax as a nonresident
                alien.
              </p>

              <p>2. The treaty article addressing the income.</p>

              <p>
                3. The article number (or location) in the tax treaty that
                contains the saving clause and its exceptions.
              </p>

              <p>
                4. The type and amount of income that qualifies for the
                exemption from tax.
              </p>

              <p>
                5. Sufficient facts to justify the exemption from tax under the
                terms of the treaty article.
              </p>

              <p className="font-bold italic pt-1">Example.</p>

              <p>
                Article 20 of the U.S.-China income tax treaty allows an
                exemption from tax for scholarship income received by a Chinese
                student temporarily present in the United States. Under U.S.
                law, this student will become a resident alien for tax purposes
                if their stay in the United States exceeds 5 calendar years.
                However, paragraph 2 of the first Protocol to the U.S.-China
                treaty (dated April 30, 1984) allows the provisions of Article
                20 to continue to apply even after the Chinese student becomes a
                resident alien of the United States. A Chinese student who
                qualifies for this exception (under paragraph 2 of the first
                Protocol) and is relying on this exception to claim an exemption
                from tax on their scholarship or fellowship income would attach
                to Form W-9 a statement that includes the information described
                above to support that exemption.
              </p>

              <p>
                If you are a nonresident alien or a foreign entity, give the
                requester the appropriate completed Form W-8 or Form 8233.
              </p>

              <h3 className="text-[9pt] font-bold pt-2">Backup Withholding</h3>

              <p className="font-bold pt-1">What is backup withholding?</p>

              <p>
                Persons making certain payments to you must under certain
                conditions withhold and pay to the IRS 24% of such payments.
                This is called "backup withholding." Payments that may be
                subject to backup withholding include, but are not limited to,
                interest, tax-exempt interest, dividends, broker and barter
                exchange transactions, rents, royalties, nonemployee pay,
                payments made in settlement of payment card and third-party
                network transactions, and certain payments from fishing boat
                operators. Real estate transactions are not subject to backup
                withholding.
              </p>

              <p>
                You will not be subject to backup withholding on payments you
                receive if you give the requester your correct TIN, make the
                proper certifications, and report all your taxable interest and
                dividends on your tax return.
              </p>

              <p className="font-bold pt-1">
                Payments you receive will be subject to backup withholding if:
              </p>

              <p>1. You do not furnish your TIN to the requester;</p>

              <p>
                2. You do not certify your TIN when required (see the
                instructions for Part II for details);
              </p>

              <p>
                3. The IRS tells the requester that you furnished an incorrect
                TIN;
              </p>

              <p>
                4. The IRS tells you that you are subject to backup withholding
                because you did not report all your interest and dividends on
                your tax return (for reportable interest and dividends only); or
              </p>

              <p>
                5. You do not certify to the requester that you are not subject
                to backup withholding, as described in item 4 under{" "}
                <span className="italic">"By signing the filled-out form"</span>{" "}
                above (for reportable interest and dividend accounts opened
                after 1983 only).
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center px-3 py-2 text-[6pt] border-t border-black">
            <div>Cat. No. 10231X</div>
            <div>
              Form <span className="font-bold text-[8pt]">W-9</span> (Rev.
              3-2024)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default W9Form;
