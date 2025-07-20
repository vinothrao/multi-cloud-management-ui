import Link from "next/link";
import { Card, StatCard } from "./components/shared";

export default function Page() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Welcome to the Multi-Cloud Management Portal</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Manage your AWS, Azure, and GCP resources from a single dashboard.
        </p>
      </div>

      {/* Cloud Provider Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* AWS Overview */}
        <Card>
          <h3 className="text-lg font-semibold mb-4">AWS Resources</h3>
          <div className="space-y-3">
            <p className="text-gray-600 dark:text-gray-300">
              Manage your AWS resources efficiently.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-green-500">●</span> 12 Services Active
            </div>
            <Link href="/services" className="text-blue-600 hover:underline block mt-4">
              View Resources →
            </Link>
          </div>
        </Card>

        {/* Azure Overview */}
        <Card>
          <h3 className="text-lg font-semibold mb-4">Azure Resources</h3>
          <div className="space-y-3">
            <p className="text-gray-600 dark:text-gray-300">
              Monitor your Azure cloud infrastructure.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-green-500">●</span> 8 Services Active
            </div>
            <Link href="/services" className="text-blue-600 hover:underline block mt-4">
              View Resources →
            </Link>
          </div>
        </Card>

        {/* GCP Overview */}
        <Card>
          <h3 className="text-lg font-semibold mb-4">GCP Resources</h3>
          <div className="space-y-3">
            <p className="text-gray-600 dark:text-gray-300">
              Optimize your Google Cloud Platform.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-green-500">●</span> 6 Services Active
            </div>
            <Link href="/services" className="text-blue-600 hover:underline block mt-4">
              View Resources →
            </Link>
          </div>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Resources" value="54" />
        <StatCard label="Active Services" value="25" />
        <StatCard label="Monthly Cost" value="$12,450" />
        <StatCard 
          label="Active Alerts" 
          value="3" 
          className="text-yellow-500" 
        />
      </div>
         

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link 
          href="/cost" 
          className="bg-white dark:bg-[#171717] border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-colors group"
        >
          <h3 className="font-semibold mb-2 group-hover:text-blue-600">Cost Management</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Track and optimize cloud spending</p>
        </Link>
        <Link 
          href="/monitoring" 
          className="bg-white dark:bg-[#171717] border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-colors group"
        >
          <h3 className="font-semibold mb-2 group-hover:text-blue-600">Monitoring</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">View resource performance</p>
        </Link>
        <Link 
          href="/security" 
          className="bg-white dark:bg-[#171717] border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-colors group"
        >
          <h3 className="font-semibold mb-2 group-hover:text-blue-600">Security</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Manage security settings</p>
        </Link>
        <Link 
          href="/settings" 
          className="bg-white dark:bg-[#171717] border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-colors group"
        >
          <h3 className="font-semibold mb-2 group-hover:text-blue-600">Settings</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Configure your preferences</p>
        </Link>
      </div>
    </div>
  );
}
