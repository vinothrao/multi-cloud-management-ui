'use client';

import { Card } from '../components/shared';

export default function Page() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Resource Monitoring</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Monitor performance and health across your cloud resources
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Overall Health</h3>
          <p className="text-3xl font-bold text-green-500">98%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">All systems operational</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Active Alerts</h3>
          <p className="text-3xl font-bold text-yellow-500">3</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">2 warning, 1 critical</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Resources</h3>
          <p className="text-3xl font-bold text-blue-500">142</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Across all providers</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Uptime</h3>
          <p className="text-3xl font-bold text-green-500">99.9%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Last 30 days</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">CPU Utilization</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900 dark:text-white">AWS EC2 Fleet</span>
                <span className="text-yellow-500">75%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900 dark:text-white">Azure VMs</span>
                <span className="text-green-500">45%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900 dark:text-white">GCP Instances</span>
                <span className="text-green-500">60%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Memory Usage</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900 dark:text-white">AWS EC2 Fleet</span>
                <span className="text-green-500">65%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900 dark:text-white">Azure VMs</span>
                <span className="text-red-500">85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900 dark:text-white">GCP Instances</span>
                <span className="text-green-500">55%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{width: '55%'}}></div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Alerts</h2>
        <div className="space-y-4">
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              <div>
                <p className="font-medium text-red-700 dark:text-red-400">High Memory Usage - Azure VM-01</p>
                <p className="text-sm text-red-600 dark:text-red-300">Memory usage exceeded 85% threshold</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">2 hours ago</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <div>
                <p className="font-medium text-yellow-700 dark:text-yellow-400">High CPU Usage - AWS EC2</p>
                <p className="text-sm text-yellow-600 dark:text-yellow-300">CPU utilization above 75% for 30 minutes</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">4 hours ago</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <div>
                <p className="font-medium text-yellow-700 dark:text-yellow-400">Storage Warning - GCP Bucket</p>
                <p className="text-sm text-yellow-600 dark:text-yellow-300">Storage usage approaching 80% capacity</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">6 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
