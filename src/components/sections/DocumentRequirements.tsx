import React, { useRef, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";
import { saveFormToDraft } from "@/lib/localStorage";
import { fileStorage } from "@/lib/fileStorage";
import { DocumentSheet } from "./DocumentSheet";

interface DocumentRequirement {
  id: string;
  name: string;
  description?: string;
  isRequired: boolean;
  note?: string;
}

const requirements: DocumentRequirement[] = [
  { id: "ein", name: "EIN Letter", isRequired: true },
  {
    id: "license",
    name: "Driver's License",
    isRequired: true,
    note: "(for each driver)",
  },
  {
    id: "work-auth",
    name: "Legal Work Authorization",
    isRequired: true,
    note: "(one of the following, for each driver)",
  },
  {
    id: "vehicle-reg",
    name: "Vehicle Registration Form",
    isRequired: true,
    note: "(for each vehicle)",
  },
  {
    id: "vehicle-photos",
    name: "Vehicle Photos",
    isRequired: true,
    note: "(clear photos of front, back, both sides, cargo space, license plate)",
  },
  {
    id: "measurements",
    name: "Vehicle Measurements (for cargo vans)",
    isRequired: true,
    note: "(interior and exterior)",
  },
  { id: "mc-cert", name: "MC Certificate", isRequired: false },
  { id: "twic", name: "TWIC/TSA Card", isRequired: false },
  { id: "hazmat", name: "HAZMAT Certification", isRequired: false },
];

export const DocumentRequirements: React.FC<{ pageNumber?: number }> = ({
  pageNumber,
}) => {
  const dispatch = useAppDispatch();
  const attachments = useAppSelector((state) => state.form.attachments) || [];
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.currentTarget.files;
      if (!files) return;

      const newFiles = Array.from(files);

      // Add files to storage and get metadata
      const newFileMetadata = fileStorage.addFiles(newFiles);

      // Update Redux state with metadata only
      const updatedAttachments = [...attachments, ...newFileMetadata];
      dispatch(updateFormData({ attachments: updatedAttachments }));

      // Save to localStorage (metadata only)
      const formData = {
        attachments: updatedAttachments,
      };

      try {
        saveFormToDraft(formData);
      } catch (error) {
        console.error("Failed to save files to draft:", error);
      }

      // Clear file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [attachments, dispatch],
  );

  const handleRemoveFile = useCallback(
    (index: number) => {
      const fileToRemove = attachments[index];
      if (fileToRemove && fileToRemove.id) {
        // Remove from file storage
        fileStorage.removeFile(fileToRemove.id);
      }

      // Remove from Redux state
      const updatedAttachments = attachments.filter((_, i) => i !== index);
      dispatch(updateFormData({ attachments: updatedAttachments }));

      // Save to localStorage
      const formData = {
        attachments: updatedAttachments,
      };

      try {
        saveFormToDraft(formData);
      } catch (error) {
        console.error("Failed to save updated attachments to draft:", error);
      }
    },
    [attachments, dispatch],
  );

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0.00 KB";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <DocumentSheet>
      {/* Logo */}
      <div className="flex justify-end mb-6">
        <span className="text-[56px] text-[#3b5073] font-sans font-medium tracking-tight leading-none">
          Axper
        </span>
      </div>

      <div className="flex justify-center mb-8">
        <h1 className="text-[#1e4e8c] font-bold font-serif text-[20px] uppercase tracking-wide">
          DOCUMENT REQUIREMENTS
        </h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Required Documents */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">
            Required Documents:
          </h2>
          <ul className="space-y-2 ml-4 list-disc list-inside">
            {requirements
              .filter((req) => req.isRequired)
              .map((req) => (
                <li key={req.id} className="text-gray-700">
                  <span className="font-medium">{req.name}</span>
                  {req.note && (
                    <span className="text-sm text-gray-600 ml-2">
                      {req.note}
                    </span>
                  )}
                </li>
              ))}
          </ul>
        </div>

        {/* Optional Documents */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">
            Optional Attachments:
          </h2>
          <ul className="space-y-2 ml-4 list-disc list-inside">
            {requirements
              .filter((req) => !req.isRequired)
              .map((req) => (
                <li key={req.id} className="text-gray-700">
                  {req.name}
                </li>
              ))}
          </ul>
        </div>

        {/* File Upload Section */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
          <div className="space-y-4">
            <div className="flex justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700">
                Upload your documents
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Click the button below to select and upload your files
              </p>
            </div>
            <button
              onClick={handleUploadClick}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Choose Files
            </button>
          </div>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,.pdf,.doc,.docx"
          onChange={handleFileSelect}
          className="hidden"
        />

        {attachments.length === 0 && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-sm text-red-800">
              ⚠️ You must upload at least one document before submitting the
              form.
            </p>
          </div>
        )}

        {attachments.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-gray-800">
              Uploaded Files ({attachments.length}):
            </h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {attachments.map((file, index) => {
                const fileSizeFormatted = formatFileSize(file.size);

                return (
                  <div
                    key={`${file.id}-${index}`}
                    className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="text-blue-600 text-lg">📎</span>
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-medium text-gray-800 truncate"
                          title={file.name}
                        >
                          {file.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {fileSizeFormatted} • {file.type || "Unknown type"}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFile(index)}
                      className="ml-4 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded transition-colors duration-200 flex-shrink-0"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-2">Upload Instructions:</h3>
          <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
            <li>Accepted formats: JPG, PNG, PDF, DOC, DOCX</li>
            <li>Maximum file size: 10MB per file</li>
            <li>Please ensure all documents are clear and readable</li>
            <li>You can upload multiple files at once</li>
          </ul>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <span className="font-serif text-xs">{pageNumber || 6}</span>
      </div>
    </DocumentSheet>
  );
};
