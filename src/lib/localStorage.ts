/**
 * localStorage Utility Module
 * Handles saving and loading form data from browser's localStorage
 */

const STORAGE_KEY = 'apex_form_draft';
const BACKUP_KEY = 'apex_form_draft_backup';
const LAST_SAVED_KEY = 'apex_form_last_saved';

interface StorageData {
  data: Record<string, any>;
  timestamp: number;
  version: string;
}

/**
 * Save form data to localStorage
 */
export const saveFormToDraft = (formData: Record<string, any>): void => {
  try {
    const storageData: StorageData = {
      data: formData,
      timestamp: Date.now(),
      version: '1.0',
    };

    // Save to primary storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));

    // Save backup (in case primary gets corrupted)
    localStorage.setItem(BACKUP_KEY, JSON.stringify(storageData));

    // Update last saved timestamp
    localStorage.setItem(LAST_SAVED_KEY, Date.now().toString());
  } catch (error) {
    console.error('Failed to save form draft to localStorage:', error);
    // Notify user if storage quota exceeded
    if (error instanceof DOMException && error.code === 22) {
      console.warn('localStorage quota exceeded');
    }
  }
};

/**
 * Load form data from localStorage
 */
export const loadFormFromDraft = (): Record<string, any> | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      // Try backup if primary is missing
      const backup = localStorage.getItem(BACKUP_KEY);
      if (backup) {
        const parsedBackup: StorageData = JSON.parse(backup);
        return parsedBackup.data;
      }
      return null;
    }

    const storageData: StorageData = JSON.parse(stored);
    return storageData.data;
  } catch (error) {
    console.error('Failed to load form draft from localStorage:', error);
    return null;
  }
};

/**
 * Clear form draft from localStorage
 */
export const clearFormDraft = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(BACKUP_KEY);
    localStorage.removeItem(LAST_SAVED_KEY);
  } catch (error) {
    console.error('Failed to clear form draft from localStorage:', error);
  }
};

/**
 * Get the timestamp of last saved data
 */
export const getLastSavedTime = (): number | null => {
  try {
    const timestamp = localStorage.getItem(LAST_SAVED_KEY);
    return timestamp ? parseInt(timestamp, 10) : null;
  } catch (error) {
    console.error('Failed to get last saved time:', error);
    return null;
  }
};

/**
 * Check if there's a draft available
 */
export const hasDraft = (): boolean => {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch (error) {
    console.error('Failed to check for draft:', error);
    return false;
  }
};

/**
 * Get draft metadata (size, last saved time)
 */
export const getDraftMetadata = (): { size: number; lastSaved: Date | null } => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const size = stored ? new Blob([stored]).size : 0;
    const lastSaved = getLastSavedTime();

    return {
      size,
      lastSaved: lastSaved ? new Date(lastSaved) : null,
    };
  } catch (error) {
    console.error('Failed to get draft metadata:', error);
    return { size: 0, lastSaved: null };
  }
};

/**
 * Check localStorage availability
 */
export const isLocalStorageAvailable = (): boolean => {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
};
