// Attributes of Form Field from API
export interface FormFieldType {
  label: string;
  type: string;
  value: string | number;
  default: string | number | boolean;
  isOptional: boolean;
  isHidden: boolean;
}

// Form Reducer State Type
export interface FormStateType {
  fields: FormFieldType[];
}

// Form Action Type
type SetFieldsAction = {
  type: string;
  fields: FormFieldType[];
};

export type FormActions = SetFieldsAction;
