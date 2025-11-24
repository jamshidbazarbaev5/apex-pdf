import { configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from './middleware/persistenceMiddleware';
import formReducer from './formSlice';
import { loadFormFromDraft, isLocalStorageAvailable } from '../lib/localStorage';
import type { FormData } from './formSlice';

// Load initial state from localStorage
const preloadedState = (() => {
  if (!isLocalStorageAvailable()) {
    return undefined;
  }

  const savedForm = loadFormFromDraft();
  if (savedForm) {
    // Ensure companySignature has correct path with base prefix
    // Fix old paths that don't include /application/
    let companySignature = savedForm.companySignature;
    if (companySignature === "/sign.png" || companySignature === "sign.png") {
      companySignature = "/application/sign.png";
    } else if (!companySignature) {
      companySignature = "/application/sign.png";
    }
    
    const mergedForm = {
      ...savedForm,
      companySignature,
    } as FormData;
    return {
      form: mergedForm,
    };
  }
  return undefined;
})();

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
