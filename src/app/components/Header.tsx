interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="h-16 flex items-center px-8 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#171717] fixed top-0 right-0 left-64">
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
