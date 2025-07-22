'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useAlert } from '@/context/AlertContext';

const LoginPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [sentOtp, setSentOtp] = useState<string>('');
  const [otpSent, setOtpSent] = useState<boolean>(false);

  const { login } = useAuth();
  const { alertMessage } = useAlert();
  const router = useRouter();

  const handleSendOtp = () => {
    if (phoneNumber) {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setSentOtp(generatedOtp);
      setOtpSent(true);
      alertMessage(`OTP sent to ${phoneNumber}: ${generatedOtp} (for demo purposes)`, 'info');
    } else {
      alertMessage('Please enter your phone number.', 'error');
    }
  };

  const handleVerifyOtp = () => {
    if (otp === sentOtp) {
      alertMessage('Login successful!', 'success');
      login({
        name: '', 
        email: '',  
        phone: phoneNumber 
    }); // You may define a proper User type in context
      setSentOtp('');
      router.push('/');
    } else {
      alertMessage('Invalid OTP. Please try again.', 'error');
    }
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-160px)] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('http://googleusercontent.com/file_content/4')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-md w-full bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-[#6b4f4f]">
            Log in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <a
              href="#"
              onClick={() =>
                alertMessage('Sign up functionality not implemented yet!', 'info')
              }
              className="font-medium text-[#d4b29c] hover:text-[#d4b29c]-dark"
            >
              create a new account
            </a>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={(e: FormEvent) => e.preventDefault()}>
          <div>
            <label htmlFor="phone-number" className="sr-only">
              Phone Number
            </label>
            <input
              id="phone-number"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={phoneNumber}
              onChange={handlePhoneChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-accent-peach focus:border-accent-peach focus:z-10 sm:text-sm transition duration-200 ease-in-out focus:shadow-md"
              placeholder="Phone Number (e.g., +1234567890)"
            />
          </div>

          {otpSent && (
            <div id="otp-section">
              <label htmlFor="otp" className="sr-only">
                OTP
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                inputMode="numeric"
                pattern="[0-9]{6}"
                required
                value={otp}
                onChange={handleOtpChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-accent-peach focus:border-accent-peach focus:z-10 sm:text-sm transition duration-200 ease-in-out focus:shadow-md"
                placeholder="Enter OTP"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#d4b29c] focus:ring-accent-peach border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
          </div>

          <div>
            {!otpSent ? (
              <button
                type="button"
                onClick={handleSendOtp}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#d4b29c] hover:bg-[#c2a08c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-peach transition duration-300 transform hover:scale-105"
              >
                Send OTP
              </button>
            ) : (
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 transform hover:scale-105 mt-4"
              >
                Verify OTP
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
