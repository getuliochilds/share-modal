import { useState } from 'react';
import { Lock, Mail, Smartphone, Shield, Key, AlertCircle, Check, X, Eye, EyeOff, Trash2, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

/**
 * Design Philosophy: Enterprise Security Dashboard
 * 
 * This page provides a comprehensive security management interface featuring:
 * - Security Setup section with 6 security features
 * - Status indicators for completed/pending actions
 * - Sessions management with device tracking
 * - Modal dialogs for sensitive operations
 * - Clear visual hierarchy and accessibility
 */

interface SecurityFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  status: 'completed' | 'pending' | 'warning';
  buttonText: string;
  color: string;
}

interface Session {
  id: string;
  device: string;
  location: string;
  ip: string;
  lastUsed: string;
  isCurrent: boolean;
}

export default function SecurityPage() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [show2FAModal, setShow2FAModal] = useState(false);
  const [showPasskeyModal, setShowPasskeyModal] = useState(false);
  const [showPhishingModal, setShowPhishingModal] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const securityFeatures: SecurityFeature[] = [
    {
      id: 'password',
      icon: <Lock className="w-6 h-6" />,
      title: 'Change Password',
      description: 'Change your password regularly to keep it unique and secure.',
      status: 'completed',
      buttonText: 'Change Password',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'email',
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Verification',
      description: 'To update your email address, please complete identity verification.',
      status: 'completed',
      buttonText: 'Change Email',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'phone',
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Phone Number Verification',
      description: 'Verify your phone number is valid and accessible by you.',
      status: 'warning',
      buttonText: 'Verify Phone Number',
      color: 'from-orange-500 to-amber-600',
    },
    {
      id: '2fa',
      icon: <Shield className="w-6 h-6" />,
      title: 'Two-factor Authentication',
      description: 'Enable Two-factor to protect your account from unauthorized access.',
      status: 'completed',
      buttonText: 'Enable 2FA',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'passkey',
      icon: <Key className="w-6 h-6" />,
      title: 'Passkey',
      description: 'Using passkey to protect your account from unauthorized access.',
      status: 'warning',
      buttonText: 'Enable Passkey',
      color: 'from-orange-500 to-amber-600',
    },
    {
      id: 'phishing',
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Anti-Phishing Code',
      description: 'This feature helps you verify the authenticity of communications from our platform.',
      status: 'warning',
      buttonText: 'Enable Anti-Phishing Code',
      color: 'from-orange-500 to-amber-600',
    },
  ];

  const sessions: Session[] = [
    {
      id: '1',
      device: 'Mac OS X (Chrome 14)',
      location: 'MY',
      ip: '45.249.91.200',
      lastUsed: 'Online',
      isCurrent: true,
    },
    {
      id: '2',
      device: 'Mac OS X (Firefox 14)',
      location: 'MY',
      ip: '60.52.0.199',
      lastUsed: '18:08:44',
      isCurrent: false,
    },
    {
      id: '3',
      device: 'Mac OS X (Firefox 15)',
      location: 'MY',
      ip: '124.217.226.219',
      lastUsed: '2026/4/8',
      isCurrent: false,
    },
    {
      id: '4',
      device: 'Mac OS X (Firefox 14)',
      location: 'TW',
      ip: '141.11.42.213',
      lastUsed: '2026/3/27',
      isCurrent: false,
    },
  ];

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error('请填写所有字段');
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error('新密码不匹配');
      return;
    }
    if (newPassword.length < 8) {
      toast.error('密码至少需要 8 个字符');
      return;
    }
    toast.success('密码已成功更改');
    setShowPasswordModal(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleRemoveSession = (sessionId: string) => {
    toast.success('会话已移除');
  };

  const getStatusIcon = (status: string) => {
    if (status === 'completed') {
      return <Check className="w-5 h-5 text-green-500" />;
    }
    return <AlertCircle className="w-5 h-5 text-orange-500" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-slate-800/80 backdrop-blur-md border-b border-slate-700">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">安全设置</h1>
          </div>
          <a href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            返回首页
          </a>
        </div>
      </nav>

      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">账户安全</h2>
          <p className="text-slate-400">
            管理您的账户安全设置，包括密码、验证方式和活跃会话。
          </p>
        </div>

        {/* Security Setup Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-6 h-6 text-green-400" />
            <h3 className="text-2xl font-bold text-white">安全设置</h3>
            <span className="ml-auto px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
              中等安全级别
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white`}>
                    {feature.icon}
                  </div>
                  <div>{getStatusIcon(feature.status)}</div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm mb-6">{feature.description}</p>

                {/* Button */}
                <button
                  onClick={() => {
                    if (feature.id === 'password') setShowPasswordModal(true);
                    else if (feature.id === 'email') setShowEmailModal(true);
                    else if (feature.id === 'phone') setShowPhoneModal(true);
                    else if (feature.id === '2fa') setShow2FAModal(true);
                    else if (feature.id === 'passkey') setShowPasskeyModal(true);
                    else if (feature.id === 'phishing') setShowPhishingModal(true);
                  }}
                  className={`w-full px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    feature.status === 'completed'
                      ? 'bg-green-500 hover:bg-green-600 text-black'
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                  }`}
                >
                  {feature.buttonText}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Sessions Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <LogOut className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold text-white">活跃会话</h3>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-slate-700/50 border-b border-slate-700">
              <div className="text-sm font-semibold text-slate-300">设备</div>
              <div className="text-sm font-semibold text-slate-300">位置</div>
              <div className="text-sm font-semibold text-slate-300">IP 地址</div>
              <div className="text-sm font-semibold text-slate-300">最后使用</div>
              <div className="text-sm font-semibold text-slate-300">操作</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-slate-700">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-slate-700/30 transition-colors items-center"
                >
                  <div>
                    <p className="text-white font-medium text-sm">{session.device}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{session.location}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-mono">{session.ip}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{session.lastUsed}</p>
                  </div>
                  <div>
                    {session.isCurrent ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                        <Check className="w-3 h-3" />
                        使用中
                      </span>
                    ) : (
                      <button
                        onClick={() => handleRemoveSession(session.id)}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-red-500/20 text-red-400 hover:bg-red-500/30 text-xs font-medium rounded-full transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                        移除
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Session Info */}
          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              💡 提示：定期检查您的活跃会话，确保只有您授权的设备可以访问您的账户。如果发现陌生设备，请立即移除。
            </p>
          </div>
        </section>
      </div>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-green-400" />
              <h4 className="text-xl font-bold text-white">修改密码</h4>
            </div>

            <div className="space-y-4 mb-6">
              {/* Current Password */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  当前密码
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-green-500"
                    placeholder="输入当前密码"
                  />
                  <button
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  新密码
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-green-500"
                    placeholder="输入新密码（至少 8 个字符）"
                  />
                  <button
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                  >
                    {showNewPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  确认密码
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-green-500"
                  placeholder="再次输入新密码"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
              >
                取消
              </button>
              <button
                onClick={handlePasswordChange}
                className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-black rounded-lg font-medium transition-colors"
              >
                确认修改
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-green-400" />
              <h4 className="text-xl font-bold text-white">修改邮箱</h4>
            </div>
            <p className="text-slate-400 mb-6">
              需要完成身份验证才能修改邮箱地址。请点击下方按钮进行验证。
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowEmailModal(false)}
                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
              >
                取消
              </button>
              <button
                onClick={() => {
                  toast.success('已发送验证链接到您的邮箱');
                  setShowEmailModal(false);
                }}
                className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-black rounded-lg font-medium transition-colors"
              >
                发送验证
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Phone Modal */}
      {showPhoneModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-6 h-6 text-orange-400" />
              <h4 className="text-xl font-bold text-white">验证电话号码</h4>
            </div>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  电话号码
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  placeholder="+86 1234567890"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPhoneModal(false)}
                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
              >
                取消
              </button>
              <button
                onClick={() => {
                  toast.success('验证码已发送到您的手机');
                  setShowPhoneModal(false);
                }}
                className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
              >
                发送验证码
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2FA Modal */}
      {show2FAModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-green-400" />
              <h4 className="text-xl font-bold text-white">双因素认证</h4>
            </div>
            <p className="text-slate-400 mb-6">
              使用认证器应用（如 Google Authenticator）扫描二维码以启用双因素认证。
            </p>
            <div className="bg-slate-700 p-4 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mb-3">
                  <span className="text-slate-400 text-sm">QR Code</span>
                </div>
                <p className="text-xs text-slate-400">扫描此二维码</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShow2FAModal(false)}
                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
              >
                取消
              </button>
              <button
                onClick={() => {
                  toast.success('双因素认证已启用');
                  setShow2FAModal(false);
                }}
                className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-black rounded-lg font-medium transition-colors"
              >
                启用
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Passkey Modal */}
      {showPasskeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-6">
              <Key className="w-6 h-6 text-orange-400" />
              <h4 className="text-xl font-bold text-white">启用 Passkey</h4>
            </div>
            <p className="text-slate-400 mb-6">
              Passkey 是一种更安全的登录方式，使用生物识别或设备密钥替代密码。
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPasskeyModal(false)}
                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
              >
                取消
              </button>
              <button
                onClick={() => {
                  toast.success('Passkey 已启用');
                  setShowPasskeyModal(false);
                }}
                className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
              >
                启用
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Phishing Modal */}
      {showPhishingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-orange-400" />
              <h4 className="text-xl font-bold text-white">防钓鱼代码</h4>
            </div>
            <p className="text-slate-400 mb-6">
              设置一个个性化代码，我们会在所有官方通信中显示此代码，帮助您识别真实的平台消息。
            </p>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                您的防钓鱼代码
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                placeholder="例如：SAFE123"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPhishingModal(false)}
                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
              >
                取消
              </button>
              <button
                onClick={() => {
                  toast.success('防钓鱼代码已设置');
                  setShowPhishingModal(false);
                }}
                className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
              >
                设置
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
