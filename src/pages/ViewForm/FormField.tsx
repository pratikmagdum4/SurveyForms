import { FC } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface FormFieldProps {
  field: {
    type: string;
    label: string;
    name: string;
    validation?: {
      required?: boolean;
    };
  };
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const FormField: FC<FormFieldProps> = ({ field, register, error }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {field.label}
      </label>
      <input
        {...register}
        type={field.type}
        name={field.name}
        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default FormField;
