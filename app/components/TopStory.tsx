export default function TopStories() {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold text-blue-900">TOP STORIES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={`https://picsum.photos/id/${200+index}/200/300`}
                alt="Top Story"
                className="w-full rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">
                {index % 2 === 0 ? "At Value-Focused Hotels the Free Breakfast Gets..." : "Success is not a good teacher failure makes you..."}
              </h3>
              <p className="text-gray-600 text-sm mt-1">2K Views • 2 Days ago</p>
            </div>
          ))}
        </div>
      </div>
    );
  }