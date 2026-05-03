import { useState } from 'react';
import { Copy, Check, ArrowRight, Star, Zap, Gift, Crown, TrendingUp, Users, Shield, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

/**
 * Design Philosophy: Premium Rewards & Benefits Showcase
 * 
 * This page showcases the complete platform benefits ecosystem:
 * - Free user benefits and upgrade path
 * - VIP user privileges and exclusive access
 * - Referral rewards system with tiered benefits
 * - Social proof and success stories
 * - Clear call-to-action for registration and sharing
 */

export default function SharePage() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://referral.app/join?code=BESTFRIEND2024';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      toast.success('链接已复制！');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('复制失败，请重试');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🎁</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">平台权益中心</h1>
          </div>
          <a href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            返回首页
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663280162108/PSRwBnrFhQcUHeQHKcsq2Y/share-page-hero-bg-8ckASsMSLcAZ4ZTHFVaBda.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              更多福利，更多收益
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              从注册用户到 VIP 会员，每一步都能获得更多奖励。邀请朋友，一起享受平台的所有权益。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                立即注册
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg font-semibold rounded-lg border-2">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              权益对比
            </h2>
            <p className="text-lg text-gray-600">
              看看注册用户和 VIP 用户分别能享受哪些权益
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free User Benefits */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">注册用户</h3>
              </div>

              <ul className="space-y-4">
                {[
                  { icon: '💰', title: '基础奖励', desc: '邀请朋友获得现金奖励' },
                  { icon: '🎁', title: '欢迎福利', desc: '注册即送 $10 代金券' },
                  { icon: '📊', title: '数据统计', desc: '查看邀请和收益数据' },
                  { icon: '🌍', title: '社交分享', desc: '分享到多个社交媒体' },
                  { icon: '⭐', title: '基础徽章', desc: '获得成就徽章和排名' },
                  { icon: '📱', title: '移动应用', desc: '随时随地管理账户' },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{benefit.title}</p>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </ul>

              <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                立即注册
              </Button>
            </div>

            {/* VIP Benefits */}
            <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 rounded-2xl p-8 border-2 border-amber-400 hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                ⭐ 推荐
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">VIP 会员</h3>
              </div>

              <ul className="space-y-4">
                {[
                  { icon: '💎', title: '高级奖励', desc: '邀请奖励提升 50%' },
                  { icon: '🎊', title: '专属福利', desc: '每月额外 $50 奖励' },
                  { icon: '📈', title: '优先级数据', desc: '实时数据分析和报告' },
                  { icon: '👑', title: 'VIP 特权', desc: '优先客服和专属支持' },
                  { icon: '🏆', title: '金牌徽章', desc: '独家成就和排行榜' },
                  { icon: '🎯', title: '早期访问', desc: '新功能和活动优先体验' },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{benefit.title}</p>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </ul>

              <Button className="w-full mt-8 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                升级到 VIP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              详细权益说明
            </h2>
            <p className="text-lg text-gray-600">
              了解每一项权益的具体内容和使用方式
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '💰',
                title: '现金奖励',
                desc: '邀请每位朋友注册并激活账户，即可获得 $10 现金奖励，无上限。',
                vip: '升级到 VIP 后，每次奖励提升至 $15',
              },
              {
                icon: '🎁',
                title: '欢迎福利',
                desc: '新用户注册即送 $10 代金券，可用于平台内所有消费。',
                vip: 'VIP 用户邀请的新用户额外获得 $5 代金券',
              },
              {
                icon: '🏆',
                title: '阶梯奖励',
                desc: '邀请 5 人获得 $60，10 人获得 $150 + VIP 升级资格。',
                vip: 'VIP 用户阶梯奖励翻倍，邀请 5 人获得 $120',
              },
              {
                icon: '👑',
                title: 'VIP 特权',
                desc: '享受优先客服支持、专属活动邀请和独家优惠。',
                vip: '每月额外 $50 VIP 奖励和专属礼物',
              },
              {
                icon: '📊',
                title: '数据分析',
                desc: '实时查看邀请数据、转化率和收益统计。',
                vip: '获得高级分析报告和预测工具',
              },
              {
                icon: '🌟',
                title: '成就徽章',
                desc: '完成任务获得徽章，展示在个人资料中。',
                vip: '解锁独家金牌徽章和排行榜排名',
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{benefit.desc}</p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-xs font-semibold text-amber-900 mb-1">👑 VIP 升级</p>
                  <p className="text-xs text-amber-800">{benefit.vip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral System */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              推荐系统如何运作
            </h2>
            <p className="text-lg text-white/90">
              四个简单步骤，开始赚取收益
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: '1',
                title: '分享链接',
                desc: '复制您的个性化推荐链接，分享给朋友',
                icon: '🔗',
              },
              {
                step: '2',
                title: '朋友注册',
                desc: '朋友使用您的链接注册账户',
                icon: '👥',
              },
              {
                step: '3',
                title: '激活账户',
                desc: '朋友完成首次操作或消费',
                icon: '✅',
              },
              {
                step: '4',
                title: '获得奖励',
                desc: '您立即获得现金奖励和奖金',
                icon: '💰',
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="text-3xl font-bold mb-3">{item.step}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-white/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Reward Tiers */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-8 text-center">奖励等级</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  tier: '青铜',
                  range: '0-4 人',
                  rewards: ['$10/人 现金奖励', '欢迎奖金', '青铜徽章'],
                  color: 'from-amber-600 to-amber-700',
                },
                {
                  tier: '白银',
                  range: '5-14 人',
                  rewards: ['$12/人 现金奖励', '额外 $20 奖金', '白银徽章', '优先支持'],
                  color: 'from-gray-400 to-gray-500',
                },
                {
                  tier: '黄金',
                  range: '15-49 人',
                  rewards: ['$15/人 现金奖励', '额外 $50 奖金', '黄金徽章', '专属支持'],
                  color: 'from-yellow-400 to-yellow-500',
                },
                {
                  tier: '铂金',
                  range: '50+ 人',
                  rewards: ['$20/人 现金奖励', '无限奖金', '铂金徽章', '个人经理'],
                  color: 'from-blue-400 to-blue-500',
                },
              ].map((tier, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${tier.color} rounded-xl p-6 text-white`}
                >
                  <h4 className="text-2xl font-bold mb-2">{tier.tier}</h4>
                  <p className="text-white/80 text-sm mb-4">{tier.range} 邀请</p>
                  <ul className="space-y-2">
                    {tier.rewards.map((reward, i) => (
                      <li key={i} className="text-sm flex items-center gap-2">
                        <span>✓</span> {reward}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              现在就开始分享
            </h2>
            <p className="text-lg text-gray-600">
              复制您的推荐链接，分享到社交媒体，邀请朋友加入
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* Referral Link */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                您的推荐链接
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 font-mono"
                />
                <button
                  onClick={handleCopyLink}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      已复制
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      复制
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Share Platforms */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <label className="block text-sm font-semibold text-gray-800 mb-4">
                分享到社交媒体
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'whatsapp', name: 'WhatsApp', emoji: '💬' },
                  { id: 'facebook', name: 'Facebook', emoji: '👍' },
                  { id: 'twitter', name: 'X', emoji: '𝕏' },
                  { id: 'telegram', name: 'Telegram', emoji: '✈️' },
                  { id: 'linkedin', name: 'LinkedIn', emoji: '💼' },
                  { id: 'instagram', name: 'Instagram', emoji: '📸' },
                ].map((platform) => (
                  <button
                    key={platform.id}
                    className="p-3 rounded-lg bg-white border border-gray-300 hover:border-gray-400 hover:shadow-md transition-all duration-200 text-center"
                  >
                    <div className="text-2xl mb-2">{platform.emoji}</div>
                    <div className="text-xs font-medium text-gray-700">{platform.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Share Copy */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                推荐文案
              </label>
              <p className="text-gray-700 leading-relaxed mb-4">
                "我最近发现了这个很棒的平台，有很多福利和奖励。用我的链接注册，我们都能获得现金奖励！邀请更多朋友还能升级到 VIP，享受更多特权。"
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("我最近发现了这个很棒的平台，有很多福利和奖励。用我的链接注册，我们都能获得现金奖励！邀请更多朋友还能升级到 VIP，享受更多特权。");
                  toast.success('文案已复制！');
                }}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                复制文案
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              用户成功故事
            </h2>
            <p className="text-lg text-gray-600">
              看看其他用户通过分享获得了多少收益
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: '张明',
                role: '学生',
                earnings: '$450',
                referrals: 45,
                story: '通过在社交媒体分享，邀请了 45 位朋友，已经赚取 $450 的现金奖励。',
                avatar: '👨‍🎓',
              },
              {
                name: '李芳',
                role: 'VIP 会员',
                earnings: '$1,200',
                referrals: 120,
                story: '升级到 VIP 后，邀请朋友的奖励翻倍。现在已经邀请 120 人，收益超过 $1,200。',
                avatar: '👩‍💼',
              },
              {
                name: '王刚',
                role: '铂金等级',
                earnings: '$3,500+',
                referrals: '50+',
                story: '坚持分享，现已达到铂金等级。每月稳定收入 $500+，还获得了专属经理。',
                avatar: '👨‍💻',
              },
            ].map((story, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{story.avatar}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{story.story}</p>
                <div className="flex gap-6 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-2xl font-bold text-green-600">{story.earnings}</p>
                    <p className="text-xs text-gray-600">总收益</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{story.referrals}</p>
                    <p className="text-xs text-gray-600">邀请人数</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              常见问题
            </h2>
            <p className="text-lg text-gray-600">
              了解更多关于推荐系统和权益的信息
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: '我可以邀请多少人？',
                a: '没有限制！您可以邀请无限数量的朋友。邀请越多，获得的奖励越多，等级也会越高。',
              },
              {
                q: '奖励什么时候到账？',
                a: '当您邀请的朋友完成注册并激活账户后，奖励会立即到账。您可以在账户中实时查看。',
              },
              {
                q: '如何升级到 VIP？',
                a: '邀请 10 位朋友并激活账户后，您将自动升级到 VIP 会员，享受更多权益和更高的奖励。',
              },
              {
                q: 'VIP 有什么额外好处？',
                a: 'VIP 会员每次邀请奖励提升 50%，每月额外获得 $50 奖励，享受优先客服支持和专属活动邀请。',
              },
              {
                q: '我可以提现吗？',
                a: '是的！当您的账户余额达到 $10 时，可以随时提现到您的银行账户或支付宝。',
              },
              {
                q: '推荐链接会过期吗？',
                a: '不会！您的推荐链接永久有效。只要您保持账户活跃，就可以继续邀请朋友并获得奖励。',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">
        <div className="container max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            准备好开始赚取收益了吗？
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            加入数千位用户，通过分享获得现金奖励。立即注册，开始您的赚取之旅。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              立即注册 →
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300">
              返回首页
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">关于平台</h3>
              <p className="text-sm leading-relaxed">
                一个致力于为用户提供最佳权益和奖励的平台。
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">权益</h3>
              <ul className="text-sm space-y-2">
                <li>✓ 现金奖励</li>
                <li>✓ VIP 特权</li>
                <li>✓ 阶梯奖励</li>
                <li>✓ 专属支持</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">快速链接</h3>
              <ul className="text-sm space-y-2">
                <li><a href="/" className="hover:text-white transition-colors">首页</a></li>
                <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">条款</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">联系方式</h3>
              <ul className="text-sm space-y-2">
                <li>📧 support@platform.com</li>
                <li>📞 1-800-REWARDS</li>
                <li>🌐 www.platform.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              © 2026 Platform. 所有权利保留。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
