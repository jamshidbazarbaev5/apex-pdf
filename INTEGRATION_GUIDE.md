# How to Use Auto-Save in Your Pages - Integration Guide

## Quick Answer

You have **3 options** depending on your needs:

### Option 1: Minimal (Just Show Save Status) ⭐ EASIEST
```tsx
import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';

// Add this ONE line at the top of your page:
<AutoSaveStatus />
```

### Option 2: Show Draft Info with Clear Button
```tsx
import { DraftStatusBanner } from '@/components/ui/AutoSaveStatus';
import { useFormPersistence } from '@/store/persistenceHooks';

// In your component:
const { handleClearDraft } = useFormPersistence();

// Add this:
<DraftStatusBanner onClearDraft={handleClearDraft} />
```

### Option 3: Full Control (Custom Behavior)
```tsx
import { useFormPersistence } from '@/store/persistenceHooks';

const { 
  lastSavedTime, 
  getLastSavedText, 
  handleClearDraft 
} = useFormPersistence();

// Use the values however you want
```

---

## IMPORTANT: Auto-Save Works Automatically ✅

**You DON'T need to do anything special for saving!**

The system automatically saves whenever you use:
```tsx
dispatch(updateFormData({ fieldName: value }));
```

---

## Integration Examples by Page Type

### Example 1: Simple Form Page

```tsx
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateFormData } from '@/store/formSlice';
import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';

export const GeneralInfo = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(state => state.form);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // This automatically saves to localStorage
    dispatch(updateFormData({ [name]: value }));
  };

  return (
    <div className="p-4">
      <h1>General Information</h1>
      
      {/* Add this line to show auto-save status */}
      <AutoSaveStatus />

      <input
        name="ownerFirstName"
        value={formData.ownerFirstName || ''}
        onChange={handleChange}
        placeholder="First Name"
      />
      
      {/* More form fields... */}
    </div>
  );
};
```

### Example 2: Form with Clear Draft Option

```tsx
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateFormData } from '@/store/formSlice';
import { DraftStatusBanner } from '@/components/ui/AutoSaveStatus';
import { useFormPersistence } from '@/store/persistenceHooks';

export const DriverInfoPage = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(state => state.form);
  const { handleClearDraft } = useFormPersistence();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    dispatch(updateFormData({
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="p-4">
      <h1>Driver Information</h1>
      
      {/* Show draft status with clear button */}
      <DraftStatusBanner onClearDraft={handleClearDraft} />

      <input
        name="driverFirstName"
        value={formData.driverFirstName || ''}
        onChange={handleChange}
      />
      
      {/* More fields... */}
    </div>
  );
};
```

### Example 3: Complex Form with Multiple Handlers

```tsx
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateFormData } from '@/store/formSlice';
import { AutoSaveStatus, DraftStatusBanner } from '@/components/ui/AutoSaveStatus';
import { useFormPersistence } from '@/store/persistenceHooks';

export const CompanyInfoPage = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(state => state.form);
  const { handleClearDraft, getLastSavedText } = useFormPersistence();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    dispatch(updateFormData({ [name]: checked }));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1>Company Information</h1>
        <AutoSaveStatus showDetail={true} />
      </div>

      <DraftStatusBanner onClearDraft={handleClearDraft} />

      <div className="space-y-4">
        <input
          name="companyName"
          value={formData.companyName || ''}
          onChange={handleInputChange}
          placeholder="Company Name"
        />

        <input
          name="companyEmail"
          value={formData.companyEmail || ''}
          onChange={handleInputChange}
          placeholder="Email"
          type="email"
        />

        <label>
          <input
            name="companyWebsite"
            type="checkbox"
            checked={formData.companyWebsite || false}
            onChange={handleCheckboxChange}
          />
          Has Website
        </label>

        <div className="text-sm text-gray-500">
          {getLastSavedText()}
        </div>
      </div>
    </div>
  );
};
```

### Example 4: Form with Sections

```tsx
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateFormData } from '@/store/formSlice';
import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';

export const VehicleInfoPage = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(state => state.form);

  const handleChange = (name: string, value: any) => {
    dispatch(updateFormData({ [name]: value }));
  };

  return (
    <div className="p-4">
      <h1>Vehicle Information</h1>
      <AutoSaveStatus />

      {/* Vehicle Details Section */}
      <section className="mb-6">
        <h2>Basic Details</h2>
        <input
          value={formData.vehicleMake || ''}
          onChange={(e) => handleChange('vehicleMake', e.target.value)}
          placeholder="Make"
        />
        <input
          value={formData.vehicleModel || ''}
          onChange={(e) => handleChange('vehicleModel', e.target.value)}
          placeholder="Model"
        />
      </section>

      {/* Equipment Section */}
      <section className="mb-6">
        <h2>Equipment</h2>
        <label>
          <input
            type="checkbox"
            checked={formData.vehicleAirRide || false}
            onChange={(e) => handleChange('vehicleAirRide', e.target.checked)}
          />
          Air Ride
        </label>
        <label>
          <input
            type="checkbox"
            checked={formData.vehicleLiftGate || false}
            onChange={(e) => handleChange('vehicleLiftGate', e.target.checked)}
          />
          Lift Gate
        </label>
      </section>
    </div>
  );
};
```

