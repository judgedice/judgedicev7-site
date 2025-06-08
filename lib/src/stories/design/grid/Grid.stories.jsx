var GridDesign = function () { return (<div className="vs-grid-design">
    <h1>Grid Design System</h1>
    <p>This is a showcase of our grid styles.</p>
  </div>); };
var meta = {
    title: 'Design/Grid',
    component: GridDesign,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export var Default = {
    args: {},
};
export var GridSystem = {
    render: function () { return (<div className="space-y-8">
      <div className="grid grid-cols-12 gap-4">
        {Array.from({ length: 12 }).map(function (_, i) { return (<div key={i} className="col-span-1 bg-gray-200 p-4 text-center">
            {i + 1}
          </div>); })}
      </div>
      <div className="grid grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map(function (_, i) { return (<div key={i} className="col-span-1 bg-gray-200 p-4 text-center">
            {i + 1}
          </div>); })}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map(function (_, i) { return (<div key={i} className="col-span-1 bg-gray-200 p-4 text-center">
            {i + 1}
          </div>); })}
      </div>
    </div>); },
};
