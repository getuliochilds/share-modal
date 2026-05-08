import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ShareModal from '@/components/ShareModal';

/**
 * Design Philosophy: Modern Minimalist with Vibrant Accents
 * 
 * This page showcases a high-fidelity share modal prototype with:
 * - Clean, spacious layout with strategic use of whitespace
 * - Vibrant gradient header that draws attention
 * - Clear information hierarchy
 * - Accessible interactive elements
 * - Mobile-responsive design
 */

export default function Home() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">📱</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">ShareModal</h1>
          </div>
          <div className="flex items-center gap-6">
            <a href="/share" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
              📄 分享页面
            </a>
            <a href="/security" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
              🔒 安全设置
            </a>
            <a href="/referral" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
              💰 推荐计划
            </a>
            <a href="/referral-dashboard" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
              📊 推荐仪表板
            </a>
            <p className="text-sm text-gray-600">高保真分享弹窗原型</p>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                分享即赚取
              </h2>
              <p className="text-xl text-gray-600">
                一个完整的推荐分享弹窗解决方案，帮助您的用户轻松分享并获得奖励
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">核心功能</h3>
              <ul className="space-y-3">
                {[
                  { icon: '🔗', title: '个性化邀请链接', desc: '自动生成且易于复制' },
                  { icon: '📱', title: '二维码分享', desc: '支持长按保存和快速分享' },
                  { icon: '🌍', title: '多平台支持', desc: 'WhatsApp, Facebook, X, Telegram 等' },
                  { icon: '💰', title: '阶梯奖励', desc: '邀请越多，获得越多' },
                  { icon: '✨', title: '社交证明', desc: '显示已有用户的参与数据' },
                  { icon: '🎨', title: '绚丽设计', desc: '现代化的视觉体验' },
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{feature.title}</p>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>

            <Button
              onClick={() => setIsShareModalOpen(true)}
              className="mt-8 bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              打开分享弹窗演示
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-200 via-pink-200 to-blue-200 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663280162108/PSRwBnrFhQcUHeQHKcsq2Y/share-modal-hero-illustration-YLzdd6kyT4S3Ef7GL2zUKm.webp"
                alt="Share Modal Illustration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-xs">
              <p className="text-sm font-semibold text-gray-900 mb-2">💡 设计亮点</p>
              <p className="text-xs text-gray-600">
                采用现代化的卡片设计，清晰的信息层级，和流畅的交互体验
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              完整的分享生态
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              从链接复制到社交分享，再到奖励激励，每一个环节都经过精心设计
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔗',
                title: '邀请链接',
                desc: '自动生成个性化链接，支持一键复制。链接包含推荐码，用于追踪转化来源。',
              },
              {
                icon: '📱',
                title: '二维码分享',
                desc: '清晰的二维码展示，支持长按保存。特别适合在社交媒体中快速分享。',
              },
              {
                icon: '🌍',
                title: '多平台分享',
                desc: '集成 WhatsApp, Facebook, X, Telegram, LinkedIn, Instagram 等主流平台。',
              },
              {
                icon: '💬',
                title: '分享文案',
                desc: '提供多套预设文案，用户可以一键复制。支持自定义编辑和优化。',
              },
              {
                icon: '💰',
                title: '阶梯奖励',
                desc: '邀请1人获$10，5人获$60，10人获$150+VIP。激励用户持续分享。',
              },
              {
                icon: '✨',
                title: '社交证明',
                desc: '显示"已有1234位用户通过分享获得奖励"，增强信任感和参与欲望。',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              设计原则
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              这个分享弹窗遵循现代 UX 设计的最佳实践
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '简洁性',
                desc: '避免信息过载，每个元素都有明确的目的。标题、按钮和文案都经过精心优化。',
              },
              {
                title: '可访问性',
                desc: '按钮尺寸符合 WCAG 标准，支持键盘导航，清晰的对比度确保易读性。',
              },
              {
                title: '移动优先',
                desc: '在移动设备上完全响应式，支持 Web Share API，提供原生应用级体验。',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: '转化驱动',
                desc: '每个设计决策都基于转化率优化，包括按钮位置、文案和视觉层级。',
                color: 'from-green-500 to-emerald-500',
              },
            ].map((principle, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl ${
                  idx >= 2
                    ? `bg-gradient-to-br ${principle.color || 'from-gray-100 to-gray-200'} text-white`
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-bold mb-3 ${idx >= 2 ? 'text-white' : 'text-gray-900'}`}>
                  {principle.title}
                </h3>
                <p className={`leading-relaxed ${idx >= 2 ? 'text-white/90' : 'text-gray-600'}`}>
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 py-16">
        <div className="container max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            准备好提升您的分享转化率了吗？
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            点击下方按钮查看完整的分享弹窗演示，体验现代化的推荐分享体验
          </p>
          <Button
            onClick={() => setIsShareModalOpen(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            打开分享弹窗演示 →
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">关于此原型</h3>
              <p className="text-sm leading-relaxed">
                这是一个高保真的分享弹窗交互原型，展示了现代推荐分享系统的完整功能和最佳实践。
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">核心特性</h3>
              <ul className="text-sm space-y-2">
                <li>✓ 邀请链接和二维码</li>
                <li>✓ 多平台社交分享</li>
                <li>✓ 阶梯奖励系统</li>
                <li>✓ 社交证明</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">设计理念</h3>
              <ul className="text-sm space-y-2">
                <li>✓ 现代简约风格</li>
                <li>✓ 移动优先设计</li>
                <li>✓ 转化率优化</li>
                <li>✓ 无障碍设计</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              © 2026 ShareModal Prototype. 由 Manus AI 设计和开发。
            </p>
          </div>
        </div>
      </footer>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
