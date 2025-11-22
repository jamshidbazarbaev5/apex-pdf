import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";
// import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';
import { DocumentSheet } from "./DocumentSheet";
import { SignButton } from "../ui/SignButton";
import { getRequiredFieldClasses } from "@/lib/fieldValidation";

// Row component for the table structure
const FormRow = ({
  label,
  value,
  name,
  onChange,
  className = "",
  type = "text",
}: {
  label: string;
  value: string;
  name: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
}) => {
  const borderClasses = getRequiredFieldClasses(name, "");
  return (
    <div
      className={`flex border-b border-black last:border-b-0 h-12 ${className}`}
    >
      <div className="w-[230px] pl-3 pr-2 border-r border-black flex items-center shrink-0 bg-white">
        <span className="text-[13px] font-bold text-black uppercase font-serif tracking-wide leading-none pt-1">
          {label}
        </span>
      </div>
      <div
        className={`flex-1 relative bg-transparent flex items-center ${borderClasses ? "border-r-2 border-red-500" : ""}`}
      >
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full h-full px-3 text-[15px] font-sans text-black bg-transparent focus:outline-none placeholder-gray-400 pt-1"
        />
      </div>
    </div>
  );
};

export const DirectDepositForm: React.FC<{ pageNumber?: number }> = ({}) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.form);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    dispatch(
      updateFormData({
        [name]: type === "checkbox" ? checked : value,
      }),
    );
  };

  return (
    <>
      <DocumentSheet>
        {/* Logo */}
        <div className="mb-4">
          <span className="text-[56px] text-[#3b5073] font-sans font-medium tracking-tight leading-none">
            Axper
          </span>
        </div>

        {/* <AutoSaveStatus /> */}

        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-[24px] font-bold text-black uppercase tracking-wide font-serif">
            Direct Deposit Authorization Form
          </h1>
        </div>

        {/* Vendor Information Table */}
        <div className="mb-12 border-2 border-black">
          <div className="bg-black text-white py-1.5 border-b border-black">
            <h3 className="text-center font-bold text-[17px] uppercase font-serif tracking-wider">
              Vendor Information
            </h3>
          </div>
          <div className="bg-white">
            <FormRow
              label="VENDOR NAME"
              name="vendorName"
              value={String(formData.vendorName || "")}
              onChange={handleChange}
            />
            <FormRow
              label="ADDRESS"
              name="vendorAddress"
              value={String(formData.vendorAddress || "")}
              onChange={handleChange}
            />
            <FormRow
              label="CITY, STATE, ZIP"
              name="vendorCityStateZip"
              value={String(formData.vendorCityStateZip || "")}
              onChange={handleChange}
            />
            <FormRow
              label="PHONE NUMBER"
              name="vendorPhone"
              value={String(formData.vendorPhone || "")}
              onChange={handleChange}
            />
            <FormRow
              label="EMAIL"
              name="vendorEmail"
              type="email"
              value={String(formData.vendorEmail || "")}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Account Information Table */}
        <div className="mb-10 border-2 border-black">
          <div className="bg-black text-white py-1.5 border-b border-black">
            <h3 className="text-center font-bold text-[17px] uppercase font-serif tracking-wider">
              Account Information
            </h3>
          </div>
          <div className="bg-white">
            <FormRow
              label="BANK NAME"
              name="bankName"
              value={String(formData.bankName || "")}
              onChange={handleChange}
            />
            <FormRow
              label="ROUTING NUMBER"
              name="routingNumber"
              value={String(formData.routingNumber || "")}
              onChange={handleChange}
            />
            <FormRow
              label="ACCOUNT NUMBER"
              name="accountNumber"
              value={String(formData.accountNumber || "")}
              onChange={handleChange}
            />

            {/* Custom Account Type Row */}
            <div className="flex h-12">
              <div className="w-[230px] pl-3 pr-2 border-r border-black flex items-center shrink-0 bg-white">
                <span className="text-[13px] font-bold text-black uppercase font-serif tracking-wide leading-none pt-1">
                  ACCOUNT TYPE
                </span>
              </div>
              <div className="flex-1 bg-transparent flex items-center px-5 gap-10">
                {/* Checkboxes */}
                <label className="flex items-center cursor-pointer gap-3 select-none">
                  <div className="relative w-[18px] h-[18px] border border-black bg-white flex items-center justify-center">
                    <input
                      type="checkbox"
                      name="accountTypeChecking"
                      checked={Boolean(formData.accountTypeChecking || false)}
                      onChange={handleChange}
                      className="peer appearance-none w-full h-full cursor-pointer absolute inset-0 z-10"
                    />
                    {formData.accountTypeChecking && (
                      <svg
                        className="w-5 h-5 text-black pointer-events-none relative -top-1 left-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-[13px] font-bold uppercase font-serif tracking-wide pt-1">
                    CHECKING
                  </span>
                </label>

                <label className="flex items-center cursor-pointer gap-3 select-none">
                  <div className="relative w-[18px] h-[18px] border border-black bg-white flex items-center justify-center">
                    <input
                      type="checkbox"
                      name="accountTypeSavings"
                      checked={Boolean(formData.accountTypeSavings || false)}
                      onChange={handleChange}
                      className="peer appearance-none w-full h-full cursor-pointer absolute inset-0 z-10"
                    />
                    {formData.accountTypeSavings && (
                      <svg
                        className="w-5 h-5 text-black pointer-events-none relative -top-1 left-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-[13px] font-bold uppercase font-serif tracking-wide pt-1">
                    SAVINGS
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Authorization Text */}
        <div className="mb-16 mt-12 px-2">
          <p className="text-justify text-[17px] leading-[1.6] font-serif text-black">
            I authorize AXPER LLC (
            <span className="underline">1673 Reed Dr, Krum, TX, 76249, US</span>
            ) to initiate credit entries to the account indicated above for the
            purpose of expense and/or payroll. I also authorize AXPER LLC to
            initiate, if necessary, debit entries and adjustments for any credit
            entries made in error. This authorization is to remain in force
            until the AXPER LLC has received written authorization from me of
            its termination or change.
          </p>
        </div>

        {/* Signature and Date */}
        <div className="mt-12 space-y-10 max-w-[550px]">
          <div>
            <label className="text-[18px] font-serif text-black mb-3 block">
              Vendor Signature
            </label>
            <SignButton
              value={String(formData.signature1 || "")}
              onChange={(signature) =>
                dispatch(updateFormData({ signature1: signature }))
              }
              label="Vendor Signature"
              placeholder="Click to add signature"
            />
          </div>

          <div className="flex items-end gap-4">
            <span className="text-[18px] shrink-0 font-serif min-w-40 text-black">
              Date
            </span>
            <div
              className={`flex-1 border-b border-black relative h-8 ${getRequiredFieldClasses("accountDate", "")}`}
            >
              <input
                type="date"
                name="accountDate"
                value={String(formData.accountDate || "")}
                onChange={handleChange}
                className="w-full bg-transparent border-none outline-none text-[17px] font-sans px-8 pb-1 absolute bottom-0 text-black"
              />
            </div>
          </div>
        </div>
      </DocumentSheet>
    </>
  );
};
