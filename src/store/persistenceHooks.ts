import { useCallback, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { clearFormData } from './formSlice';
import {
  clearFormDraft,
  getLastSavedTime,
  hasDraft,
  getDraftMetadata,
} from '../lib/localStorage';

/**
 * Hook for managing form persistence
 */
export const useFormPersistence = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.form);
  const [lastSavedTime, setLastSavedTime] = useState<Date | null>(null);

  // Update last saved time
  useEffect(() => {
    const savedTime = getLastSavedTime();
    if (savedTime) {
      setLastSavedTime(new Date(savedTime));
    }
  }, [formData]);

  // Clear draft and reset form
  const handleClearDraft = useCallback(() => {
    clearFormDraft();
    dispatch(clearFormData());
  }, [dispatch]);

  // Get draft info
  const getDraftInfo = useCallback(() => {
    return {
      hasDraft: hasDraft(),
      metadata: getDraftMetadata(),
    };
  }, []);

  // Get last saved display text
  const getLastSavedText = useCallback((): string => {
    if (!lastSavedTime) return 'No auto-save yet';

    const now = new Date();
    const diffMs = now.getTime() - lastSavedTime.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffSecs = Math.floor((diffMs % 60000) / 1000);

    if (diffMins === 0) {
      return diffSecs === 0 ? 'Just saved' : `Saved ${diffSecs}s ago`;
    }
    return `Saved ${diffMins}m ago`;
  }, [lastSavedTime]);

  return {
    formData,
    lastSavedTime,
    handleClearDraft,
    getDraftInfo,
    getLastSavedText,
    hasDraft: hasDraft(),
  };
};

/**
 * Hook to show save status indicator
 */
export const useSaveStatus = () => {
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const showSaveIndicator = useCallback(async (duration = 2000) => {
    setSaveStatus('saving');
    await new Promise((resolve) => setTimeout(resolve, 100));
    setSaveStatus('saved');
    await new Promise((resolve) => setTimeout(resolve, duration));
    setSaveStatus('idle');
  }, []);

  return { saveStatus, showSaveIndicator };
};
