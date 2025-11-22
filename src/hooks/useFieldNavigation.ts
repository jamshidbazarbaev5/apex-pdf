import { useState, useCallback, useMemo, useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { fieldNameMapping } from "@/lib/fieldValidation";
import { REQUIRED_FIELDS } from "@/lib/fieldValidation";
import type { FormData, DriverVehicle } from "@/store/formSlice";

export interface UnfilledField {
  fieldName: string;
  displayName: string;
  pageNumber: number;
  driverIndex?: number;
  domSelector: string;
}

/**
 * Custom hook for navigating between unfilled required fields
 */
export const useFieldNavigation = () => {
  const formData = useAppSelector((state) => state.form);
  const [currentFieldIndex, setCurrentFieldIndex] = useState(-1);

  // Reverse mapping from API field names to camelCase form field names
  const reverseFieldMapping = useMemo(() => {
    const reverse: Record<string, string> = {};
    Object.entries(fieldNameMapping).forEach(([camelCase, apiName]) => {
      reverse[apiName] = camelCase;
    });
    return reverse;
  }, []);

  // Get all unfilled required fields
  const unfilledFields = useMemo((): UnfilledField[] => {
    const unfilled: UnfilledField[] = [];

    // Check main form fields
    REQUIRED_FIELDS.forEach((apiFieldName) => {
      if (apiFieldName.includes("drivers[")) {
        // Skip driver fields here, we'll handle them separately
        return;
      }

      const camelCaseFieldName =
        reverseFieldMapping[apiFieldName] || apiFieldName;
      const value = formData[camelCaseFieldName as keyof FormData];

      if (!value || (typeof value === "string" && value.trim() === "")) {
        // Determine page number based on field
        let pageNumber = 1;
        let displayName = camelCaseFieldName;

        if (apiFieldName.startsWith("company_")) {
          pageNumber = 2;
          displayName = apiFieldName
            .replace("company_", "Company ")
            .replace(/_/g, " ");
        } else if (apiFieldName.startsWith("owner_")) {
          pageNumber = 2;
          displayName = apiFieldName
            .replace("owner_", "Owner ")
            .replace(/_/g, " ");
        } else if (
          apiFieldName.includes("agreement") ||
          apiFieldName.includes("acceptance")
        ) {
          // These are in later pages, we'll need to calculate based on driver count
          const driverCount = formData.drivers?.length || 0;
          pageNumber = 5 + driverCount * 2 + 1; // After driver pages + AxperForm
        } else if (
          apiFieldName.includes("vendor_") ||
          apiFieldName.includes("bank_") ||
          apiFieldName.includes("account_")
        ) {
          // Direct deposit page
          const driverCount = formData.drivers?.length || 0;
          pageNumber = 5 + driverCount * 2 + 7; // Near the end
        }

        unfilled.push({
          fieldName: camelCaseFieldName,
          displayName:
            displayName.charAt(0).toUpperCase() + displayName.slice(1),
          pageNumber,
          domSelector: `input[name="${camelCaseFieldName}"], textarea[name="${camelCaseFieldName}"], select[name="${camelCaseFieldName}"]`,
        });
      }
    });

    // Check driver fields
    if (formData.drivers && formData.drivers.length > 0) {
      formData.drivers.forEach((driver, driverIndex) => {
        const driverRequiredFields = [
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
        ];

        driverRequiredFields.forEach((fieldName) => {
          const value = driver[fieldName as keyof DriverVehicle];
          if (!value || (typeof value === "string" && value.trim() === "")) {
            // Determine if it's driver info or vehicle info page
            const isDriverField = fieldName.startsWith("driver_");
            const pageNumber = 5 + driverIndex * 2 + (isDriverField ? 0 : 1);

            const displayName = fieldName
              .replace("driver_", "Driver ")
              .replace("vehicle_", "Vehicle ")
              .replace(/_/g, " ");

            unfilled.push({
              fieldName,
              displayName: `${displayName.charAt(0).toUpperCase() + displayName.slice(1)} (Driver ${driverIndex + 1})`,
              pageNumber,
              driverIndex,
              domSelector: `input[name="${fieldName}"], textarea[name="${fieldName}"], select[name="${fieldName}"]`,
            });
          }
        });
      });
    }

    // Sort by page number, then by field name
    return unfilled.sort((a, b) => {
      if (a.pageNumber !== b.pageNumber) {
        return a.pageNumber - b.pageNumber;
      }
      return a.fieldName.localeCompare(b.fieldName);
    });
  }, [formData, reverseFieldMapping]);

  // Focus on a specific field
  const focusField = useCallback((field: UnfilledField) => {
    // Try multiple selectors to find the field
    const selectors = [
      field.domSelector,
      `[name="${field.fieldName}"]`,
      `[data-field="${field.fieldName}"]`,
      `#${field.fieldName}`,
      `.field-${field.fieldName} input`,
      `.field-${field.fieldName} textarea`,
      `.field-${field.fieldName} select`,
      // Additional selectors for driver fields
      ...(field.driverIndex !== undefined
        ? [
            `input[name="drivers[${field.driverIndex}].${field.fieldName}"]`,
            `[data-driver="${field.driverIndex}"] [name="${field.fieldName}"]`,
            `[data-driver-index="${field.driverIndex}"] input[name="${field.fieldName}"]`,
          ]
        : []),
    ];

    let element: HTMLElement | null = null;

    for (const selector of selectors) {
      try {
        element = document.querySelector(selector) as HTMLElement;
        if (element) break;
      } catch (e) {
        // Continue to next selector if this one fails
        continue;
      }
    }

    if (element) {
      // Scroll to element
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });

      // Focus after scrolling
      setTimeout(() => {
        if (element) {
          element.focus();
          // Add visual highlight
          element.classList.add("field-navigation-highlight");
          setTimeout(() => {
            element?.classList.remove("field-navigation-highlight");
          }, 2000);
        }
      }, 500);

      return true;
    }

    return false;
  }, []);

  // Navigate to first unfilled field
  const goToFirstUnfilledField = useCallback(() => {
    if (unfilledFields.length > 0) {
      const firstField = unfilledFields[0];
      setCurrentFieldIndex(0);
      return focusField(firstField);
    }
    return false;
  }, [unfilledFields, focusField]);

  // Navigate to next unfilled field
  const goToNextUnfilledField = useCallback(() => {
    if (unfilledFields.length === 0) return false;

    const nextIndex =
      currentFieldIndex === -1
        ? 0
        : (currentFieldIndex + 1) % unfilledFields.length;
    const nextField = unfilledFields[nextIndex];

    setCurrentFieldIndex(nextIndex);
    return focusField(nextField);
  }, [unfilledFields, currentFieldIndex, focusField]);

  // Navigate to previous unfilled field
  const goToPreviousUnfilledField = useCallback(() => {
    if (unfilledFields.length === 0) return false;

    const prevIndex =
      currentFieldIndex === -1
        ? unfilledFields.length - 1
        : (currentFieldIndex - 1 + unfilledFields.length) %
          unfilledFields.length;
    const prevField = unfilledFields[prevIndex];

    setCurrentFieldIndex(prevIndex);
    return focusField(prevField);
  }, [unfilledFields, currentFieldIndex, focusField]);

  // Get current field info
  const currentField = useMemo(() => {
    if (currentFieldIndex >= 0 && currentFieldIndex < unfilledFields.length) {
      return unfilledFields[currentFieldIndex];
    }
    return null;
  }, [unfilledFields, currentFieldIndex]);

  // Add keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle shortcuts when not typing in input fields
      const activeElement = document.activeElement;
      const isInputActive =
        activeElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          activeElement.tagName === "SELECT" ||
          activeElement.getAttribute("contenteditable") === "true");

      // Don't interfere with normal typing
      if (isInputActive && !event.ctrlKey && !event.metaKey) {
        return;
      }

      // Handle keyboard shortcuts
      if (unfilledFields.length > 0) {
        switch (event.key) {
          case "ArrowDown":
            if (event.ctrlKey || event.metaKey) {
              event.preventDefault();
              goToNextUnfilledField();
            }
            break;
          case "ArrowUp":
            if (event.ctrlKey || event.metaKey) {
              event.preventDefault();
              goToPreviousUnfilledField();
            }
            break;
          case "Home":
            if (event.ctrlKey || event.metaKey) {
              event.preventDefault();
              goToFirstUnfilledField();
            }
            break;
          case "k":
            if (event.ctrlKey || event.metaKey) {
              event.preventDefault();
              goToFirstUnfilledField();
            }
            break;
          case "j":
            if (event.ctrlKey || event.metaKey) {
              event.preventDefault();
              goToNextUnfilledField();
            }
            break;
          case "Escape":
            if (currentFieldIndex >= 0) {
              event.preventDefault();
              setCurrentFieldIndex(-1);
            }
            break;
        }
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    unfilledFields.length,
    currentFieldIndex,
    goToFirstUnfilledField,
    goToNextUnfilledField,
    goToPreviousUnfilledField,
  ]);

  return {
    unfilledFields,
    currentField,
    currentFieldIndex,
    totalUnfilledCount: unfilledFields.length,
    goToFirstUnfilledField,
    goToNextUnfilledField,
    goToPreviousUnfilledField,
    focusField,
  };
};
