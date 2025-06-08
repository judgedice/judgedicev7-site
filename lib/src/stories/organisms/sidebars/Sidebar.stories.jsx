var meta = {
    title: 'Organisms/Sidebars',
    component: function () { return null; },
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export var Basic = {
    render: function () { return (<div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md">
                <span className="mr-3">🏠</span>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="mr-3">📊</span>
                Analytics
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="mr-3">📝</span>
                Reports
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="mr-3">⚙️</span>
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800">Main Content</h1>
      </main>
    </div>); },
};
export var Collapsible = {
    render: function () { return (<div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg transition-all duration-300">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          <button className="p-2 hover:bg-gray-100 rounded-md">≡</button>
        </div>
        <nav className="p-4">
          <div className="mb-4">
            <button className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <span className="flex items-center">
                <span className="mr-3">📊</span>
                Analytics
              </span>
              <span>▼</span>
            </button>
            <div className="ml-8 mt-2 space-y-2">
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Overview</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Reports</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Statistics</a>
            </div>
          </div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="mr-3">🏠</span>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="mr-3">⚙️</span>
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800">Main Content</h1>
      </main>
    </div>); },
};
export var WithUserProfile = {
    render: function () { return (<div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div>
              <h3 className="text-sm font-medium text-gray-800">John Doe</h3>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md">
                <span className="mr-3">🏠</span>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="mr-3">👤</span>
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="mr-3">📊</span>
                Analytics
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <span className="mr-3">⚙️</span>
                Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t">
          <button className="w-full flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <span className="mr-3">🚪</span>
            Sign Out
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800">Main Content</h1>
      </main>
    </div>); },
};
