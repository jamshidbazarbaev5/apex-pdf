import type { FormData } from "@/store/formSlice";

/**
 * Maps camelCase form data to snake_case API field names
 */
function mapFormDataToApiFields(formData: FormData): Record<string, any> {
  const mapping: Record<string, string> = {
    // Company Info
    companyName: "company_name",
    companyRegisteredAddress: "company_registered_address",
    companyCityStateZip: "company_city_state_zip",
    companyPhoneNumber: "company_phone",
    companyEmail: "company_email",
    companyWebsite: "company_website",
    companyMcNumber: "company_mc_number",
    companyDotNumber: "company_dot_number",

    // Owner Info
    ownerFirstName: "owner_first_name",
    ownerLastName: "owner_last_name",
    ownerDateOfBirth: "owner_date_of_birth",
    ownerAddress: "owner_address",
    ownerCity: "owner_city",
    ownerState: "owner_state",
    ownerZipCode: "owner_zip_code",
    ownerCellPhone: "owner_cell_phone",
    ownerEmergencyNumber: "owner_emergency_contact",
    ownerEmail: "owner_email",
    ownerLicenseNumber: "owner_drivers_license_number",
    ownerLicenseState: "owner_dl_state",
    ownerLicenseClass: "owner_dl_class",
    ownerExpirationDate: "owner_dl_expiration",

    // Driver Info
    driverFirstName: "drivers[0]driver_first_name",
    driverLastName: "drivers[0]driver_last_name",
    driverDateOfBirth: "drivers[0]driver_date_of_birth",
    driverAddress: "drivers[0]driver_address",
    driverCity: "drivers[0]driver_city",
    driverState: "drivers[0]driver_state",
    driverZipCode: "drivers[0]driver_zip_code",
    driverCellPhone: "drivers[0]driver_cell_phone",
    driverEmergencyNumber: "drivers[0]driver_emergency_contact",
    driverUsCitizen: "drivers[0]driver_us_citizen",
    driverGreenCard: "drivers[0]driver_green_card",
    driverTwicTsa: "drivers[0]driver_twic_tsa",
    driverHazmatCertified: "drivers[0]driver_hazmat",

    // Vehicle Info
    vehicleMake: "drivers[0]vehicle_make",
    vehicleModel: "drivers[0]vehicle_model",
    vehicleYear: "drivers[0]vehicle_year",
    vehiclePlateNumber: "drivers[0]vehicle_plate_number",
    vehicleState: "drivers[0]vehicle_state",
    vehicleExpirationDate: "drivers[0]vehicle_expiration_date",
    vehicleVinNumber: "drivers[0]vehicle_vin",
    vehicleDoorOpeningLength: "drivers[0]vehicle_door_length",
    vehicleDoorOpeningWidth: "drivers[0]vehicle_door_width",
    vehicleDoorOpeningHeight: "drivers[0]vehicle_door_height",
    vehicleDimsInsideLength: "drivers[0]vehicle_inside_length",
    vehicleDimsInsideWidth: "drivers[0]vehicle_inside_width",
    vehicleDimsInsideHeight: "drivers[0]vehicle_inside_height",
    vehiclePayload: "drivers[0]vehicle_payload_lbs",
    vehicleAirRide: "drivers[0]vehicle_air_ride",
    vehicleDockHigh: "drivers[0]vehicle_dock_high",
    vehiclePalletJack: "drivers[0]vehicle_pallet_jack",
    vehicleRamps: "drivers[0]vehicle_ramps",
    vehicleStraps: "drivers[0]vehicle_straps",
    vehicleBlankets: "drivers[0]vehicle_blankets",
    vehicleLiftGate: "drivers[0]vehicle_lift_gate",
    vehicleETracks: "drivers[0]vehicle_e_tracks",
    vehicleLoadBars: "drivers[0]vehicle_load_bars",

    // Certification & Agreement
    applicantDate: "applicant_date",
    accidentWaiverDate: "accident_waiver_date",
    agreementDay: "agreement_day",
    agreementYear: "agreement_year",
    agreementOwnerOperator: "agreement_owner_name",
    agreementOwnerAddress: "agreement_owner_located_at",
    paymentEmail: "payment_email",

    // Acceptance Fields
    acceptanceCompany: "acceptance_company_name",
    acceptanceDay: "acceptance_day",
    acceptanceMonth: "acceptance_month",
    acceptanceYear: "acceptance_year",
    acceptanceOwnerCompany: "acceptance_owner_operator",
    acceptanceOwnerName: "acceptance_printed_name",
    acceptanceOwnerTitle: "acceptance_title",
    acceptanceOwnerDate: "acceptance_date",

    // Vendor & Direct Deposit
    vendorName: "vendor_name",
    vendorAddress: "vendor_address",
    vendorCityStateZip: "vendor_city_state_zip",
    vendorPhone: "vendor_phone",
    vendorEmail: "vendor_email",
    bankName: "bank_name",
    routingNumber: "routing_number",
    accountNumber: "account_number",
    accountTypeChecking: "account_type_checking",
    accountTypeSavings: "account_type_savings",
    accountDate: "account_date",

    // W9 Form Fields
    entityName: "entity_name",
    businessName: "business_name",
    individualSoleProprietor: "individual_sole_proprietor",
    cCorporation: "c_corporation",
    sCorporation: "s_corporation",
    partnership: "partnership",
    trustEstate: "trust_estate",
    llc: "llc",
    llcText: "llc_text",
    other: "other",
    otherText: "other_text",
    exemptPayeeCode: "exempt_payee_code",
    fatcaReportingCode: "fatca_reporting_code",
    taxpayerAddress: "taxpayer_address",
    taxpayerCityStateZip: "taxpayer_city_state_zip",
    taxpayerAccountNumber: "taxpayer_account_number",
    requesterNameAddress: "requester_name_address",
    socialSecurity1: "social_security_1",
    socialSecurity2: "social_security_2",
    socialSecurity3: "social_security_3",
    employerId1: "employer_id_1",
    employerId2: "employer_id_2",
  };

  const apiData: Record<string, any> = {};

  Object.entries(formData).forEach(([key, value]) => {
    const apiKey = mapping[key];
    if (apiKey && value !== "" && value !== null && value !== false) {
      apiData[apiKey] = value;
    }
  });

  return apiData;
}

