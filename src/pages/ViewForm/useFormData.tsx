import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from '../../types';
import useAuthStore from '../../store/authStore';

interface UseFormDataResult {
  form: Form | null;
  loading: boolean;
  error: string | null;
}

export function useFormData(id: string): UseFormDataResult {
  const [form, setForm] = useState<Form | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
    const {token} = useAuthStore.getState();
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/forms/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        setForm(response.data);
      } catch (err) {
        setError('Failed to load form data');
      } finally {
        setLoading(false);
      }
    };

    fetchFormData();
  }, [id]);

  return { form, loading, error };
}
