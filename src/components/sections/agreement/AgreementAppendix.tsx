import { DocumentSheet } from "../DocumentSheet";

interface Props {
  pageNumber?: number;
}

 export const AgreementAppendix = ({ pageNumber = 21 }: Props) => {
  return (
    <>
      {/* Certificate of Insurance */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2 className="text-[#1e4e8c] font-bold font-serif uppercase tracking-wide" style={{ fontSize: "18px" }}>
            APPENDIX TO APPLICATION
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <h2 className="text-[#1e4e8c] font-bold font-serif uppercase tracking-wide" style={{ fontSize: "18px" }}>
            CERTIFICATE OF INSURANCE
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 font-serif text-black leading-relaxed text-justify" style={{ fontSize: "18px" }}>
          <p className="font-bold">Additional Insured:</p>
          <p className="font-bold">AXPER LLC</p>
          <p>1673 REED DR</p>
          <p>KRUM, TX, 76249</p>

          <p className="font-bold mt-8">
            Insurance coverage and limits required:
          </p>

          <div className="pl-6 space-y-2">
            <p>• Commercial Auto Coverage: Trucking for Hire Operations</p>
            <p>• $1,000,000 Primary Commercial Auto Liability CSL</p>
            <p>• $1,000,000 Commercial General Liability</p>
            <p>• $100,000 Broad Form Cargo with max $1,000 deductible</p>
            <p>
              •  Unlimited Radius of Operations (Full time with NO radius coverage restrictions) 200,
300 or 500-mile radius with a few runs outside this radius per year is NOT acceptable!
            </p>
            <p>
              •AXPER LLC must be listed as additional insured in regard to General and Auto Liability
Certificates must also show listed Vehicles (Year, Make, VIN#) as well as all listed
drivers!
            </p>
            <p className="font-bold">***MUST BE AN ACORD FORM***</p>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="font-serif" style={{ fontSize: "18px" }}>{pageNumber}</span>
        </div>
      </DocumentSheet>

      {/* Driver Instructions */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2 className="text-[#1e4e8c] font-bold font-serif uppercase tracking-wide" style={{ fontSize: "18px" }}>
            APPENDIX TO AGREEMENT - DRIVER INSTRUCTIONS
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 font-serif text-black leading-relaxed text-justify" style={{ fontSize: "18px" }}>
          <div className="text-[#1e4e8c] font-bold">I. BIDS</div>

          <p>
            <span className="font-bold">A.</span> ALL BIDS ARE PLACED FOR 15
            MINUTES.
          </p>
          <p>
            <span className="font-bold">B.</span> WHEN THE CLIENT ASKS TO HOLD
            TRUCK YOU MUST HOLD THE TRUCKS FOR 20 MINUTES MORE.
          </p>
          <p>
            <span className="font-bold">C.</span> WHEN YOU ARE BIDDING A DIRECT
            RUN YOU MUST COUNT PROPERLY HOURS OF DRIVING, GIVE CORRECT TRANSIT
            TIME TO THE DISPATCHER BEFORE BIDDING AND GUARANTEE THAT YOUR TRUCK
            ARRIVES FOR PICK UP AND DELIVERY AS SOON AS POSSIBLE.
          </p>

          <div className="text-[#1e4e8c] font-bold mt-6">II. APPOINTMENTS</div>

          <p>
            <span className="font-bold">A.</span> APPOINTMENTS CANNOT BE FAILED.
            WE DO EXPEDITED LOADS WHICH MEANS TIME-CRITICAL.
          </p>
          <p>
            <span className="font-bold">B.</span> IF YOU OR YOUR DRIVER CANNOT
            MEET THE APPOINTMENT (NOT ENOUGH HOURS ON THE LOG BOOK OR ANY OTHER
            REASON) YOU HAVE TO SKIP THE LOAD BEFORE BIDDING.
          </p>

          <div className="text-[#1e4e8c] font-bold mt-6">III. INSTRUCTIONS</div>

          <p>
            <span className="font-bold">A.</span>BOOKED LOAD CAN BE PROVIDED
            WITH THE INSTRUCTIONS (PRINT DOCUMENTS PRIOR TO PICK UP, WHICH MUST
            BE FOLLOWED BY YOU AND YOUR DRIVER(S).
          </p>

          <div className="text-[#1e4e8c] font-bold mt-6">IV. STOPS</div>

          <p>
            <span className="font-bold">A.</span> IN CASE, WHEN YOU OR YOUR
            DRIVER(S) NEED TO TAKE A REST OR MAKE A STOP TO REFUEL IT’S A MUST
            TO NOTIFY TO OPERATIONS (940-281-5452) WITH LOCATION OF THE STOP AND
            ETA WHEN TRUCK WILL BE ON ROUTE AGAIN. WHEN YOU OR YOUR DRIVER(S)
            RESTARTS DRIVING IT’S A MUST TO NOTIFY OPERATIONS THAT TRUCK BACK ON
            THE ROUTE AGAIN.
          </p>
          <p>
            <span className="font-bold">B.</span> IN CASE, WHEN YOU OR YOUR
            DRIVER(S) HAS UNEXPECTED ISSUE ON THE ROAD IT’S
          </p>
          <p>
            <span className="font-bold">A.</span>  MUST TO REPORT ABOUT THE
            SITUATION IMMEDIATELY TO OPERATIONS (940-281-5452) AND GIVE ALL THE
            INFORMATION ON WHAT HAPPENED, 25 ETA, SEND PICTURE OF THE LOAD IN
            THE TRUCK (IN CASE OF CAR ACCIDENT), RECEIPT FROM REPAIR SHOP (IF
            PROBLEM WITH THE VEHICLE) OR OTHER PROVES.
          </p>

          <div className="text-[#1e4e8c] font-bold mt-6">
            V. HAND LOADING/UNLOADING
          </div>

          <p>
            <span className="font-bold">A.</span>  IF SHIPPER OR CONSIGNEE
            ASKS TO LOAD/UNLOAD TRUCK BY HANDS YOU OR YOUR DRIVER(S) MUST REPORT
            THIS TO THE OPERATIONS (940-281-5452) NO TOUCH TO THE LOAD WHILE THE
            DISPATCHER WILL INFORM IF WE YOU NEED TO DO IT OR NOT
          </p>
          <p>
            <span className="font-bold">B.</span>IF THE TRUCK WAS LOADED/UNLOADED BY THE DRIVER WITHOUT
CONFIRMING WITH
          </p>
          <p className="text-center font-bold text-[#2563eb] mt-6">
           THE DISPATCHER NO EXTRA MONEY CAN BE REQUESTED.
          </p>
        </div>

        <div className="absolute bottom-6 left-0 right-0 text-center">
          <span className="font-serif" style={{ fontSize: "18px" }}>{pageNumber}</span>
        </div>
      </DocumentSheet>

      {/* Contact Information */}
      <DocumentSheet>
        <div className="flex justify-center mb-8">
          <h2 className="text-[#1e4e8c] font-bold font-serif uppercase tracking-wide" style={{ fontSize: "18px" }}>
            CONTACT INFORMATION
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 font-serif text-black leading-relaxed text-justify" style={{ fontSize: "18px" }}>
          <p>
            • Please send the signed copy of the contract to AXPER LLC via email
            to:{" "}
            <span className="text-[#2563eb] underline">hr@axpergroup.com</span>
          </p>
          <p>
            • 24/7 Operations phone:{" "}
            <span className="font-bold">940-281-5452</span>
          </p>
          <p>
            • Pictures of the freight to:{" "}
            <span className="text-[#2563eb] underline">ops@axpergroup.com</span>
          </p>
          <p>
            • Email POD to:{" "}
            <span className="text-[#2563eb] underline">ops@axpergroup.com</span>
          </p>

          <p className="mt-8">Hard copy of the POD to:</p>
          <p className="font-bold">AXPER LLC</p>
          <p>1673 REED DR</p>
          <p>KRUM, TX, 76249</p>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <span className="font-serif" style={{ fontSize: "18px" }}>{pageNumber + 1}</span>
        </div>
      </DocumentSheet>
    </>
  );
};