---

## What You DON'T Need to Do

❌ **DON'T** manually call save functions
❌ **DON'T** manually load data on page load
❌ **DON'T** add listeners to every input
❌ **DON'T** pass data between pages

✅ **DO** use `updateFormData()` when field changes
✅ **DO** use `useAppSelector` to get form data
✅ **DO** use the UI components to show status

---

## Copy-Paste Template for New Pages

```tsx
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateFormData } from '@/store/formSlice';
import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';

export const YourPageName = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(state => state.form);

  const handleChange = (name: string, value: any) => {
    dispatch(updateFormData({ [name]: value }));
  };

  return (
    <div className="p-4">
      <h1>Your Page Title</h1>
      <AutoSaveStatus />

      {/* Your form fields */}
      <input
        value={formData.yourFieldName || ''}
        onChange={(e) => handleChange('yourFieldName', e.target.value)}
        placeholder="Your Field"
      />
    </div>
  );
};
```

---

## Pages That Need Updates

Update these files to add `<AutoSaveStatus />`:

1. **HomePage** - `src/components/sections/HomePage.tsx`
2. **GeneralInfo** - `src/components/sections/GeneralInfo.tsx`
3. **OwnerOperatorAgreement** - `src/components/sections/OwnerOperatorAgreement.tsx`
4. **DriverInfoPage** - `src/components/sections/DriverInfoPage.tsx`
5. **VehicleInfoPage** - `src/components/sections/VehileInfoPage.tsx`
6. **CompanyInfoPage** - `src/components/sections/CompanyInfoPage.tsx`
7. **DirectDepositForm** - `src/components/sections/DirectDepositForm.tsx`
8. **CertificationForm** - `src/components/sections/CertificationForm.tsx`
9. **W9Form** - `src/components/forms/W9Form.tsx`
10. **AxperForm** - `src/components/sections/AxperForm.tsx`

---

## How Data Flows (Behind the Scenes)

```
User Types in Input
        ↓
onChange handler called
        ↓
dispatch(updateFormData({ fieldName: value }))
        ↓
Redux updates state
        ↓
Middleware listener triggered
        ↓
Data saved to localStorage automatically
        ↓
Component re-renders with new value
        ↓
User sees their change
```

---

## What Gets Saved and Restored

### SAVED TO localStorage:
✅ Text inputs
✅ Checkboxes
✅ Text areas
✅ Select dropdowns
✅ Signatures
✅ Dates
✅ Numbers

### RESTORED ON PAGE RELOAD:
✅ All the above

### NOT SAVED:
❌ Files/uploads (separate handling)
❌ Images (unless already in formData)
❌ Network requests

---

## Verification Steps

To verify it's working:

1. **Fill out a form field**
2. **Open DevTools** (F12)
3. **Go to Application → localStorage**
4. **Look for `apex_form_draft` key**
5. **Refresh the page** (F5)
6. **Data should still be there!** ✅

---

## Common Patterns

### Pattern 1: Text Input
```tsx
<input
  value={formData.fieldName || ''}
  onChange={(e) => handleChange('fieldName', e.target.value)}
/>
```

### Pattern 2: Checkbox
```tsx
<input
  type="checkbox"
  checked={formData.fieldName || false}
  onChange={(e) => handleChange('fieldName', e.target.checked)}
/>
```

### Pattern 3: Select
```tsx
<select
  value={formData.fieldName || ''}
  onChange={(e) => handleChange('fieldName', e.target.value)}
>
  <option value="">Choose...</option>
  <option value="option1">Option 1</option>
</select>
```

### Pattern 4: Textarea
```tsx
<textarea
  value={formData.fieldName || ''}
  onChange={(e) => handleChange('fieldName', e.target.value)}
/>
```

---

## Debugging

If data isn't saving:

1. **Check Redux DevTools** - See if action is dispatched
2. **Check console** - Look for errors
3. **Check localStorage** - DevTools → Application → localStorage
4. **Verify field name** - Must match FormData interface
5. **Check if `updateFormData` is used** - Should always use this

---

## No Network Calls Needed

This is **100% local storage** - no server calls:
- No internet required to work
- No backend API needed
- Instant save (< 5ms)
- Works offline

---

## Storage Limit

- **Size per app**: ~5-10MB (browser dependent)
- **Current usage**: ~50-100KB per draft
- **Your limit**: You have plenty of room

---

## That's It! 🎉

Just:
1. Import `AutoSaveStatus` component
2. Add one line to your page
3. Use `dispatch(updateFormData())` when fields change
4. Everything else is automatic!

No complex setup needed. The system works in the background.
