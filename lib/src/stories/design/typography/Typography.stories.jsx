var TypographyDesign = function () { return (<div className="vs-typography-design">
    <h1>Typography Design System</h1>
    <p>This is a showcase of our typography styles.</p>
  </div>); };
var meta = {
    title: 'Design/Typography',
    component: TypographyDesign,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export var Default = {
    args: {},
};
export var Headings = {
    render: function () { return (<div className="space-y-4">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>); },
};
export var BodyText = {
    render: function () { return (<div className="space-y-4">
      <p className="text-lg">Large body text</p>
      <p>Regular body text</p>
      <p className="text-sm">Small body text</p>
    </div>); },
};
