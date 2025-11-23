import type { FormData } from "@/store/formSlice";

/**
 * Converts a base64 data URL to a File object
 * @param dataUrl - Data URL string (e.g., data:image/png;base64,...)
 * @param fileName - Name for the file
 * @returns File object or null if conversion fails
 */
function dataUrlToFile(dataUrl: string, fileName: string): File | null {
  try {
    if (!dataUrl.startsWith("data:")) {
      return null;
    }

    // Extract the MIME type
    const matches = dataUrl.match(/^data:([^;]+);base64,/);
    const mimeType = matches ? matches[1] : "image/png";

    // Decode the base64 string
    const bstr = atob(dataUrl.split(",")[1]);
    const n = bstr.length;
    const u8arr = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
      u8arr[i] = bstr.charCodeAt(i);
    }

    // Create and return File object
    return new File([u8arr], fileName, { type: mimeType });
  } catch (error) {
    console.error("Error converting data URL to file:", error);
    return null;
  }
}

/**
 * Gets signature file from data URL or returns null
 * @param signatureDataUrl - Signature as data URL string
 * @returns File object or null
 */
function getSignatureFile(signatureDataUrl: string): File | null {
  if (!signatureDataUrl) return null;
  return dataUrlToFile(signatureDataUrl, "signature.png");
}

/**
 * Ensures date is in YYYY-MM-DD format
 * @param dateValue - Date value (could be YYYY-MM-DD or other formats)
 * @returns Date in YYYY-MM-DD format or empty string
 */
function formatDateToISO(dateValue: string): string {
  if (!dateValue) return "";

  // If already in YYYY-MM-DD format, return as is
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    return dateValue;
  }

  // Try to parse and reformat
  try {
    const date = new Date(dateValue);
    if (isNaN(date.getTime())) {
      return "";
    }
    return date.toISOString().split("T")[0];
  } catch (error) {
    return "";
  }
}

