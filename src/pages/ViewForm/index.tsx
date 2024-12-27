import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import FormRenderer from './FormRenderer';
import { useFormData } from './useFormData';

const ViewForm = () => {
  const { id } = useParams<{ id: string }>();
  const { form, loading, error } = useFormData(id!);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex space-x-4">
          <div className="w-12 h-12 rounded-full bg-blue-400"></div>
          <div className="space-y-4">
            <div className="h-4 bg-blue-400 rounded w-36"></div>
            <div className="h-4 bg-blue-400 rounded w-24"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-red-50 p-8 rounded-lg shadow-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800">Error Loading Form</h3>
              <div className="mt-2 text-red-700">{error}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!form) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-yellow-50 p-8 rounded-lg shadow-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800">Form Not Found</h3>
              <div className="mt-2 text-yellow-700">The requested form could not be found.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="border-b border-gray-200 pb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                  {form.title}
                </h1>
              </div>
              <div className="mt-8">
                <FormRenderer 
                  form={form} 
                  className="space-y-6" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewForm;