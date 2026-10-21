import React, { useState } from 'react';
import {
  GLOSSARY,
  GlossaryTerm,
} from '../data/denimData.ts';
import {
  BookOpen,
  Search,
  Filter,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Language } from '../utils/i18n.ts';

interface GlossarySearchProps {
  searchQuery?: string;
  lang?: Language;
}

export const GlossarySearch: React.FC<GlossarySearchProps> = ({ searchQuery = '', lang = 'bn' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [internalQuery, setInternalQuery] = useState<string>('');

  const query = searchQuery || internalQuery;

  const categories = [
    { id: 'All', en: 'All', bn: 'সবগুলো' },
    { id: 'Spinning & Dyeing', en: 'Spinning & Dyeing', bn: 'স্পিনিং ও ডাইং' },
    { id: 'Weaving & Fabric', en: 'Weaving & Fabric', bn: 'উইভিং ও ফ্যাব্রিক' },
    { id: 'Sewing & Machine', en: 'Sewing & Machine', bn: 'সুয়িং ও মেশিনারি' },
    { id: 'Wash & Chemistry', en: 'Wash & Chemistry', bn: 'ওয়াশ ও কেমিস্ট্রি' },
    { id: 'Sustainability', en: 'Sustainability', bn: 'সাসটেইনেবিলিটি' },
  ];

  const filteredTerms = GLOSSARY.filter((t) => {
    const matchesSearch =
      t.term.toLowerCase().includes(query.toLowerCase()) ||
      t.definition.toLowerCase().includes(query.toLowerCase()) ||
      t.relevance.toLowerCase().includes(query.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-6 md:p-8 border border-indigo-500/20 shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            {lang === 'bn' ? 'মডিউল ৮: ডেনিম মার্চেন্ডাইজার টেকনিক্যাল অভিধান' : 'Module 8: The Denim Merchandiser Lexicon'}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? 'টেকনিক্যাল শব্দকোষ ও আন্তর্জাতিক পরিভাষা' : 'Technical Jargon, Acronyms & Standards'}
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {lang === 'bn'
              ? 'Leuco-Indigo এবং Feed-off-the-arm থেকে Jeanologia EIM স্কোর এবং Z-twill টর্ক পর্যন্ত—বায়িং হাউস, ডেনিম মিল এবং ইন্ডাস্ট্রিয়াল লন্ড্রিতে প্রতিদিন ব্যবহৃত ৮০+ পরিভাষার অনুসন্ধানযোগ্য ডিকশনারি।'
              : 'From Leuco-Indigo and Feed-off-the-arm to Jeanologia EIM scoring and Z-twill torque. A searchable dictionary of terms used daily across buying houses, mills, and commercial laundries.'}
          </p>
        </div>
      </div>

      {/* Search and Category Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={
              lang === 'bn'
                ? 'পরিভাষা বা টার্ম লিখে খুঁজুন...'
                : 'Filter terminology...'
            }
            value={internalQuery}
            onChange={(e) => setInternalQuery(e.target.value)}
            className="w-full bg-slate-950 text-xs pl-9 pr-4 py-2 rounded-lg border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                  : 'bg-slate-950 text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'bn' ? cat.bn : cat.en}
            </button>
          ))}
        </div>
      </div>

      {/* Terms Count Badge */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>
          {lang === 'bn'
            ? `প্রদর্শিত হচ্ছে ${filteredTerms.length} টি টেকনিক্যাল পরিভাষা`
            : `Showing ${filteredTerms.length} technical terms`}
        </span>
        {query && (
          <span className="text-amber-400">
            {lang === 'bn' ? `খোঁজা হচ্ছে: "${query}"` : `Filtered by: "${query}"`}
          </span>
        )}
      </div>

      {/* Grid of Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTerms.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between hover:border-indigo-500/40 transition-all shadow-xl space-y-4"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-slate-950 text-indigo-300 border border-slate-800">
                  {item.category}
                </span>
              </div>
              <h4 className="text-base font-bold text-white tracking-tight">{item.term}</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">{item.definition}</p>
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <span className="text-[10px] font-mono uppercase text-amber-400 block mb-0.5 font-bold">
                {lang === 'bn' ? 'মার্চেন্ডাইজার গুরুত্ব:' : 'Merchandiser Relevance:'}
              </span>
              <p className="text-xs text-amber-200/90 leading-relaxed font-medium">{item.relevance}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-dashed border-slate-800 text-slate-400 space-y-2">
          <p className="text-sm">
            {lang === 'bn'
              ? `"${query}" এর সাথে কোনো পরিভাষা মেলেনি।`
              : `No terms matched "${query}".`}
          </p>
          <button
            onClick={() => {
              setInternalQuery('');
              setSelectedCategory('All');
            }}
            className="text-xs text-indigo-400 underline hover:text-indigo-300 cursor-pointer"
          >
            {lang === 'bn' ? 'ফিল্টার রিসেট করুন' : 'Reset filters'}
          </button>
        </div>
      )}
    </div>
  );
};
