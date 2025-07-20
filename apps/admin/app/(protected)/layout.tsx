export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Next.js Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/analytics" className="text-gray-600 hover:text-gray-900">Analytics</a>
              <a href="/genesis" className="text-gray-600 hover:text-gray-900">Genesis</a>
              <a href="/general" className="text-gray-600 hover:text-gray-900">Settings</a>
              <a href="/login" className="text-gray-600 hover:text-gray-900">Logout</a>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}