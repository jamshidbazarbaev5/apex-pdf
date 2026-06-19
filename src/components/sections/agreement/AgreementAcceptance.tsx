import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";
import { SignButton } from "@/components/ui/SignButton";
import { SignatureDisplay } from "@/components/ui/SignatureDisplay";
import { DocumentSheet } from "../DocumentSheet";

interface Props {
  pageNumber?: number;
}

export const AgreementAcceptance = ({ pageNumber = 21 }: Props) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.form);

  const handleChange = (field: string, value: string) => {
    dispatch(updateFormData({ [field]: value }));
  };

  return (
    <DocumentSheet>
      <div className="flex justify-center mb-8">
        <h2 className="text-[#1e4e8c] font-bold font-serif uppercase tracking-wide" style={{ fontSize: "18px" }}>12. ACCEPTANCE AND ACKNOWLEDGEMENTS</h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-4 font-serif text-black leading-relaxed text-justify" style={{ fontSize: "18px" }}>
        <p>
          I am authorized to execute the contract set out above dated between AXPER LLC and{" "}
          <input
            type="text"
            placeholder="Expect Xpress LLC"
            className="inline-block border-b-2 border-red-500 outline-none bg-transparent w-48 pb-1 font-serif"
            value={formData.acceptanceCompany || ""}
            onChange={(e) => handleChange("acceptanceCompany", e.target.value)}
          />{" "}
          legally binding to the terms and conditions set forth therein.
        </p>

        <p className="font-bold">
        This electronic signature serves as an original and any electronic version and other
signatures are incorporated as if originals into the original document. This electronic signature
shall have the same force and effect as an original source. I ACKNOWLEDGE THAT I HAVE
READ AND 
        </p>

        <p>
         UNDERSTAND THE AGREEMENT AND AGREE TO THE ENTIRETY OF THE TERMS &
CONDITIONS CONTAINED THEREIN. THE AGREEMENT SHALL BE BINDING ON{" "}
          <input
            type="text"
            placeholder="12th"
            className="inline-block border-b-2 border-red-500 outline-none bg-transparent w-16 pb-1 font-serif"
            value={formData.acceptanceDay || ""}
            onChange={(e) => handleChange("acceptanceDay", e.target.value)}
          />{" "}
          DAY OF{" "}
          <input
            type="text"
            placeholder="November"
            className="inline-block border-b-2 border-red-500 outline-none bg-transparent w-28 pb-1 font-serif"
            value={formData.acceptanceMonth || ""}
            onChange={(e) => handleChange("acceptanceMonth", e.target.value)}
          />
          , 20
          <input
            type="text"
            placeholder="25"
            className="inline-block border-b-2 border-red-500 outline-none bg-transparent w-12 pb-1 font-serif"
            value={formData.acceptanceYear || ""}
            onChange={(e) => handleChange("acceptanceYear", e.target.value)}
          />  I UNDERSTAND AND ACKNOWLEDGE
THAT IS THE "OWNER-OPERATOR" AS THAT TERM IS USED IN THE AGREEMENT. 
        </p>

        <div className="grid grid-cols-2 gap-8 mt-12">
          <div>
            <div className="font-bold" style={{ fontSize: "18px" }}>COMPANY:</div>
            <div className="space-y-3 text-sm">
              <p className="font-bold">AXPER LLC</p>
              <p>NAME: <span className="text-[#2563eb]">BIBIZADA WILKINSON</span></p>
              <p>TITLE: <span className="text-[#2563eb]">MANAGER</span></p>
              <p className="mt-4">SIGNATURE:</p>
              <SignatureDisplay
                value={formData.companySignature}
                label="Company Signature"
                isReadOnly={true}
              />
              <p>DATE: <span className="text-[#2563eb]">23/11/2024</span></p>
            </div>
          </div>

          <div>
            <div className="font-bold" style={{ fontSize: "18px" }}>OWNER-OPERATOR:</div>
            <div className="space-y-3 text-sm">
              <input
                type="text"
                placeholder="Expect Xpress LLC"
                className="w-full border-b border-black outline-none bg-transparent pb-1"
                value={formData.acceptanceOwnerCompany || ""}
                onChange={(e) => handleChange("acceptanceOwnerCompany", e.target.value)}
              />
              <p>
                PRINTED NAME:{" "}
                <input
                  type="text"
                  placeholder="William Thomas"
                  className="inline-block border-b-2 border-red-500 outline-none bg-transparent w-32 pb-1 font-serif"
                  value={formData.acceptanceOwnerName || ""}
                  onChange={(e) => handleChange("acceptanceOwnerName", e.target.value)}
                />
              </p>
              <p>
                TITLE:{" "}
                <input
                  type="text"
                  placeholder="Owner Operator"
                  className="inline-block border-b-2 border-red-500 outline-none bg-transparent w-32 pb-1 font-serif"
                  value={formData.acceptanceOwnerTitle || ""}
                  onChange={(e) => handleChange("acceptanceOwnerTitle", e.target.value)}
                />
              </p>
              <div>
                <p className="font-bold mb-2">Signature:</p>
                <SignButton
                  value={formData.acceptanceOwnerSignature}
                  onChange={(value) => handleChange("acceptanceOwnerSignature", value)}
                  placeholder="Click to add signature"
                />
              </div>
              <p>
                DATE:{" "}
                <input
                  type="date"
                  className="inline-block border-b-2 border-red-500 outline-none bg-transparent w-32 pb-1 font-serif"
                  value={formData.acceptanceOwnerDate || ""}
                  onChange={(e) => handleChange("acceptanceOwnerDate", e.target.value)}
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 text-center">
        <span className="font-serif" style={{ fontSize: "18px" }}>{pageNumber}</span>
      </div>
    </DocumentSheet>
  );
};
