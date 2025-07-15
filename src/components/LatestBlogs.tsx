const LatestBlogs = () => {
  const blogPosts = [
    {
      title: "Understanding AI",
      description: "A deep dive into artificial intelligence.",
      fullDescription: "Discover the mechanisms behind AI...",
      tags: ["Technology", "AI"],
      author: "Author Name",
      image: "/images/blog-1.jpg"
    },
    {
      title: "Understanding AI",
      description: "A deep dive into artificial intelligence.",
      fullDescription: "Discover the mechanisms behind AI...",
      tags: ["Technology", "AI"],
      author: "Author Name",
      image: "/images/blog-2.jpg"
    },
    {
      title: "Understanding AI",
      description: "A deep dive into artificial intelligence.",
      fullDescription: "Discover the mechanisms behind AI...",
      tags: ["Technology", "AI"],
      author: "Author Name",
      image: "/images/blog-3.jpg"
    },
    {
      title: "Understanding AI",
      description: "A deep dive into artificial intelligence.",
      fullDescription: "Discover the mechanisms behind AI...",
      tags: ["Technology", "AI"],
      author: "Author Name",
      image: "/images/blog-4.jpg"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Latest Blogs
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Catch up with the latest updates.
          </p>
        </div>

        {/* Featured Blog Post */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Left Section - Text Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-b border-gray-300 pb-2">
                Understanding AI
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-sm sm:text-base text-gray-800 font-medium mb-3 sm:mb-4">
                Discover the mechanisms behind AI......
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              <span className="px-2 sm:px-3 py-1 bg-yellow-100 text-gray-800 rounded-full text-xs sm:text-sm">
                Technology
              </span>
              <span className="px-2 sm:px-3 py-1 bg-yellow-100 text-gray-800 rounded-full text-xs sm:text-sm">
                AI
              </span>
            </div>
            
            {/* Author */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-100 rounded-full"></div>
              <span className="text-sm sm:text-base text-gray-900 font-medium">Author Name</span>
            </div>
          </div>

          {/* Right Section - Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="w-full h-48 sm:h-64 lg:h-80 rounded-lg relative overflow-hidden">
              <img 
                src="/images/latest-blog.png" 
                alt="Latest Blog Featured Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Grid of Smaller Blog Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
              {/* Thumbnail */}
              <div className="w-full h-24 sm:h-32 bg-yellow-100 rounded-lg mb-3 sm:mb-4"></div>
              
              {/* Content */}
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                {post.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                {post.description}
              </p>
              <p className="text-xs sm:text-sm text-gray-800 mb-3">
                {post.fullDescription}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-yellow-100 text-gray-800 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-100 rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-900 font-medium">{post.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs; 