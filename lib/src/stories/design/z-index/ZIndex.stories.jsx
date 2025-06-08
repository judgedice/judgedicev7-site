var meta = {
    title: 'Design/Z-Index',
    component: function () { return null; },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export var ZIndexSystem = {
    render: function () { return (<div className="space-y-8">
      <div className="relative h-32">
        <div className="absolute inset-0 bg-blue-200 z-0">Base Layer (z-0)</div>
        <div className="absolute inset-0 bg-blue-300 z-10">Modal Backdrop (z-10)</div>
        <div className="absolute inset-0 bg-blue-400 z-20">Modal Content (z-20)</div>
        <div className="absolute inset-0 bg-blue-500 z-30">Tooltip (z-30)</div>
        <div className="absolute inset-0 bg-blue-600 z-40">Dropdown (z-40)</div>
        <div className="absolute inset-0 bg-blue-700 z-50">Toast (z-50)</div>
      </div>
      <div className="p-4 bg-gray-100">
        <h3 className="font-bold">Z-Index Scale</h3>
        <ul className="list-disc list-inside mt-2">
          <li>z-0: Base layer</li>
          <li>z-10: Modal backdrop</li>
          <li>z-20: Modal content</li>
          <li>z-30: Tooltips</li>
          <li>z-40: Dropdowns</li>
          <li>z-50: Toasts</li>
        </ul>
      </div>
    </div>); },
};
