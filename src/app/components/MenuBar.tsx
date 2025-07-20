import React from 'react';
import Link from 'next/link';

interface MenuItem {
  icon: string;
  label: string;
  path: string;
  notification?: number;
}

const menuItems: MenuItem[] = [
  {
    icon: '📊',
    label: 'Overview',
    path: '/',
  },
  {
    icon: '⚙️',
    label: 'Services',
    path: '/services',
    notification: 3,
  },
  {
    icon: '💰',
    label: 'Cost',
    path: '/cost',
  },
  {
    icon: '📈',
    label: 'Monitoring',
    path: '/monitoring',
    notification: 2,
  },
  {
    icon: '🔒',
    label: 'Security',
    path: '/security',
  },
  {
    icon: '⚡',
    label: 'Resources',
    path: '/resources',
  },
];

export default function MenuBar() {
  return (
    <div className="fixed top-0 left-64 right-0 bg-white dark:bg-[#171717] border-b border-gray-200 dark:border-gray-800 z-10">
      <div className="h-16 flex items-center px-4 justify-between">
        {/* Left side - Navigation Menu */}
        <nav className="flex space-x-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="relative px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span>{item.icon}</span>
                {item.label}
                {item.notification && (
                  <span className="absolute top-1 right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {item.notification}
                  </span>
                )}
              </span>
            </Link>
          ))}
        </nav>

        {/* Right side - User Menu */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            🔍
          </button>
          
          {/* Notifications */}
          <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative">
            🔔
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          
          {/* Settings */}
          <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            ⚙️
          </button>
          
          {/* User Profile */}
          <button className="flex items-center space-x-2 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            👤
          </button>
        </div>
      </div>

      {/* Secondary Navigation (if needed) */}
      <div className="h-12 flex items-center px-4 bg-gray-50 dark:bg-[#1a1a1a] border-t border-gray-200 dark:border-gray-800">
        <div className="flex space-x-4">
          <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Quick Actions
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Recent Items
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Favorites
          </button>
        </div>
      </div>
    </div>
  );
}
