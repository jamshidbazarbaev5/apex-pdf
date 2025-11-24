import { useAppDispatch } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";
import { SignButton } from "@/components/ui/SignButton";
import { DocumentSheet } from "../DocumentSheet";

interface Props {
  pageNumber?: number;
}

export const AgreementSection3and4 = ({ pageNumber = 9 }: Props) => {
  const dispatch = useAppDispatch();

  const handleChange = (field: string, value: string) => {
    dispatch(updateFormData({ [field]: value }));
  };

  return (
    <>
      {/* Section 3 - Deductions */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2 className="text-[#1e4e8c] font-bold font-serif text-base uppercase tracking-wide">3. DEDUCTIONS, LIABILITY LIMITATION POLICY</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 font-serif text-black text-base leading-relaxed text-justify">
          <p>
            <span className="font-bold">3.1</span> If the Owner-Operator departs the cargo facility with damaged goods and fails to notify
Company Dispatch, he/she is exclusively responsible for any costs, claims, or rate reductions that
the broker may give to the Company. The company assumes no liability for damaged cargo
transported by an independent contractor. </p>

          <p>
            <span className="font-bold">3.2</span> The Owner-Operator acknowledges and agrees that he/she will deliver goods only to the
consignee's designated business facilities or a location designated by the Company.
Owner-Operator further agrees that if any loss or damage to the cargo occurs as a result of its
transgression of this clause, then Owner-Operator shall indemnify and hold harmless the
Company and the Customer for such loss or damage, including reasonable attorney's fees.</p>

          <p>
            <span className="font-bold">3.3</span> The Owner-Operator shall notify the Company immediately of any overages,
deficiencies, or damaged goods that the Owner-Operator handled for the Company.
Owner-Operator is required to return excess funds. The company will determine how to dispose
of damaged goods. Owner-Operator agrees that for claim purposes, Company shall be considered
the "Shipper," and Company may present claims on behalf of its "Shipper" customers, unless
Company's customer elects to present claims on its own behalf, in which case Company's
customer shall be recognized as the "Shipper"for claim purposes. In the event of loss, damage, or
delivery delay, the Owner-Operator is responsible for all resulting damages.
          </p>

          <p>
            <span className="font-bold">3.4</span>Loss, damage, or injury will be measured as the lesser of the actual replacement cost or
the cost of repair, up to a maximum of $1 million per cargo, less the salvage value of the
damaged products.In addition, Owner-Operator is obligated to indemnify Company for any
indirect, special, or consequential damages or other special economic losses, including legal fees,
that may be obtained against Company in connection with a customer claim.
          </p>

          <p>
            <span className="font-bold">3.5</span> Owner-Operator shall promptly pay Company all claim amounts due pursuant to this
Agreement, and Owner-Operator authorizes Company to deduct all such amounts from any funds
payable to Owner-Operator by Company. In addition, Owner-Operator shall be fully liable and
responsible for any claims arising from the imprudent, dishonest, or illegal actions of any of
Owner-employees Operators or agents, as well as any claims arising from Owner-Operator
providing Contaminated Equipment. Owner-Operator must pay the Company for any goods
claims within thirty (30) days of being notified of the amount of the claim and provided with
supporting documentation.
          </p>

          <div className="flex gap-8 mt-12">
            <div className="flex-1">
              <div className="font-bold text-base mb-4">Signature</div>
              <SignButton
                onChange={(value) => handleChange("agreement3Signature", value)}
                placeholder="Click to add signature"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="font-serif text-base">{pageNumber}</span>
        </div>
      </DocumentSheet>

      {/* Section 4 - Claims */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2 className="text-[#1e4e8c] font-bold font-serif text-base uppercase tracking-wide">4. CLAIMS</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 font-serif text-black text-base leading-relaxed text-justify">
          <p className="text-center font-bold">Any claims will be handled in the following manner:</p>

          <p>
            <span className="font-bold">4.1</span> A claim for loss, damage, injury, or delay to cargo must be submitted to Owner-Operator
in writing within 180 days of the date Owner-Operator notifies the consignee that the shipment
has been lost, damaged, or delayed.
          </p>

          <p>
            <span className="font-bold">4.2</span>Upon written receipt of a valid claim in the manner and form specified above,
Owner-Operator will acknowledge receipt of such claim within 30 days of receipt, unless
Owner-Operator has paid or denied such claims within 30 days of receipt. Owner-Operator will
indicate in its acknowledgment, based on its preliminary investigation of the filed claim, what, if
any, additional documentary evidence or other pertinent information may be required to
complete the claim.
          </p>

          <p>
            <span className="font-bold">4.3</span> Owner-Operator acknowledges that if it does not reject, pay, or acknowledge receipt of
claims within 30 days, it has accepted the claim's validity and the amount specified, and will pay
the claim within 30 days. Within sixty days of receiving a written claim for loss or damage,
injury, or delay to property being transported, the Owner-Operator will either pay, deny, or make
a firm compromise settlement offer. If Owner-Operator and Company (or its customer) are
unable to reach a resolution within sixty days, Company may terminate this Agreement and/or
pursue damages, including attorney fees and all other expenses, using any legal, administrative,
or equitable remedy available. The Owner-Operator is not responsible for any loss, damage,
injury, or delay caused by acts of God, acts of the public enemy, revolution, civil unrest, or
conflict.</p>
          <p>
            <span className="font-bold">4.4</span> The Owner-Operator is liable for the "whole actual loss" resulting from loss, damage,
injury, or delay. "Full real loss" refers to the invoice price of goods offered to the
Owner-Operator for transportation, plus consequential damages if the Owner-Operator is aware
of the likelihood of such losses.</p>

          <p>
            <span className="font-bold">4.5</span> The Company reserves the right to withhold payment for any services rendered where
claim responsibility is contested, until an agreement is reached between the Company and the
Owner-Operator.
          </p>

          <p>
            <span className="font-bold">4.6</span>Owner-obligation Operators under this Agreement shall include payment of all costs
and/or fees incurred by Company or its Affiliates in the adjustment or defense of any claim for
cargo loss or damage and/or claim for personal injury, death or property loss or damage arising
out of transportation operations and services under this Agreement.
          </p>

          <p>
            <span className="font-bold">4.7</span>Owner-Operator agrees that its obligation to defend, indemnify, and hold harmless
Company and its Affiliates from and against any and all claims and liabilities arising out of or
resulting from transportation operations and services under this Agreement shall survive any
termination of this Agreement. Owner-Operator's obligation to defend, indemnify, and hold
harmless Company and its Affiliates under Chapter 9 shall not be limited by any limitation on
damages, including limitations on the amount or type of damages, compensation, or benefits
payable by Owner-Operator and its agents under applicable worker's compensation acts,
disability benefit acts, or other employee benefits acts, and Owner-Operator hereby expressly
waives any immunity it may have unto itself.
          </p>

          <div className="flex gap-8 mt-12">
            <div className="flex-1">
              <div className="font-bold text-base mb-4">Signature</div>
              <SignButton
                onChange={(value) => handleChange("agreement4Signature", value)}
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
