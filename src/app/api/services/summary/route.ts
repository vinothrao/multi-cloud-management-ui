import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // TODO: Implement actual API calls to cloud providers
    // This is mock data for now
    const data = [
      {
        category: 'Compute Services',
        items: [
          { name: 'AWS EC2 Instances', status: 'Running', count: '12 instances active', statusColor: 'green' },
          { name: 'Azure VMs', status: 'Running', count: '8 instances active', statusColor: 'green' },
          { name: 'GCP Compute Engine', status: 'Running', count: '5 instances active', statusColor: 'green' }
        ]
      },
      {
        category: 'Storage Services',
        items: [
          { name: 'S3 Buckets', status: 'Available', count: '15 buckets', statusColor: 'blue' },
          { name: 'Azure Blob Storage', status: 'Available', count: '10 containers', statusColor: 'blue' },
          { name: 'GCP Cloud Storage', status: 'Available', count: '8 buckets', statusColor: 'blue' }
        ]
      },
      {
        category: 'Database Services',
        items: [
          { name: 'RDS Instances', status: 'Healthy', count: '6 databases', statusColor: 'green' },
          { name: 'Azure SQL', status: 'Healthy', count: '4 databases', statusColor: 'green' },
          { name: 'Cloud SQL', status: 'Healthy', count: '3 databases', statusColor: 'green' }
        ]
      }
    ];

    // Simulate a small delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching resource summary:', error);
    return NextResponse.json(
      { error: 'Failed to fetch resource summary' },
      { status: 500 }
    );
  }
}
