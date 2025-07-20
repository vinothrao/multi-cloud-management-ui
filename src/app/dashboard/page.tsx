import React from 'react';
import Link from 'next/link';

const cloudProviders = [
  { name: 'AWS', icon: '/public/aws.svg' },
  { name: 'Azure', icon: '/public/azure.svg' },
  { name: 'GCP', icon: '/public/gcp.svg' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-gray-800">Multi-Cloud Management</h1>
        <div className="flex gap-4">
          {cloudProviders.map((provider) => (
            <button
              key={provider.name}
              className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded hover:bg-blue-200"
            >
              {/* You can add provider icons here */}
              <span>{provider.name}</span>
            </button>
          ))}
        </div>
      </nav>
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cloudProviders.map((provider) => (
            <div
              key={provider.name}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Placeholder for provider icon */}
                <span className="text-xl font-semibold">{provider.name[0]}</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">{provider.name}</h2>
              <p className="text-gray-500">Manage resources and view status</p>
              <Link href={`/${provider.name.toLowerCase()}`}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Go to {provider.name}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
