import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";
import { SignButton } from "@/components/ui/SignButton";
import { DocumentSheet } from "../DocumentSheet";

interface Props {
  pageNumber?: number;
}

export const AgreementSection2 = ({ pageNumber = 8 }: Props) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.form);

  const handleChange = (field: string, value: string) => {
    dispatch(updateFormData({ [field]: value }));
  };

  return (
    <DocumentSheet>
      <div className="flex justify-center mb-8">
        <h2 className="text-[#1e4e8c] font-bold font-serif uppercase tracking-wide" style={{ fontSize: "18px" }}>2. PAYMENT</h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-4 font-serif text-black leading-relaxed text-justify" style={{ fontSize: "18px" }}>
        <p>
          <span className="font-bold">2.1</span> All Bill of Ladings must be emailed to{" "}
          <span className="text-[#2563eb] underline">ops@axpergroup.com</span> via Cam Scan mobile application or equivalent right after delivery. BOLs must be in .pdf format only.
        </p>

        <p>
          <span className="font-bold">2.2</span> Always write your truck# and a Pro Number on BOLs. Include your truck # in the email or subject line.
        </p>

        <p>
          <span className="font-bold">2.3</span> All original Bill of Ladings (BOL) must be mailed in a timely manner at AXPER LLC 1673 Reed Dr, Krum, TX, 76249 (if required)
        </p>

        <p>
          <span className="font-bold">2.4</span>  Payments are processed once per week (Friday to Friday) with no fee. The payment schedule depends on the delivery time (Central Time). Deliveries completed any day up to Wednesday 12:00 PM (CST) will be paid on Friday of the same week. Deliveries completed after Wednesday 12:00 PM (CST) through the next Wednesday 12:00 PM (CST) will be paid on Friday of the following week. This means the payment cycle runs from Friday to Friday, and all loads are paid according to this cutoff schedule.
        </p>

        <p>
          <span className="font-bold">2.5</span> Quick pay option is available and it charges 3% out of agreed rate and the payment will be processed in 1-2 days.
        </p>

        <p>
          <span className="font-bold">2.6</span> If you would like to receive a payment report to your email, please provide your email.
        </p>

        <p className="pl-5">
          EMAIL:{" "}
          <input
            type="text"
            placeholder="admin@expectxpress.com"
            className="inline-block border-b-2 border-red-500 outline-none bg-transparent w-80 pb-1 font-serif"
            value={formData.paymentEmail || ""}
            onChange={(e) => handleChange("paymentEmail", e.target.value)}
          />
        </p>

        <div className="flex gap-8 mt-12">
          <div className="flex-1">
            <div className="font-bold" style={{ fontSize: "18px" }}>Signature</div>
            <SignButton
              onChange={(value) => handleChange("agreement2Signature", value)}
              placeholder="Click to add signature"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <span className="font-serif" style={{ fontSize: "18px" }}>{pageNumber}</span>
      </div>
    </DocumentSheet>
  );
};
