import React from 'react';
import { FormField } from '../../types';

interface FieldEditorProps {
  field: FormField;
  onChange: (field: FormField) => void;
  onRemove: () => void;
}

export default function FieldEditor({ field, onChange, onRemove }: FieldEditorProps) {
  const handleChange = (key: string, value: string | boolean) => {
    onChange({
      ...field,
      [key]: value,
    });
  };

  return (
    <div className="border rounded p-4 space-y-4">
      <input
        type="text"
        value={field.label}
        onChange={(e) => handleChange('label', e.target.value)}
        placeholder="Field Label"
        className="input-field w-full"
      />

      <input
        type="text"
        value={field.name}
        onChange={(e) => handleChange('name', e.target.value)}
        placeholder="Field Name"
        className="input-field w-full"
      />

      <select
        value={field.type}
        onChange={(e) => handleChange('type', e.target.value)}
        className="input-field w-full"
      >
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="email">Email</option>
        <option value="checkbox">Checkbox</option>
      </select>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={field.validation.required}
          onChange={(e) => handleChange('validation', { required: e.target.checked })}
        />
        <label>Required</label>
      </div>

      <button onClick={onRemove} className="btn-danger">
        Remove Field
      </button>
    </div>
  );
}
