interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
      <header className="h-16 flex items-center px-8 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#171717]">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
          )}
        </div>
      </header>
      
      <main className="p-8">
        {children}
      </main>
    </div>
  );
}
