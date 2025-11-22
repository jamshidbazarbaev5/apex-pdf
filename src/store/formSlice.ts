import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface DriverVehicle {
  // Driver Info
  driver_first_name: string;
  driver_last_name: string;
  driver_date_of_birth: string;
  driver_address: string;
  driver_city: string;
  driver_state: string;
  driver_zip_code: string;
  driver_cell_phone: string;
  driver_emergency_number: string;
  driver_us_citizen: boolean;
  driver_green_card: boolean;
  driver_twic_tsa: boolean;
  driver_hazmat_certified: boolean;

  // Vehicle Info
  vehicle_make: string;
  vehicle_model: string;
  vehicle_year: string;
  vehicle_plate_number: string;
  vehicle_state: string;
  vehicle_expiration_date: string;
  vehicle_vin_number: string;
  vehicle_door_length: string;
  vehicle_door_width: string;
  vehicle_door_height: string;
  vehicle_inside_length: string;
  vehicle_inside_width: string;
  vehicle_inside_height: string;
  vehicle_payload_lbs: string;
  vehicle_air_ride: boolean;
  vehicle_dock_high: boolean;
  vehicle_pallet_jack: boolean;
  vehicle_ramps: boolean;
  vehicle_straps: boolean;
  vehicle_blankets: boolean;
  vehicle_lift_gate: boolean;
  vehicle_e_tracks: boolean;
  vehicle_load_bars: boolean;
}

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
  w9IndividualSoleProprietor: boolean;
  w9CCorporation: boolean;
  w9SCorporation: boolean;
  w9Partnership: boolean;
  w9TrustEstate: boolean;
  w9LLC: boolean;
  w9LlcClassification: string;
  w9Other: boolean;
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

  // Certification & Requirements
  applicantDate: string;
  accidentWaiverDate: string;

  // Vendor & Direct Deposit Fields
  vendorName: string;
  vendorAddress: string;
  vendorCityStateZip: string;
  vendorPhone: string;
  vendorEmail: string;
  bankName: string;
  routingNumber: string;
  accountNumber: string;
  accountTypeChecking: boolean;
  accountTypeSavings: boolean;
  accountDate: string;

  // W9 - Complete Tax Classification Fields
  entityName: string;
  businessName: string;
  individualSoleProprietor: boolean;
  cCorporation: boolean;
  sCorporation: boolean;
  partnership: boolean;
  trustEstate: boolean;
  llc: boolean;
  llcText: string;
  other: boolean;
  otherText: string;
  exemptPayeeCode: string;
  fatcaReportingCode: string;
  taxpayerAddress: string;
  taxpayerCityStateZip: string;
  taxpayerAccountNumber: string;
  requesterNameAddress: string;
  social_security_1: string;
  social_security_2: string;
  social_security_3: string;
  employer_id_1: string;
  employer_id_2: string;

  // Attachments & Files
  attachments: File[];
  signature: File | null;

  // Multiple Drivers with Vehicles
  drivers: DriverVehicle[];
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
  w9IndividualSoleProprietor: false,
  w9CCorporation: false,
  w9SCorporation: false,
  w9Partnership: false,
  w9TrustEstate: false,
  w9LLC: false,
  w9LlcClassification: "",
  w9Other: false,
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

  // Certification & Requirements
  applicantDate: "",
  accidentWaiverDate: "",

  // Vendor & Direct Deposit Fields
  vendorName: "",
  vendorAddress: "",
  vendorCityStateZip: "",
  vendorPhone: "",
  vendorEmail: "",
  bankName: "",
  routingNumber: "",
  accountNumber: "",
  accountTypeChecking: false,
  accountTypeSavings: false,
  accountDate: "",

  // W9 - Complete Tax Classification Fields
  entityName: "",
  businessName: "",
  individualSoleProprietor: false,
  cCorporation: false,
  sCorporation: false,
  partnership: false,
  trustEstate: false,
  llc: false,
  llcText: "",
  other: false,
  otherText: "",
  exemptPayeeCode: "",
  fatcaReportingCode: "",
  taxpayerAddress: "",
  taxpayerCityStateZip: "",
  taxpayerAccountNumber: "",
  requesterNameAddress: "",
  social_security_1: "",
  social_security_2: "",
  social_security_3: "",
  employer_id_1: "",
  employer_id_2: "",

  // Attachments & Files
  attachments: [],
  signature: null,

  // Multiple Drivers with Vehicles
  drivers: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      return { ...state, ...action.payload };
    },
    setFormData: (_state, action: PayloadAction<FormData>) => {
      const newState = action.payload;
      // Ensure drivers array is always initialized
      if (!newState.drivers) {
        newState.drivers = [];
      }
      return newState;
    },
    clearFormData: () => initialState,
    addDriver: (state, action: PayloadAction<DriverVehicle>) => {
      if (!state.drivers) {
        state.drivers = [];
      }
      state.drivers.push(action.payload);
    },
    updateDriver: (
      state,
      action: PayloadAction<{ index: number; data: Partial<DriverVehicle> }>,
    ) => {
      if (!state.drivers) {
        state.drivers = [];
      }
      if (state.drivers[action.payload.index]) {
        state.drivers[action.payload.index] = {
          ...state.drivers[action.payload.index],
          ...action.payload.data,
        };
      }
    },
    removeDriver: (state, action: PayloadAction<number>) => {
      if (state.drivers) {
        state.drivers.splice(action.payload, 1);
      }
    },
  },
});

export const {
  updateFormData,
  setFormData,
  clearFormData,
  addDriver,
  updateDriver,
  removeDriver,
} = formSlice.actions;
export default formSlice.reducer;
