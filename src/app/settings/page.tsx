'use client'

import { useAlert } from '@/context/AlertContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect, FormEvent } from 'react';

const SettingsPage: React.FC = () => {
  const { alertMessage } = useAlert();
  const { user, logout, isLoggedIn } = useAuth();
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  useEffect(() => {
    if (!isLoggedIn) {
      // router.push('/login'); // Redirect to login if not logged in
    } else if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setPhone(user.phone || '');
    }
  }, [isLoggedIn, user, router]);

  const handleProfileSave = (event: FormEvent) => {
    event.preventDefault();
    alertMessage('Profile updated! (Dummy save)', 'success');
    // In a real app, you'd send this data to a backend
  };

  const handleChangePassword = (event: FormEvent) => {
    event.preventDefault();
    alertMessage('Password changed! (Dummy save)', 'success');
    // In a real app, you'd send this data to a backend
  };

  const handleLogout = () => {
    logout();
    alertMessage('Logged out! (Dummy logout)', 'info');
    router.push('/');
  };

  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-160px)] bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-[#6b4f4f] text-center mb-8">Account Settings</h2>
        <div className="space-y-6">
          {/* Profile Information */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#6b4f4f] mb-4">Profile Information</h3>
            <form className="space-y-4" onSubmit={handleProfileSave}>
              <div>
                <label htmlFor="setting-name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="setting-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent-peach focus:border-accent-peach sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="setting-email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="setting-email"
                  value={email}
                  disabled
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 cursor-not-allowed sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="setting-phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="setting-phone"
                  value={phone}
                  disabled
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 cursor-not-allowed sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-[#d4b29c] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#c2a08c] transition duration-300 font-semibold"
              >
                Save Profile
              </button>
            </form>
          </div>

          {/* Logout Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-red-600 transition duration-300 font-semibold text-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
