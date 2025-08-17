type Media = { url?: string; alt?: string };
type Author = { name?: string; avatar?: Media };
type Category = { title?: string };
type Tag = { title?: string };
type Post = {
  id: string;
  title: string;
  excerpt?: string;
  author?: Author | string;
  coverImage?: Media;
  tags?: Tag[];
  categories?: Category[];
  slug?: string;
};

async function fetchLatest(limit = 4): Promise<Post[]> {
  try {
    const base = process.env.NEXT_PUBLIC_PAYLOAD_BASE_URL || 'http://localhost:3001';
    const url = new URL('/api/posts', base);
    url.searchParams.set('where[status][equals]', 'published');
    url.searchParams.set('where[publishedAt][less_than_equal]', new Date().toISOString());
    url.searchParams.set('sort', '-publishedAt');
    url.searchParams.set('limit', String(limit));
    url.searchParams.set('depth', '2');
    const res = await fetch(url.toString(), { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data?.docs) ? (data.docs as Post[]) : [];
  } catch {
    return [];
  }
}

const LatestBlogs = async () => {
  const blogPosts = await fetchLatest(4);
  const payloadBase = process.env.NEXT_PUBLIC_PAYLOAD_BASE_URL || 'http://localhost:3001';
  const toMediaUrl = (path?: string) => {
    if (!path) return '';
    if (/^https?:\/\//.test(path)) return path;
    return `${payloadBase}${path}`;
  };
  const getAuthorName = (a?: Author | string) => {
    if (a && typeof a === 'object' && 'name' in a) return (a as Author).name || 'Unknown Author';
    return 'Unknown Author';
  };
  const getAuthorAvatarUrl = (a?: Author | string) => {
    if (a && typeof a === 'object') {
      const author = a as Author;
      if (author.avatar?.url) {
        return toMediaUrl(author.avatar.url);
      }
    }
    return '';
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Latest Blogs
          </h2>
          <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Catch up with the latest updates.
          </p>
        </div>

        {/* Featured Blog Post */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Left Section - Text Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 border-b border-gray-300 pb-2" style={{ fontFamily: 'Secular One, sans-serif' }}>
                {blogPosts[0]?.slug ? (
                  <a href={`/blog/${blogPosts[0].slug}`} className="hover:underline">
                    {blogPosts[0].title}
                  </a>
                ) : (
                  blogPosts[0]?.title || 'No posts yet'
                )}
              </h3>
              {blogPosts[0]?.excerpt && (
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  {blogPosts[0].excerpt}
                </p>
              )}
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {(blogPosts[0]?.categories || []).map((c, i) => (
                  <span key={i} className="px-2 sm:px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs sm:text-sm">
                    {c.title}
                  </span>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-800 font-medium mb-3 sm:mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {getAuthorName(blogPosts[0]?.author)}
              </p>
              {blogPosts[0]?.slug && (
                <a href={`/blog/${blogPosts[0].slug}`} className="inline-block bg-gray-200 hover:bg-yellow-100 text-[#1B1C2B] font-semibold px-4 py-2 rounded-lg transition text-sm">
                  Read Full Article →
                </a>
              )}
            </div>
            
            
            
            {/* Author */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-100 rounded-full"></div>
              <span className="text-sm sm:text-base text-gray-900 font-medium">{getAuthorName(blogPosts[0]?.author)}</span>
            </div>
          </div>

          {/* Right Section - Visual */}
          <div className="relative order-1 lg:order-2">
            {blogPosts[0]?.slug ? (
              <a href={`/blog/${blogPosts[0].slug}`}>
                <div className="w-full h-48 sm:h-64 lg:h-80 rounded-lg relative overflow-hidden bg-gray-100">
                  <img
                    src={blogPosts[0]?.coverImage?.url ? toMediaUrl(blogPosts[0].coverImage.url) : '/images/latest-blog.png'}
                    alt={blogPosts[0]?.title || 'Latest Blog Featured Image'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            ) : (
              <div className="w-full h-48 sm:h-64 lg:h-80 rounded-lg relative overflow-hidden bg-gray-100">
                <img
                  src={blogPosts[0]?.coverImage?.url ? toMediaUrl(blogPosts[0].coverImage.url) : '/images/latest-blog.png'}
                  alt={blogPosts[0]?.title || 'Latest Blog Featured Image'}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Grid of Smaller Blog Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {blogPosts.map((post, index) => (
            post.slug ? (
            <a key={index} href={`/blog/${post.slug}`} className="block bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
              {/* Thumbnail */}
              <div className="w-full h-24 sm:h-32 bg-gray-100 rounded-lg mb-3 sm:mb-4 overflow-hidden">
                {post.coverImage?.url ? (
                  <img src={toMediaUrl(post.coverImage.url)} alt={post.title} className="w-full h-full object-cover" />
                ) : null}
              </div>
              
              {/* Content */}
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{post.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                {post.excerpt}
              </p>
              {/* Categories */}
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {(post.categories || []).map((cat, catIdx) => (
                  <span key={catIdx} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">
                    {cat.title}
                  </span>
                ))}
              </div>
              
              
              
              {/* Author */}
              <div className="flex items-center gap-2">
                {getAuthorAvatarUrl(post.author) ? (
                  <img src={getAuthorAvatarUrl(post.author)} alt={getAuthorName(post.author)} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover" />
                ) : (
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-100 rounded-full"></div>
                )}
                <span className="text-xs sm:text-sm text-gray-900 font-medium">{getAuthorName(post.author)}</span>
              </div>
            </a>
            ) : (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <div className="w-full h-24 sm:h-32 bg-gray-100 rounded-lg mb-3 sm:mb-4 overflow-hidden">
                {post.coverImage?.url ? (
                  <img src={toMediaUrl(post.coverImage.url)} alt={post.title} className="w-full h-full object-cover" />
                ) : null}
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{post.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">{post.excerpt}</p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {(post.categories || []).map((cat, catIdx) => (
                  <span key={catIdx} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">{cat.title}</span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {getAuthorAvatarUrl(post.author) ? (
                  <img src={getAuthorAvatarUrl(post.author)} alt={getAuthorName(post.author)} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover" />
                ) : (
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-100 rounded-full"></div>
                )}
                <span className="text-xs sm:text-sm text-gray-900 font-medium">{getAuthorName(post.author)}</span>
              </div>
            </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;

 