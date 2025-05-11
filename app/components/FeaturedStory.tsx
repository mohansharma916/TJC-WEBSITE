export default function FeaturedStory() {
    return (
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 bg-white p-4 rounded-lg shadow-md">
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">FEATURED STORY</span>
          <h2 className="text-2xl font-bold mt-2">
            Putin is "not going to engage" with Biden's State of the Union comments, expert says
          </h2>
          <p className="text-gray-600 mt-2">
            November 15, 2021 | BBC Media - Ceres CEO & President Mindy Lubber issue the following statement at the conclusion of the G-20 in Glasgow, Scotland.
          </p>
          <img
            src="https://picsum.photos/id/27/30/30"
            alt="Featured Story"
            className="mt-4 w-full rounded-lg"
          />
        </div>
        <div className="md:w-1/3 space-y-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">
                The Top 10 Best Computer Speakers in the Market
              </h3>
              <p className="text-gray-600 text-sm">Nov 15, 2021 | 10 min read</p>
            </div>
          ))}
        </div>
      </div>
    );
  }