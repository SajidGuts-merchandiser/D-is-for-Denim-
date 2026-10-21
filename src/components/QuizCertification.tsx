import React, { useState } from 'react';
import {
  DENIM_QUIZ,
  QuizQuestion,
} from '../data/denimData.ts';
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  UserCheck,
  Printer,
} from 'lucide-react';
import { Language } from '../utils/i18n.ts';

interface QuizCertificationProps {
  lang?: Language;
}

export const QuizCertification: React.FC<QuizCertificationProps> = ({ lang = 'bn' }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [candidateName, setCandidateName] = useState<string>(
    lang === 'bn' ? 'ডেনিম মার্চেন্ডাইজার' : 'Denim Merchandiser'
  );

  const currentQ = DENIM_QUIZ[currentQuestionIndex];
  const totalQuestions = DENIM_QUIZ.length;
  const isAnswered = selectedAnswers[currentQ.id] !== undefined;

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQ.id]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
  };

  // Calculate score
  let correctCount = 0;
  DENIM_QUIZ.forEach((q) => {
    if (selectedAnswers[q.id] === q.correctIndex) {
      correctCount += 1;
    }
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);

  const getRank = () => {
    if (percentage >= 90)
      return {
        titleEn: 'Master Denim Technologist & Sourcing Lead',
        titleBn: 'মাস্টার ডেনিম টেকনোলজিস্ট ও সোর্সিং লিড',
        color: 'text-amber-400',
      };
    if (percentage >= 70)
      return {
        titleEn: 'Senior Denim Apparel Merchandiser',
        titleBn: 'সিনিয়র ডেনিম অ্যাপারেল মার্চেন্ডাইজার',
        color: 'text-indigo-400',
      };
    if (percentage >= 50)
      return {
        titleEn: 'Associate Denim Sourcing Specialist',
        titleBn: 'অ্যাসোসিয়েট ডেনিম সোর্সিং স্পেশালিস্ট',
        color: 'text-cyan-400',
      };
    return {
      titleEn: 'Apprentice Denim Specialist',
      titleBn: 'শিক্ষানবিশ ডেনিম স্পেশালিস্ট',
      color: 'text-slate-400',
    };
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-6 md:p-8 border border-indigo-500/20 shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            {lang === 'bn' ? 'মডিউল ৭: টেকনিক্যাল মূল্যায়ন ও প্রফেশনাল সার্টিফিকেশন' : 'Module 7: Technical Evaluation & Certification'}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'bn'
              ? 'ডেনিম মার্চেন্ডাইজার প্রফেশনাল পরীক্ষা ও মূল্যায়ন'
              : 'Denim Merchandiser Professional Exam'}
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {lang === 'bn'
              ? 'রিং স্পিনিং, রোপ ডাইং কেমিস্ট্রি, ৫-পকেট সুয়িং কনস্ট্রাকশন, ইউনিয়ন স্পেশাল রোপিং হেম, সেলুলেজ এনজাইম এবং জিয়ানোলোজিয়া EIM সাসটেইনেবিলিটি স্ট্যান্ডার্ডে আপনার দক্ষতা যাচাই করুন।'
              : 'Test your technical knowledge across ring spinning, rope dyeing chemistry, 5-pocket sewing engineering, Union Special roping, cellulase enzymes, and Jeanologia EIM sustainability standards.'}
          </p>
        </div>
      </div>

      {!isSubmitted ? (
        /* Question Card */
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 md:p-8 shadow-xl space-y-6">
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-mono text-indigo-400 font-bold uppercase">
                {lang === 'bn'
                  ? `প্রশ্ন ${currentQuestionIndex + 1} / ${totalQuestions}`
                  : `Question ${currentQuestionIndex + 1} of ${totalQuestions}`}
              </span>
              <span className="text-slate-400 font-mono">
                {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%{' '}
                {lang === 'bn' ? 'সম্পন্ন' : 'Complete'}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold text-white leading-relaxed">
              {currentQ.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, oIdx) => {
              const selectedThis = selectedAnswers[currentQ.id] === oIdx;
              const isCorrect = currentQ.correctIndex === oIdx;

              let buttonStyle = 'bg-slate-950/80 border-slate-800 text-slate-200 hover:border-slate-700';

              if (isAnswered) {
                if (isCorrect) {
                  buttonStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/40';
                } else if (selectedThis) {
                  buttonStyle = 'bg-red-950/60 border-red-500 text-red-200 ring-2 ring-red-500/40';
                } else {
                  buttonStyle = 'bg-slate-950/40 border-slate-850 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelectOption(oIdx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${buttonStyle}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {String.fromCharCode(65 + oIdx)}
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed">{opt}</span>
                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-auto" />
                  )}
                  {isAnswered && selectedThis && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 ml-auto" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback Explanation Card */}
          {isAnswered && (
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
                  {lang === 'bn' ? 'টেকনিক্যাল বিশ্লেষণ (Technical Explanation):' : 'Technical Explanation:'}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed mt-0.5">{currentQ.explanation}</p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-[10px] font-mono uppercase text-amber-400 block font-bold">
                  {lang === 'bn' ? 'মার্চেন্ডাইজার সোর্সিং নির্দেশনা (Merchandiser Insight):' : 'Merchandiser Sourcing Insight:'}
                </span>
                <p className="text-xs text-amber-200/90 leading-relaxed mt-0.5">
                  {currentQ.merchandiserInsight}
                </p>
              </div>
            </div>
          )}

          {/* Next Button */}
          <div className="flex justify-end pt-4 border-t border-slate-800">
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                isAnswered
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>
                {currentQuestionIndex === totalQuestions - 1
                  ? lang === 'bn'
                    ? 'সার্টিফিকেট দেখুন'
                    : 'View Certificate'
                  : lang === 'bn'
                  ? 'পরবর্তী প্রশ্ন'
                  : 'Next Question'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Results & Certificate */
        <div className="space-y-6">
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 shadow-xl flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Award className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white">
              {lang === 'bn' ? 'ডেনিম মার্চেন্ডাইজার পরীক্ষার ফলাফল' : 'Denim Merchandiser Exam Results'}
            </h3>
            <div className="text-4xl font-black font-mono text-emerald-400">
              {percentage}%
            </div>
            <p className="text-sm text-slate-300">
              {lang === 'bn' ? (
                <>
                  আপনি <strong className="text-white font-bold">{totalQuestions}</strong> টির মধ্যে{' '}
                  <strong className="text-white font-bold">{correctCount}</strong> টি প্রশ্নের সঠিক উত্তর দিয়েছেন।
                </>
              ) : (
                <>
                  You scored <strong className="text-white font-bold">{correctCount}</strong> out of{' '}
                  <strong className="text-white font-bold">{totalQuestions}</strong> correct.
                </>
              )}
            </p>

            <div className={`text-sm font-bold uppercase tracking-wider ${getRank().color}`}>
              {lang === 'bn' ? `অর্জিত পদমর্যাদা: ${getRank().titleBn}` : `Conferred Rank: ${getRank().titleEn}`}
            </div>

            {/* Name Input */}
            <div className="w-full max-w-xs mt-2">
              <label className="block text-[11px] text-slate-400 mb-1 text-left">
                {lang === 'bn' ? 'সার্টিফিকেটের জন্য পরীক্ষার্থীর নাম:' : 'Enter Candidate Name for Certificate:'}
              </label>
              <input
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                className="w-full bg-slate-950 text-xs px-3 py-2 rounded-lg border border-slate-700 text-white font-semibold text-center focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Printable Certificate Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 p-8 md:p-12 border-4 border-amber-500/40 shadow-2xl text-center space-y-6">
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-400" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-400" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-400" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-400" />

            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold">
                DENIM MERCHANDISER ACADEMY &bull; TECHNICAL ACCREDITATION
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {lang === 'bn' ? 'টেকনিক্যাল কম্পিটেন্সি সার্টিফিকেট' : 'Certificate of Technical Competency'}
              </h2>
            </div>

            <div className="text-xs text-slate-300">
              {lang === 'bn' ? 'এতদ্বারা প্রত্যয়ন করা যাচ্ছে যে' : 'This is to officially certify that'}
            </div>
            <div className="text-2xl md:text-3xl font-black text-amber-300 font-serif tracking-wide border-b border-amber-500/30 pb-2 max-w-md mx-auto">
              {candidateName || (lang === 'bn' ? 'ডেনিম মার্চেন্ডাইজার' : 'Denim Merchandiser')}
            </div>

            <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
              {lang === 'bn' ? (
                <>
                  সফলভাবে <strong>ডেনিম ফ্যাব্রিক ইঞ্জিনিয়ারিং</strong> (রিং স্পিনিং, রোপ ডাইং, ৩/১ টুইল), <strong>গার্মেন্ট কনস্ট্রাকশন</strong> (Union Special 43200G রোপিং, টেক্স স্পেসিফিকেশন), <strong>ওয়েট ও ড্রাই লন্ড্রি কেমিস্ট্রি</strong> এবং <strong>Jeanologia EIM সাসটেইনেবিলিটি মানদণ্ডে</strong> পেশাদার দক্ষতা প্রদর্শন করেছেন।
                </>
              ) : (
                <>
                  Has demonstrated professional proficiency in <strong>Denim Fabric Engineering</strong> (Ring spinning, rope dyeing, twill weaves), <strong>Garment Construction</strong> (Union Special 43200G roping, Tex specs), <strong>Wet & Dry Wash Chemistry</strong>, and <strong>EIM Sustainable Benchmarking</strong>.
                </>
              )}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-4 font-mono text-xs text-slate-400">
              <div>
                <span className="block text-[10px] text-slate-500">
                  {lang === 'bn' ? 'প্রাপ্ত স্কোর' : 'SCORE ATTAINED'}
                </span>
                <span className="text-white font-bold">{percentage}% Grade</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-500">
                  {lang === 'bn' ? 'ইস্যুর তারিখ' : 'DATE ISSUED'}
                </span>
                <span className="text-white font-bold">{new Date().toISOString().split('T')[0]}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-500">
                  {lang === 'bn' ? 'সনদ নম্বর' : 'ACCREDITATION ID'}
                </span>
                <span className="text-indigo-400 font-bold">DNM-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handleRestart}
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              {lang === 'bn' ? 'পুনরায় পরীক্ষা দিন' : 'Retake Exam'}
            </button>
            <button
              onClick={() => window.print()}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              {lang === 'bn' ? 'সার্টিফিকেট প্রিন্ট করুন' : 'Print Certificate'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
