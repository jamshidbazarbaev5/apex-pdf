import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addDriver, updateFormData } from '@/store/formSlice';
import type { DriverVehicle } from '@/store/formSlice';
import { toast } from 'sonner';

export const AddDriverButton = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(state => state.form);

  const handleAddDriver = () => {
    try {
      // Capture the current form data and add it to drivers list
      const newDriver: DriverVehicle = {
        driver_first_name: String(formData.driverFirstName || ''),
        driver_last_name: String(formData.driverLastName || ''),
        driver_date_of_birth: String(formData.driverDateOfBirth || ''),
        driver_address: String(formData.driverAddress || ''),
        driver_city: String(formData.driverCity || ''),
        driver_state: String(formData.driverState || ''),
        driver_zip_code: String(formData.driverZipCode || ''),
        driver_cell_phone: String(formData.driverCellPhone || ''),
        driver_emergency_number: String(formData.driverEmergencyNumber || ''),
        driver_us_citizen: Boolean(formData.driverUsCitizen),
        driver_green_card: Boolean(formData.driverGreenCard),
        driver_twic_tsa: Boolean(formData.driverTwicTsa),
        driver_hazmat_certified: Boolean(formData.driverHazmatCertified),
        vehicle_make: String(formData.vehicleMake || ''),
        vehicle_model: String(formData.vehicleModel || ''),
        vehicle_year: String(formData.vehicleYear || ''),
        vehicle_plate_number: String(formData.vehiclePlateNumber || ''),
        vehicle_state: String(formData.vehicleState || ''),
        vehicle_expiration_date: String(formData.vehicleExpirationDate || ''),
        vehicle_vin_number: String(formData.vehicleVinNumber || ''),
        vehicle_door_length: String(formData.vehicleDoorOpeningLength || ''),
        vehicle_door_width: String(formData.vehicleDoorOpeningWidth || ''),
        vehicle_door_height: String(formData.vehicleDoorOpeningHeight || ''),
        vehicle_inside_length: String(formData.vehicleDimsInsideLength || ''),
        vehicle_inside_width: String(formData.vehicleDimsInsideWidth || ''),
        vehicle_inside_height: String(formData.vehicleDimsInsideHeight || ''),
        vehicle_payload_lbs: String(formData.vehiclePayload || ''),
        vehicle_air_ride: Boolean(formData.vehicleAirRide),
        vehicle_dock_high: Boolean(formData.vehicleDockHigh),
        vehicle_pallet_jack: Boolean(formData.vehiclePalletJack),
        vehicle_ramps: Boolean(formData.vehicleRamps),
        vehicle_straps: Boolean(formData.vehicleStraps),
        vehicle_blankets: Boolean(formData.vehicleBlankets),
        vehicle_lift_gate: Boolean(formData.vehicleLiftGate),
        vehicle_e_tracks: Boolean(formData.vehicleETracks),
        vehicle_load_bars: Boolean(formData.vehicleLoadBars),
      };

      console.log('Adding driver:', newDriver);

      // Add driver to drivers array
      dispatch(addDriver(newDriver));

      // Show success toast
      const driverName = `${newDriver.driver_first_name} ${newDriver.driver_last_name}`.trim() || 'New Driver';
      const vehicleInfo = `${newDriver.vehicle_year} ${newDriver.vehicle_make} ${newDriver.vehicle_model}`.trim() || 'New Vehicle';
      toast.success(`${driverName} and ${vehicleInfo} have been added`);

      // Clear the form fields for next driver entry
      dispatch(updateFormData({
        driverFirstName: '',
        driverLastName: '',
        driverDateOfBirth: '',
        driverAddress: '',
        driverCity: '',
        driverState: '',
        driverZipCode: '',
        driverCellPhone: '',
        driverEmergencyNumber: '',
        driverUsCitizen: false,
        driverGreenCard: false,
        driverTwicTsa: false,
        driverHazmatCertified: false,
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: '',
        vehiclePlateNumber: '',
        vehicleState: '',
        vehicleExpirationDate: '',
        vehicleVinNumber: '',
        vehicleDoorOpeningLength: '',
        vehicleDoorOpeningWidth: '',
        vehicleDoorOpeningHeight: '',
        vehicleDimsInsideLength: '',
        vehicleDimsInsideWidth: '',
        vehicleDimsInsideHeight: '',
        vehiclePayload: '',
        vehicleAirRide: false,
        vehicleDockHigh: false,
        vehiclePalletJack: false,
        vehicleRamps: false,
        vehicleStraps: false,
        vehicleBlankets: false,
        vehicleLiftGate: false,
        vehicleETracks: false,
        vehicleLoadBars: false,
      }));

      console.log('Driver added successfully!');
    } catch (error) {
      console.error('Error adding driver:', error);
    }
  };

  return (
    <button
      onClick={() => {
        console.log('Button clicked!');
        handleAddDriver();
      }}
      className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
      Add Driver & Vehicle
    </button>
  );
};
