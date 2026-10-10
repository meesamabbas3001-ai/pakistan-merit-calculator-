import React, { useState } from 'react';
import { getBlogPost, ALL_BLOG_POSTS } from '../data/blogPosts';
import { UNIVERSITIES_DATA } from '../data/universities';
import { Breadcrumbs } from './Breadcrumbs';
import { Clock, ChevronDown, Calculator, ArrowRight, BookOpen } from 'lucide-react';
import { updateDocumentSeo } from '../utils/seo';

interface BlogPostPageProps {
  slug?: string;
  onNavigate: (tab: string, slug?: string) => void;
}

export function BlogPostPage({ slug, onNavigate }: BlogPostPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const post = getBlogPost(slug);

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
    if (post) {
      updateDocumentSeo({
        path: `/blog/${post.slug}`,
        title: `${post.title} — AggreGate`,
        description: post.description,
        tab: 'calculator',
        schemaType: 'WebPage',
        faqItems: post.faqs.map((f) => ({ question: f.question, answer: f.answer })),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
        <Breadcrumbs items={[{ label: 'Guides', href: '/blog' }, { label: 'Not found' }]} onNavigate={onNavigate} />
        <div className="max-w-3xl mx-auto px-4 py-16 text-center flex-grow">
          <h1 className="text-2xl font-extrabold text-slate-900 mb-4">Guide not found</h1>
          <button onClick={() => onNavigate('blog')} className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl text-sm">
            ← Back to all guides
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = ALL_BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedUnis = UNIVERSITIES_DATA.filter((u) => post.relatedCalculators.includes(u.id));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Breadcrumbs
        items={[{ label: 'Admission Guides', href: '/blog' }, { label: post.title }]}
        onNavigate={(path) => {
          if (path === '/blog') onNavigate('blog');
          else onNavigate('calculator');
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
          <span className="text-xs text-slate-400">· {post.date}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-slate-600 text-base leading-relaxed mb-8 border-l-4 border-emerald-500 pl-4">
          {post.intro}
        </p>

        {post.sections.map((section, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">{section.heading}</h2>
            {section.paragraphs.map((para, j) => (
              <p key={j} className="text-slate-700 text-[15px] leading-relaxed mb-3">
                {para}
              </p>
            ))}
            {section.list && (
              <ul className="list-disc list-inside space-y-2 text-[15px] text-slate-700 bg-white rounded-xl border border-slate-200 p-5">
                {section.list.map((item, k) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Try the calculator CTA */}
        <div className="bg-emerald-700 rounded-2xl p-6 mb-10 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="w-5 h-5" />
            <h2 className="text-lg font-bold">Put it into practice</h2>
          </div>
          <p className="text-emerald-100 text-sm mb-4">
            Reading is good — calculating is better. Run your own numbers through the free merit calculator now.
          </p>
          <button
            onClick={() => onNavigate('calculator')}
            className="px-5 py-2.5 bg-white text-emerald-800 font-semibold text-sm rounded-xl hover:bg-emerald-50 transition-colors cursor-pointer"
          >
            Calculate my aggregate →
          </button>
        </div>

        {/* FAQs */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Frequently asked questions</h2>
          <div className="space-y-3">
            {post.faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                >
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">{f.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {f.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related calculators */}
        {relatedUnis.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Related calculators</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {relatedUnis.map((u) => (
                <button
                  key={u.id}
                  onClick={() => onNavigate('universities', u.id)}
                  className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-700 transition-colors text-left cursor-pointer"
                >
                  {u.shortName} Merit Calculator →
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Related guides */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">More guides</h2>
          </div>
          <div className="space-y-3">
            {relatedPosts.map((p) => (
              <button
                key={p.slug}
                onClick={() => onNavigate('blog-post', p.slug)}
                className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-left hover:border-emerald-300 transition-colors cursor-pointer flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-slate-900 text-sm">{p.title}</span>
                <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-slate-500">
          Last updated: {post.date}. Admission formulas change between cycles — verify against the official
          university portal before applying.
        </p>
      </article>
    </div>
  );
}
