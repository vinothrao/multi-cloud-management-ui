import React from 'react';

const CostPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Cost Management & Billing</h1>

      {/* Cost Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total Cost (MTD)</h3>
          <p className="text-3xl font-bold text-blue-600">$12,450.32</p>
          <p className="text-sm text-gray-500 mt-2">↑ 15% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Forecasted (EOD)</h3>
          <p className="text-3xl font-bold text-green-600">$15,780.00</p>
          <p className="text-sm text-gray-500 mt-2">Based on current usage</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Budget Status</h3>
          <p className="text-3xl font-bold text-yellow-600">82%</p>
          <p className="text-sm text-gray-500 mt-2">Of monthly budget used</p>
        </div>
      </div>

      {/* Cost by Provider */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Cost by Cloud Provider</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">AWS</span>
              <span className="text-blue-600 font-semibold">$5,840.21</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
            </div>
          </div>
          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Azure</span>
              <span className="text-blue-600 font-semibold">$4,210.11</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '32%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">GCP</span>
              <span className="text-blue-600 font-semibold">$2,400.00</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '23%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Expenses */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Top Expenses</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">AWS EC2 Instances</p>
                <p className="text-sm text-gray-600">Compute Services</p>
              </div>
              <span className="text-red-500 font-semibold">$3,240.50</span>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Azure SQL Databases</p>
                <p className="text-sm text-gray-600">Database Services</p>
              </div>
              <span className="text-red-500 font-semibold">$2,150.30</span>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">GCP Cloud Storage</p>
                <p className="text-sm text-gray-600">Storage Services</p>
              </div>
              <span className="text-red-500 font-semibold">$1,890.20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostPage;
