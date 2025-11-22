import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addDriver } from "@/store/formSlice";
import type { DriverVehicle } from "@/store/formSlice";
import { toast } from "sonner";

export const AddDriverButton = () => {
  const dispatch = useAppDispatch();
  const drivers = useAppSelector((state) => state.form.drivers) || [];

  const handleAddDriver = () => {
    try {
      // Create a new EMPTY driver entry for the next driver to fill
      const newDriver: DriverVehicle = {
        driver_first_name: "",
        driver_last_name: "",
        driver_date_of_birth: "",
        driver_address: "",
        driver_city: "",
        driver_state: "",
        driver_zip_code: "",
        driver_cell_phone: "",
        driver_emergency_number: "",
        driver_us_citizen: false,
        driver_green_card: false,
        driver_twic_tsa: false,
        driver_hazmat_certified: false,
        vehicle_make: "",
        vehicle_model: "",
        vehicle_year: "",
        vehicle_plate_number: "",
        vehicle_state: "",
        vehicle_expiration_date: "",
        vehicle_vin_number: "",
        vehicle_door_length: "",
        vehicle_door_width: "",
        vehicle_door_height: "",
        vehicle_inside_length: "",
        vehicle_inside_width: "",
        vehicle_inside_height: "",
        vehicle_payload_lbs: "",
        vehicle_air_ride: false,
        vehicle_dock_high: false,
        vehicle_pallet_jack: false,
        vehicle_ramps: false,
        vehicle_straps: false,
        vehicle_blankets: false,
        vehicle_lift_gate: false,
        vehicle_e_tracks: false,
        vehicle_load_bars: false,
      };

      console.log("Adding new empty driver page:", newDriver);

      // Add new empty driver to drivers array
      dispatch(addDriver(newDriver));

      const driverNumber = drivers.length + 1;
      toast.success(
        `Driver & Vehicle #${driverNumber} page created. Fill out their information.`,
      );

      console.log(`Driver & Vehicle #${driverNumber} page added successfully!`);
    } catch (error) {
      console.error("Error adding driver page:", error);
      toast.error("Failed to create new driver page. Please try again.");
    }
  };

  return (
    <button
      onClick={handleAddDriver}
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
