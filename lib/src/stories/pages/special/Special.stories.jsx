var meta = {
    title: 'Pages/Special',
    component: function () { return null; },
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export var Default = {
    render: function () { return (<div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video Background */}
      <div className="relative bg-gray-900 h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Special Event
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Join us for an exclusive experience
            </p>
            <div className="mt-10">
              <button className="px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Event Details
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to know about this special occasion
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Date & Time */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">15</div>
              <div className="text-xl text-gray-600">April 2024</div>
              <div className="mt-2 text-gray-500">2:00 PM - 8:00 PM</div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Location</h3>
              <p className="mt-2 text-gray-500">
                Grand Conference Center<br />
                123 Event Street<br />
                City, State 12345
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Contact</h3>
              <p className="mt-2 text-gray-500">
                Email: event@example.com<br />
                Phone: (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Event Schedule
            </h2>
          </div>

          <div className="mt-16">
            <div className="space-y-8">
              {/* Schedule Item 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    2:00
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Welcome & Registration</h3>
                  <p className="mt-1 text-gray-500">
                    Check-in and get your event materials
                  </p>
                </div>
              </div>

              {/* Schedule Item 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    3:00
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Keynote Speech</h3>
                  <p className="mt-1 text-gray-500">
                    Opening remarks from our special guest speaker
                  </p>
                </div>
              </div>

              {/* Schedule Item 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    4:30
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Workshop Session</h3>
                  <p className="mt-1 text-gray-500">
                    Interactive workshop with industry experts
                  </p>
                </div>
              </div>

              {/* Schedule Item 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    6:00
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Networking & Dinner</h3>
                  <p className="mt-1 text-gray-500">
                    Connect with other attendees over dinner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to join us?</span>
            <span className="block text-blue-200">Register now to secure your spot.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>); },
};
