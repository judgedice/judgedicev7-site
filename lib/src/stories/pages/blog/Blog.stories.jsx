var meta = {
    title: 'Pages/Blog',
    component: function () { return null; },
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
var blogPosts = [
    {
        title: "Getting Started with Our Platform",
        excerpt: "Learn how to make the most of our platform's features and get your team up and running quickly.",
        author: "John Doe",
        date: "March 15, 2024",
        category: "Getting Started",
        readTime: "5 min read"
    },
    {
        title: "Best Practices for Team Collaboration",
        excerpt: "Discover the most effective ways to collaborate with your team using our platform's tools.",
        author: "Jane Smith",
        date: "March 12, 2024",
        category: "Collaboration",
        readTime: "8 min read"
    },
    {
        title: "Advanced Analytics Features",
        excerpt: "Dive deep into our analytics capabilities and learn how to leverage data for better decision making.",
        author: "Mike Johnson",
        date: "March 10, 2024",
        category: "Analytics",
        readTime: "10 min read"
    },
    {
        title: "Security Best Practices",
        excerpt: "Keep your data safe with our comprehensive guide to security best practices.",
        author: "Sarah Wilson",
        date: "March 8, 2024",
        category: "Security",
        readTime: "6 min read"
    }
];
export var Default = {
    render: function () { return (<div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Blog
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Insights, updates, and best practices from our team
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(function (post, index) { return (<article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    Read more →
                  </button>
                </div>
              </div>
            </article>); })}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Want to stay updated?</span>
            <span className="block text-blue-200">Subscribe to our newsletter.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <input type="email" placeholder="Enter your email" className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"/>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>); },
};
