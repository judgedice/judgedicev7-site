var meta = {
    title: 'Organisms/Quote Carousel',
    component: function () { return null; },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
var quotes = [
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
        role: "Management Consultant"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
        role: "Apple Co-founder"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        role: "Apple Co-founder"
    }
];
export var Basic = {
    render: function () { return (<div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="relative">
        <div className="text-2xl font-serif italic text-gray-700 mb-4">
          "{quotes[0].text}"
        </div>
        <div className="text-right">
          <div className="font-bold text-gray-900">{quotes[0].author}</div>
          <div className="text-sm text-gray-600">{quotes[0].role}</div>
        </div>
        <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            ←
          </button>
        </div>
        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            →
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {quotes.map(function (_, index) { return (<button key={index} className={"w-2 h-2 rounded-full ".concat(index === 0 ? 'bg-blue-500' : 'bg-gray-300')}/>); })}
      </div>
    </div>); },
};
export var WithImage = {
    render: function () { return (<div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="flex items-center space-x-8">
        <div className="w-32 h-32 rounded-full bg-gray-200 flex-shrink-0"/>
        <div className="flex-1">
          <div className="text-2xl font-serif italic text-gray-700 mb-4">
            "{quotes[0].text}"
          </div>
          <div className="text-right">
            <div className="font-bold text-gray-900">{quotes[0].author}</div>
            <div className="text-sm text-gray-600">{quotes[0].role}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {quotes.map(function (_, index) { return (<button key={index} className={"w-2 h-2 rounded-full ".concat(index === 0 ? 'bg-blue-500' : 'bg-gray-300')}/>); })}
      </div>
    </div>); },
};
