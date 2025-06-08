var meta = {
    title: 'Pages/About',
    component: function () { return null; },
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export var Default = {
    render: function () { return (<div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              About Us
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              We're a team of passionate individuals dedicated to building the best tools for modern businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Empowering businesses through technology
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We believe that every business deserves access to powerful tools that can help them grow and succeed in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet the people behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200"></div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">John Doe</h3>
              <p className="text-sm text-gray-500">CEO & Founder</p>
              <p className="mt-2 text-base text-gray-500">
                With over 15 years of experience in the industry, John leads our company with vision and expertise.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200"></div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Jane Smith</h3>
              <p className="text-sm text-gray-500">CTO</p>
              <p className="mt-2 text-base text-gray-500">
                Jane brings technical excellence and innovation to every project we undertake.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200"></div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Mike Johnson</h3>
              <p className="text-sm text-gray-500">Head of Product</p>
              <p className="mt-2 text-base text-gray-500">
                Mike ensures that our products meet the highest standards of quality and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What drives us forward
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Value 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Innovation</h3>
              <p className="mt-2 text-base text-gray-500">
                We constantly push boundaries and explore new ideas to create better solutions.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Integrity</h3>
              <p className="mt-2 text-base text-gray-500">
                We believe in honest, transparent relationships with our customers and partners.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Excellence</h3>
              <p className="mt-2 text-base text-gray-500">
                We strive for excellence in everything we do, from product development to customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>); },
};
