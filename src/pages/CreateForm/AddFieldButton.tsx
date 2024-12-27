import { CreateFormCSS } from "../../components/styles";

interface AddFieldButtonProps {
    onAdd: (type: string) => void;
  }
  
  export default function AddFieldButton({ onAdd }: AddFieldButtonProps) {
    return (
      <div className="space-y-4">
        <button
          onClick={() => onAdd('text')}
          className={`${CreateFormCSS}`}
        >
          Add Text Field
        </button>
        <button
          onClick={() => onAdd('number')}
          className={`${CreateFormCSS}`}
        >
          Add Number Field
        </button>
        <button
          onClick={() => onAdd('email')}
          className={`${CreateFormCSS}`}
        >
          Add Email Field
        </button>
        <button
          onClick={() => onAdd('checkbox')}
          className={`${CreateFormCSS}`}
        >
          Add Checkbox Field
        </button>
      </div>
    );
  }
  