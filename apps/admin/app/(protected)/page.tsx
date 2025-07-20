export default function SimpleDashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Analytics</h3>
          <p className="text-gray-600">View your analytics data</p>
          <a href="/analytics" className="text-blue-600 hover:underline">Go to Analytics →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Genesis</h3>
          <p className="text-gray-600">Access Genesis features</p>
          <a href="/genesis" className="text-blue-600 hover:underline">Go to Genesis →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Settings</h3>
          <p className="text-gray-600">Manage your settings</p>
          <a href="/general" className="text-blue-600 hover:underline">Go to Settings →</a>
        </div>
      </div>
      <div className="mt-8 p-4 bg-green-100 rounded-lg">
        <h2 className="text-xl font-semibold text-green-800 mb-2">🎉 Migration Complete!</h2>
        <p className="text-green-700">Successfully migrated from React + Vite to Next.js 15.x</p>
        <ul className="mt-4 text-sm text-green-600">
          <li>✅ Next.js 15.x App Router</li>
          <li>✅ TypeScript configuration</li>
          <li>✅ Tailwind CSS v4</li>
          <li>✅ File-based routing</li>
          <li>✅ Environment variables</li>
        </ul>
      </div>
    </div>
  );
}