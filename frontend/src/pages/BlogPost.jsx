import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { POSTS } from '../data/blog';
import Reveal from '../components/Reveal';

const BlogPost = () => {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article data-testid="blog-post-page" className="bg-[#1A1A1A]">
      {/* Hero */}
      <header className="relative h-[70vh] min-h-[480px] overflow-hidden flex items-end">
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent" />
        <div className="relative z-10 max-w-[1100px] mx-auto w-full px-6 md:px-10 pb-14 md:pb-20">
          <Link to="/blog" className="inline-flex items-center gap-2 font-heading text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
            <ChevronLeft size={14} /> Back to journal
          </Link>
          <div className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-4">{post.tag}</div>
          <h1 className="font-display text-4xl md:text-6xl text-white leading-[1.0] tracking-tight max-w-4xl">
            {post.title}
          </h1>
          <div className="mt-6 font-heading text-[10px] tracking-[0.3em] uppercase text-white/70">
            {post.author} · {new Date(post.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="max-w-[760px] mx-auto px-6 md:px-10 py-20 md:py-28 space-y-7 text-lg leading-[1.85] text-white/85">
        {post.body.map((para, i) => (
          <Reveal key={i} delay={i * 80}>
            <p>{para}</p>
          </Reveal>
        ))}
      </section>

      <div className="gold-divider mx-6 md:mx-auto md:max-w-[760px]" />

      {/* Related */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-5">Continue reading</div>
        <h3 className="font-display text-3xl md:text-4xl text-white mb-10">More from the journal</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group block border-t border-[#C9A84C]/15 pt-5"
            >
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-2">{p.tag}</div>
              <h4 className="font-display text-xl md:text-2xl text-white leading-tight group-hover:text-[#C9A84C] transition-colors">{p.title}</h4>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
};

export default BlogPost;
