import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateDriver, removeDriver } from '@/store/formSlice';
// import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';
import { DocumentSheet } from './DocumentSheet';
import { getRequiredFieldClasses } from '@/lib/fieldValidation';
import { toast } from 'sonner';

const Row = ({ label, className = "", name, type = "text", value, onChange }: { label: string, className?: string, name?: string, type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const borderClasses = getRequiredFieldClasses(name || '', 'border-b border-black');
  return (
    <div className={`flex items-end gap-4 mb-2 ${className}`}>
      <span className="font-serif text-black text-[13px] uppercase shrink-0 w-[240px] font-bold leading-tight">{label}</span>
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

interface DriverDetailsPageProps {
  driverIndex: number;
  pageNumber?: number;
}

export const DriverDetailsPage = ({ driverIndex, pageNumber = 4 }: DriverDetailsPageProps) => {
  const dispatch = useAppDispatch();
  const drivers = useAppSelector(state => state.form.drivers);
  
  const driver = drivers[driverIndex];

  if (!driver) {
    return (
      <DocumentSheet>
        <div className="text-center py-8 text-gray-500">
          <p>Driver not found</p>
        </div>
      </DocumentSheet>
    );
  }

  const handleChange = (fieldName: string, value: string | boolean) => {
    dispatch(updateDriver({
      index: driverIndex,
      data: { [fieldName]: value }
    }));
  };

  const CheckboxItem = ({ label, name }: { label: string, name?: string }) => (
    <label className="flex items-center gap-3 cursor-pointer mb-3">
      <div className="relative w-[18px] h-[18px] border border-black flex items-center justify-center shrink-0 bg-white">
        <input 
          type="checkbox" 
          name={name}
          checked={name ? Boolean(driver[name as keyof typeof driver]) : false}
          onChange={(e) => name && handleChange(name, e.target.checked)}
          className="peer appearance-none w-full h-full cursor-pointer absolute inset-0 z-10" 
        />
        <svg className="w-5 h-5 text-black opacity-0 peer-checked:opacity-100 pointer-events-none relative -top-1 left-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="font-serif text-[14px] uppercase text-black leading-none pt-1">{label}</span>
    </label>
  );

  return (
    <DocumentSheet>
      {/* Logo */}
      <div className="flex justify-end mb-4">
        <span className="text-[56px] text-[#3b5073] font-sans font-medium tracking-tight leading-none">Axper</span>
      </div>

      {/* <AutoSaveStatus /> */}

      {/* Remove Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => {
            const driverName = `${driver.driver_first_name} ${driver.driver_last_name}`.trim() || `Driver #${driverIndex + 1}`;
            dispatch(removeDriver(driverIndex));
            toast.success(`${driverName} and their vehicle have been removed`);
          }}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          Remove Driver & Vehicle
        </button>
      </div>

      {/* Driver Information Section */}
      <div className="flex justify-center mb-6">
        <h2 className="text-[#1e4e8c] font-bold font-serif text-[16px] uppercase tracking-wide">
          DRIVER #{driverIndex + 1} INFORMATION
        </h2>
      </div>

      <div className="max-w-[750px] mx-auto space-y-1 mb-12">
        <Row 
          label="FIRST NAME:" 
          name="driver_first_name" 
          value={String(driver.driver_first_name || '')} 
          onChange={(e) => handleChange('driver_first_name', e.target.value)} 
        />
        <Row 
          label="LAST NAME:" 
          name="driver_last_name" 
          value={String(driver.driver_last_name || '')} 
          onChange={(e) => handleChange('driver_last_name', e.target.value)} 
        />
        <Row 
          label="DATE OF BIRTH:" 
          name="driver_date_of_birth" 
          type="date"
          value={String(driver.driver_date_of_birth || '')} 
          onChange={(e) => handleChange('driver_date_of_birth', e.target.value)} 
        />
        <Row 
          label="ADDRESS:" 
          name="driver_address" 
          value={String(driver.driver_address || '')} 
          onChange={(e) => handleChange('driver_address', e.target.value)} 
        />
        <Row 
          label="CITY:" 
          name="driver_city" 
          value={String(driver.driver_city || '')} 
          onChange={(e) => handleChange('driver_city', e.target.value)} 
        />
        <Row 
          label="STATE:" 
          name="driver_state" 
          value={String(driver.driver_state || '')} 
          onChange={(e) => handleChange('driver_state', e.target.value)} 
        />
        <Row 
          label="ZIP CODE:" 
          name="driver_zip_code" 
          value={String(driver.driver_zip_code || '')} 
          onChange={(e) => handleChange('driver_zip_code', e.target.value)} 
        />
        <Row 
          label="CELL PHONE:" 
          name="driver_cell_phone" 
          value={String(driver.driver_cell_phone || '')} 
          onChange={(e) => handleChange('driver_cell_phone', e.target.value)} 
        />
        <Row 
          label="EMERGENCY NUMBER/NAME:" 
          name="driver_emergency_number" 
          value={String(driver.driver_emergency_number || '')} 
          onChange={(e) => handleChange('driver_emergency_number', e.target.value)} 
        />
      </div>

      {/* Checkboxes */}
      <div className="max-w-[400px] mx-auto pl-20">
        <CheckboxItem label="US CITIZEN" name="driver_us_citizen" />
        <CheckboxItem label="GREEN CARD" name="driver_green_card" />
        <CheckboxItem label="TWIC or TSA" name="driver_twic_tsa" />
        <CheckboxItem label="HAZMAT CERTIFIED" name="driver_hazmat_certified" />
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <span className="font-serif text-xs">{pageNumber}</span>
      </div>
    </DocumentSheet>
  );
};
