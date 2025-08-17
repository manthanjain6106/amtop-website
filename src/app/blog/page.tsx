import Image from 'next/image';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

type Media = { url?: string; alt?: string };
type Author = { name?: string; avatar?: Media };
type Category = { title?: string };

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  coverImage?: Media;
  author?: Author | string;
  categories?: Category[];
};

async function fetchPosts(limit = 7): Promise<Post[]> {
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

function formatDate(iso?: string): string {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return '';
  }
}

export default async function BlogPage() {
  const posts = await fetchPosts(7);
  const featured = posts[0];
  const others = posts.slice(1);
  const payloadFrontend = '';
  const payloadBase = process.env.NEXT_PUBLIC_PAYLOAD_BASE_URL || 'http://localhost:3001';
  const toMediaUrl = (path?: string) => {
    if (!path) return '';
    if (/^https?:\/\//.test(path)) return path;
    return `${payloadBase}${path}`;
  };
  const getAuthorName = (a?: Author | string) => {
    if (a && typeof a === 'object' && 'name' in a) return (a as any).name || 'Unknown Author';
    return 'Unknown Author';
  };
  const getAuthorAvatarUrl = (a?: Author | string) => {
    if (a && typeof a === 'object' && (a as any).avatar?.url) {
      return toMediaUrl((a as any).avatar.url as string);
    }
    return '';
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog-page.png"
            alt="Blog Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full px-4 pt-32 pb-12">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-white">Leadership Insights &amp;</span><br />
            <span className="text-yellow-400">Success Strategies</span>
          </h1>
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-center text-white mb-10 max-w-2xl" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
            Expert insights, proven strategies, and real success stories from leaders who&apos;ve achieved $100K+ results.
          </p>
          {/* Search Bar */}
          <div className="w-full max-w-xl mb-8">
            <div className="flex items-center bg-white/90 rounded px-4 py-2 border-2 border-blue-900 focus-within:ring-2 focus-within:ring-blue-900">
              <svg className="w-7 h-7 text-blue-900 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent outline-none text-lg text-blue-900 placeholder:text-blue-900/70"
              />
            </div>
          </div>
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white/90 rounded-full px-6 py-3 font-bold text-lg text-[#1B1C2B] shadow hover:bg-yellow-100 transition" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Leadership</button>
            <button className="bg-white/90 rounded-full px-6 py-3 font-bold text-lg text-[#1B1C2B] shadow hover:bg-yellow-100 transition" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Team Management</button>
            <button className="bg-white/90 rounded-full px-6 py-3 font-bold text-lg text-[#1B1C2B] shadow hover:bg-yellow-100 transition" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Growth</button>
            <button className="bg-white/90 rounded-full px-6 py-3 font-bold text-lg text-[#1B1C2B] shadow hover:bg-yellow-100 transition" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>Sale Strategy</button>
          </div>
        </div>
      </div>

      {/* Featured Article Section */}
      <section className="w-full bg-[#F7F7FA] py-12 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-[#1B1C2B]" style={{ fontFamily: 'Secular One, sans-serif', fontWeight: 700 }}>Featured Article</h2>
        <p className="text-lg text-gray-500 text-center mb-8" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Latest insights from our leadership experts</p>
        {!featured && (
          <div className="w-full max-w-6xl bg-white rounded-2xl shadow p-6 text-center text-gray-600">
            No published posts found. Publish a post in Payload and ensure it has a published date.
          </div>
        )}
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row overflow-hidden p-6 sm:p-8 gap-8 items-center">
          {/* Article Image */}
          <div className="w-full sm:w-2/5 flex-shrink-0">
            <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-gray-100">
              {featured?.coverImage?.url ? (
                <img src={toMediaUrl(featured.coverImage.url)} alt={featured.coverImage.alt || featured.title} className="w-full h-full object-cover" />
              ) : (
                <Image src="/images/latest-blog.png" alt="Featured" fill className="object-cover" priority />
              )}
            </div>
          </div>
          {/* Article Content */}
          <div className="flex-1 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-[#1B1C2B] mb-2 tracking-tight" style={{ fontFamily: 'Secular One, sans-serif', fontWeight: 600 }}>
                <span className="border-b-2 border-gray-300 pb-1 inline-block">{featured?.title || 'No post available'}</span>
              </h3>
              {featured?.excerpt && (
                <p className="text-gray-600 mb-3" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>{featured.excerpt}</p>
              )}
              <div className="flex gap-2 mb-4 flex-wrap">
                {(featured?.categories || []).map((c, i) => (
                  <span key={i} className="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-[#1B1C2B]">{c.title}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  {getAuthorAvatarUrl(featured?.author) ? (
                    <img src={getAuthorAvatarUrl(featured?.author)} alt={getAuthorName(featured?.author)} className="w-7 h-7 rounded-full object-cover" />
                  ) : (
                    <span className="w-7 h-7 rounded-full bg-gray-200 inline-block" />
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#1B1C2B]">{getAuthorName(featured?.author)}</span>
                    <span className="text-xs text-gray-500">{formatDate(featured?.publishedAt)}</span>
                  </div>
                </div>
              {featured?.slug && (
                <a href={`/blog/${featured.slug}`} className="bg-[#F7F7FA] hover:bg-yellow-100 text-[#1B1C2B] font-semibold px-5 py-2 rounded-lg shadow transition text-sm">Read Full Article →</a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="w-full bg-[#F7F7FA] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#1B1C2B]" style={{ fontFamily: 'Secular One, sans-serif', fontWeight: 700 }}>Latest Articles</h2>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {others.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-100 rounded-t-2xl flex items-center justify-center overflow-hidden">
                  {post.coverImage?.url ? (
                    <img src={toMediaUrl(post.coverImage.url)} alt={post.coverImage.alt || post.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B1C2B] mb-2">{post.title}</h3>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {(post.categories || []).map((c, i) => (
                      <span key={i} className="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-[#1B1C2B]">{c.title}</span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{formatDate(post.publishedAt)}</p>
                  {post.excerpt && <p className="text-gray-600 mb-4">{post.excerpt}</p>}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getAuthorAvatarUrl(post.author) ? (
                        <img src={getAuthorAvatarUrl(post.author)} alt={getAuthorName(post.author)} className="w-6 h-6 rounded-full object-cover" />
                      ) : (
                        <span className="w-6 h-6 rounded-full bg-gray-200 inline-block" />
                      )}
                      <span className="text-sm text-gray-500">{getAuthorName(post.author)}</span>
                    </div>
                    {post.slug && (
                      <a href={`/blog/${post.slug}`} className="bg-gray-200 hover:bg-yellow-100 text-[#1B1C2B] font-semibold px-4 py-2 rounded-lg transition text-sm">Read More →</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <a href={`/blog`} className="inline-block bg-white border-2 border-[#1B1C2B] text-[#1B1C2B] font-bold px-8 py-4 rounded-lg hover:bg-[#1B1C2B] hover:text-white transition">
              Load More Articles
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

 