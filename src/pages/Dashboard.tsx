import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import Layout from '../components/Layout';
import { PlusCircle, FileText } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg bg-opacity-90"
            >
              <div className="px-8 py-10">
                <motion.h1 
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Welcome back, {user?.email?.split('@')[0]}!
                </motion.h1>
                <motion.p 
                  className="mt-4 text-lg text-gray-600"
                  variants={itemVariants}
                >
                  Create and manage your forms with ease
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/forms/create')}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white shadow-lg transition-all duration-300"
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  <PlusCircle size={48} className="mb-4" />
                  <span className="text-xl font-semibold">Create new form</span>
                  <p className="mt-2 text-blue-100">Start building your custom form</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/forms')}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white shadow-lg transition-all duration-300"
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  <FileText size={48} className="mb-4" />
                  <span className="text-xl font-semibold">View all forms</span>
                  <p className="mt-2 text-purple-100">Manage your existing forms</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}