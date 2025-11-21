import React, { useRef, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateFormData } from '@/store/formSlice';
import { saveFormToDraft } from '@/lib/localStorage';
import { DocumentSheet } from './DocumentSheet';

interface DocumentRequirement {
  id: string;
  name: string;
  description?: string;
  isRequired: boolean;
  note?: string;
}

const requirements: DocumentRequirement[] = [
  { id: 'ein', name: 'EIN Letter', isRequired: true },
  { id: 'license', name: "Driver's License", isRequired: true, note: '(for each driver)' },
  {
    id: 'work-auth',
    name: 'Legal Work Authorization',
    isRequired: true,
    note: '(one of the following, for each driver)',
  },
  { id: 'vehicle-reg', name: 'Vehicle Registration Form', isRequired: true, note: '(for each vehicle)' },
  {
    id: 'vehicle-photos',
    name: 'Vehicle Photos',
    isRequired: true,
    note: '(clear photos of front, back, both sides, cargo space, license plate)',
  },
  { id: 'measurements', name: 'Vehicle Measurements (for cargo vans)', isRequired: true, note: '(interior and exterior)' },
  { id: 'mc-cert', name: 'MC Certificate', isRequired: false },
  { id: 'twic', name: 'TWIC/TSA Card', isRequired: false },
  { id: 'hazmat', name: 'HAZMAT Certification', isRequired: false },
];

export const DocumentRequirements: React.FC<{ pageNumber?: number }> = ({ pageNumber }) => {
  const dispatch = useAppDispatch();
  const attachments = useAppSelector(state => state.form.attachments);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.currentTarget.files;
      if (!files) return;

      const newFiles = Array.from(files);
      const updatedAttachments = [...(attachments || []), ...newFiles];

      dispatch(updateFormData({ attachments: updatedAttachments }));

      const formData = {
        attachments: updatedAttachments.map((file: File) => ({
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
        })),
      };
      saveFormToDraft(formData);

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    [attachments, dispatch]
  );

  const handleRemoveFile = useCallback(
    (index: number) => {
      const updatedAttachments = (attachments || []).filter((_: File, i: number) => i !== index);
      dispatch(updateFormData({ attachments: updatedAttachments }));

      const formData = {
        attachments: updatedAttachments.map((file: File) => ({
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
        })),
      };
      saveFormToDraft(formData);
    },
    [attachments, dispatch]
  );

  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <DocumentSheet>
      <div className="space-y-8 text-lg text-gray-900">
        {pageNumber && (
          <div className="text-right text-sm text-gray-500 mb-4">
            Page {pageNumber}
          </div>
        )}
        <section>
        <h1 className="text-3xl font-bold mb-2">Required Documents</h1>
        <p className="text-base text-gray-600">Please upload the following documents:</p>
      </section>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Required Files:</h2>
        <ul className="space-y-3 ml-4">
          {requirements
            .filter(req => req.isRequired)
            .map(req => (
              <li key={req.id} className="flex items-start gap-3">
                <span className="text-red-500 font-bold">*</span>
                <div>
                  <span className="font-bold">{req.name}</span>
                  {req.note && <span className="text-gray-600 italic text-base ml-2">{req.note}</span>}
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Optional Attachments:</h2>
        <ul className="space-y-2 ml-4 list-disc list-inside">
          {requirements
            .filter(req => !req.isRequired)
            .map(req => (
              <li key={req.id} className="text-gray-700">
                {req.name}
              </li>
            ))}
        </ul>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
        <div className="text-center">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
            accept=".pdf,.jpg,.jpeg,.png,.gif,.doc,.docx"
          />
          <button
            onClick={handleClickFileInput}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            + Add Files
          </button>
          <p className="text-gray-600 text-sm mt-2">Click to select files or drag and drop</p>
          <p className="text-gray-500 text-xs mt-1">Supported: PDF, JPG, PNG, GIF, DOC, DOCX</p>
        </div>
      </div>

      {attachments && attachments.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-bold text-lg text-gray-800">Uploaded Files ({attachments.length}):</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {attachments.map((file: File, index: number) => (
              <div key={`${file.name}-${index}`} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="text-blue-600 text-lg">📎</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-800 truncate">{file.name}</p>
                    <p className="text-sm text-gray-600">{(file.size / 1024).toFixed(2)} KB</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="ml-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition-colors shrink-0"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <p className="text-sm text-blue-800">
          <span className="font-bold">Note:</span> All required files marked with <span className="text-red-500">*</span> must be uploaded before submission.
        </p>
      </div>
      </div>
    </DocumentSheet>
  );
};