/**
 * Maps camelCase form data to snake_case API field names
 * NOTE: Driver and vehicle fields are excluded here because they are handled
 * separately in the submitFormData function via the drivers array
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

    // NOTE: Driver Info and Vehicle Info mappings removed - handled separately via drivers array

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
    companySignatureDate: "company_signature_date",

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
    w9HasForeignPartners: "foreign_partners",
    exemptPayeeCode: "exempt_payee_code",
    fatcaReportingCode: "fatca_reporting_code",
    taxpayerAddress: "taxpayer_address",
    taxpayerCityStateZip: "taxpayer_city_state_zip",
    taxpayerAccountNumber: "taxpayer_account_number",
    requesterNameAddress: "requester_name_address",
    social_security_1: "social_security_1",
    social_security_2: "social_security_2",
    social_security_3: "social_security_3",
    employer_id_1: "employer_id_1",
    employer_id_2: "employer_id_2",
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
  signature: File | null = null,
): Promise<any> {
  try {
    const formDataToSend = new FormData();
    const apiFields = mapFormDataToApiFields(formData);

    // Add all mapped fields with proper formatting
    Object.entries(apiFields).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        // Format dates to YYYY-MM-DD if they're date fields
        let valueToAppend = String(value);
        if (key.includes("date") || key.includes("Date")) {
          valueToAppend = formatDateToISO(String(value));
          if (!valueToAppend) return; // Skip if date formatting fails
        }
        formDataToSend.append(key, valueToAppend);
      }
    });

    // Add drivers array data with proper date formatting
    if (formData.drivers && formData.drivers.length > 0) {
      formData.drivers.forEach((driver, index) => {
        // Add driver fields - only append if value exists
        if (driver.driver_first_name) {
          formDataToSend.append(
            `drivers[${index}]driver_first_name`,
            driver.driver_first_name,
          );
        }
        if (driver.driver_last_name) {
          formDataToSend.append(
            `drivers[${index}]driver_last_name`,
            driver.driver_last_name,
          );
        }

        // Format driver date of birth
        if (driver.driver_date_of_birth) {
          const formattedDOB = formatDateToISO(driver.driver_date_of_birth);
          if (formattedDOB) {
            formDataToSend.append(
              `drivers[${index}]driver_date_of_birth`,
              formattedDOB,
            );
          }
        }

        if (driver.driver_address) {
          formDataToSend.append(
            `drivers[${index}]driver_address`,
            driver.driver_address,
          );
        }
        if (driver.driver_city) {
          formDataToSend.append(
            `drivers[${index}]driver_city`,
            driver.driver_city,
          );
        }
        if (driver.driver_state) {
          formDataToSend.append(
            `drivers[${index}]driver_state`,
            driver.driver_state,
          );
        }
        if (driver.driver_zip_code) {
          formDataToSend.append(
            `drivers[${index}]driver_zip_code`,
            driver.driver_zip_code,
          );
        }
        if (driver.driver_cell_phone) {
          formDataToSend.append(
            `drivers[${index}]driver_cell_phone`,
            driver.driver_cell_phone,
          );
        }
        if (driver.driver_emergency_number) {
          formDataToSend.append(
            `drivers[${index}]driver_emergency_number`,
            driver.driver_emergency_number,
          );
        }

        // Always append boolean fields (they have defined values)
        formDataToSend.append(
          `drivers[${index}]driver_us_citizen`,
          String(driver.driver_us_citizen),
        );
        formDataToSend.append(
          `drivers[${index}]driver_green_card`,
          String(driver.driver_green_card),
        );
        formDataToSend.append(
          `drivers[${index}]driver_twic_tsa`,
          String(driver.driver_twic_tsa),
        );
        formDataToSend.append(
          `drivers[${index}]driver_hazmat_certified`,
          String(driver.driver_hazmat_certified),
        );

        // Add vehicle fields - only append if value exists
        if (driver.vehicle_make) {
          formDataToSend.append(
            `drivers[${index}]vehicle_make`,
            driver.vehicle_make,
          );
        }
        if (driver.vehicle_model) {
          formDataToSend.append(
            `drivers[${index}]vehicle_model`,
            driver.vehicle_model,
          );
        }
        if (driver.vehicle_year) {
          formDataToSend.append(
            `drivers[${index}]vehicle_year`,
            driver.vehicle_year,
          );
        }
        if (driver.vehicle_plate_number) {
          formDataToSend.append(
            `drivers[${index}]vehicle_plate_number`,
            driver.vehicle_plate_number,
          );
        }
        if (driver.vehicle_state) {
          formDataToSend.append(
            `drivers[${index}]vehicle_state`,
            driver.vehicle_state,
          );
        }

        // Format vehicle expiration date
        if (driver.vehicle_expiration_date) {
          const formattedExpDate = formatDateToISO(
            driver.vehicle_expiration_date,
          );
          if (formattedExpDate) {
            formDataToSend.append(
              `drivers[${index}]vehicle_expiration_date`,
              formattedExpDate,
            );
          }
        }

        if (driver.vehicle_vin_number) {
          formDataToSend.append(
            `drivers[${index}]vehicle_vin_number`,
            driver.vehicle_vin_number,
          );
        }
        if (driver.vehicle_door_length) {
          formDataToSend.append(
            `drivers[${index}]vehicle_door_length`,
            driver.vehicle_door_length,
          );
        }
        if (driver.vehicle_door_width) {
          formDataToSend.append(
            `drivers[${index}]vehicle_door_width`,
            driver.vehicle_door_width,
          );
        }
        if (driver.vehicle_door_height) {
          formDataToSend.append(
            `drivers[${index}]vehicle_door_height`,
            driver.vehicle_door_height,
          );
        }
        if (driver.vehicle_inside_length) {
          formDataToSend.append(
            `drivers[${index}]vehicle_inside_length`,
            driver.vehicle_inside_length,
          );
        }
        if (driver.vehicle_inside_width) {
          formDataToSend.append(
            `drivers[${index}]vehicle_inside_width`,
            driver.vehicle_inside_width,
          );
        }
        if (driver.vehicle_inside_height) {
          formDataToSend.append(
            `drivers[${index}]vehicle_inside_height`,
            driver.vehicle_inside_height,
          );
        }
        if (driver.vehicle_payload_lbs) {
          formDataToSend.append(
            `drivers[${index}]vehicle_payload_lbs`,
            driver.vehicle_payload_lbs,
          );
        }

        // Always append boolean vehicle fields
        formDataToSend.append(
          `drivers[${index}]vehicle_air_ride`,
          String(driver.vehicle_air_ride),
        );
        formDataToSend.append(
          `drivers[${index}]vehicle_dock_high`,
          String(driver.vehicle_dock_high),
        );
        formDataToSend.append(
          `drivers[${index}]vehicle_pallet_jack`,
          String(driver.vehicle_pallet_jack),
        );
        formDataToSend.append(
          `drivers[${index}]vehicle_ramps`,
          String(driver.vehicle_ramps),
        );
        formDataToSend.append(
          `drivers[${index}]vehicle_straps`,
          String(driver.vehicle_straps),
        );
        formDataToSend.append(
          `drivers[${index}]vehicle_blankets`,
          String(driver.vehicle_blankets),
        );
        formDataToSend.append(
          `drivers[${index}]vehicle_lift_gate`,
          String(driver.vehicle_lift_gate),
        );
        formDataToSend.append(
          `drivers[${index}]vehicle_e_tracks`,
          String(driver.vehicle_e_tracks),
        );
        formDataToSend.append(
          `drivers[${index}]vehicle_load_bars`,
          String(driver.vehicle_load_bars),
        );
      });
    }

    // Add attachments
    attachments.forEach((file) => {
      formDataToSend.append("attachments", file);
    });

    // Convert signature from data URL to File if needed
    let signatureFile = signature;
    if (!signatureFile && formData.globalSignature) {
      signatureFile = getSignatureFile(formData.globalSignature);
    }

    // Add signature file
    if (signatureFile) {
      formDataToSend.append("signature", signatureFile);
    }

    // Add company signature file (from /sign.png in public folder)
    if (
      formData.companySignature &&
      formData.companySignature.startsWith("/")
    ) {
      try {
        const response = await fetch(formData.companySignature);
        if (response.ok) {
          const blob = await response.blob();
          const companySignatureFile = new File(
            [blob],
            "company-signature.png",
            { type: "image/png" },
          );
          formDataToSend.append("company_signature", companySignatureFile);
        }
      } catch (error) {
        console.warn("Could not load company signature file:", error);
      }
    }

    console.log("Submitting form data with drivers:", formData.drivers);

    const response = await fetch(
      "https://axpergroup.com/application/",
      {
        method: "POST",
        body: formDataToSend,
      },
    );

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
  ];

  requiredFields.forEach((field) => {
    const value = formData[field];
    if (!value || (typeof value === "string" && value.trim() === "")) {
      errors.push(`${field} is required`);
    }
  });

  // Validate drivers array - at least one driver required
  if (!formData.drivers || formData.drivers.length === 0) {
    errors.push("At least one driver with vehicle information is required");
  } else {
    // Validate each driver has required fields
    formData.drivers.forEach((driver, index) => {
      const requiredDriverFields = [
        "driver_first_name",
        "driver_last_name",
        "driver_date_of_birth",
        "driver_address",
        "driver_city",
        "driver_state",
        "driver_zip_code",
        "driver_cell_phone",
        "vehicle_make",
        "vehicle_model",
        "vehicle_year",
        "vehicle_plate_number",
        "vehicle_state",
        "vehicle_expiration_date",
        "vehicle_door_length",
        "vehicle_door_width",
        "vehicle_door_height",
        "vehicle_inside_length",
        "vehicle_inside_width",
        "vehicle_inside_height",
        "vehicle_payload_lbs",
      ] as const;

      requiredDriverFields.forEach((field) => {
        const value = driver[field as keyof typeof driver];
        if (!value || (typeof value === "string" && value.trim() === "")) {
          errors.push(`Driver ${index + 1} - ${field} is required`);
        }
      });
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
