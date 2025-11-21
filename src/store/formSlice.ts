import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface FormData {
  // Owner Info
  ownerFirstName: string;
  ownerLastName: string;
  ownerDateOfBirth: string;
  ownerAddress: string;
  ownerCity: string;
  ownerState: string;
  ownerZipCode: string;
  ownerCellPhone: string;
  ownerEmergencyNumber: string;
  ownerEmail: string;
  ownerLicenseNumber: string;
  ownerLicenseState: string;
  ownerLicenseClass: string;
  ownerExpirationDate: string;

  // Driver Info
  driverFirstName: string;
  driverLastName: string;
  driverDateOfBirth: string;
  driverAddress: string;
  driverCity: string;
  driverState: string;
  driverZipCode: string;
  driverCellPhone: string;
  driverEmergencyNumber: string;
  driverUsCitizen: boolean;
  driverGreenCard: boolean;
  driverTwicTsa: boolean;
  driverHazmatCertified: boolean;

  // Company Info
  companyName: string;
  companyRegisteredAddress: string;
  companyCityStateZip: string;
  companyPhoneNumber: string;
  companyEmail: string;
  companyWebsite: string;
  companyMcNumber: string;
  companyDotNumber: string;

  // Vehicle Info
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  vehiclePlateNumber: string;
  vehicleState: string;
  vehicleExpirationDate: string;
  vehicleVinNumber: string;
  vehicleDoorOpeningLength: string;
  vehicleDoorOpeningWidth: string;
  vehicleDoorOpeningHeight: string;
  vehicleDimsInsideLength: string;
  vehicleDimsInsideWidth: string;
  vehicleDimsInsideHeight: string;
  vehiclePayload: string;
  vehicleAirRide: boolean;
  vehicleDockHigh: boolean;
  vehiclePalletJack: boolean;
  vehicleRamps: boolean;
  vehicleStraps: boolean;
  vehicleBlankets: boolean;
  vehicleLiftGate: boolean;
  vehicleETracks: boolean;
  vehicleLoadBars: boolean;

  // Global Signature (used for all signature fields)
  globalSignature: string;

  // Signatures
  signature1: string;
  date1: string;
  signature2: string;
  date2: string;

  // Company Signature (from public/sign.png)
  companySignature: string;
  companySignatureDate: string;

  // W9 Form Fields
  w9Name: string;
  w9BusinessName: string;
  w9TaxClassification: string;
  w9LlcClassification: string;
  w9ExemptPayeeCode: string;
  w9FatcaCode: string;
  w9Address: string;
  w9CityStateZip: string;
  w9AccountNumbers: string;
  w9Ssn1: string;
  w9Ssn2: string;
  w9Ssn3: string;
  w9Ein1: string;
  w9Ein2: string;
  w9HasForeignPartners: boolean;
  w9Date: string;

  // Owner-Operator Agreement Fields
  agreementDay: string;
  agreementYear: string;
  agreementOwnerOperator: string;
  agreementOwnerAddress: string;
  agreement1Signature: string;
  paymentEmail: string;
  agreement2Signature: string;
  agreement3Signature: string;
  agreement4Signature: string;
  agreement5Signature: string;
  agreement6Signature: string;
  agreement7Signature: string;
  agreement8Signature: string;
  agreement9Signature: string;
  agreement10Signature: string;
  agreement11Signature: string;
  acceptanceCompany: string;
  acceptanceDay: string;
  acceptanceMonth: string;
  acceptanceYear: string;
  acceptanceOwnerCompany: string;
  acceptanceOwnerName: string;
  acceptanceOwnerTitle: string;
  acceptanceOwnerSignature: string;
  acceptanceOwnerDate: string;
}

const initialState: FormData = {
  // Owner Info
  ownerFirstName: "",
  ownerLastName: "",
  ownerDateOfBirth: "",
  ownerAddress: "",
  ownerCity: "",
  ownerState: "",
  ownerZipCode: "",
  ownerCellPhone: "",
  ownerEmergencyNumber: "",
  ownerEmail: "",
  ownerLicenseNumber: "",
  ownerLicenseState: "",
  ownerLicenseClass: "",
  ownerExpirationDate: "",

  // Driver Info
  driverFirstName: "",
  driverLastName: "",
  driverDateOfBirth: "",
  driverAddress: "",
  driverCity: "",
  driverState: "",
  driverZipCode: "",
  driverCellPhone: "",
  driverEmergencyNumber: "",
  driverUsCitizen: false,
  driverGreenCard: false,
  driverTwicTsa: false,
  driverHazmatCertified: false,

  // Company Info
  companyName: "",
  companyRegisteredAddress: "",
  companyCityStateZip: "",
  companyPhoneNumber: "",
  companyEmail: "",
  companyWebsite: "",
  companyMcNumber: "",
  companyDotNumber: "",

  // Vehicle Info
  vehicleMake: "",
  vehicleModel: "",
  vehicleYear: "",
  vehiclePlateNumber: "",
  vehicleState: "",
  vehicleExpirationDate: "",
  vehicleVinNumber: "",
  vehicleDoorOpeningLength: "",
  vehicleDoorOpeningWidth: "",
  vehicleDoorOpeningHeight: "",
  vehicleDimsInsideLength: "",
  vehicleDimsInsideWidth: "",
  vehicleDimsInsideHeight: "",
  vehiclePayload: "",
  vehicleAirRide: false,
  vehicleDockHigh: false,
  vehiclePalletJack: false,
  vehicleRamps: false,
  vehicleStraps: false,
  vehicleBlankets: false,
  vehicleLiftGate: false,
  vehicleETracks: false,
  vehicleLoadBars: false,

  // Global Signature
  globalSignature: "",

  // Signatures
  signature1: "",
  date1: "",
  signature2: "",
  date2: "",

  // Company Signature
  companySignature: "/sign.png", // Default company signature from public folder
  companySignatureDate: "",

  // W9 Form Fields
  w9Name: "",
  w9BusinessName: "",
  w9TaxClassification: "",
  w9LlcClassification: "",
  w9ExemptPayeeCode: "",
  w9FatcaCode: "",
  w9Address: "",
  w9CityStateZip: "",
  w9AccountNumbers: "",
  w9Ssn1: "",
  w9Ssn2: "",
  w9Ssn3: "",
  w9Ein1: "",
  w9Ein2: "",
  w9HasForeignPartners: false,
  w9Date: "",

  // Owner-Operator Agreement Fields
  agreementDay: "",
  agreementYear: "",
  agreementOwnerOperator: "",
  agreementOwnerAddress: "",
  agreement1Signature: "",
  paymentEmail: "",
  agreement2Signature: "",
  agreement3Signature: "",
  agreement4Signature: "",
  agreement5Signature: "",
  agreement6Signature: "",
  agreement7Signature: "",
  agreement8Signature: "",
  agreement9Signature: "",
  agreement10Signature: "",
  agreement11Signature: "",
  acceptanceCompany: "",
  acceptanceDay: "",
  acceptanceMonth: "",
  acceptanceYear: "",
  acceptanceOwnerCompany: "",
  acceptanceOwnerName: "",
  acceptanceOwnerTitle: "",
  acceptanceOwnerSignature: "",
  acceptanceOwnerDate: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      return { ...state, ...action.payload };
    },
    setFormData: (_state, action: PayloadAction<FormData>) => {
      return action.payload;
    },
    clearFormData: () => initialState,
  },
});

export const { updateFormData, setFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;
