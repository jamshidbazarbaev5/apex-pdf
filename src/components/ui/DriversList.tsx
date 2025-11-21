import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { removeDriver } from '@/store/formSlice';

export const DriversList = () => {
  const drivers = useAppSelector(state => state.form.drivers) || [];
  const dispatch = useAppDispatch();

  if (!drivers || drivers.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No drivers added yet. Click "Add Driver & Vehicle" to get started.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-[#1e4e8c] mb-4">Added Drivers ({drivers.length})</h3>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <p className="text-sm text-blue-700">
          ✓ Each driver now has dedicated editable pages below. Click on any driver row to scroll to their page.
        </p>
      </div>
      <div className="space-y-3">
        {drivers.map((driver, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 bg-gray-50 hover:bg-blue-50 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="font-semibold text-lg text-gray-800">
                  Driver #{index + 1}: {driver.driver_first_name} {driver.driver_last_name}
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">DOB:</span> {driver.driver_date_of_birth || 'N/A'}
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span> {driver.driver_cell_phone || 'N/A'}
                  </div>
                  <div>
                    <span className="font-medium">Vehicle:</span> {driver.vehicle_year} {driver.vehicle_make}{' '}
                    {driver.vehicle_model} (Plate: {driver.vehicle_plate_number || 'N/A'})
                  </div>
                  <div>
                    <span className="font-medium">Certifications:</span>{' '}
                    {driver.driver_us_citizen ? '✓ US Citizen' : ''}
                    {driver.driver_green_card ? ' ✓ Green Card' : ''}
                    {driver.driver_hazmat_certified ? ' ✓ HAZMAT' : ''}
                    {!driver.driver_us_citizen &&
                      !driver.driver_green_card &&
                      !driver.driver_hazmat_certified
                      ? 'None'
                      : ''}
                  </div>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeDriver(index))}
                className="ml-4 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded text-sm font-medium transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
