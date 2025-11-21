import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateFormData } from '@/store/formSlice';
import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';
import { DocumentSheet } from './DocumentSheet';

const InfoRow = ({ label, name }: { label: string, name?: string }) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(state => state.form);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (name) {
      dispatch(updateFormData({ [name]: e.target.value }));
    }
  };

  const fieldValue = name ? String(formData[name as keyof typeof formData] || '') : '';

  return (
    <div className="flex items-end gap-4 mb-3">
      <span className="font-serif text-black text-[14px] uppercase shrink-0 w-[280px] font-bold">{label}</span>
      <div className="flex-1 border-b border-black relative top-[4px]">
        <input
          type="text"
          name={name}
          value={fieldValue}
          onChange={handleChange}
          className="w-full bg-transparent border-none outline-none text-[15px] font-sans text-black pb-1 font-bold"
        />
      </div>
    </div>
  );
};

export const CompanyInfoPage = () => {
  return (
    <DocumentSheet>
      {/* Logo */}
      <div className="flex justify-end mb-8">
         <span className="text-[56px] text-[#3b5073] font-sans font-medium tracking-tight leading-none">Axper</span>
      </div>

      <AutoSaveStatus />

      {/* Header */}
      <div className="flex justify-center mb-12">
        <h2 className="text-[#1e4e8c] font-bold font-serif text-[18px] uppercase tracking-wide border-b-0">
          COMPANY INFORMATION
        </h2>
      </div>

      {/* Form */}
      <div className="max-w-[750px] mx-auto space-y-2">
        <InfoRow label="COMPANY NAME/DBA:" name="companyName" />
        <InfoRow label="COMPANY'S REGISTERED ADDRESS:" name="companyRegisteredAddress" />
        <InfoRow label="CITY, STATE AND ZIP-CODE:" name="companyCityStateZip" />
        <InfoRow label="PHONE NUMBER:" name="companyPhoneNumber" />
        <InfoRow label="EMAIL:" name="companyEmail" />
        <InfoRow label="WEB-SITE:" name="companyWebsite" />
        <InfoRow label="MC NUMBER:" name="companyMcNumber" />
        <InfoRow label="DOT NUMBER:" name="companyDotNumber" />
      </div>

      {/* Footer Page Number */}
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <span className="font-serif text-xl">3</span>
      </div>
    </DocumentSheet>
  );
};
