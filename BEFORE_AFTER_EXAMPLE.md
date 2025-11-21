# Real Example: Converting a Page to Use Auto-Save

## Before and After Comparison

### BEFORE (Without Auto-Save)
```tsx
import React, { useState } from 'react';

export const DriverInfoPage = () => {
  // Using local state - data is LOST on refresh
  const [formData, setFormData] = useState({
    driverFirstName: '',
    driverLastName: '',
    driverDateOfBirth: '',
    // ... more fields
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Only updates local state - nothing is saved
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Driver Information</h1>
      
      <input
        name="driverFirstName"
        value={formData.driverFirstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      
      {/* When user refreshes - ALL DATA IS GONE! ❌ */}
    </div>
  );
};
```

---

### AFTER (With Auto-Save) ✅
```tsx
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateFormData } from '@/store/formSlice';
import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';

export const DriverInfoPage = () => {
  // Get data from Redux (automatically loaded from localStorage)
  const dispatch = useAppDispatch();
  const formData = useAppSelector(state => state.form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // This automatically saves to localStorage
    dispatch(updateFormData({ [name]: value }));
  };

  return (
    <div>
      <h1>Driver Information</h1>
      
      {/* Show save status */}
      <AutoSaveStatus />
      
      <input
        name="driverFirstName"
        value={formData.driverFirstName || ''}
        onChange={handleChange}
        placeholder="First Name"
      />
      
      {/* When user refreshes - DATA IS RESTORED! ✅ */}
    </div>
  );
};
```

---

## What Changed? Only 3 Things:

### 1. Import Redux (3 lines added)
```diff
+ import { useAppDispatch, useAppSelector } from '@/store/hooks';
+ import { updateFormData } from '@/store/formSlice';
+ import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';
```

### 2. Replace useState with Redux (3 lines changed)
```diff
- const [formData, setFormData] = useState({ ... });
+ const dispatch = useAppDispatch();
+ const formData = useAppSelector(state => state.form);
```

### 3. Update handleChange (1 line changed)
```diff
- setFormData(prev => ({ ...prev, [name]: value }));
+ dispatch(updateFormData({ [name]: value }));
```

### 4. Add Component (1 line added)
```diff
+ <AutoSaveStatus />
```

---

## Complete Real-World Example

### File: `src/components/sections/DriverInfoPage.tsx`

```tsx
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateFormData } from '@/store/formSlice';
import { AutoSaveStatus, DraftStatusBanner } from '@/components/ui/AutoSaveStatus';
import { useFormPersistence } from '@/store/persistenceHooks';

export const DriverInfoPage = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(state => state.form);
  const { handleClearDraft } = useFormPersistence();

  // Handles text input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    dispatch(updateFormData({
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="p-4">
      {/* Header with Save Status */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Driver Information</h1>
        <AutoSaveStatus />
      </div>

      {/* Show draft info if available */}
      <DraftStatusBanner onClearDraft={handleClearDraft} />

      {/* Driver Info Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-blue-600">Personal Details</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">First Name</label>
            <input
              type="text"
              name="driverFirstName"
              value={formData.driverFirstName || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="First Name"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Last Name</label>
            <input
              type="text"
              name="driverLastName"
              value={formData.driverLastName || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Last Name"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Date of Birth</label>
            <input
              type="date"
              name="driverDateOfBirth"
              value={formData.driverDateOfBirth || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Address</label>
            <input
              type="text"
              name="driverAddress"
              value={formData.driverAddress || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Street Address"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold mb-1">City</label>
              <input
                type="text"
                name="driverCity"
                value={formData.driverCity || ''}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">State</label>
              <input
                type="text"
                name="driverState"
                value={formData.driverState || ''}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">ZIP</label>
              <input
                type="text"
                name="driverZipCode"
                value={formData.driverZipCode || ''}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-blue-600">Contact Information</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Cell Phone</label>
            <input
              type="tel"
              name="driverCellPhone"
              value={formData.driverCellPhone || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Emergency Contact</label>
            <input
              type="tel"
              name="driverEmergencyNumber"
              value={formData.driverEmergencyNumber || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Emergency Number/Name"
            />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-blue-600">Certifications</h2>
        
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="driverUsCitizen"
              checked={formData.driverUsCitizen || false}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span>US Citizen</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="driverGreenCard"
              checked={formData.driverGreenCard || false}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span>Green Card</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="driverTwicTsa"
              checked={formData.driverTwicTsa || false}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span>TWIC or TSA</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="driverHazmatCertified"
              checked={formData.driverHazmatCertified || false}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span>HAZMAT Certified</span>
          </label>
        </div>
      </section>
    </div>
  );
};

export default DriverInfoPage;
```

---

## Step-by-Step Instructions to Update Your Pages

### Step 1: Find your page file
Example: `src/components/sections/DriverInfoPage.tsx`

### Step 2: Add imports at top
```tsx
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateFormData } from '@/store/formSlice';
import { AutoSaveStatus } from '@/components/ui/AutoSaveStatus';
```

### Step 3: Replace useState with Redux
BEFORE:
```tsx
const [formData, setFormData] = useState({ ... });
```

AFTER:
```tsx
const dispatch = useAppDispatch();
const formData = useAppSelector(state => state.form);
```

### Step 4: Update onChange handlers
BEFORE:
```tsx
setFormData(prev => ({ ...prev, [name]: value }));
```

AFTER:
```tsx
dispatch(updateFormData({ [name]: value }));
```

### Step 5: Add AutoSaveStatus component
```tsx
<AutoSaveStatus />
```

---

## That's All! 🎉

Each page only needs:
- 3 import lines
- 2 Redux hook lines
- Change `setFormData` to `dispatch(updateFormData())`
- Add `<AutoSaveStatus />`

That's it! Auto-save works automatically after that.

---

## Quick Checklist for Each Page

- [ ] Added 3 imports
- [ ] Replaced `useState` with `useAppDispatch` & `useAppSelector`
- [ ] Changed all `setFormData()` calls to `dispatch(updateFormData())`
- [ ] Added `<AutoSaveStatus />` component
- [ ] Changed `formData.fieldName` to use Redux data
- [ ] Used `formData.fieldName || ''` for default values
- [ ] Used `formData.fieldName || false` for checkboxes
- [ ] Tested by filling fields, refreshing page

---

## Pages to Update (Priority Order)

### High Priority (Core Forms)
1. DriverInfoPage ⭐
2. OwnerOperatorAgreement ⭐
3. CompanyInfoPage ⭐
4. VehicleInfoPage ⭐

### Medium Priority (Supporting Forms)
5. DirectDepositForm
6. CertificationForm
7. AxperForm

### Lower Priority (Info Pages)
8. HomePage
9. GeneralInfo
10. RequirementsInfo

---

## You Don't Need to Understand Everything

Just follow the pattern:
1. Import the 3 lines
2. Use Redux instead of useState
3. Use `dispatch(updateFormData())` instead of setState
4. Add the component

The complex auto-save logic is hidden behind the scenes!
