export default function LatestStories() {
    return (
      <div className="md:w-2/3">
        <h2 className="text-xl font-bold text-blue-900">LATEST STORIES</h2>
        <div className="space-y-4 mt-4">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex gap-4">
              <img
                src={`https://picsum.photos/id/${100+index}/200/300`}
                alt="Latest Story"
                className="w-24 h-24 rounded-lg"
              />
              <div>
                <p className="text-gray-600 text-sm">Martin Starba • Wordpress News</p>
                <h3 className="text-lg font-semibold">
                  {index === 0 ? "I enjoy hard work I love setting goals and achieving them." : "The company behind Vespa built..."}
                </h3>
                <p className="text-gray-600 text-sm">Nov 15, 2021 | 10 min read</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }