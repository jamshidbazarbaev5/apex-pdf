# Implementation Guide - API Integration & Red Border Required Fields

## Quick Start

This guide shows how to add red borders to required fields and prepare your form for API submission.

## 1. Adding Red Borders to Form Pages

### Pattern to Follow

Every form page should:
1. Import the validation helper
2. Wrap input containers with the helper class
3. Apply the returned classes to the input border

### Example: CompanyInfoPage.tsx (Already Updated)

```tsx
import { getRequiredFieldClasses } from '@/lib/fieldValidation';

const InfoRow = ({ label, name }: { label: string, name?: string }) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(state => state.form);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (name) {
      dispatch(updateFormData({ [name]: e.target.value }));
    }
  };

  const fieldValue = name ? String(formData[name as keyof typeof formData] || '') : '';
  // THIS IS THE KEY LINE - gets classes with red border if required
  const borderClasses = getRequiredFieldClasses(name || '', 'border-b border-black');

  return (
    <div className="flex items-end gap-4 mb-3">
      <span className="font-serif text-black text-[14px] uppercase shrink-0 w-[280px] font-bold">{label}</span>
      <div className={`flex-1 ${borderClasses} relative top-[4px]`}>
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
```

### Apply to These Files

Apply the same pattern to these form pages:

1. **DriverInfoPage.tsx** - All driver fields
   - `driverFirstName`, `driverLastName`, `driverDateOfBirth`
   - `driverAddress`, `driverCity`, `driverState`, `driverZipCode`
   - `driverCellPhone`

2. **VehicleInfoPage.tsx** - All vehicle fields
   - `vehicleMake`, `vehicleModel`, `vehicleYear`
   - `vehiclePlateNumber`, `vehicleState`, `vehicleExpirationDate`
   - `vehicleDoorOpeningLength/Width/Height`
   - `vehicleDimsInsideLength/Width/Height`
   - `vehiclePayload`

3. **AxperForm.tsx** - AXPER form fields

4. **OwnerOperatorAgreement.tsx** - Agreement fields
   - `agreementDay`, `agreementYear`, `agreementOwnerOperator`
   - `agreementOwnerAddress`

5. **CertificationForm.tsx** - Certification fields
   - `applicantDate`, `accidentWaiverDate`

6. **DirectDepositForm.tsx** - Bank and vendor fields
   - `vendorName`, `vendorAddress`, `vendorCityStateZip`
   - `vendorPhone`, `vendorEmail`
   - `bankName`, `routingNumber`, `accountNumber`, `accountDate`

7. **W9Form.tsx** - W9 tax fields
   - `entityName`, `businessName`
   - Tax classification checkboxes
   - SSN and EIN fields

## 2. Field Names Reference

### Which Fields Are Required?

Use `getRequiredFieldClasses(fieldName)` with these camelCase field names:

**Company Info:**
- `companyName` ✓
- `companyRegisteredAddress` ✓
- `companyCityStateZip` ✓
- `companyPhoneNumber` ✓

**Owner:**
- `ownerFirstName` ✓
- `ownerLastName` ✓
- `ownerDateOfBirth` ✓
- `ownerAddress` ✓
- `ownerCity` ✓
- `ownerState` ✓
- `ownerZipCode` ✓
- `ownerCellPhone` ✓

**Driver:**
- `driverFirstName` ✓
- `driverLastName` ✓
- `driverDateOfBirth` ✓
- `driverAddress` ✓
- `driverCity` ✓
- `driverState` ✓
- `driverZipCode` ✓
- `driverCellPhone` ✓

**Vehicle:**
- `vehicleMake` ✓
- `vehicleModel` ✓
- `vehicleYear` ✓
- `vehiclePlateNumber` ✓
- `vehicleState` ✓
- `vehicleExpirationDate` ✓
- `vehicleDoorOpeningLength` ✓
- `vehicleDoorOpeningWidth` ✓
- `vehicleDoorOpeningHeight` ✓
- `vehicleDimsInsideLength` ✓
- `vehicleDimsInsideWidth` ✓
- `vehicleDimsInsideHeight` ✓
- `vehiclePayload` ✓

**Certification:**
- `applicantDate` ✓
- `accidentWaiverDate` ✓

**Agreement:**
- `agreementDay` ✓
- `agreementYear` ✓
- `agreementOwnerOperator` ✓
- `agreementOwnerAddress` ✓

