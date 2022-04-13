import { atom } from 'jotai';

export interface ChecklistStateType {
  status: string | null;
  message: string | null;
  error: any;
  stale: boolean;
  fetching: boolean;
  user: any;
  targetItem: any;
  inputContent: string;
  inputId: string;
  resetProps: {
    status: null;
    message: null;
    error: null;
    stale: false;
    targetItem: null;
    inputContent: '';
  };
}

export const checklistState = atom<ChecklistStateType>({
  status: null,
  message: null,
  error: null,
  stale: false,
  fetching: false,
  user: null,
  targetItem: null,
  inputContent: '',
  inputId: 'checklist-field',
  resetProps: {
    status: null,
    message: null,
    error: null,
    stale: false,
    targetItem: null,
    inputContent: '',
  },
});
