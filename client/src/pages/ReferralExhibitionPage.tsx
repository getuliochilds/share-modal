import { useState } from 'react';
import { ChevronDown, Mail, Users, TrendingUp, Gift, Zap } from 'lucide-react';
import { toast } from 'sonner';

/**
 * Design Philosophy: Premium Referral Program Showcase
 * 
 * This page showcases the referral program with:
 * - Eye-catching hero section with value proposition
 * - Two reward cards (referral bonus + commission)
 * - Live rewards statistics
 * - Affiliate program opportunities
 * - Expandable FAQ section
 * - Modern dark theme with neon accents
 */

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function ReferralExhibitionPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactEmail, setContactEmail] = useState('');

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'How does the referral system work?',
      answer: 'When you share your unique referral link with friends, they sign up using your link. Once they complete their first deposit and start playing, you earn rewards based on their activity.',
    },
    {
      id: '2',
      question: 'How much can I earn from my referral?',
      answer: 'You can earn $1,000 for each friend who signs up through your referral link, plus 25% commission on all their wagers. There is no limit to how much you can earn!',
    },
    {
      id: '3',
      question: 'Are there any banners I can use to advertise?',
      answer: 'Yes! We provide a variety of marketing materials including banners, text links, and promotional graphics. Contact our affiliate team for access to our full marketing toolkit.',
    },
    {
      id: '4',
      question: 'What is USD reward and how does it work?',
      answer: 'USD rewards are direct cash payments to your account. When your referrals reach certain milestones, you receive instant USD rewards that can be withdrawn anytime.',
    },
    {
      id: '5',
      question: 'I have big audience, how I can get special deals?',
      answer: 'If you have a large following, we offer customized affiliate programs with higher commission rates and exclusive benefits. Contact us at jonata@bcgame.com to discuss your opportunities.',
    },
    {
      id: '6',
      question: 'How many referral links can I create if I have different websites/accounts?',
      answer: 'You can create multiple referral links for different platforms and campaigns. Each link tracks independently, allowing you to optimize your marketing strategy.',
    },
    {
      id: '7',
      question: 'Can I see the data of my referral?',
      answer: 'Yes! Your affiliate dashboard provides real-time analytics including referral counts, conversion rates, earnings, and detailed performance metrics.',
    },
    {
      id: '8',
      question: 'Can I send tip or reward to my referrals?',
      answer: 'Yes, you can send tips and bonuses to your referrals directly from your dashboard. This helps incentivize them to play more and earn you higher commissions.',
    },
  ];

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const handleContactSubmit = () => {
    if (!contactEmail) {
      toast.error('Please enter your email address');
      return;
    }
    toast.success('Your inquiry has been sent! We will contact you soon.');
    setContactEmail('');
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-slate-800/80 backdrop-blur-md border-b border-slate-700">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">推荐计划</h1>
          </div>
          <a href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            返回首页
          </a>
        </div>
      </nav>

      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-700 p-12 md:p-16">
            {/* Background Image */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663280162108/PSRwBnrFhQcUHeQHKcsq2Y/referral-hero-bg-N6Xwoj7skowZwM94x2YBsa.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Invite Friends to Earn
              </h2>
              <p className="text-3xl md:text-4xl font-bold mb-8">
                <span className="text-green-400">$1,000.00</span>
                <span className="text-slate-400 mx-3">+</span>
                <span className="text-green-400">25% Commission</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition-colors">
                  Sign up & Earn
                </button>
                <button className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors border border-slate-600">
                  Referral Terms & Conditions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Reward Cards Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Referral Rewards */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get your <span className="text-green-400">$1,000.00</span>
                  </h3>
                  <p className="text-slate-400">referral rewards</p>
                </div>
                <Gift className="w-8 h-8 text-green-400" />
              </div>

              <p className="text-slate-300 mb-8">
                Every friend you invite, will get you $1,000.00, the more you invite, the more you will get!
              </p>

              {/* Icon Preview */}
              <div className="mb-8 flex justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663280162108/PSRwBnrFhQcUHeQHKcsq2Y/referral-rewards-icon-eDniJgcsmiEoP4y6Pwuia5.webp"
                  alt="$1000 Reward"
                  className="w-32 h-32 object-contain"
                />
              </div>

              <button className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition-colors">
                View Details
              </button>
            </div>

            {/* Card 2: Commission Rewards */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get your <span className="text-green-400">25%</span>
                  </h3>
                  <p className="text-slate-400">commission rewards</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>

              <p className="text-slate-300 mb-8">
                You will receive commission rewards every time your friends place wager based on the games.
              </p>

              {/* Icon Preview */}
              <div className="mb-8 flex justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663280162108/PSRwBnrFhQcUHeQHKcsq2Y/referral-commission-icon-hHA8HFKgEjtXKLCuMJPMDy.webp"
                  alt="25% Commission"
                  className="w-32 h-32 object-contain"
                />
              </div>

              <button className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>
        </section>

        {/* Live Rewards Section */}
        <section className="mb-16">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-bold text-white">Live Rewards</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-400 text-sm mb-2">Total Rewards Sent To-Date</p>
                <p className="text-4xl font-bold text-green-400">$0.00</p>
              </div>
              <div className="flex items-center justify-end">
                <button className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliate Program Section */}
        <section className="mb-16">
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-700 p-12">
            {/* Background Image */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663280162108/PSRwBnrFhQcUHeQHKcsq2Y/referral-affiliate-bg-RwVCkkic7tc9KhZZQ3V9e7.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Learn more about our <span className="text-green-400">Affiliate program</span>
              </h3>

              <p className="text-slate-300 mb-6">
                If you have a large audience and followers. We have special conditions for you to customize your referral program!
              </p>

              <p className="text-slate-300 mb-8">
                If you can invite players and their wager amount reaches a billion dollars and above, you will get your own customized casino! You can set up a casino website with your domain and design style.
              </p>

              <div className="mb-8 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                <p className="text-slate-300 text-sm mb-2">For more details, please contact us</p>
                <p className="text-green-400 font-mono text-lg">jonata@bcgame.com</p>
              </div>

              <button
                onClick={() => setShowContactForm(true)}
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition-colors"
              >
                Send Now
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h3>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-slate-600 transition-colors"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                >
                  <span className="text-left font-semibold text-white">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedFAQ === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                {expandedFAQ === item.id && (
                  <div className="px-6 py-4 bg-slate-700/30 border-t border-slate-700">
                    <p className="text-slate-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Earning?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of affiliates who are earning passive income by referring friends. Sign up today and start building your referral network!
            </p>
            <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition-colors">
              Sign up & Earn
            </button>
          </div>
        </section>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 max-w-md w-full mx-4">
            <h4 className="text-xl font-bold text-white mb-6">Contact Affiliate Team</h4>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-green-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowContactForm(false)}
                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleContactSubmit}
                className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-black rounded-lg font-medium transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
