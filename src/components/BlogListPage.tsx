import React from 'react';
import { ALL_BLOG_POSTS } from '../data/blogPosts';
import { Breadcrumbs } from './Breadcrumbs';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { updateDocumentSeo } from '../utils/seo';

interface BlogListPageProps {
  onNavigate: (tab: string, slug?: string) => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  Guides: 'bg-emerald-50 text-emerald-700',
  Comparisons: 'bg-sky-50 text-sky-700',
};

export function BlogListPage({ onNavigate }: BlogListPageProps) {
  React.useEffect(() => {
    updateDocumentSeo({
      path: '/blog',
      title: 'Admission Guides & Blog 2026 — AggreGate',
      description:
        'Practical guides for Pakistani university admissions: how to calculate NUST, FAST, UET aggregates, closing merit analysis, and tips to improve your merit.',
      tab: 'calculator',
      schemaType: 'WebPage',
    });
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Breadcrumbs items={[{ label: 'Admission Guides' }]} onNavigate={onNavigate} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-6 h-6 text-emerald-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">AggreGate Guides</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            University Admission Guides 2026
          </h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Step-by-step explainers, university comparisons, and merit strategy — written from the same
            verified formulas that power our calculators. Last updated October 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ALL_BLOG_POSTS.map((post) => (
            <button
              key={post.slug}
              onClick={() => onNavigate('blog-post', post.slug)}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all text-left cursor-pointer flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category] || 'bg-slate-100 text-slate-700'}`}>
                  {post.category}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{post.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">{post.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400">{post.date}</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                  Read guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
