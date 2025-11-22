import React, { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { useNavigate } from "react-router-dom";
import { submitFormData, validateFormData } from "@/lib/apiService";
import { DocumentSheet } from "./DocumentSheet";
import { useFieldNavigation } from "@/hooks/useFieldNavigation";
import { FieldNavigator } from "@/components/ui/FieldNavigator";
// import { AutoSaveStatus } from "@/components/ui/AutoSaveStatus";

export const SubmitFormPage: React.FC<{ pageNumber?: number }> = ({}) => {
  const formData = useAppSelector((state) => state.form);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { goToFirstUnfilledField, totalUnfilledCount } = useFieldNavigation();

  const handleSubmit = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    // Check if at least one file is uploaded
    if (!formData.attachments || formData.attachments.length === 0) {
      setErrorMessage(
        "Please upload at least one document before submitting the form.",
      );
      return;
    }

    // Create a copy of form data to potentially add the auto-generated driver
    let dataToValidate = { ...formData };

    // If no drivers are in the array but driver fields are filled, automatically add the driver
    if (
      (!formData.drivers || formData.drivers.length === 0) &&
      formData.driverFirstName
    ) {
      const autoDriver = {
        driver_first_name: String(formData.driverFirstName || ""),
        driver_last_name: String(formData.driverLastName || ""),
        driver_date_of_birth: String(formData.driverDateOfBirth || ""),
        driver_address: String(formData.driverAddress || ""),
        driver_city: String(formData.driverCity || ""),
        driver_state: String(formData.driverState || ""),
        driver_zip_code: String(formData.driverZipCode || ""),
        driver_cell_phone: String(formData.driverCellPhone || ""),
        driver_emergency_number: String(formData.driverEmergencyNumber || ""),
        driver_us_citizen: Boolean(formData.driverUsCitizen),
        driver_green_card: Boolean(formData.driverGreenCard),
        driver_twic_tsa: Boolean(formData.driverTwicTsa),
        driver_hazmat_certified: Boolean(formData.driverHazmatCertified),
        vehicle_make: String(formData.vehicleMake || ""),
        vehicle_model: String(formData.vehicleModel || ""),
        vehicle_year: String(formData.vehicleYear || ""),
        vehicle_plate_number: String(formData.vehiclePlateNumber || ""),
        vehicle_state: String(formData.vehicleState || ""),
        vehicle_expiration_date: String(formData.vehicleExpirationDate || ""),
        vehicle_vin_number: String(formData.vehicleVinNumber || ""),
        vehicle_door_length: String(formData.vehicleDoorOpeningLength || ""),
        vehicle_door_width: String(formData.vehicleDoorOpeningWidth || ""),
        vehicle_door_height: String(formData.vehicleDoorOpeningHeight || ""),
        vehicle_inside_length: String(formData.vehicleDimsInsideLength || ""),
        vehicle_inside_width: String(formData.vehicleDimsInsideWidth || ""),
        vehicle_inside_height: String(formData.vehicleDimsInsideHeight || ""),
        vehicle_payload_lbs: String(formData.vehiclePayload || ""),
        vehicle_air_ride: Boolean(formData.vehicleAirRide),
        vehicle_dock_high: Boolean(formData.vehicleDockHigh),
        vehicle_pallet_jack: Boolean(formData.vehiclePalletJack),
        vehicle_ramps: Boolean(formData.vehicleRamps),
        vehicle_straps: Boolean(formData.vehicleStraps),
        vehicle_blankets: Boolean(formData.vehicleBlankets),
        vehicle_lift_gate: Boolean(formData.vehicleLiftGate),
        vehicle_e_tracks: Boolean(formData.vehicleETracks),
        vehicle_load_bars: Boolean(formData.vehicleLoadBars),
      };
      dataToValidate.drivers = [autoDriver];
    }

    // Validate form data
    const validation = validateFormData(dataToValidate);
    if (!validation.isValid) {
      setErrorMessage(
        `Please fill all required fields:\n${validation.errors.join("\n")}`,
      );

      // Automatically navigate to the first unfilled required field
      setTimeout(() => {
        goToFirstUnfilledField();
      }, 100);

      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitFormData(
        dataToValidate,
        formData.attachments,
        formData.signature,
      );

      setSuccessMessage("Form submitted successfully!");
      console.log("API Response:", response);

      // Reset form or redirect after successful submission
      // setTimeout(() => {
      //   navigate("/");
      // }, 2000);
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : "An unknown error occurred";
      setErrorMessage(`Failed to submit form: ${errorMsg}`);
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DocumentSheet>
      {/* <AutoSaveStatus /> */}

      <div className="max-w-4xl mx-auto py-8">
        {/* Header */}

        {/* Field Navigator - Only show if there are unfilled fields or after validation error */}
        {(totalUnfilledCount > 0 || errorMessage) && (
          <div className="mb-6">
            <FieldNavigator showFieldInfo={true} />
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="border-l-4 border-red-500 bg-red-50 p-4 mb-6 rounded">
            <p className="text-red-800 whitespace-pre-line font-semibold">
              {errorMessage}
            </p>
          </div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="border-l-4 border-green-500 bg-green-50 p-4 mb-6 rounded">
            <p className="text-green-800 font-semibold">{successMessage}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            disabled={isSubmitting}
            className="px-8 py-3 bg-gray-300 text-black font-bold rounded-lg hover:bg-gray-400 disabled:opacity-50 transition"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:opacity-50 transition flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin">⟳</span>
                Submitting...
              </>
            ) : (
              "Submit Form"
            )}
          </button>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <p>
            By submitting this form, you confirm that all information provided
            is accurate and complete.
          </p>
        </div>
      </div>
    </DocumentSheet>
  );
};

export default SubmitFormPage;
