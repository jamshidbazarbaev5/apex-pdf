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
  details?: string[];
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
    details: ["Passport", "Green Card", "Employment Authorization Document (EAD)", "Birth Certificate"],
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
    note: "(please attach clear photos of each vehicle)",
    details: ["Front", "Back", "Both sides", "Cargo space (empty)", "License plate"],
  },
  {
    id: "measurements",
    name: "Vehicle Measurements (for cargo vans)",
    isRequired: true,
    note: "(please include both interior and exterior measurements)",
    details: ["Length", "Width", "Height", "Interior wheelbase"],
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
        <h1 className="text-[#1e4e8c] font-bold font-serif text-[16px] uppercase tracking-wide">
          DOCUMENT REQUIREMENTS
        </h1>
      </div>

      <div className="max-w-[750px] mx-auto font-serif text-[13px] leading-relaxed text-black text-justify">
        {/* Required Documents */}
        <div className="mb-8">
          <h2 className="text-[14px] font-bold text-black mb-3 uppercase">
            Required Documents:
          </h2>
          <ul className="list-none p-0 m-0 space-y-2">
            {requirements
              .filter((req) => req.isRequired)
              .map((req) => (
                <li key={req.id} className="pl-6 relative">
                  <span className="absolute left-0">●</span>
                  <span className="font-bold">{req.name}</span>
                  {req.note && (
                    <span className="text-[12px] text-gray-700 ml-1">
                      {req.note}
                    </span>
                  )}
                  {req.details && req.details.length > 0 && (
                    <ul className="list-none p-0 m-0 mt-1 ml-4 space-y-1">
                      {req.details.map((detail, idx) => (
                        <li key={idx} className="pl-4 relative text-[12px]">
                          <span className="absolute left-0">○</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </div>

        {/* Optional Documents */}
        <div className="mb-8">
          <h2 className="text-[14px] font-bold text-black mb-3 uppercase">
            Optional Attachments:
          </h2>
          <ul className="list-none p-0 m-0 space-y-2">
            {requirements
              .filter((req) => !req.isRequired)
              .map((req) => (
                <li key={req.id} className="pl-6 relative">
                  <span className="absolute left-0">●</span>
                  {req.name}
                </li>
              ))}
          </ul>
        </div>

        {/* File Upload Section */}
        <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center bg-gray-50 mb-6">
          <div className="space-y-3">
            <div className="flex justify-center">
              <svg
                className="w-10 h-10 text-gray-400"
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
              <p className="font-bold text-[12px] text-gray-800">
                Upload your documents
              </p>
              <p className="text-[11px] text-gray-600 mt-1">
                Click the button below to select and upload your files
              </p>
            </div>
            <button
              onClick={handleUploadClick}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-[12px] rounded transition-colors duration-200"
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
          <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-6">
            <p className="text-[12px] text-red-800">
              ⚠️ You must upload at least one document before submitting the form.
            </p>
          </div>
        )}

        {attachments.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold text-[13px] text-gray-800 mb-3">
              Uploaded Files ({attachments.length}):
            </h3>
            <div className="space-y-2 max-h-72 overflow-y-auto">
              {attachments.map((file, index) => {
                const fileSizeFormatted = formatFileSize(file.size);

                return (
                  <div
                    key={`${file.id}-${index}`}
                    className="flex items-center justify-between p-2 bg-gray-100 rounded text-[12px]"
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="text-blue-600">📎</span>
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-medium text-gray-800 truncate"
                          title={file.name}
                        >
                          {file.name}
                        </p>
                        <p className="text-[11px] text-gray-600">
                          {fileSizeFormatted} • {file.type || "Unknown type"}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFile(index)}
                      className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white text-[11px] font-medium rounded transition-colors duration-200 shrink-0"
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
        <div className="bg-blue-50 border border-blue-200 rounded p-3 text-[12px]">
          <h3 className="font-bold text-blue-900 mb-2">Upload Instructions:</h3>
          <ul className="text-blue-800 space-y-1 list-none p-0 m-0">
            <li className="pl-4 relative">
              <span className="absolute left-0">•</span>
              Accepted formats: JPG, PNG, PDF, DOC, DOCX
            </li>
            <li className="pl-4 relative">
              <span className="absolute left-0">•</span>
              Maximum file size: 10MB per file
            </li>
            <li className="pl-4 relative">
              <span className="absolute left-0">•</span>
              Please ensure all documents are clear and readable
            </li>
            <li className="pl-4 relative">
              <span className="absolute left-0">•</span>
              You can upload multiple files at once
            </li>
          </ul>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <span className="font-serif text-[12px]">{pageNumber || 6}</span>
      </div>
    </DocumentSheet>
  );
};
