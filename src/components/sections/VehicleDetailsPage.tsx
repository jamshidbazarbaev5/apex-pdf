import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateDriver, removeDriver } from '@/store/formSlice';
// import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';
import { DocumentSheet } from './DocumentSheet';
import { getRequiredFieldClasses } from '@/lib/fieldValidation';
import { toast } from 'sonner';

const InfoRow = ({ label, name, type = "text", value, onChange }: { label: string, name?: string, type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const borderClasses = getRequiredFieldClasses(name || '', 'border-b border-black');

  return (
    <div className="flex items-end gap-4 mb-3">
      <span className="font-serif text-black text-[14px] uppercase shrink-0 w-[200px] font-bold">{label}</span>
      <div className={`flex-1 ${borderClasses} relative top-1`}>
         <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent border-none outline-none text-[15px] font-sans text-black pb-1 font-bold"
        />
      </div>
    </div>
  );
};

const CheckboxItem = ({ label, name, checked, onChange }: { label: string, name?: string, checked: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
     <label className="flex items-center gap-3 cursor-pointer mb-3">
        <div className="relative w-[18px] h-[18px] border border-black bg-white flex items-center justify-center shrink-0">
          <input 
            type="checkbox" 
            name={name}
            checked={checked}
            onChange={onChange}
            className="peer appearance-none w-full h-full cursor-pointer absolute inset-0 z-10" 
          />
           <svg className="w-5 h-5 text-black opacity-0 peer-checked:opacity-100 pointer-events-none relative -top-1 left-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
             <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
           </svg>
        </div>
        <span className="font-serif text-[14px] uppercase text-black pt-1 leading-none">{label}</span>
     </label>
  );
};

interface VehicleDetailsPageProps {
  driverIndex: number;
  pageNumber?: number;
}

export const VehicleDetailsPage = ({ driverIndex, pageNumber = 5 }: VehicleDetailsPageProps) => {
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

  return (
    <DocumentSheet>
       <div className="flex justify-end mb-6">
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

      <div className="flex justify-center mb-10">
        <h2 className="text-[#1e4e8c] font-bold font-serif text-[18px] uppercase tracking-wide">
          DRIVER #{driverIndex + 1} VEHICLE INFORMATION:
        </h2>
      </div>

      <div className="max-w-[750px] mx-auto mb-12 space-y-2">
        <InfoRow 
          label="MAKE:" 
          name="vehicle_make" 
          value={String(driver.vehicle_make || '')} 
          onChange={(e) => handleChange('vehicle_make', e.target.value)} 
        />
        <InfoRow 
          label="MODEL:" 
          name="vehicle_model" 
          value={String(driver.vehicle_model || '')} 
          onChange={(e) => handleChange('vehicle_model', e.target.value)} 
        />
        <InfoRow 
          label="YEAR:" 
          name="vehicle_year" 
          value={String(driver.vehicle_year || '')} 
          onChange={(e) => handleChange('vehicle_year', e.target.value)} 
        />
        <InfoRow 
          label="PLATE NUMBER:" 
          name="vehicle_plate_number" 
          value={String(driver.vehicle_plate_number || '')} 
          onChange={(e) => handleChange('vehicle_plate_number', e.target.value)} 
        />
        <InfoRow 
          label="STATE:" 
          name="vehicle_state" 
          value={String(driver.vehicle_state || '')} 
          onChange={(e) => handleChange('vehicle_state', e.target.value)} 
        />
        <InfoRow 
          label="EXPIRATION DATE:" 
          name="vehicle_expiration_date" 
          type="date"
          value={String(driver.vehicle_expiration_date || '')} 
          onChange={(e) => handleChange('vehicle_expiration_date', e.target.value)} 
        />
        <InfoRow 
          label="VIN NUMBER:" 
          name="vehicle_vin_number" 
          value={String(driver.vehicle_vin_number || '')} 
          onChange={(e) => handleChange('vehicle_vin_number', e.target.value)} 
        />
      </div>

      {/* Table */}
      <div className="border border-black mb-12 max-w-[750px] mx-auto">
        <div className="grid grid-cols-[200px_1fr_1fr_1fr] divide-x divide-black border-b border-black text-center">
             <div className="p-2 text-left font-serif text-[14px] flex items-center pl-3 leading-tight font-bold">
                USEFUL<br/>DIMENSIONS
             </div>
             <div className="p-2 font-serif text-[14px] flex items-center justify-center font-bold">
                CARGO LENGTH (inches)
             </div>
             <div className="p-2 font-serif text-[14px] flex items-center justify-center font-bold">
                WIDTH (inches)
             </div>
             <div className="p-2 font-serif text-[14px] flex items-center justify-center font-bold">
                HEIGHT (inches)
             </div>
        </div>

         <div className="grid grid-cols-[200px_1fr_1fr_1fr] divide-x divide-black border-b border-black min-h-12">
             <div className="p-2 flex items-center font-serif text-[14px] pl-3 font-bold">DOOR OPENING DIMS:</div>
             <div className={`relative ${getRequiredFieldClasses('vehicle_door_length', 'border-r-2 border-red-500')}`}>
                <input 
                  type="text" 
                  value={String(driver.vehicle_door_length || '')}
                  onChange={(e) => handleChange('vehicle_door_length', e.target.value)}
                  className="w-full h-full text-center font-sans bg-transparent outline-none focus:bg-blue-50/50" 
                />
             </div>
             <div className={`relative ${getRequiredFieldClasses('vehicle_door_width', 'border-r-2 border-red-500')}`}>
                <input 
                  type="text" 
                  value={String(driver.vehicle_door_width || '')}
                  onChange={(e) => handleChange('vehicle_door_width', e.target.value)}
                  className="w-full h-full text-center font-sans bg-transparent outline-none focus:bg-blue-50/50" 
                />
             </div>
             <div className={`relative ${getRequiredFieldClasses('vehicle_door_height', 'border-r-2 border-red-500')}`}>
                <input 
                  type="text" 
                  value={String(driver.vehicle_door_height || '')}
                  onChange={(e) => handleChange('vehicle_door_height', e.target.value)}
                  className="w-full h-full text-center font-sans bg-transparent outline-none focus:bg-blue-50/50" 
                />
             </div>
         </div>
         <div className="grid grid-cols-[200px_1fr_1fr_1fr] divide-x divide-black border-b border-black min-h-12">
             <div className="p-2 flex items-center font-serif text-[14px] pl-3 font-bold">DIMS INSIDE:</div>
             <div className={`relative ${getRequiredFieldClasses('vehicle_inside_length', 'border-r-2 border-red-500')}`}>
                <input 
                  type="text" 
                  value={String(driver.vehicle_inside_length || '')}
                  onChange={(e) => handleChange('vehicle_inside_length', e.target.value)}
                  className="w-full h-full text-center font-sans bg-transparent outline-none focus:bg-blue-50/50" 
                />
             </div>
             <div className={`relative ${getRequiredFieldClasses('vehicle_inside_width', 'border-r-2 border-red-500')}`}>
                <input 
                  type="text" 
                  value={String(driver.vehicle_inside_width || '')}
                  onChange={(e) => handleChange('vehicle_inside_width', e.target.value)}
                  className="w-full h-full text-center font-sans bg-transparent outline-none focus:bg-blue-50/50" 
                />
             </div>
             <div className={`relative ${getRequiredFieldClasses('vehicle_inside_height', 'border-r-2 border-red-500')}`}>
                <input 
                  type="text" 
                  value={String(driver.vehicle_inside_height || '')}
                  onChange={(e) => handleChange('vehicle_inside_height', e.target.value)}
                  className="w-full h-full text-center font-sans bg-transparent outline-none focus:bg-blue-50/50" 
                />
             </div>
         </div>
          <div className="grid grid-cols-[200px_1fr_1fr_1fr] divide-x divide-black min-h-12">
             <div className="p-2 flex items-center font-serif text-[14px] pl-3 font-bold">PAYLOAD</div>
             <div className={`col-span-3 relative ${getRequiredFieldClasses('vehicle_payload_lbs', 'border-r-2 border-red-500')}`}>
                <input 
                  type="text" 
                  value={String(driver.vehicle_payload_lbs || '')}
                  onChange={(e) => handleChange('vehicle_payload_lbs', e.target.value)}
                  className="w-full h-full pl-4 text-left font-sans bg-transparent outline-none focus:bg-blue-50/50" 
                />
             </div>
         </div>
      </div>

      {/* Checklist */}
      <div className="max-w-[750px] mx-auto">
        <h3 className="text-[#1e4e8c] font-serif text-[16px] uppercase mb-6 tracking-wide font-bold">
           MARK IF YOU HAVE ONE OF THE FOLLOWING:
        </h3>
        <div className="space-y-1 pl-2">
           <CheckboxItem label="AIR-RIDE" name="vehicle_air_ride" checked={driver.vehicle_air_ride} onChange={(e) => handleChange('vehicle_air_ride', e.target.checked)} />
           <CheckboxItem label="DOCK HIGH" name="vehicle_dock_high" checked={driver.vehicle_dock_high} onChange={(e) => handleChange('vehicle_dock_high', e.target.checked)} />
           <CheckboxItem label="PALLET JACK" name="vehicle_pallet_jack" checked={driver.vehicle_pallet_jack} onChange={(e) => handleChange('vehicle_pallet_jack', e.target.checked)} />
           <CheckboxItem label="RAMPS" name="vehicle_ramps" checked={driver.vehicle_ramps} onChange={(e) => handleChange('vehicle_ramps', e.target.checked)} />
           <CheckboxItem label="STRAPS" name="vehicle_straps" checked={driver.vehicle_straps} onChange={(e) => handleChange('vehicle_straps', e.target.checked)} />
           <CheckboxItem label="BLANKETS" name="vehicle_blankets" checked={driver.vehicle_blankets} onChange={(e) => handleChange('vehicle_blankets', e.target.checked)} />
           <CheckboxItem label="LIFT-GATE" name="vehicle_lift_gate" checked={driver.vehicle_lift_gate} onChange={(e) => handleChange('vehicle_lift_gate', e.target.checked)} />
           <CheckboxItem label="E-TRACKS" name="vehicle_e_tracks" checked={driver.vehicle_e_tracks} onChange={(e) => handleChange('vehicle_e_tracks', e.target.checked)} />
           <CheckboxItem label="LOAD-BARS" name="vehicle_load_bars" checked={driver.vehicle_load_bars} onChange={(e) => handleChange('vehicle_load_bars', e.target.checked)} />
        </div>
      </div>

       <div className="absolute bottom-12 left-0 right-0 text-center">
        <span className="font-serif text-xs">{pageNumber}</span>
      </div>
    </DocumentSheet>
  );
};
