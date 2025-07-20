'use client';

import { Card } from '../components/shared';
import { useEffect, useState } from 'react';

type ServiceItem = {
  name: string;
  status: string;
  count: string;
  statusColor: string;
};

type ResourceSummary = {
  category: string;
  items: ServiceItem[];
};

const initialData: ResourceSummary[] = [
  {
    category: 'Compute Services',
    items: [
      { name: 'AWS EC2 Instances', status: 'Loading...', count: '...', statusColor: 'gray' },
      { name: 'Azure VMs', status: 'Loading...', count: '...', statusColor: 'gray' },
      { name: 'GCP Compute Engine', status: 'Loading...', count: '...', statusColor: 'gray' }
    ]
  },
  {
    category: 'Storage Services',
    items: [
      { name: 'S3 Buckets', status: 'Loading...', count: '...', statusColor: 'gray' },
      { name: 'Azure Blob Storage', status: 'Loading...', count: '...', statusColor: 'gray' },
      { name: 'GCP Cloud Storage', status: 'Loading...', count: '...', statusColor: 'gray' }
    ]
  },
  {
    category: 'Database Services',
    items: [
      { name: 'RDS Instances', status: 'Loading...', count: '...', statusColor: 'gray' },
      { name: 'Azure SQL', status: 'Loading...', count: '...', statusColor: 'gray' },
      { name: 'Cloud SQL', status: 'Loading...', count: '...', statusColor: 'gray' }
    ]
  }
];

async function fetchResourceSummary(): Promise<ResourceSummary[]> {
  try {
    const response = await fetch('/api/services/summary');
    if (!response.ok) {
      throw new Error('Failed to fetch resource summary');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching resource summary:', error);
    return initialData;
  }
}

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState<ResourceSummary[]>(initialData);

  useEffect(() => {
    async function loadServices() {
      setIsLoading(true);
      try {
        const data = await fetchResourceSummary();
        setServices(data);
      } catch (error) {
        console.error('Failed to load services:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadServices();
  }, []);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Services Overview</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Manage your cloud services across providers
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.category}>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {service.category}
            </h2>
            <div className="space-y-4">
              {service.items.map((item) => (
                <div 
                  key={item.name}
                  className={`p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${isLoading ? 'opacity-50' : ''}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </span>
                    <span className={`text-${item.statusColor}-500`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {item.count}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
