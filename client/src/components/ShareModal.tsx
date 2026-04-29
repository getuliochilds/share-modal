import { useState, useRef } from 'react';
import { Copy, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [inviteCount, setInviteCount] = useState(1234);
  const [userReward, setUserReward] = useState(0);
  const referralLink = 'https://referral.app/join?code=BESTFRIEND2024';
  const qrCodeUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663280162108/PSRwBnrFhQcUHeQHKcsq2Y/share-icons-set-FiqLmYw464MhCwZeCfLT38.png';

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

  const handleShare = (platform: string) => {
    setSelectedPlatform(platform);
    const shareText = encodeURIComponent('我发现了一个很棒的应用！用我的链接注册，我们都能获得奖励。');
    const shareUrl = encodeURIComponent(referralLink);
    
    const shareUrls: { [key: string]: string } = {
      whatsapp: `https://wa.me/?text=${shareText}%20${shareUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      telegram: `https://t.me/share/url?url=${shareUrl}&text=${shareText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      instagram: `https://www.instagram.com/`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
      setUserReward(userReward + 10);
      toast.success(`已分享到${platform}！`);
    }

    setTimeout(() => setSelectedPlatform(null), 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Header with Close Button */}
        <div className="relative h-32 bg-gradient-to-br from-orange-400 via-pink-500 to-blue-600 flex items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">分享赚取</h1>
            <p className="text-white/90 text-sm mt-1">邀请朋友，双方都获得奖励</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Social Proof */}
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-blue-600">{inviteCount.toLocaleString()}</span> 位用户已通过分享获得奖励
            </p>
          </div>

          {/* Referral Link Section */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-800">
              您的邀请链接
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-700 font-mono"
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

          {/* QR Code Section */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-800">
              二维码分享
            </label>
            <div className="bg-gray-50 rounded-lg p-4 flex justify-center">
              <div className="w-32 h-32 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-1">📱</div>
                  <p className="text-xs text-gray-500">点击下载</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center">
              长按二维码图片保存，分享给朋友
            </p>
          </div>

          {/* Share Platforms */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-800">
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
                  onClick={() => handleShare(platform.id)}
                  disabled={selectedPlatform !== null && selectedPlatform !== platform.id}
                  className={`p-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                    selectedPlatform === platform.id
                      ? 'bg-green-500 text-white scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'
                  }`}
                >
                  <div className="text-lg mb-1">{platform.emoji}</div>
                  <div className="text-xs">{platform.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Rewards Section */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 space-y-2">
            <p className="text-sm font-semibold text-gray-800">
              💰 您可获得的奖励
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">邀请1人</span>
                <span className="font-bold text-green-600">$10</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">邀请5人</span>
                <span className="font-bold text-green-600">$60</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">邀请10人</span>
                <span className="font-bold text-green-600">$150 + VIP</span>
              </div>
            </div>
            <div className="pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                ✨ 您已获得 <span className="font-bold text-green-600">${userReward}</span> 的奖励
              </p>
            </div>
          </div>

          {/* Share Copy Section */}
          <div className="bg-amber-50 rounded-lg p-4 space-y-2">
            <p className="text-sm font-semibold text-gray-800">
              📝 推荐文案
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              "我最近发现了这个很棒的应用，用我的链接注册，我们都能获得$10的奖励！"
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText("我最近发现了这个很棒的应用，用我的链接注册，我们都能获得$10的奖励！");
                toast.success('文案已复制！');
              }}
              className="w-full mt-2 px-3 py-2 bg-amber-200 hover:bg-amber-300 text-amber-900 rounded-lg text-sm font-medium transition-colors"
            >
              复制文案
            </button>
          </div>

          {/* Privacy Notice */}
          <p className="text-xs text-gray-500 text-center">
            🔒 您的分享链接仅包含推荐码，不包含任何个人信息
          </p>
        </div>
      </div>
    </div>
  );
}
