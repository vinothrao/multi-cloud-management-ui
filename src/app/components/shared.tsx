interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white dark:bg-[#171717] border border-gray-200 dark:border-gray-800 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string | number;
  className?: string;
}

export function StatCard({ label, value, className = '' }: StatCardProps) {
  return (
    <div className={`bg-white dark:bg-[#171717] border border-gray-200 dark:border-gray-800 rounded-lg p-4 ${className}`}>
      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</h4>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}

interface AlertProps {
  type: 'success' | 'warning' | 'error' | 'info';
  message: string;
  description?: string;
}

export function Alert({ type, message, description }: AlertProps) {
  const colors = {
    success: 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    warning: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    error: 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    info: 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
  };

  return (
    <div className={`p-4 rounded-lg ${colors[type]}`}>
      <p className="font-medium">{message}</p>
      {description && <p className="mt-1 text-sm opacity-80">{description}</p>}
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick 
}: ButtonProps) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
    outline: 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`rounded-lg font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
