var meta = {
    title: 'Design/Border Radius',
    component: function () { return null; },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export var BorderRadiusScale = {
    render: function () { return (<div className="space-y-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="w-32 h-32 bg-blue-200 rounded-none">rounded-none</div>
          <div className="w-32 h-32 bg-blue-200 rounded-sm">rounded-sm</div>
          <div className="w-32 h-32 bg-blue-200 rounded">rounded</div>
          <div className="w-32 h-32 bg-blue-200 rounded-md">rounded-md</div>
          <div className="w-32 h-32 bg-blue-200 rounded-lg">rounded-lg</div>
          <div className="w-32 h-32 bg-blue-200 rounded-xl">rounded-xl</div>
          <div className="w-32 h-32 bg-blue-200 rounded-2xl">rounded-2xl</div>
          <div className="w-32 h-32 bg-blue-200 rounded-3xl">rounded-3xl</div>
          <div className="w-32 h-32 bg-blue-200 rounded-full">rounded-full</div>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100">
            <h3 className="font-bold">Border Radius Scale</h3>
            <ul className="list-disc list-inside mt-2">
              <li>rounded-none: 0px</li>
              <li>rounded-sm: 0.125rem (2px)</li>
              <li>rounded: 0.25rem (4px)</li>
              <li>rounded-md: 0.375rem (6px)</li>
              <li>rounded-lg: 0.5rem (8px)</li>
              <li>rounded-xl: 0.75rem (12px)</li>
              <li>rounded-2xl: 1rem (16px)</li>
              <li>rounded-3xl: 1.5rem (24px)</li>
              <li>rounded-full: 9999px</li>
            </ul>
          </div>
        </div>
      </div>
    </div>); },
};
