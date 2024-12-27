import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import Layout from '../components/Layout';
import { DashBoardCSS, DashBoardSpan } from '../components/styles';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {user?.email}!
            </h1>
            <p className="mt-4 text-gray-600">
              Get started by creating a new form or viewing your existing forms.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/forms/create')}
                className={`${DashBoardCSS}`}
              >
                <span className={`${DashBoardSpan}`}>
                  Create new form
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/forms')}
                className={`${DashBoardCSS}`}

              >
                <span className={`${DashBoardSpan}`}>
                  View all forms
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}