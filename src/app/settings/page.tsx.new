'use client';

import { Card } from '../components/shared';

export default function Page() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Manage your account and application preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Account Settings</h2>
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Profile Information</h3>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Notifications</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-blue-500" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Email Notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-blue-500" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Security Alerts</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-blue-500" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Usage Reports</span>
                </label>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Cloud Providers</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">AWS</span>
                  <span className="text-green-500">Connected</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Last synced: 5 minutes ago</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">Azure</span>
                  <span className="text-green-500">Connected</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Last synced: 10 minutes ago</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">Google Cloud</span>
                  <span className="text-green-500">Connected</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Last synced: 15 minutes ago</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Appearance</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Theme</h3>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="theme" className="form-radio text-blue-500" />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Light</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="theme" className="form-radio text-blue-500" checked />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Dark</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="theme" className="form-radio text-blue-500" />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">System</span>
                  </label>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
