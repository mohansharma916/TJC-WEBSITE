export default function UpcomingStreaming() {
    return (
      <div className="md:w-1/3">
        <h2 className="text-xl font-bold text-blue-900">UPCOMING STREAMING</h2>
        <div className="space-y-4 mt-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={`https://picsum.photos/id/${250+index}/200/300`}
                alt="Upcoming Streaming"
                className="w-full rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">
                The Top 10 Best Computer Speakers in the Market
              </h3>
              <p className="text-gray-600 text-sm">Nov 15, 2021 | 10 min read</p>
            </div>
          ))}
        </div>
      </div>
    );
  }