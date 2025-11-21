import { createListenerMiddleware } from '@reduxjs/toolkit';
import { updateFormData, setFormData } from '../formSlice';
import { saveFormToDraft } from '../../lib/localStorage';

export const listenerMiddleware = createListenerMiddleware();

// Save to localStorage whenever form data is updated
listenerMiddleware.startListening({
  actionCreator: updateFormData,
  effect: (_action, listenerApi) => {
    const state = listenerApi.getState() as any;
    saveFormToDraft(state.form);
  },
});

// Save to localStorage when form data is set
listenerMiddleware.startListening({
  actionCreator: setFormData,
  effect: (_action, listenerApi) => {
    const state = listenerApi.getState() as any;
    saveFormToDraft(state.form);
  },
});
