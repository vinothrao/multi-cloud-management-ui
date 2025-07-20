import Link from 'next/link';

interface SidebarProps {
  currentPath: string;
}

const navigationItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Cost Management', path: '/cost' },
  { name: 'Monitoring', path: '/monitoring' },
  { name: 'Security', path: '/security' },
  { name: 'Settings', path: '/settings' },
];

const cloudProviders = [
  { name: 'AWS', path: '/dashboard/aws' },
  { name: 'Azure', path: '/dashboard/azure' },
  { name: 'GCP', path: '/dashboard/gcp' },
];

export default function Sidebar({ currentPath }: SidebarProps) {
  return (
    <aside className="w-64 bg-white dark:bg-[#171717] border-r border-gray-200 dark:border-gray-800 flex flex-col py-6 px-4 h-screen fixed">
      <div className="mb-8">
        <Link href="/" className="text-2xl font-bold text-blue-600">MultiCloud Portal</Link>
      </div>
      
      {/* Main Navigation */}
      <nav className="flex flex-col gap-2">
        {navigationItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`rounded px-3 py-2 transition-colors font-medium ${
              currentPath === item.path
                ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                : 'hover:bg-gray-50 dark:hover:bg-[#222]'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Cloud Providers Section */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-3 mb-2">
          CLOUD PROVIDERS
        </h3>
        <nav className="flex flex-col gap-2">
          {cloudProviders.map((provider) => (
            <Link
              key={provider.path}
              href={provider.path}
              className={`rounded px-3 py-2 transition-colors font-medium ${
                currentPath === provider.path
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                  : 'hover:bg-gray-50 dark:hover:bg-[#222]'
              }`}
            >
              {provider.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Logout Button */}
      <div className="mt-auto pt-8">
        <Link
          href="/auth/login"
          className="block rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors text-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm h-10 px-4 flex items-center justify-center"
        >
          Logout
        </Link>
      </div>
    </aside>
  );
}