**Acceptance:**
- `acceptanceCompany` ✓
- `acceptanceDay` ✓
- `acceptanceMonth` ✓
- `acceptanceYear` ✓
- `acceptanceOwnerCompany` ✓
- `acceptanceOwnerName` ✓
- `acceptanceOwnerTitle` ✓
- `acceptanceOwnerDate` ✓

**Vendor:**
- `vendorName` ✓
- `vendorAddress` ✓
- `vendorCityStateZip` ✓
- `vendorPhone` ✓
- `vendorEmail` ✓

**Direct Deposit:**
- `bankName` ✓
- `routingNumber` ✓
- `accountNumber` ✓
- `accountDate` ✓

**W9:**
- `entityName` ✓
- `businessName` ✓

## 3. Helper Components

You can use pre-made components instead of creating your own:

```tsx
import { RequiredInput, FormField, RequiredFieldBorder } from '@/components/ui/RequiredField';

// Option 1: Use RequiredInput directly
<RequiredInput
  name="companyName"
  value={formData.companyName}
  onChange={handleChange}
  className="w-full"
/>

// Option 2: Use FormField for complete field with label
<FormField
  name="companyName"
  label="Company Name"
  value={formData.companyName}
  onChange={handleChange}
/>

// Option 3: Use RequiredFieldBorder wrapper
<RequiredFieldBorder name="companyName" className="flex-1">
  <input {...props} />
</RequiredFieldBorder>
```

## 4. Validation Hooks

Use these hooks to check validation status:

```tsx
import { useIsFieldMissing, useMissingRequiredFields } from '@/store/validationHooks';

export const MyComponent = () => {
  // Check single field
  const isCompanyNameMissing = useIsFieldMissing('companyName');

  // Get all missing fields
  const missingFields = useMissingRequiredFields();

  return (
    <div>
      {isCompanyNameMissing && <p>Company Name is required</p>}
      {missingFields.length > 0 && (
        <p>Missing: {missingFields.join(', ')}</p>
      )}
    </div>
  );
};
```

## 5. Form Submission Flow

Users will:
1. Fill out all form pages
2. Required fields automatically show red borders
3. At the end, scroll to "Review & Submit" page (SubmitFormPage)
4. Click "Submit Form" button
5. Form validates all required fields
6. On success: Shows success message and redirects
7. On error: Shows validation errors

## 6. API Endpoint

**Endpoint:** `http://127.0.0.1:8000/api/v1/pdf-contract-form/`

**Method:** POST

**Content-Type:** multipart/form-data

**Submitted Fields:** All form data with snake_case field names (auto-converted by apiService.ts)

## 7. CSS Classes Returned

`getRequiredFieldClasses()` returns:
- For required fields: `border-b border-black border-red-500` (adds red-500 to any base classes)
- For optional fields: Just the base classes passed in

So if you pass `"border-b border-black"`:
- Required field gets: `border-b border-black border-red-500`
- Optional field gets: `border-b border-black`

## 8. Red Border Styling

Required fields will have:
- **Red bottom border** indicating they're required
- Same styling as the form design
- Matches across all pages

Users can see at a glance which fields must be filled before submission.

## 9. Testing

To test:
1. Fill out some fields (not all)
2. Scroll to "Review & Submit"
3. Click "Submit Form"
4. You should see error messages for missing required fields
5. Fill in the missing fields
6. Click "Submit Form" again
7. Should see "Form submitted successfully" message

## 10. Troubleshooting

**Issue:** Red border not showing on a field
- **Check:** Does the fieldName in `getRequiredFieldClasses()` match exactly with the camelCase name?
- **Check:** Is it in the REQUIRED_FIELDS set in `src/lib/fieldValidation.ts`?

**Issue:** Form won't submit
- **Check:** Are all required fields filled?
- **Check:** Is the API endpoint running at `http://127.0.0.1:8000`?
- **Check:** Check browser console for error messages

**Issue:** Fields not being saved
- **Check:** Is `dispatch(updateFormData())` being called on change?
- **Check:** Are field names exactly matching the FormData interface?

## 11. Adding New Required Fields

If new fields are added:
1. Add to `FormData` interface in `src/store/formSlice.ts`
2. Add to `initialState`
3. Add field name mapping to `fieldNameMapping` in `src/lib/fieldValidation.ts`
4. Add API field name to `REQUIRED_FIELDS` set
5. Add to `requiredFields` array in `validateFormData()` in `src/lib/apiService.ts`

---

For more details, see `API_INTEGRATION.md`
