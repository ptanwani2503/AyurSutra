import { useState } from 'react';

export default function AyurSutraPrototype() {
  const [currentPage, setCurrentPage] = useState('login');

  const therapiesGallery = [
    {
      title: 'Abhyanga Therapy',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
      description:
        'Traditional Ayurvedic oil massage therapy for relaxation and detoxification.',
    },
    {
      title: 'Shirodhara',
      image:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
      description:
        'Continuous pouring of herbal oil on the forehead to reduce stress and improve mental clarity.',
    },
    {
      title: 'Panchakarma Detox',
      image:
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
      description:
        'Complete Ayurvedic cleansing and rejuvenation therapy for body balance.',
    },
  ];

  const appointments = [
    {
      patient: 'Ananya Sharma',
      therapy: 'Abhyanga Therapy',
      therapist: 'Dr. Meera Joshi',
      time: '10:00 AM',
      status: 'Confirmed',
    },
    {
      patient: 'Rohit Verma',
      therapy: 'Shirodhara',
      therapist: 'Dr. Arjun Patel',
      time: '12:30 PM',
      status: 'Pending',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-100 font-sans">
      {currentPage === 'login' && (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-green-800">
                AyurSutra
              </h1>
              <p className="text-gray-500 mt-3">
                Panchakarma Patient Management System
              </p>
            </div>

            <div className="space-y-5">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3"
              />

              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3"
              />

              <button
                onClick={() => setCurrentPage('dashboard')}
                className="w-full bg-green-700 text-white py-3 rounded-2xl font-semibold"
              >
                Log In
              </button>

              <button
                onClick={() => setCurrentPage('about')}
                className="w-full bg-orange-500 text-white py-3 rounded-2xl font-semibold"
              >
                About AyurSutra
              </button>

              <button className="w-full border-2 border-green-700 text-green-700 py-3 rounded-2xl font-semibold">
                Create New Account
              </button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'about' && (
        <div className="min-h-screen p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-5xl font-bold text-green-800">
                  About AyurSutra
                </h1>
                <p className="text-gray-600 mt-2">
                  Smart Ayurvedic Panchakarma Management Platform
                </p>
              </div>

              <button
                onClick={() => setCurrentPage('login')}
                className="bg-green-700 text-white px-6 py-3 rounded-2xl"
              >
                Back
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100 mb-8">
              <h2 className="text-3xl font-semibold text-green-800 mb-4">
                Why AyurSutra?
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                AyurSutra is designed to modernize traditional Ayurvedic wellness management with smart digital technology. The platform helps doctors, therapists, and wellness centers manage Panchakarma therapies efficiently while maintaining personalized patient care.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                The software simplifies patient registration, digital health records, therapy scheduling, therapist management, medicine tracking, and automated reminders. AyurSutra creates a complete digital ecosystem for Ayurvedic wellness centers where both doctors and patients can experience smooth and organized healthcare management.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Panchakarma therapies require careful planning, proper therapist allocation, and continuous patient monitoring. AyurSutra uses smart AI-based suggestions to reduce scheduling conflicts, improve patient flow, and provide personalized therapy recommendations based on treatment history and wellness progress.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                  <h3 className="text-xl font-semibold text-orange-700 mb-2">
                    AI Scheduling
                  </h3>
                  <p className="text-sm text-gray-600">
                    Smart appointment allocation for therapies and therapist availability.
                  </p>
                </div>

                <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    Digital Records
                  </h3>
                  <p className="text-sm text-gray-600">
                    Secure patient health history and Panchakarma treatment tracking.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    Wellness Insights
                  </h3>
                  <p className="text-sm text-gray-600">
                    AI-powered suggestions and therapy progress monitoring.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-3xl p-6 border border-green-100">
                <h2 className="text-3xl font-semibold text-green-800 mb-4">
                  Panchakarma Therapies Included
                </h2>

                <div className="grid md:grid-cols-2 gap-5 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-700 mb-2">
                      Abhyanga Therapy
                    </h3>
                    <p className="text-sm leading-relaxed">
                      Full body Ayurvedic oil massage therapy that improves blood circulation, reduces stress, and rejuvenates muscles.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-2">
                      Shirodhara
                    </h3>
                    <p className="text-sm leading-relaxed">
                      Relaxing therapy involving continuous pouring of herbal oils on the forehead for mental peace and stress relief.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                      Nasya Therapy
                    </h3>
                    <p className="text-sm leading-relaxed">
                      Herbal nasal cleansing treatment used to improve breathing, sinus health, and mental clarity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">
                      Panchakarma Detox
                    </h3>
                    <p className="text-sm leading-relaxed">
                      Advanced detoxification process that removes toxins from the body and restores natural balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {therapiesGallery.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-5">
                    <h2 className="text-2xl font-semibold text-orange-700">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentPage === 'dashboard' && (
        <div className="p-6">
          <div className="bg-white shadow-xl rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-green-800">
                AyurSutra Dashboard
              </h1>
              <p className="text-gray-500 mt-1">
                Panchakarma Therapy Scheduling
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('login')}
              className="bg-orange-500 text-white px-5 py-2 rounded-2xl"
            >
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
            <div className="bg-white rounded-3xl shadow-lg p-5">
              <h2 className="text-gray-500 text-sm">Total Patients</h2>
              <p className="text-3xl font-bold text-green-700 mt-2">248</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-5">
              <h2 className="text-gray-500 text-sm">Today's Therapies</h2>
              <p className="text-3xl font-bold text-orange-500 mt-2">34</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-5 hover:scale-105 transition-all duration-300">
              <h2 className="text-gray-500 text-sm">Available Doctors</h2>
              <p className="text-3xl font-bold text-blue-600 mt-2">12</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-5 hover:scale-105 transition-all duration-300">
              <h2 className="text-gray-500 text-sm">Pending Appointments</h2>
              <p className="text-3xl font-bold text-red-500 mt-2">08</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6 overflow-x-auto">
            <h2 className="text-2xl font-semibold text-green-800 mb-5">
              Therapy Schedule
            </h2>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-green-100 text-green-900">
                  <th className="p-3">Patient</th>
                  <th className="p-3">Therapy</th>
                  <th className="p-3">Therapist</th>
                  <th className="p-3">Time</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{item.patient}</td>
                    <td className="p-3">{item.therapy}</td>
                    <td className="p-3">{item.therapist}</td>
                    <td className="p-3">{item.time}</td>
                    <td className="p-3">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-xl p-6 border border-green-100">
                <h2 className="text-2xl font-semibold text-green-800 mb-4">
                  Therapy Rooms
                </h2>

                <div className="space-y-4">
                  <div className="bg-orange-50 rounded-2xl p-4">
                    <h3 className="font-semibold text-orange-700">
                      Abhyanga Room
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Room 01 • Available
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-4">
                    <h3 className="font-semibold text-green-700">
                      Shirodhara Room
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Room 02 • Occupied
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-4">
                    <h3 className="font-semibold text-blue-700">
                      Detox Therapy Room
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Room 03 • Cleaning in Progress
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-700 to-green-900 text-white rounded-3xl shadow-xl p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Daily Wellness Analytics
                </h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Patient Satisfaction</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-[92%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Therapy Completion</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  AI Suggestions
                </h2>

                <ul className="space-y-3 text-sm leading-relaxed">
                  <li>✔ Suggest low-rush therapy slots</li>
                  <li>✔ Detect repeat detox therapy pattern</li>
                  <li>✔ Send automated patient reminders</li>
                  <li>✔ Improve therapist scheduling efficiency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

