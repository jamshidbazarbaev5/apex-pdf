import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface FormData {
  // Company Info
  companyName?: string;
  companyAddress?: string;
  cityStateZip?: string;
  phoneNumber?: string;
  email?: string;
  webSite?: string;
  mcNumber?: string;
  dotNumber?: string;

  // Owner Info
  ownerFirstName?: string;
  ownerLastName?: string;
  ownerDateOfBirth?: string;
  ownerAddress?: string;
  ownerCity?: string;
  ownerState?: string;
  ownerZipCode?: string;
  ownerCellPhone?: string;
  ownerEmergencyNumber?: string;
  ownerEmergencyName?: string;
  ownerEmail?: string;
  ownerDriverLicense?: string;
  ownerDriverLicenseState?: string;
  ownerDriverLicenseClass?: string;
  ownerDriverLicenseExpiration?: string;

  // Driver Info
  driverFirstName?: string;
  driverLastName?: string;
  driverDateOfBirth?: string;
  driverAddress?: string;
  driverCity?: string;
  driverState?: string;
  driverZipCode?: string;
  driverCellPhone?: string;
  driverEmergencyNumber?: string;
  driverEmergencyName?: string;
  driverEmail?: string;
  driverLicense?: string;
  driverLicenseState?: string;
  driverLicenseClass?: string;
  driverLicenseExpiration?: string;

  // Certifications
  usCitizen?: boolean;
  greenCard?: boolean;
  twicTsa?: boolean;
  hazmatCertified?: boolean;
}

const initialState: FormData = {};

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
