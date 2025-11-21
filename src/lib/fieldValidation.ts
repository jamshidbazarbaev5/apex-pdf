/**
 * List of required fields from the Postman API specification
 */
export const REQUIRED_FIELDS = new Set([
  // Company Info
  "company_name",
  "company_registered_address",
  "company_city_state_zip",
  "company_phone",

  // Owner Info
  "owner_first_name",
  "owner_last_name",
  "owner_date_of_birth",
  "owner_address",
  "owner_city",
  "owner_state",
  "owner_zip_code",
  "owner_cell_phone",

  // Driver Info
  "drivers[0]driver_first_name",
  "drivers[0]driver_last_name",
  "drivers[0]driver_date_of_birth",
  "drivers[0]driver_address",
  "drivers[0]driver_city",
  "drivers[0]driver_state",
  "drivers[0]driver_zip_code",
  "drivers[0]driver_cell_phone",

  // Vehicle Info
  "drivers[0]vehicle_make",
  "drivers[0]vehicle_model",
  "drivers[0]vehicle_year",
  "drivers[0]vehicle_plate_number",
  "drivers[0]vehicle_state",
  "drivers[0]vehicle_expiration_date",
  "drivers[0]vehicle_door_length",
  "drivers[0]vehicle_door_width",
  "drivers[0]vehicle_door_height",
  "drivers[0]vehicle_inside_length",
  "drivers[0]vehicle_inside_width",
  "drivers[0]vehicle_inside_height",
  "drivers[0]vehicle_payload_lbs",

  // Certification & Agreement
  "applicant_date",
  "accident_waiver_date",
  "agreement_day",
  "agreement_year",
  "agreement_owner_name",
  "agreement_owner_located_at",

  // Acceptance
  "acceptance_company_name",
  "acceptance_day",
  "acceptance_month",
  "acceptance_year",
  "acceptance_owner_operator",
  "acceptance_printed_name",
  "acceptance_title",
  "acceptance_date",

  // Vendor & Direct Deposit
  "vendor_name",
  "vendor_address",
  "vendor_city_state_zip",
  "vendor_phone",
  "vendor_email",
  "bank_name",
  "routing_number",
  "account_number",
  "account_date",

  // W9 Form
  "entity_name",
  "business_name",
]);

/**
 * Maps camelCase field names to API field names for validation
 */
const fieldNameMapping: Record<string, string> = {
  companyName: "company_name",
  companyRegisteredAddress: "company_registered_address",
  companyCityStateZip: "company_city_state_zip",
  companyPhoneNumber: "company_phone",
  ownerFirstName: "owner_first_name",
  ownerLastName: "owner_last_name",
  ownerDateOfBirth: "owner_date_of_birth",
  ownerAddress: "owner_address",
  ownerCity: "owner_city",
  ownerState: "owner_state",
  ownerZipCode: "owner_zip_code",
  ownerCellPhone: "owner_cell_phone",
  driverFirstName: "drivers[0]driver_first_name",
  driverLastName: "drivers[0]driver_last_name",
  driverDateOfBirth: "drivers[0]driver_date_of_birth",
  driverAddress: "drivers[0]driver_address",
  driverCity: "drivers[0]driver_city",
  driverState: "drivers[0]driver_state",
  driverZipCode: "drivers[0]driver_zip_code",
  driverCellPhone: "drivers[0]driver_cell_phone",
  vehicleMake: "drivers[0]vehicle_make",
  vehicleModel: "drivers[0]vehicle_model",
  vehicleYear: "drivers[0]vehicle_year",
  vehiclePlateNumber: "drivers[0]vehicle_plate_number",
  vehicleState: "drivers[0]vehicle_state",
  vehicleExpirationDate: "drivers[0]vehicle_expiration_date",
  vehicleDoorOpeningLength: "drivers[0]vehicle_door_length",
  vehicleDoorOpeningWidth: "drivers[0]vehicle_door_width",
  vehicleDoorOpeningHeight: "drivers[0]vehicle_door_height",
  vehicleDimsInsideLength: "drivers[0]vehicle_inside_length",
  vehicleDimsInsideWidth: "drivers[0]vehicle_inside_width",
  vehicleDimsInsideHeight: "drivers[0]vehicle_inside_height",
  vehiclePayload: "drivers[0]vehicle_payload_lbs",
  applicantDate: "applicant_date",
  accidentWaiverDate: "accident_waiver_date",
  agreementDay: "agreement_day",
  agreementYear: "agreement_year",
  agreementOwnerOperator: "agreement_owner_name",
  agreementOwnerAddress: "agreement_owner_located_at",
  acceptanceCompany: "acceptance_company_name",
  acceptanceDay: "acceptance_day",
  acceptanceMonth: "acceptance_month",
  acceptanceYear: "acceptance_year",
  acceptanceOwnerCompany: "acceptance_owner_operator",
  acceptanceOwnerName: "acceptance_printed_name",
  acceptanceOwnerTitle: "acceptance_title",
  acceptanceOwnerDate: "acceptance_date",
  vendorName: "vendor_name",
  vendorAddress: "vendor_address",
  vendorCityStateZip: "vendor_city_state_zip",
  vendorPhone: "vendor_phone",
  vendorEmail: "vendor_email",
  bankName: "bank_name",
  routingNumber: "routing_number",
  accountNumber: "account_number",
  accountDate: "account_date",
  entityName: "entity_name",
  businessName: "business_name",
};

/**
 * Check if a field is required
 * @param fieldName - The camelCase field name
 * @returns true if field is required
 */
export function isRequiredField(fieldName: string): boolean {
  const apiFieldName = fieldNameMapping[fieldName];
  return REQUIRED_FIELDS.has(apiFieldName || fieldName);
}

/**
 * Get CSS classes for required fields (adds red border)
 * @param fieldName - The camelCase field name
 * @param baseClasses - Base CSS classes
 * @returns Combined CSS classes
 */
export function getRequiredFieldClasses(
  fieldName: string,
  baseClasses: string = ""
): string {
  if (isRequiredField(fieldName)) {
    return `${baseClasses} border-red-500`;
  }
  return baseClasses;
}

/**
 * Validates email format
 * @param email - Email address to validate
 * @returns true if valid email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates date format (YYYY-MM-DD)
 * @param date - Date string to validate
 * @returns true if valid ISO date format
 */
export function isValidDateFormat(date: string): boolean {
  if (!date) return true; // Empty dates are allowed
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) return false;
  
  // Additional check: verify it's a valid date
  const dateObj = new Date(date + 'T00:00:00');
  return !isNaN(dateObj.getTime());
}

/**
 * Get error message for email validation
 * @param email - Email address to validate
 * @returns Error message or empty string if valid
 */
export function getEmailValidationError(email: string): string {
  if (!email) return "Email is required";
  if (!isValidEmail(email)) return "Enter a valid email address.";
  return "";
}

/**
 * Get error message for date validation
 * @param date - Date string to validate
 * @returns Error message or empty string if valid
 */
export function getDateValidationError(date: string): string {
  if (!date) return ""; // Empty dates handled by required field check
  if (!isValidDateFormat(date)) {
    return "Date has wrong format. Use one of these formats instead: YYYY-MM-DD.";
  }
  return "";
}

