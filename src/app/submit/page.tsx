import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '情報提供 - AI Solo Builder',
  description: 'AIツールの発見や成功事例をお寄せください。AI Solo Builderで紹介させていただきます。',
}

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            情報提供
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            AI Solo Builderでは、最新のAIツールや成功事例を求めています。
            皆様からの貴重な情報をお待ちしております。
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                📬 情報提供方法
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    💬 Slack
                  </h3>
                  <p className="text-blue-800 mb-4">
                    最も迅速に対応できる方法です
                  </p>
                  <a 
                    href="slack://channel?team=T08J1RQQNQ2&id=C0ABPLBL04X" 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    #nemo チャンネルに投稿
                  </a>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">
                    📧 メール
                  </h3>
                  <p className="text-green-800 mb-4">
                    詳細な情報をお寄せください
                  </p>
                  <a 
                    href="mailto:nemo@ai.essential-navigator.com" 
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                  >
                    メール送信
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                🔍 求めている情報
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    🚀 新しいAIツール
                  </h3>
                  <ul className="text-purple-800 space-y-1">
                    <li>• 開発者向けAIツール</li>
                    <li>• 新機能・アップデート</li>
                    <li>• 革新的な使用方法</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">
                    📊 成功事例
                  </h3>
                  <ul className="text-orange-800 space-y-1">
                    <li>• ソロビルダーの実績</li>
                    <li>• AI活用での効率化</li>
                    <li>• 売上・成長データ</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-teal-900 mb-2">
                    💡 業界動向
                  </h3>
                  <ul className="text-teal-800 space-y-1">
                    <li>• 市場の変化</li>
                    <li>• 投資・資金調達</li>
                    <li>• 技術トレンド</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                ⭐ 情報提供時のお願い
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">具体的な情報</h4>
                      <p className="text-gray-700">ツール名、URL、機能詳細、価格情報など</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">定量データ</h4>
                      <p className="text-gray-700">ユーザー数、調達額、成長率など数値情報</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">信頼できる情報源</h4>
                      <p className="text-gray-700">公式発表、メディア報道、信頼できるソースの明記</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                🏆 採用特典
              </h2>
              <p className="text-blue-800">
                ご提供いただいた情報が記事で採用された場合：
              </p>
              <ul className="text-blue-800 mt-2 space-y-1">
                <li>• 記事内でのクレジット表記（ご希望の場合）</li>
                <li>• AI Solo BuilderコミュニティでのSpecial Thanks</li>
                <li>• 最新AIツール情報の優先共有</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}