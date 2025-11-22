import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateFormData } from "@/store/formSlice";
// import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';
import { AddDriverButton } from "@/components/ui/AddDriverButton";
import { DriversList } from "@/components/ui/DriversList";
import { DocumentSheet } from "./DocumentSheet";
import { getRequiredFieldClasses } from "@/lib/fieldValidation";

const Row = ({
  label,
  className = "",
  name,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  className?: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) => {
  const borderClasses = getRequiredFieldClasses(
    name || "",
    "border-b border-black",
  );
  return (
    <div className={`flex items-end gap-4 mb-2 ${className}`}>
      <span className="font-serif text-black text-[13px] uppercase shrink-0 w-[240px] font-bold leading-tight">
        {label}
      </span>
      <div className={`flex-1 ${borderClasses} relative top-1`}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent border-none outline-none text-[15px] font-sans text-black pb-0.5 font-bold"
        />
      </div>
    </div>
  );
};

export const DriverInfoPage = ({ pageNumber = 4 }: { pageNumber?: number }) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.form);

  const handleChange = (name: string, value: string | boolean) => {
    dispatch(updateFormData({ [name]: value }));
  };

  const CheckboxItem = ({ label, name }: { label: string; name?: string }) => (
    <label className="flex items-center gap-3 cursor-pointer mb-3">
      <div className="relative w-[18px] h-[18px] border border-black flex items-center justify-center shrink-0 bg-white">
        <input
          type="checkbox"
          name={name}
          checked={
            name ? Boolean(formData[name as keyof typeof formData]) : false
          }
          onChange={(e) => name && handleChange(name, e.target.checked)}
          className="peer appearance-none w-full h-full cursor-pointer absolute inset-0 z-20"
        />
        <svg
          className="w-5 h-5 text-black opacity-0 peer-checked:opacity-100 pointer-events-none relative -top-1 left-0.5 z-0"
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
      </div>
      <span className="font-serif text-[14px] uppercase text-black leading-none pt-1">
        {label}
      </span>
    </label>
  );

  return (
    <DocumentSheet>
      {/* Logo */}
      <div className="flex justify-end mb-4">
        <span className="text-[56px] text-[#3b5073] font-sans font-medium tracking-tight leading-none">
          Axper
        </span>
      </div>

      {/* <AutoSaveStatus /> */}

      {/* Add Driver Button */}
      <div className="flex justify-center mb-8">
        <div className="text-center">
          <AddDriverButton />
          <p className="text-sm text-gray-600 mt-2 max-w-lg">
            <strong>How to add multiple drivers:</strong>
          </p>
          <p className="text-sm text-gray-600 mt-1 max-w-lg">
            The first driver is filled in the fields below. When you click "Add Driver & Vehicle", 
            it creates an empty new page for the next driver. Fill in the new driver's information 
            and click "Add Driver & Vehicle" again for more drivers. Click submit to send all drivers together.
          </p>
        </div>
      </div>

      {/* Drivers List */}
      <div className="max-w-[750px] mx-auto mb-12">
        <DriversList />
      </div>

      {/* Owner Information Section */}
      <div className="flex justify-center mb-6">
        <h2 className="text-[#1e4e8c] font-bold font-serif text-[16px] uppercase tracking-wide">
          OWNER INFORMATION
        </h2>
      </div>

      <div className="max-w-[750px] mx-auto space-y-1 mb-8">
        <Row
          label="FIRST NAME:"
          name="ownerFirstName"
          value={String(formData.ownerFirstName || "")}
          onChange={(e) => handleChange("ownerFirstName", e.target.value)}
        />
        <Row
          label="LAST NAME:"
          name="ownerLastName"
          value={String(formData.ownerLastName || "")}
          onChange={(e) => handleChange("ownerLastName", e.target.value)}
        />
        <Row
          label="DATE OF BIRTH:"
          name="ownerDateOfBirth"
          type="date"
          value={String(formData.ownerDateOfBirth || "")}
          onChange={(e) => handleChange("ownerDateOfBirth", e.target.value)}
        />
        <Row
          label="ADDRESS:"
          name="ownerAddress"
          value={String(formData.ownerAddress || "")}
          onChange={(e) => handleChange("ownerAddress", e.target.value)}
        />
        <Row
          label="CITY:"
          name="ownerCity"
          value={String(formData.ownerCity || "")}
          onChange={(e) => handleChange("ownerCity", e.target.value)}
        />
        <Row
          label="STATE:"
          name="ownerState"
          value={String(formData.ownerState || "")}
          onChange={(e) => handleChange("ownerState", e.target.value)}
        />
        <Row
          label="ZIP CODE:"
          name="ownerZipCode"
          value={String(formData.ownerZipCode || "")}
          onChange={(e) => handleChange("ownerZipCode", e.target.value)}
        />
        <Row
          label="CELL PHONE:"
          name="ownerCellPhone"
          value={String(formData.ownerCellPhone || "")}
          onChange={(e) => handleChange("ownerCellPhone", e.target.value)}
        />
        <Row
          label="EMERGENCY NUMBER/NAME:"
          name="ownerEmergencyNumber"
          value={String(formData.ownerEmergencyNumber || "")}
          onChange={(e) => handleChange("ownerEmergencyNumber", e.target.value)}
        />
        <Row
          label="EMAIL:"
          name="ownerEmail"
          type="email"
          value={String(formData.ownerEmail || "")}
          onChange={(e) => handleChange("ownerEmail", e.target.value)}
        />
        <Row
          label="DRIVER'S LICENSE NUMBER:"
          name="ownerLicenseNumber"
          value={String(formData.ownerLicenseNumber || "")}
          onChange={(e) => handleChange("ownerLicenseNumber", e.target.value)}
        />
        <Row
          label="STATE:"
          name="ownerLicenseState"
          value={String(formData.ownerLicenseState || "")}
          onChange={(e) => handleChange("ownerLicenseState", e.target.value)}
        />
        <Row
          label="CLASS:"
          name="ownerLicenseClass"
          value={String(formData.ownerLicenseClass || "")}
          onChange={(e) => handleChange("ownerLicenseClass", e.target.value)}
        />
        <Row
          label="EXPIRATION DATE:"
          name="ownerExpirationDate"
          type="date"
          value={String(formData.ownerExpirationDate || "")}
          onChange={(e) => handleChange("ownerExpirationDate", e.target.value)}
        />
      </div>

      {/* Driver Information Section */}
      <div className="flex justify-center mb-6">
        <h2 className="text-[#1e4e8c] font-bold font-serif text-[16px] uppercase tracking-wide">
          DRIVER INFORMATION
        </h2>
      </div>

      <div className="max-w-[750px] mx-auto space-y-1 mb-12">
        <Row
          label="FIRST NAME:"
          name="driverFirstName"
          value={String(formData.driverFirstName || "")}
          onChange={(e) => handleChange("driverFirstName", e.target.value)}
        />
        <Row
          label="LAST NAME:"
          name="driverLastName"
          value={String(formData.driverLastName || "")}
          onChange={(e) => handleChange("driverLastName", e.target.value)}
        />
        <Row
          label="DATE OF BIRTH:"
          name="driverDateOfBirth"
          type="date"
          value={String(formData.driverDateOfBirth || "")}
          onChange={(e) => handleChange("driverDateOfBirth", e.target.value)}
        />
        <Row
          label="ADDRESS:"
          name="driverAddress"
          value={String(formData.driverAddress || "")}
          onChange={(e) => handleChange("driverAddress", e.target.value)}
        />
        <Row
          label="CITY:"
          name="driverCity"
          value={String(formData.driverCity || "")}
          onChange={(e) => handleChange("driverCity", e.target.value)}
        />
        <Row
          label="STATE:"
          name="driverState"
          value={String(formData.driverState || "")}
          onChange={(e) => handleChange("driverState", e.target.value)}
        />
        <Row
          label="ZIP CODE:"
          name="driverZipCode"
          value={String(formData.driverZipCode || "")}
          onChange={(e) => handleChange("driverZipCode", e.target.value)}
        />
        <Row
          label="CELL PHONE:"
          name="driverCellPhone"
          value={String(formData.driverCellPhone || "")}
          onChange={(e) => handleChange("driverCellPhone", e.target.value)}
        />
        <Row
          label="EMERGENCY NUMBER/NAME:"
          name="driverEmergencyNumber"
          value={String(formData.driverEmergencyNumber || "")}
          onChange={(e) =>
            handleChange("driverEmergencyNumber", e.target.value)
          }
        />
      </div>

      {/* Checkboxes */}
      <div className="max-w-[400px] mx-auto pl-20">
        <CheckboxItem label="US CITIZEN" name="driverUsCitizen" />
        <CheckboxItem label="GREEN CARD" name="driverGreenCard" />
        <CheckboxItem label="TWIC or TSA" name="driverTwicTsa" />
        <CheckboxItem label="HAZMAT CERTIFIED" name="driverHazmatCertified" />
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <span className="font-serif text-xs">{pageNumber}</span>
      </div>
    </DocumentSheet>
  );
};
