import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";
import { SignButton } from "@/components/ui/SignButton";
import { DocumentSheet } from "./DocumentSheet";

export default function AxperForm({ pageNumber = 6 }: { pageNumber?: number }) {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.form);

  const handleChange = (field: string, value: string | boolean) => {
    dispatch(updateFormData({ [field]: value }));
  };

  return (
    <>
      {/* Page 1 - To Be Read and Signed by Applicant */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2 className="text-[#1e4e8c] font-bold font-serif text-[16px] uppercase tracking-wide">
            TO BE READ AND SIGNED BY APPLICANT
          </h2>
        </div>

        <div className="max-w-[750px] mx-auto space-y-4">
          <p className="font-serif text-black text-[16px] leading-relaxed text-justify">
            I permit you to investigate my personal, employment, financial, and
            medical background as well as any pertinent facts in connection with
            making an employment decision. (Generally, medical history questions
            will be asked only after a conditional offer of employment has been
            provided.) I hereby free employers, schools, health care providers,
            and other parties from all liability in responding to queries and
            sharing information regarding my application.
          </p>

          <p className="font-serif text-black text-[16px] leading-relaxed text-justify">
            In the case of employment, I am aware that providing incorrect or
            misleading information on my application or during interview(s) might
            result in my dismissal. I am also aware that I am obligated to adhere
            to all company rules and laws. I understand that the information I
            provide regarding my current and/or previous employers may be used,
            and that those employer(s) may be contacted, for the purpose of
            investigating my safety performance history as required by 49 CFR
            391.23(d) and for the purpose of determining my eligibility for
            continued employment (e).
          </p>

          <p className="font-serif text-black text-[16px] leading-relaxed">
            I understand that I have the right to:
          </p>

          <ul className="list-none p-0 m-0 space-y-2 pl-6">
            <li className="font-serif text-black text-[16px] leading-relaxed">
              • Review information provided by previous employers;
            </li>
            <li className="font-serif text-black text-[16px] leading-relaxed">
              • Have errors in the information corrected by previous employers and
              for those previous employers to resend the corrected information to
              the prospective employer;
            </li>
            <li className="font-serif text-black text-[16px] leading-relaxed">
              • Have a rebuttal statement attached to allegedly inaccurate
              information if the previous employer(s) and I cannot agree on the
              accuracy of the information.
            </li>
          </ul>
        </div>

        <div className="flex gap-8 mt-12 max-w-[750px] mx-auto">
          <div className="flex-1">
            <div className="font-serif font-bold text-black text-[14px] mb-4">Signature</div>
            <SignButton
              value={formData.signature1}
              onChange={(value) => handleChange("signature1", value)}
              label="Signature"
              placeholder="Click to add signature"
            />
          </div>
          <div className="w-48">
            <div className="font-serif font-bold text-black text-[14px] mb-4">Date</div>
            <input
              type="date"
              value={formData.applicantDate}
              onChange={(e) => handleChange("applicantDate", e.target.value)}
              className="w-full bg-transparent border-b border-black outline-none font-serif text-black text-[16px] pb-2"
            />
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="font-serif text-15">{pageNumber}</span>
        </div>
      </DocumentSheet>

      {/* Page 2 - Accident Waiver and Release of Liability */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2 className="text-[#1e4e8c] font-bold font-serif text-[16px] uppercase tracking-wide">
            Accident Waiver and Release of Liability
          </h2>
        </div>

        <div className="max-w-[750px] mx-auto space-y-4">
          <p className="font-serif text-black text-[16px] leading-relaxed text-justify">
            By signing this agreement, I release <strong>AXPER LLC</strong> from
            any duty, including financial obligation, for injuries sustained
            during any company-related transportation activity, regardless of
            whether the injuries were caused by carelessness. By signing here, I
            waive any and all rights to sue <strong>AXPER LLC</strong> for any
            reason. I will also make every effort to adhere to safety measures
            that have been outlined in writing and discussed orally. I will
            request clarification if necessary.
          </p>

          <p className="font-serif text-black text-[16px] leading-relaxed text-justify">
            I indemnify, keep harmless, and agree not to sue the companies or
            individuals indicated in this paragraph for any and all liabilities or
            claims arising from my involvement in this activity, regardless of
            carelessness. I accept that <strong>AXPER LLC</strong> and its
            directors, officers, volunteers, representatives, and agents are NOT
            liable for any errors, omissions, actions, or failures to act
            committed by any party or organization undertaking a specified
            activity on their behalf. I CERTIFY THAT I HAVE READ THIS DOCUMENT AND
            I FULLY UNDERSTAND ITS CONTENT. I SIGN THIS RELEASE OF LIABILITY
            AGREEMENT OF MY OWN FREE WILL.
          </p>
        </div>

        <div className="flex gap-8 mt-12 max-w-[750px] mx-auto">
          <div className="flex-1">
            <div className="font-serif font-bold text-black text-[14px] mb-4">Signature</div>
            <SignButton
              value={formData.signature2}
              onChange={(value) => handleChange("signature2", value)}
              label="Signature"
              placeholder="Click to add signature"
            />
          </div>
          <div className="w-48">
            <div className="font-serif font-bold text-black text-[14px] mb-4">Date</div>
            <input
              type="date"
              value={formData.accidentWaiverDate}
              onChange={(e) => handleChange("accidentWaiverDate", e.target.value)}
              className="w-full bg-transparent border-b border-black outline-none font-serif text-black text-[16px] pb-2"
            />
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="font-serif text-15">{pageNumber + 1}</span>
        </div>
      </DocumentSheet>
    </>
  );
}
