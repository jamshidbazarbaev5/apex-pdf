import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";
import { SignButton } from "@/components/ui/SignButton";
import { DocumentSheet } from "../DocumentSheet";

interface Props {
  pageNumber?: number;
}

export const AgreementSection1 = ({ pageNumber = 6 }: Props) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.form);

  const handleChange = (field: string, value: string) => {
    dispatch(updateFormData({ [field]: value }));
  };

  return (
    <>
      {/* Page 1 - Agreement Header */}
      <DocumentSheet>
        <div className="text-center mb-12">
          <div className="text-[#2563eb] font-bold text-2xl mb-2">AXPER LLC</div>
          <div className="text-[#2563eb] font-bold text-lg mb-2">MC# 1603523</div>
          <div className="text-[#2563eb] font-bold text-lg mb-2">DOT# 4169562</div>
          <div className="text-[#2563eb] font-bold text-xl mt-5 mb-12">Owner-Operator AGREEMENT</div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 font-serif text-black text-base leading-relaxed text-justify">
          <p>
            THIS AGREEMENT made this day of{" "}
            <input
              type="text"
              placeholder="Nov 12th"
              className="inline-block border-b-2 border-red-500 outline-none bg-transparent w-32 pb-1 font-serif"
              onChange={(e) => handleChange("agreementDay", e.target.value)}
              value={formData.agreementDay || ""}
            />, 20
            <input
              type="text"
              placeholder="25"
              className="inline-block border-b-2 border-red-500 outline-none bg-transparent w-12 pb-1 font-serif"
              onChange={(e) => handleChange("agreementYear", e.target.value)}
              value={formData.agreementYear || ""}
            />{" "}
            between COMPANY <span className="font-bold">AXPER LLC</span>, (located at 1673 Reed Dr, Krum, TX, 76249) and OWNER-OPERATOR,{" "}
            <input
              type="text"
              placeholder="Expect Xpress LLC"
              className="inline-block border-b-2 border-red-500 outline-none bg-transparent w-48 pb-1 font-serif"
              onChange={(e) => handleChange("agreementOwnerOperator", e.target.value)}
              value={formData.agreementOwnerOperator || ""}
            />
          </p>

          <p>
            (located at{" "}
            <input
              type="text"
              placeholder="50 Agnes St Ste 205"
              className="inline-block border-b-2 border-red-500 outline-none bg-transparent w-96 pb-1 font-serif"
              onChange={(e) => handleChange("agreementOwnerAddress", e.target.value)}
              value={formData.agreementOwnerAddress || ""}
            />
            ).
          </p>

          <p>
            Company desires to engage Owner-Operator to perform transportation within the limits of Owner-Operator's contract operating authorities according to this Agreement's terms and conditions, and the Owner-Operator desires to perform such transportation.
          </p>

          <p>
            This AGREEMENT shall remain in full force and effect for not less than thirty (30) days thereafter, with automatic renewal for succeeding periods following each delivery of the freight and the provision of Proof of Delivery. The acceptance of a load shall be deemed a renewal of this Agreement by Owner-Operator.
          </p>

          <p className="font-bold">NOW THEREFORE, intending to be legally bound, the parties agree as follows:</p>

          <p>
            <span className="font-bold">1.1</span> The Owner-Operator has completed Orientation successfully. It is understood that Owner-Operator will perform services for the Company as an independent Owner-Operator at all times.
          </p>

          <p>
            <span className="font-bold">1.2</span> The Company is not required to provide workers compensation, health, or accident insurance to the Owner-Operator or any of his employees. Companies shall not make contributions to social security, unemployment insurance, federal or state withholding taxes, or any other employer-employee contributions.
          </p>

          <p>
            <span className="font-bold">1.3</span> Owner-Operator warrants that all equipment and personnel used in providing the services contemplated by this Agreement will meet all requirements and comply with all laws and regulations of the United States Department of Transportation ("DOT") and other federal, state, or provincial agencies with jurisdiction over any of the services provided pursuant to this Agreement. Additionally, the Owner-Operator agrees to immediately notify the Company in writing of any change in its safety rating and to submit copies of any FMCSA Notice of Changes or Notice of Claim relating to such a change.
          </p>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="font-serif text-base">{pageNumber}</span>
        </div>
      </DocumentSheet>

      {/* Page 2 - Section 1 Continuation */}
      <DocumentSheet>
        <div className="max-w-4xl mx-auto space-y-4 font-serif text-black text-base leading-relaxed text-justify">
          <p>
            <span className="font-bold">1.4</span>Owner-Operator agrees to provide, at its own cost and expense, sufficient vehicles for the
lawful transport of products submitted by Company for use in Company's service. The
owner-operator is responsible for operating and maintaining the essential motor and auxiliary
equipment in compliance with all applicable laws and regulations.
Owner-Operator shall, at its own cost and expense, provide adequately trained drivers and ensure
correct performance of the trucking services provided herein. All apparatus utilized by
Owner-Operator in the performance of transportation activities pursuant to this agreement shall
at all times be subject to the control of Owner-sole Operator. If Owner-Operators fail to comply
with this condition, the Company reserves the right to terminate this Agreement.</p>

          <p>
            <span className="font-bold">1.5</span> The Owner-Operator agrees to report and pay all required amounts for worker's
compensation, taxes, unemployment insurance, social security, health insurance, and other
benefits for himself and his drivers, as well as indemnify, defend, and hold the Company
harmless.</p>

          <p>
            <span className="font-bold">1.6</span> The Owner-Operator must transport all approved products on equipment it owns or has
permanently leased, and may not transfer loads to another Owner-Operator or use alternative rail
or other services. Unless otherwise agreed to in writing, this Agreement applies to services
rendered by the Owner-Operator to Company.</p>

          <p>
            <span className="font-bold">1.7</span> Unless otherwise specified, the fee is calculated based on the number of miles driven, not
the weight of the shipment. If the consignor adds additional weight to the cargo, but it does not
exceed the payload of the vehicle specified in this agreement, the Company is not required to pay
the Owner-Operator additional fees.
          </p>

          <p>
            <span className="font-bold">1.8</span> Each shipment must be assigned its own vehicle. Under the terms of this Agreement,
partial loads are prohibited. If the Company discovers a situation of this nature, the Agreement is
terminated immediately. This may cause the owner-operator to receive no payment and be
reported to other motor companies. The distance of the cargo is determined using the metric
"from zip code to zip code" as opposed to the precise addresses.
          </p>

          <p>
            <span className="font-bold">1.9</span> Empty miles are compensated beginning at 100 miles (to be discussed with dispatcher before the pick-up )The Owner-Operator must provide the Company with his actual current location in order to calculate
the correct number of vacant miles.
          </p>

          <p>
            <span className="font-bold">1.10</span> If the Owner-Operator arrives late to a pick-up or delivery location without notifying Company Dispatch, a 25% fee reduction will be automatically applied.
          </p>

          <div className="flex gap-8 mt-12">
            <div className="flex-1">
              <div className="font-bold text-base mb-4">Signature</div>
              <SignButton
                onChange={(value) => handleChange("agreement1Signature", value)}
                placeholder="Click to add signature"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="font-serif text-base">{pageNumber + 1}</span>
        </div>
      </DocumentSheet>
    </>
  );
};
