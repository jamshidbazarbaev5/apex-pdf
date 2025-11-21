import React, { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { useNavigate } from "react-router-dom";
import { submitFormData, validateFormData } from "@/lib/apiService";
import { DocumentSheet } from "./DocumentSheet";
import { AutoSaveStatus } from "@/components/ui/AutoSaveStatus";

export const SubmitFormPage: React.FC = () => {
  const formData = useAppSelector((state) => state.form);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    // Validate form data
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      setErrorMessage(`Please fill all required fields:\n${validation.errors.join("\n")}`);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitFormData(
        formData,
        formData.attachments,
        formData.signature
      );

      setSuccessMessage("Form submitted successfully!");
      console.log("API Response:", response);

      // Reset form or redirect after successful submission
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "An unknown error occurred";
      setErrorMessage(`Failed to submit form: ${errorMsg}`);
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DocumentSheet>
      <AutoSaveStatus />

      <div className="max-w-4xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">Review & Submit</h1>
          <p className="text-gray-600 text-lg">
            Please review your information before submitting
          </p>
        </div>

        {/* Form Data Summary */}
        <div className="border-2 border-gray-300 rounded-lg p-6 mb-6 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Form Summary</h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Company Info */}
            <div>
              <h3 className="font-bold text-lg mb-2">Company Information</h3>
              <p>
                <strong>Company:</strong> {formData.companyName || "Not provided"}
              </p>
              <p>
                <strong>Address:</strong> {formData.companyRegisteredAddress || "Not provided"}
              </p>
              <p>
                <strong>Phone:</strong> {formData.companyPhoneNumber || "Not provided"}
              </p>
            </div>

            {/* Owner Info */}
            <div>
              <h3 className="font-bold text-lg mb-2">Owner Information</h3>
              <p>
                <strong>Name:</strong> {formData.ownerFirstName} {formData.ownerLastName}
              </p>
              <p>
                <strong>DOB:</strong> {formData.ownerDateOfBirth || "Not provided"}
              </p>
              <p>
                <strong>Phone:</strong> {formData.ownerCellPhone || "Not provided"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Driver Info */}
            <div>
              <h3 className="font-bold text-lg mb-2">Driver Information</h3>
              <p>
                <strong>Name:</strong> {formData.driverFirstName} {formData.driverLastName}
              </p>
              <p>
                <strong>DOB:</strong> {formData.driverDateOfBirth || "Not provided"}
              </p>
              <p>
                <strong>License:</strong> {formData.ownerLicenseNumber || "Not provided"}
              </p>
            </div>

            {/* Vehicle Info */}
            <div>
              <h3 className="font-bold text-lg mb-2">Vehicle Information</h3>
              <p>
                <strong>Vehicle:</strong> {formData.vehicleYear} {formData.vehicleMake}{" "}
                {formData.vehicleModel}
              </p>
              <p>
                <strong>Plate:</strong> {formData.vehiclePlateNumber || "Not provided"}
              </p>
              <p>
                <strong>VIN:</strong> {formData.vehicleVinNumber || "Not provided"}
              </p>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="border-l-4 border-red-500 bg-red-50 p-4 mb-6 rounded">
            <p className="text-red-800 whitespace-pre-line font-semibold">{errorMessage}</p>
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
            By submitting this form, you confirm that all information provided is accurate
            and complete.
          </p>
        </div>
      </div>
    </DocumentSheet>
  );
};

export default SubmitFormPage;