/**
 * Submits the form data to the API
 * @param formData - The form data from Redux store
 * @param attachments - Array of file attachments
 * @param signature - Signature file
 * @returns Promise with the API response
 */
export async function submitFormData(
  formData: FormData,
  attachments: File[] = [],
  signature: File | null = null
): Promise<any> {
  try {
    const formDataToSend = new FormData();
    const apiFields = mapFormDataToApiFields(formData);

    // Add all mapped fields
    Object.entries(apiFields).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        formDataToSend.append(key, String(value));
      }
    });

    // Add attachments
    attachments.forEach((file) => {
      formDataToSend.append("attachments", file);
    });

    // Add signature file
    if (signature) {
      formDataToSend.append("signature", signature);
    }

    const response = await fetch("http://127.0.0.1:8000/api/v1/pdf-contract-form/", {
      method: "POST",
      body: formDataToSend,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

/**
 * Validates that all required fields are filled
 * @param formData - The form data to validate
 * @returns Object with isValid boolean and errors array
 */
export function validateFormData(formData: FormData): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  const requiredFields: (keyof FormData)[] = [
    // Company Info
    "companyName",
    "companyRegisteredAddress",
    "companyCityStateZip",
    "companyPhoneNumber",

    // Owner Info
    "ownerFirstName",
    "ownerLastName",
    "ownerDateOfBirth",
    "ownerAddress",
    "ownerCity",
    "ownerState",
    "ownerZipCode",
    "ownerCellPhone",

    // Driver Info
    "driverFirstName",
    "driverLastName",
    "driverDateOfBirth",
    "driverAddress",
    "driverCity",
    "driverState",
    "driverZipCode",
    "driverCellPhone",

    // Vehicle Info
    "vehicleMake",
    "vehicleModel",
    "vehicleYear",
    "vehiclePlateNumber",
    "vehicleState",
    "vehicleExpirationDate",
    "vehicleDoorOpeningLength",
    "vehicleDoorOpeningWidth",
    "vehicleDoorOpeningHeight",
    "vehicleDimsInsideLength",
    "vehicleDimsInsideWidth",
    "vehicleDimsInsideHeight",
    "vehiclePayload",

    // Certification & Agreement
    "applicantDate",
    "accidentWaiverDate",
    "agreementDay",
    "agreementYear",
    "agreementOwnerOperator",
    "agreementOwnerAddress",

    // Acceptance
    "acceptanceCompany",
    "acceptanceDay",
    "acceptanceMonth",
    "acceptanceYear",
    "acceptanceOwnerCompany",
    "acceptanceOwnerName",
    "acceptanceOwnerTitle",
    "acceptanceOwnerDate",

    // Vendor & Direct Deposit
    "vendorName",
    "vendorAddress",
    "vendorCityStateZip",
    "vendorPhone",
    "vendorEmail",
    "bankName",
    "routingNumber",
    "accountNumber",
    "accountDate",

    // W9 Form
    "entityName",
    "businessName",
  ];

  requiredFields.forEach((field) => {
    const value = formData[field];
    if (!value || (typeof value === "string" && value.trim() === "")) {
      errors.push(`${field} is required`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}
