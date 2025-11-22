import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { removeDriver } from "@/store/formSlice";

export const DriversList = () => {
  const drivers = useAppSelector((state) => state.form.drivers) || [];
  const dispatch = useAppDispatch();

  if (!drivers || drivers.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>
          No drivers added yet. Click "Add Driver & Vehicle" to create your
          first driver page.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-[#1e4e8c] mb-4">
        Driver Pages Created ({drivers.length})
      </h3>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <p className="text-sm text-blue-700">
          ✓ Each driver has their own dedicated form page. Scroll down to see
          individual driver and vehicle forms for each driver you've added.
        </p>
      </div>
      <div className="space-y-3">
        {drivers.map((driver, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 bg-gray-50"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="font-semibold text-lg text-gray-800">
                  Driver #{index + 1}:{" "}
                  {driver.driver_first_name || "Not filled"}{" "}
                  {driver.driver_last_name || ""}
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">DOB:</span>{" "}
                    {driver.driver_date_of_birth || "Not filled"}
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span>{" "}
                    {driver.driver_cell_phone || "Not filled"}
                  </div>
                  <div>
                    <span className="font-medium">Vehicle:</span>{" "}
                    {driver.vehicle_year} {driver.vehicle_make}{" "}
                    {driver.vehicle_model || "Not filled"}
                  </div>
                  <div>
                    <span className="font-medium">Status:</span>{" "}
                    {driver.driver_first_name && driver.vehicle_make
                      ? "✓ Basic info filled"
                      : "⚠️ Needs completion"}
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

      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-sm text-green-800">
          <strong>Next Step:</strong> Scroll down to see individual forms for
          each driver. Fill out each driver's complete information before
          submitting.
        </p>
      </div>
    </div>
  );
};
