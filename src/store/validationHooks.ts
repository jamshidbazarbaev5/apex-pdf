import { useAppSelector } from "@/store/hooks";
import { isRequiredField } from "@/lib/fieldValidation";

/**
 * Hook to check if a field is empty and required
 */
export function useIsFieldMissing(fieldName: string): boolean {
  const formData = useAppSelector((state) => state.form);
  const value = formData[fieldName as keyof typeof formData];

  if (!isRequiredField(fieldName)) {
    return false;
  }

  if (typeof value === "string") {
    return value.trim() === "";
  }

  if (typeof value === "boolean") {
    return !value;
  }

  return !value;
}

/**
 * Hook to get missing required fields
 */
export function useMissingRequiredFields(): string[] {
  const formData = useAppSelector((state) => state.form);
  const missing: string[] = [];

  const requiredFields = [
    "companyName",
    "companyRegisteredAddress",
    "companyCityStateZip",
    "companyPhoneNumber",
    "ownerFirstName",
    "ownerLastName",
    "ownerDateOfBirth",
    "ownerAddress",
    "ownerCity",
    "ownerState",
    "ownerZipCode",
    "ownerCellPhone",
    "driverFirstName",
    "driverLastName",
    "driverDateOfBirth",
    "driverAddress",
    "driverCity",
    "driverState",
    "driverZipCode",
    "driverCellPhone",
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
    "applicantDate",
    "accidentWaiverDate",
    "agreementDay",
    "agreementYear",
    "agreementOwnerOperator",
    "agreementOwnerAddress",
    "acceptanceCompany",
    "acceptanceDay",
    "acceptanceMonth",
    "acceptanceYear",
    "acceptanceOwnerCompany",
    "acceptanceOwnerName",
    "acceptanceOwnerTitle",
    "acceptanceOwnerDate",
    "vendorName",
    "vendorAddress",
    "vendorCityStateZip",
    "vendorPhone",
    "vendorEmail",
    "bankName",
    "routingNumber",
    "accountNumber",
    "accountDate",
    "entityName",
    "businessName",
  ];

  requiredFields.forEach((field) => {
    const value = formData[field as keyof typeof formData];
    if (typeof value === "string" && value.trim() === "") {
      missing.push(field);
    }
  });

  return missing;
}
