interface AddFieldButtonProps {
    onAdd: (type: string) => void;
  }
  
  export default function AddFieldButton({ onAdd }: AddFieldButtonProps) {
    return (
      <div className="space-y-4">
        <button
          onClick={() => onAdd('text')}
          className="btn-primary w-full"
        >
          Add Text Field
        </button>
        <button
          onClick={() => onAdd('number')}
          className="btn-primary w-full"
        >
          Add Number Field
        </button>
        <button
          onClick={() => onAdd('email')}
          className="btn-primary w-full"
        >
          Add Email Field
        </button>
        <button
          onClick={() => onAdd('checkbox')}
          className="btn-primary w-full"
        >
          Add Checkbox Field
        </button>
      </div>
    );
  }
  