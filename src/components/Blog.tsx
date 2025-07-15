import Image from 'next/image';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Development in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
      image: '/images/blog page.png',
      category: 'Technology',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'Digital Transformation Strategies for SMEs',
      excerpt: 'How small and medium enterprises can leverage digital transformation for growth.',
      image: '/images/blog page.png',
      category: 'Business',
      date: 'March 10, 2024',
      readTime: '7 min read'
    },
    {
      title: 'UI/UX Design Principles for Better User Experience',
      excerpt: 'Essential design principles that can significantly improve your application\'s user experience.',
      image: '/images/blog page.png',
      category: 'Design',
      date: 'March 5, 2024',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="text-blue-600">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology and business.
          </p>
        </div>

        {/* Featured Blog Image */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/blog page.png"
              alt="Blog Insights"
              width={800}
              height={400}
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog; 