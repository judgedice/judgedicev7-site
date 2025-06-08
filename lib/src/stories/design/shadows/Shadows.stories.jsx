var ShadowsDesign = function () { return (<div className="vs-shadows-design">
    <h1>Shadows Design System</h1>
    <p>This is a showcase of our shadow styles.</p>
  </div>); };
var meta = {
    title: 'Design/Shadows',
    component: ShadowsDesign,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export var Default = {
    args: {},
};
export var ShadowScale = {
    render: function () { return (<div className="space-y-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="w-32 h-32 bg-white shadow-sm">shadow-sm</div>
          <div className="w-32 h-32 bg-white shadow">shadow</div>
          <div className="w-32 h-32 bg-white shadow-md">shadow-md</div>
          <div className="w-32 h-32 bg-white shadow-lg">shadow-lg</div>
          <div className="w-32 h-32 bg-white shadow-xl">shadow-xl</div>
          <div className="w-32 h-32 bg-white shadow-2xl">shadow-2xl</div>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100">
            <h3 className="font-bold">Shadow Scale</h3>
            <ul className="list-disc list-inside mt-2">
              <li>shadow-sm: Small shadow for subtle elevation</li>
              <li>shadow: Default shadow for basic elevation</li>
              <li>shadow-md: Medium shadow for cards and panels</li>
              <li>shadow-lg: Large shadow for modals and dropdowns</li>
              <li>shadow-xl: Extra large shadow for floating elements</li>
              <li>shadow-2xl: Largest shadow for maximum elevation</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-100">
            <h3 className="font-bold">Usage Examples</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Cards: shadow-md</li>
              <li>Buttons: shadow-sm</li>
              <li>Modals: shadow-xl</li>
              <li>Dropdowns: shadow-lg</li>
              <li>Tooltips: shadow</li>
            </ul>
          </div>
        </div>
      </div>
    </div>); },
};
