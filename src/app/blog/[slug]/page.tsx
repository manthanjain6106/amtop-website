import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

export const revalidate = 0
export const dynamic = 'force-dynamic'

type Media = { url?: string; alt?: string }
type Author = { name?: string; avatar?: Media }
type Category = { title?: string }
type Tag = { title?: string }

type LexicalTextNode = { type: 'text'; text: string }
type LexicalUploadValue = { url?: string; alt?: string; caption?: string }
type LexicalInlineChild = LexicalTextNode | LexicalLinkNode
type LexicalParagraphNode = { type: 'paragraph'; children?: LexicalInlineChild[] }
type LexicalHeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type LexicalHeadingNode = { type: 'heading'; tag: LexicalHeadingTag; children?: LexicalTextNode[] }
type LexicalListItemNode = { type: 'listitem'; children?: LexicalTextNode[] }
type LexicalListNode = { type: 'list'; listType?: 'bullet' | 'number'; children?: LexicalListItemNode[] }
type LexicalUploadNode = { type: 'upload'; relationTo?: string; value?: LexicalUploadValue }
type LexicalQuoteNode = { type: 'quote' | 'blockquote'; children?: LexicalTextNode[] }
type LexicalLinkNode = { type: 'link'; fields?: { url?: string; newTab?: boolean }; children?: LexicalInlineChild[] }
type LexicalRoot = { type: 'root'; children?: Array<LexicalParagraphNode | LexicalHeadingNode | LexicalListNode | LexicalUploadNode | LexicalQuoteNode | LexicalLinkNode> }

type Post = {
  id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt?: string
  coverImage?: Media
  author?: Author | string
  categories?: Category[]
  tags?: Tag[]
  content?: { root?: LexicalRoot }
  gallery?: { image: Media | string; caption?: string }[]
  video?: { file?: Media | string; oembed?: string }
}

async function fetchPostBySlug(slug: string): Promise<Post | null> {
  try {
    const base = process.env.NEXT_PUBLIC_PAYLOAD_BASE_URL || 'http://localhost:3001'
    const url = new URL('/api/posts', base)
    url.searchParams.set('where[slug][equals]', slug)
    url.searchParams.set('where[status][equals]', 'published')
    url.searchParams.set('where[publishedAt][less_than_equal]', new Date().toISOString())
    url.searchParams.set('limit', '1')
    url.searchParams.set('depth', '3')
    const res = await fetch(url.toString(), { cache: 'no-store' })
    if (!res.ok) return null
    const data = await res.json()
    const post = Array.isArray(data?.docs) ? (data.docs[0] as Post | undefined) : undefined
    return post ?? null
  } catch {
    return null
  }
}

function toMediaUrl(path?: string): string {
  if (!path) return ''
  if (/^https?:\/\//.test(path)) return path
  const base = process.env.NEXT_PUBLIC_PAYLOAD_BASE_URL || 'http://localhost:3001'
  return `${base}${path}`
}

function formatDate(iso?: string): string {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
  } catch {
    return ''
  }
}

function getAuthorName(a?: Author | string): string {
  if (a && typeof a === 'object' && 'name' in a) return (a as Author).name || 'Unknown Author'
  return 'Unknown Author'
}

function getAuthorAvatarUrl(a?: Author | string): string {
  if (a && typeof a === 'object') {
    const author = a as Author
    if (author.avatar?.url) {
      return toMediaUrl(author.avatar.url)
    }
  }
  return ''
}

function renderInline(children: LexicalInlineChild[] | undefined): ReactNode {
  if (!Array.isArray(children)) return null
  return children.map((child, i) => {
    if (child?.type === 'text') {
      return (child as LexicalTextNode).text
    }
    if (child?.type === 'link') {
      const link = child as LexicalLinkNode
      const url = link.fields?.url || '#'
      const text = renderInline(link.children)
      return (
        <a key={`l-${i}`} href={url} target={link.fields?.newTab ? '_blank' : undefined} rel={link.fields?.newTab ? 'noreferrer' : undefined} className="text-blue-600 underline">
          {text}
        </a>
      )
    }
    return null
  })
}

