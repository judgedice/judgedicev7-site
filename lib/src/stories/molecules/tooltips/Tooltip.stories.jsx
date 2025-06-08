var meta = {
    title: 'Molecules/Tooltips',
    component: function () { return null; },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export var Basic = {
    render: function () { return (<div className="relative group">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Hover me
      </button>
      <div className="absolute hidden group-hover:block bg-gray-900 text-white px-2 py-1 rounded text-sm -top-8 left-1/2 transform -translate-x-1/2">
        Basic tooltip
      </div>
    </div>); },
};
export var Positions = {
    render: function () { return (<div className="grid grid-cols-3 gap-8">
      <div className="relative group">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Top
        </button>
        <div className="absolute hidden group-hover:block bg-gray-900 text-white px-2 py-1 rounded text-sm -top-8 left-1/2 transform -translate-x-1/2">
          Top tooltip
        </div>
      </div>
      <div className="relative group">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Right
        </button>
        <div className="absolute hidden group-hover:block bg-gray-900 text-white px-2 py-1 rounded text-sm top-1/2 -right-24 transform -translate-y-1/2">
          Right tooltip
        </div>
      </div>
      <div className="relative group">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Bottom
        </button>
        <div className="absolute hidden group-hover:block bg-gray-900 text-white px-2 py-1 rounded text-sm top-8 left-1/2 transform -translate-x-1/2">
          Bottom tooltip
        </div>
      </div>
    </div>); },
};
export var WithArrow = {
    render: function () { return (<div className="relative group">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        With Arrow
      </button>
      <div className="absolute hidden group-hover:block bg-gray-900 text-white px-2 py-1 rounded text-sm -top-10 left-1/2 transform -translate-x-1/2">
        Tooltip with arrow
        <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
      </div>
    </div>); },
};
