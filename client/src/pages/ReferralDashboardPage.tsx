import { useState } from 'react';
import {
  Copy,
  Facebook,
  Twitter,
  Send,
  MessageCircle,
  Mail,
  Share2,
  TrendingUp,
  Users,
  Gift,
  Zap,
} from 'lucide-react';
import { toast } from 'sonner';

/**
 * Design Philosophy: Premium Referral Dashboard
 *
 * This page provides a comprehensive referral management interface with:
 * - Tab navigation for different dashboard views
 * - Referral link and code management with copy functionality
 * - Social media sharing integration
 * - Real-time earnings statistics
 * - Rewards activity tracking
 * - Live rewards leaderboard
 */

interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface LiveReward {
  username: string;
  amount: string;
}

export default function ReferralDashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [hasActivities, setHasActivities] = useState(false);

  const tabs: Tab[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'rewards', label: 'My Rewards', icon: '🎁' },
    { id: 'codes', label: 'Referral Codes & Friends', icon: '👥' },
    { id: 'rules', label: 'Rate & Rules', icon: '📋' },
    { id: 'banners', label: 'Download Banners', icon: '🖼️' },
  ];

  const referralLink = 'https://bc.game/i-3mbn9ye6g-n/';
  const referralCode = '3mbn9ye6g';

  const socialPlatforms = [
    { name: 'Facebook', icon: Facebook, color: '#1877F2' },
    { name: 'X', icon: Twitter, color: '#000000' },
    { name: 'Telegram', icon: Send, color: '#0088cc' },
    { name: 'WhatsApp', icon: MessageCircle, color: '#25D366' },
    { name: 'Email', icon: Mail, color: '#EA4335' },
  ];

  const liveRewards: LiveReward[] = [
    { username: 'MisterSachaa', amount: '+0.09' },
    { username: 'Munnaf', amount: '+0.21' },
    { username: 'Aliuux212', amount: '+₹5.54' },
    { username: 'minssaw7', amount: '+2.5' },
    { username: 'Krishan_Malhotra', amount: '+12' },
    { username: 'Yuvraj_j3131', amount: '+₹9.97' },
    { username: 'korsh332211', amount: '+0.5' },
    { username: 'jareda boy', amount: '+₹7.16' },
    { username: '13fffffff', amount: '+0.2' },
    { username: 'morningperson_qin', amount: '+0.5' },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const handleShare = (platform: string) => {
    const message = `Join me and earn $1,000 + 25% commission! Use my referral link: ${referralLink}`;
    toast.success(`Share on ${platform} functionality would be implemented here`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-slate-800/80 backdrop-blur-md border-b border-slate-700">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">推荐仪表板</h1>
          </div>
          <a href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            返回首页
          </a>
        </div>
      </nav>

      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-green-500 text-black'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab Content */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-700 rounded-xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Invite a Friend to Get
              </h2>
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div>
                  <p className="text-green-400 text-3xl font-bold">$1,000.00</p>
                  <p className="text-slate-400">Referral Rewards</p>
                </div>
                <div>
                  <p className="text-green-400 text-3xl font-bold">25%</p>
                  <p className="text-slate-400">Commission Rewards</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-2xl">
                Get $1,000.00 for each friend you invite, plus up to 25% commission on their wagers. Enjoy consistent commission, whether they win or lose, in our Casino and Sportsbook. Start earning now!
              </p>
              <button className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                Referral Terms & Conditions
              </button>
            </section>

            {/* Referral Link and Code Section */}
            <section className="grid md:grid-cols-2 gap-8">
              {/* Left: Link and Code */}
              <div className="space-y-6">
                {/* Referral Link */}
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                  <p className="text-slate-400 text-sm mb-3">Referral Link</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={referralLink}
                      readOnly
                      className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300 text-sm"
                    />
                    <button
                      onClick={() => handleCopy(referralLink, 'Referral Link')}
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-black rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy
                    </button>
                  </div>
                </div>

                {/* Referral Code */}
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                  <p className="text-slate-400 text-sm mb-3">Referral Code</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={referralCode}
                      readOnly
                      className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-300 text-sm"
                    />
                    <button
                      onClick={() => handleCopy(referralCode, 'Referral Code')}
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-black rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy
                    </button>
                  </div>
                </div>

                {/* Social Share */}
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                  <p className="text-slate-400 text-sm mb-4">Share via socials</p>
                  <div className="flex gap-3 flex-wrap">
                    {socialPlatforms.map((platform) => {
                      const Icon = platform.icon;
                      return (
                        <button
                          key={platform.name}
                          onClick={() => handleShare(platform.name)}
                          className="p-3 rounded-lg hover:opacity-80 transition-opacity"
                          style={{ backgroundColor: platform.color }}
                          title={platform.name}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right: Statistics */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                    <p className="text-slate-400 text-sm mb-2">Total Reward</p>
                    <p className="text-3xl font-bold text-white">$0.00</p>
                  </div>
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                    <p className="text-slate-400 text-sm mb-2">Total Friends</p>
                    <p className="text-3xl font-bold text-white">0</p>
                  </div>
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                    <p className="text-slate-400 text-sm mb-2">Referral Rewards</p>
                    <p className="text-2xl font-bold text-green-400">$0.00</p>
                  </div>
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                    <p className="text-slate-400 text-sm mb-2">Commission Rewards</p>
                    <p className="text-2xl font-bold text-green-400">$0.00</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Rewards Activities Section */}
            <section className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Rewards Activities</h3>

              {!hasActivities ? (
                <div className="text-center py-12">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663280162108/PSRwBnrFhQcUHeQHKcsq2Y/referral-empty-state-ghVSZ6MHq9rxjDsBAfPAZj.webp"
                    alt="No activities"
                    className="w-32 h-32 mx-auto mb-4 object-contain"
                  />
                  <p className="text-slate-400 mb-2">No info yet</p>
                  <p className="text-slate-500">Invite friends to join you now!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Activities would be listed here */}
                </div>
              )}
            </section>

            {/* Live Rewards Section */}
            <section className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Live Rewards</h3>
              </div>

              <p className="text-slate-400 mb-6">
                Total Rewards Sent To-Date:{' '}
                <span className="text-green-400 font-bold text-lg">$25,354,693.04</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {liveRewards.map((reward, index) => (
                  <div
                    key={index}
                    className="bg-slate-700/50 border border-slate-600 rounded-lg p-4 hover:border-green-500/50 transition-colors"
                  >
                    <p className="text-white font-medium">{reward.username}</p>
                    <p className="text-green-400 font-bold text-lg">{reward.amount}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Other Tabs - Placeholder Content */}
        {activeTab !== 'dashboard' && (
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
            <p className="text-slate-400 mb-4">
              {tabs.find((t) => t.id === activeTab)?.label} content would be displayed here
            </p>
            <p className="text-slate-500 text-sm">
              This is a placeholder for the {activeTab} tab functionality
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