function renderRichText(content?: { root?: LexicalRoot }) {
  const root = content?.root
  if (!root || !Array.isArray(root.children)) return null
  return root.children.map((node, idx) => {
    if (node.type === 'paragraph') {
      const hasContent = Array.isArray(node.children) && node.children.some((c: LexicalInlineChild) => (c?.type === 'text' && (c as LexicalTextNode).text?.trim()) || c?.type === 'link')
      if (!hasContent) return null
      return <p key={idx} className="mb-4 text-black">{renderInline((node as LexicalParagraphNode).children)}</p>
    }
    if (node.type === 'heading') {
      const text = (node.children || []).map((t: LexicalTextNode) => (t?.type === 'text' ? (t as LexicalTextNode).text : '')).join('')
      const Tag = (((node as LexicalHeadingNode).tag || 'h2') as LexicalHeadingTag)
      return (
        <Tag key={idx} className="mt-8 mb-3 font-extrabold text-black">
          {text}
        </Tag>
      )
    }
    if (node.type === 'list') {
      const listNode = node as LexicalListNode
      const isOrdered = listNode.listType === 'number'
      const items = (listNode.children || []).map((li, i) => {
        const itemText = (li.children || []).map((t: LexicalTextNode) => (t?.type === 'text' ? (t as LexicalTextNode).text : '')).join('')
        return <li key={i} className="mb-1">{itemText}</li>
      })
      return isOrdered ? (
        <ol key={idx} className="list-decimal pl-6 mb-4 text-black">{items}</ol>
      ) : (
        <ul key={idx} className="list-disc pl-6 mb-4 text-black">{items}</ul>
      )
    }
    if (node.type === 'upload') {
      const upload = node as LexicalUploadNode
      const media = upload.value
      const url: string | undefined = media?.url
      if (!url) return null
      return (
        <figure key={idx} className="my-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={toMediaUrl(url)} alt={media?.alt || ''} className="w-full max-w-2xl mx-auto h-auto rounded-lg object-contain" />
          {media?.caption ? <figcaption className="text-sm text-black mt-2 text-center max-w-2xl mx-auto">{media.caption}</figcaption> : null}
        </figure>
      )
    }
    if (node.type === 'quote' || node.type === 'blockquote') {
      const text = (node.children || []).map((t: LexicalTextNode) => (t?.type === 'text' ? (t as LexicalTextNode).text : '')).join('')
      return (
        <blockquote key={idx} className="border-l-4 border-gray-300 pl-4 italic text-black my-6">
          {text}
        </blockquote>
      )
    }
    return null
  })
}

type PageParams = { slug: string }

export default async function BlogPostPage({ params }: { params: Promise<PageParams> }) {
  const resolved = await params
  const post = await fetchPostBySlug(resolved.slug)
  if (!post) return notFound()

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Hero */}
      <section className="w-full bg-white mt-16 md:mt-24">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Cover Image without cropping */}
          <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={post.coverImage?.url ? toMediaUrl(post.coverImage.url) : '/images/post-page.png'}
              alt={post.coverImage?.alt || post.title}
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Right: Title and meta */}
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#111]" style={{ fontFamily: 'Playfair Display, serif' }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-gray-700">
              {getAuthorAvatarUrl(post.author) ? (
                <img src={getAuthorAvatarUrl(post.author)} alt={getAuthorName(post.author)} className="w-9 h-9 rounded-full object-cover" />
              ) : (
                <span className="w-9 h-9 rounded-full bg-gray-200 inline-block" />
              )}
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <span className="font-medium">{getAuthorName(post.author)}</span>
                <span>•</span>
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="bg-white w-full py-10 px-4 flex-1">
        <div className="max-w-3xl mx-auto">
          {/* Categories / Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {(post.categories || []).map((c, i) => (
              <span key={i} className="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-[#1B1C2B]">{c.title}</span>
            ))}
            {(post.tags || []).map((t, i) => (
              <span key={`t-${i}`} className="bg-gray-100 border border-gray-200 rounded px-3 py-1 text-sm text-gray-700">#{t.title}</span>
            ))}
          </div>

          {/* Content */}
          <article className="prose max-w-none text-black">
            {renderRichText(post.content)}
          </article>

          {/* Gallery */}
          {Array.isArray(post.gallery) && post.gallery.length > 0 && (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {post.gallery.map((item, i) => {
                const image = item.image
                const url: string | undefined = typeof image === 'string' ? image : image?.url
                if (!url) return null
                return (
                  <figure key={i} className="w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={toMediaUrl(url)} alt={(typeof image === 'string' ? post.title : image?.alt) || post.title} className="w-full max-w-2xl mx-auto h-auto rounded-lg object-contain" />
                    {item.caption ? <figcaption className="text-sm text-black mt-2 text-center max-w-2xl mx-auto">{item.caption}</figcaption> : null}
                  </figure>
                )
              })}
            </div>
          )}

          {/* Video */}
          {post.video?.oembed && (
            <div className="mt-10 aspect-video w-full">
              <iframe
                src={post.video.oembed}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          {!post.video?.oembed && (() => {
            const file = post.video?.file
            const fileUrl = typeof file === 'string' ? file : file?.url
            return fileUrl
              ? (
                <div className="mt-10 w-full">
                  <video controls className="w-full rounded-lg">
                    <source src={toMediaUrl(fileUrl)} />
                  </video>
                </div>
              )
              : null
          })()}
        </div>
      </div>
    </main>
  )
}


