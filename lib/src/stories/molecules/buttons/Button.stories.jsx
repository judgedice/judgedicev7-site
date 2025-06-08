var meta = {
    title: 'Molecules/Buttons',
    component: function () { return null; },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export var Primary = {
    render: function () { return (<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Primary Button
    </button>); },
};
export var Secondary = {
    render: function () { return (<button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
      Secondary Button
    </button>); },
};
export var Outline = {
    render: function () { return (<button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50">
      Outline Button
    </button>); },
};
export var Disabled = {
    render: function () { return (<button className="bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed" disabled>
      Disabled Button
    </button>); },
};
export var Sizes = {
    render: function () { return (<div className="space-x-4">
      <button className="bg-blue-500 text-white px-2 py-1 text-sm rounded">Small</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Medium</button>
      <button className="bg-blue-500 text-white px-6 py-3 text-lg rounded">Large</button>
    </div>); },
};
