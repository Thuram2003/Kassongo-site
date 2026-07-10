"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Shield, Lock, Eye, Database, UserCheck, Bell, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-16">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-blue-900/5 to-transparent"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl mb-12">
              <div className="flex items-start gap-4">
                <Eye className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Our Commitment to Your Privacy</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    This privacy policy applies to kassongo.com and the Kassongo Express mobile application, owned and operated by Kassongo Express LLC. This policy describes how we collect and use the personal information you provide and the choices available to you regarding our use of your information.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="prose prose-lg max-w-none space-y-12">
              
              {/* Section 1 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Information Collection and Use</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect the following personal information from you to provide and improve our freight forwarding services:
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-4">
                  <h3 className="font-bold text-gray-900 mb-3">Personal Information We Collect</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span><strong>Contact Information:</strong> name, email address, mailing address, phone number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span><strong>Billing Information:</strong> credit card number, payment method details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span><strong>Unique Identifiers:</strong> username, password, account credentials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span><strong>Shipping Information:</strong> package details, customs declarations, tracking data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span><strong>Identity Verification:</strong> government-issued ID, verification documents</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">How We Use Your Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>Provide you an account for accessing our services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>Fulfill your service orders and shipment requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>Send you service notifications, tracking updates, and invoices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>Respond to customer service requests, questions, and concerns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>Process customs clearance and shipping documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>Send you service update notifications and marketing communications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>Comply with legal obligations and prevent fraud</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Marketing Communications & Choice/Opt-Out</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may choose to stop receiving marketing communications at any time by:
                </p>

                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Following the unsubscribe instructions included in marketing emails</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Bell className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Disabling marketing notifications in your account settings or mobile application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Contacting us at privacy@kassongo.com</span>
                  </li>
                </ul>

                <p className="text-sm text-gray-600 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <strong>Note:</strong> Even if you opt out of marketing communications, we will continue to send you essential service-related notifications such as order confirmations, shipping updates, and account security alerts.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Information Sharing</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  We will share your personal information with third parties only in the ways described in this privacy policy. <strong>We do not sell your personal information to third parties.</strong>
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Service Providers</h3>
                    <p className="text-sm text-gray-700">
                      We may provide your information to companies that provide services associated with our business activities, such as shipping carriers (FedEx, DHL, USPS), payment processors, and customs brokers. These companies are authorized to use your personal information only as necessary to provide services to us.
                    </p>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Legal Requirements</h3>
                    <p className="text-sm text-gray-700 mb-2">We may disclose your personal information:</p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• As required by law, such as to comply with a subpoena or similar legal process</li>
                      <li>• When we believe in good faith that disclosure is necessary to protect our rights or your safety</li>
                      <li>• To investigate fraud or respond to a government request</li>
                      <li>• To comply with customs, tax, and export regulations</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Business Transfers</h3>
                    <p className="text-sm text-gray-700">
                      If Kassongo Express is involved in a merger, acquisition, or sale of assets, you will be notified via email and/or a prominent notice on our website of any change in ownership or uses of your personal information, as well as any choices you may have.
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <h3 className="font-bold text-gray-900 mb-2">With Your Consent</h3>
                    <p className="text-sm text-gray-700">
                      We may share your information to any other third party with your prior consent to do so.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Login & Session Management</h2>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2">Browser & Mobile Application Sessions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you log in, we use browser or mobile application data caches to store information about your logged-in session so that you can remain logged in and experience faster service delivery.
                </p>

                <h3 className="font-bold text-gray-900 mb-2">Third-Party Login</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you use a third-party login provider such as Google or Apple, we will store information provided by them such as your name and email address in order to set up and maintain your account. We only receive information that you authorize the third-party provider to share with us.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Payment Security</h2>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    When you finalize and pay for a service order, your payment information is submitted <strong>directly to a payment service system</strong> (e.g., PayPal, Stripe) embedded in our website or mobile application, bypassing our servers entirely. This is a security feature.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    No payment method information is stored on our servers except reference information for identifying your payment transaction on invoices.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Tracking Technologies</h2>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2">Web Beacons & Pixels</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website and mobile application may contain "beacons" or "pixels" from third-party service providers to help compile aggregated statistics on how Kassongo Express is used by our user base as a whole, as well as to gauge the effectiveness of our customer communications and marketing campaigns.
                </p>

                <h3 className="font-bold text-gray-900 mb-2">Log Files</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We automatically collect and store all communications between our website, mobile application, and servers in log files. This includes information such as:
                </p>
                <ul className="text-gray-700 space-y-2 mb-4 ml-6">
                  <li>• Internet Protocol (IP) addresses</li>
                  <li>• Date/timestamps of access</li>
                  <li>• Browser type and version</li>
                  <li>• Device information</li>
                  <li>• Pages visited and features used</li>
                </ul>
                <p className="text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <strong>Note:</strong> Passwords are never stored in log files. We use this information to help investigate and resolve technical and service issues to serve you better.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Third-Party Links & Social Media</h2>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2">Links to Other Websites</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website and mobile application include links to other websites whose privacy practices may differ from those of Kassongo Express. If you submit personal information to any of those sites, your information is governed by their privacy policies. We encourage you to carefully read the privacy policy of any website you visit.
                </p>

                <h3 className="font-bold text-gray-900 mb-2">Social Media Features and Widgets</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website includes Social Media Features, such as Facebook and Twitter buttons. These Features may collect your IP address, which page you are visiting on our site, and may set a cookie to enable the Feature to function properly. Social Media Features and Widgets are hosted by third parties and your interactions with these Features are governed by the privacy policy of the company providing it.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Security</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  The security of your personal information is important to us. We follow industry standards to protect all information submitted to us, both during transmission and once we receive it.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
                  <h3 className="font-bold text-gray-900 mb-3">Security Measures We Implement</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Encryption using Secure Socket Layer technology (SSL)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Secure data storage and access controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Regular security audits and updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Employee training on data protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>Multi-factor authentication options</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <strong>Important:</strong> However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee its absolute security. If you have any questions about security on our website, mobile application, or servers, please contact us at security@kassongo.com.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Your Rights: Accessing, Updating & Correcting Personal Information</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  If your personal information changes, or if you wish to review what information we hold about you, you may:
                </p>

                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg mt-0.5">→</span>
                    <span>Update it by making changes on your account information page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg mt-0.5">→</span>
                    <span>Contact us at privacy@kassongo.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg mt-0.5">→</span>
                    <span>Request a copy of your data through your account dashboard</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  We will respond to your request within 30 days.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-gray-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Data Retention</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  We will retain information you provided to us for as long as is needed to:
                </p>

                <ul className="text-gray-700 space-y-2 mb-4 ml-6">
                  <li>• Provide you services</li>
                  <li>• Comply with our legal obligations</li>
                  <li>• Resolve disputes</li>
                  <li>• Enforce our agreements</li>
                  <li>• Meet tax and accounting requirements</li>
                </ul>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Data Deletion Requests</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You may request us to delete or remove your Personal Data by contacting us at privacy@kassongo.com. Please note that we may need to retain certain information for legal compliance, fraud prevention, or to complete transactions you authorized before submitting your deletion request.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Notification of Privacy Policy Changes</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update this privacy policy to reflect new developments in our practices, technology, legal requirements, or for other reasons. If we make any material changes, we will notify you by:
                </p>

                <ul className="text-gray-700 space-y-2 mb-4 ml-6">
                  <li>• Email sent to the email address specified in your account</li>
                  <li>• A prominent notice on our website prior to the change becoming effective</li>
                  <li>• In-app notification in our mobile application</li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  We encourage you to periodically review this page for the latest information on our privacy practices.
                </p>
              </section>

              {/* Contact Section */}
              <section className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Information</h2>
                    <p className="text-gray-700 mb-4">
                      If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> privacy@kassongo.com</p>
                      <p><strong>Customer Service:</strong> support@kassongo.com</p>
                      <p><strong>Security Issues:</strong> security@kassongo.com</p>
                      <p><strong>Phone:</strong> +1 (234) 567-8900</p>
                      <p><strong>Mail:</strong> Kassongo Express Privacy Office<br />123 Freight Avenue<br />New York, NY 10001<br />United States</p>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
