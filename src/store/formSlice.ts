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

  // Signatures
  signature1: string;
  date1: string;
  signature2: string;
  date2: string;
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

  // Signatures
  signature1: "",
  date1: "",
  signature2: "",
  date2: "",
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
