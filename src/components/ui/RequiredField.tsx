import React from "react";
import { getRequiredFieldClasses } from "@/lib/fieldValidation";

interface RequiredInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  required?: boolean;
}

/**
 * Input component that automatically shows red border if field is required
 */
export const RequiredInput = React.forwardRef<
  HTMLInputElement,
  RequiredInputProps
>(({ name, required, className = "", ...props }, ref) => {
  const borderClasses = getRequiredFieldClasses(name, "border-b border-black");
  const requiredClass = required ? "border-red-500" : "";

  return (
    <input
      ref={ref}
      name={name}
      className={`${className} ${borderClasses} ${requiredClass}`.trim()}
      {...props}
    />
  );
});

RequiredInput.displayName = "RequiredInput";

interface RequiredDivProps {
  name: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Div wrapper that shows red border if field is required
 */
export const RequiredFieldBorder: React.FC<RequiredDivProps> = ({
  name,
  className = "",
  children,
}) => {
  const borderClasses = getRequiredFieldClasses(name, "border-b border-black");

  return (
    <div className={`${className} ${borderClasses}`.trim()}>{children}</div>
  );
};

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
}

/**
 * Complete form field component with label and input
 */
export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) => {
  const isRequired = getRequiredFieldClasses(name) !== "";

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold text-gray-700 mb-1">
        {label}
        {isRequired && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border-2 rounded ${
          isRequired ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:border-blue-500 ${value ? "" : ""}`}
      />
    </div>
  );
};
