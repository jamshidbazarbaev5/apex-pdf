import React, { useCallback } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { clearFormData } from '@/store/formSlice';
import { clearFormDraft } from '@/lib/localStorage';

export const ClearDataButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClearAllData = useCallback(() => {
    if (window.confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      // Clear draft from localStorage
      clearFormDraft();
      // Reset form state
      dispatch(clearFormData());
    }
  }, [dispatch]);

  return (
    <button
      onClick={handleClearAllData}
      className="fixed top-4 right-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors z-50 text-sm"
      title="Clear all form data and drafts"
    >
      Clear All Data
    </button>
  );
};
