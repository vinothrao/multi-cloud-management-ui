'use client';

import { Card } from '../components/shared';

export default function Page() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Security Overview</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Monitor and manage security across your cloud infrastructure
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Security Score</h3>
          <p className="text-3xl font-bold text-green-500">92%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Good security posture</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Active Threats</h3>
          <p className="text-3xl font-bold text-red-500">2</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Requires attention</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Compliance</h3>
          <p className="text-3xl font-bold text-blue-500">98%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Standards met</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Resources</h3>
          <p className="text-3xl font-bold text-green-500">156</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Being monitored</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Compliance Status</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-white">GDPR</span>
                <span className="text-green-500">Compliant</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Last audit: 2 days ago</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-white">HIPAA</span>
                <span className="text-green-500">Compliant</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Last audit: 5 days ago</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-white">SOC 2</span>
                <span className="text-yellow-500">In Progress</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Audit scheduled</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Security Checks</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-white">Access Control</span>
                <span className="text-green-500">Secure</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">All policies up to date</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-white">Encryption</span>
                <span className="text-green-500">Enabled</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">At rest and in transit</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-white">Firewall Rules</span>
                <span className="text-yellow-500">Review Needed</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Last update: 30 days ago</p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Security Incidents</h2>
        <div className="space-y-4">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              <div>
                <p className="font-medium text-red-700 dark:text-red-400">Unauthorized Access Attempt</p>
                <p className="text-sm text-red-600 dark:text-red-300">Multiple failed login attempts detected</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">1 hour ago</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <div>
                <p className="font-medium text-yellow-700 dark:text-yellow-400">SSL Certificate Expiring</p>
                <p className="text-sm text-yellow-600 dark:text-yellow-300">Certificate will expire in 15 days</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">12 hours ago</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <div>
                <p className="font-medium text-blue-700 dark:text-blue-400">Security Update Available</p>
                <p className="text-sm text-blue-600 dark:text-blue-300">New security patches ready for installation</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
