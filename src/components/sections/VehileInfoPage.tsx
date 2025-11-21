
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
      <span className="font-serif text-black text-[14px] uppercase shrink-0 w-[200px] font-bold">{label}</span>
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

const CheckboxItem = ({ label, name }: { label: string, name?: string }) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(state => state.form);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (name) {
      dispatch(updateFormData({ [name]: e.target.checked }));
    }
  };

  const isChecked = name ? Boolean(formData[name as keyof typeof formData]) : false;

  return (
     <label className="flex items-center gap-3 cursor-pointer mb-3">
        <div className="relative w-[18px] h-[18px] border border-black bg-white flex items-center justify-center shrink-0">
          <input 
            type="checkbox" 
            name={name}
            checked={isChecked}
            onChange={handleChange}
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

export const VehicleInfoPage = ({ pageNumber = 5 }: { pageNumber?: number }) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(state => state.form);

  const handleTableChange = (name: string, value: string) => {
    dispatch(updateFormData({ [name]: value }));
  };

  return (
    <DocumentSheet>
       <div className="flex justify-end mb-6">
         <span className="text-[56px] text-[#3b5073] font-sans font-medium tracking-tight leading-none">Axper</span>
      </div>

      <AutoSaveStatus />

      <div className="flex justify-center mb-10">
        <h2 className="text-[#1e4e8c] font-bold font-serif text-[18px] uppercase tracking-wide">
          VEHICLE INFORMATION:
        </h2>
      </div>

      <div className="max-w-[750px] mx-auto mb-12 space-y-2">
        <InfoRow label="MAKE:" name="vehicleMake" />
        <InfoRow label="MODEL:" name="vehicleModel" />
        <InfoRow label="YEAR:" name="vehicleYear" />
        <InfoRow label="PLATE NUMBER:" name="vehiclePlateNumber" />
        <InfoRow label="STATE:" name="vehicleState" />
        <InfoRow label="EXPIRATION DATE:" name="vehicleExpirationDate" />
        <InfoRow label="VIN NUMBER:" name="vehicleVinNumber" />
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

         <div className="grid grid-cols-[200px_1fr_1fr_1fr] divide-x divide-black border-b border-black min-h-[48px]">
             <div className="p-2 flex items-center font-serif text-[14px] pl-3 font-bold">DOOR OPENING DIMS:</div>
             <div className="relative">
                <input 
                  type="text" 
                  value={String(formData.vehicleDoorOpeningLength || '')}
                  onChange={(e) => handleTableChange('vehicleDoorOpeningLength', e.target.value)}
                  className="w-full h-full text-center font-sans bg-transparent outline-none focus:bg-blue-50/50" 
                />
             </div>
             <div className="relative">
                <input 
                  type="text" 
                  value={String(formData.vehicleDoorOpeningWidth || '')}
                  onChange={(e) => handleTableChange('vehicleDoorOpeningWidth', e.target.value)}
                  className="w-full h-full text-center font-sans bg-transparent outline-none focus:bg-blue-50/50" 
                />
             </div>
             <div className="relative">
                <input 
                  type="text" 
                  value={String(formData.vehicleDoorOpeningHeight || '')}
                  onChange={(e) => handleTableChange('vehicleDoorOpeningHeight', e.target.value)}
                  className="w-full h-full text-center font-sans bg-transparent outline-none focus:bg-blue-50/50" 
                />
             </div>
         </div>
         <div className="grid grid-cols-[200px_1fr_1fr_1fr] divide-x divide-black border-b border-black min-h-[48px]">
             <div className="p-2 flex items-center font-serif text-[14px] pl-3 font-bold">DIMS INSIDE:</div>
             <div className="relative">
                <input 
                  type="text" 
                  value={String(formData.vehicleDimsInsideLength || '')}
                  onChange={(e) => handleTableChange('vehicleDimsInsideLength', e.target.value)}
                  className="w-full h-full text-center font-sans bg-transparent outline-none focus:bg-blue-50/50" 
                />
             </div>
             <div className="relative">
                <input 
                  type="text" 
                  value={String(formData.vehicleDimsInsideWidth || '')}
                  onChange={(e) => handleTableChange('vehicleDimsInsideWidth', e.target.value)}
                  className="w-full h-full text-center font-sans bg-transparent outline-none focus:bg-blue-50/50" 
                />
             </div>
             <div className="relative">
                <input 
                  type="text" 
                  value={String(formData.vehicleDimsInsideHeight || '')}
                  onChange={(e) => handleTableChange('vehicleDimsInsideHeight', e.target.value)}
                  className="w-full h-full text-center font-sans bg-transparent outline-none focus:bg-blue-50/50" 
                />
             </div>
         </div>
          <div className="grid grid-cols-[200px_1fr_1fr_1fr] divide-x divide-black min-h-[48px]">
             <div className="p-2 flex items-center font-serif text-[14px] pl-3 font-bold">PAYLOAD</div>
             <div className="col-span-3 relative">
                <input 
                  type="text" 
                  value={String(formData.vehiclePayload || '')}
                  onChange={(e) => handleTableChange('vehiclePayload', e.target.value)}
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
           <CheckboxItem label="AIR-RIDE" name="vehicleAirRide" />
           <CheckboxItem label="DOCK HIGH" name="vehicleDockHigh" />
           <CheckboxItem label="PALLET JACK" name="vehiclePalletJack" />
           <CheckboxItem label="RAMPS" name="vehicleRamps" />
           <CheckboxItem label="STRAPS" name="vehicleStraps" />
           <CheckboxItem label="BLANKETS" name="vehicleBlankets" />
           <CheckboxItem label="LIFT-GATE" name="vehicleLiftGate" />
           <CheckboxItem label="E-TRACKS" name="vehicleETracks" />
           <CheckboxItem label="LOAD-BARS" name="vehicleLoadBars" />
        </div>
      </div>

       <div className="absolute bottom-12 left-0 right-0 text-center">
        <span className="font-serif text-xl">{pageNumber}</span>
      </div>
    </DocumentSheet>
  );
}
