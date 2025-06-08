var SpacingDesign = function () { return (<div className="vs-spacing-design">
    <h1>Spacing Design System</h1>
    <p>This is a showcase of our spacing styles.</p>
  </div>); };
var meta = {
    title: 'Design/Spacing',
    component: SpacingDesign,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export var Default = {
    args: {},
};
export var SpacingScale = {
    render: function () { return (<div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-1 h-1 bg-black"/>
        <span>1px (0.25rem)</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 bg-black"/>
        <span>2px (0.5rem)</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-4 h-4 bg-black"/>
        <span>4px (1rem)</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-black"/>
        <span>8px (2rem)</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-black"/>
        <span>16px (4rem)</span>
      </div>
    </div>); },
};
