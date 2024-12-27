import { useState } from 'react';
import axios from 'axios';
import useAuthStore from '../../store/authStore';
import { BASE_URL } from '../../api';

interface FormField {
  name: string;
  type: string;
  label: string;
}

interface CreateFormParams {
  title: string;
  fields: FormField[];
}

export function useCreateForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = useAuthStore((state) => state.token);

  const createForm = async ({ title, fields }: CreateFormParams): Promise<boolean> => {
    setLoading(true);
    setError(null);
    console.log("The token is",token)
    try {
      const response = await axios.post(
        `${BASE_URL}/api/forms`, 
        { title, fields },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLoading(false);

      if (response.status === 201) {
        return true;
      } else {
        setError('Failed to create form');
        return false;
      }
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.message || 'An error occurred while creating the form');
      return false;
    }
  };

  return { createForm, loading, error };
}
