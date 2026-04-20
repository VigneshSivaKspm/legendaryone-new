import React from "react";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-navy text-slate-300">
      <SEO
        title="Privacy Policy | Legendary One"
        description="Privacy policy for Legendary One. Learn how we collect, use, and protect your personal data."
        canonical="https://legendaryone.com/privacy"
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-azure to-llime bg-clip-text mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-lg">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-slate-300 leading-relaxed">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Introduction
            </h2>
            <p>
              Legendary One ("we," "us," "our," or "Company") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website{" "}
              <span className="text-azure font-semibold">
                https://legendaryone.com
              </span>{" "}
              and use our services.
            </p>
            <p className="mt-3">
              Please read this Privacy Policy carefully. If you do not agree
              with our policies and practices, please do not use our website. By
              accessing and using our website, you acknowledge that you have
              read, understood, and agree to be bound by all the provisions of
              this Privacy Policy.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Information We Collect
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-azure mb-2">
                  2.1 Information You Provide Directly
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <span className="font-semibold">
                      Contact Form Submissions:
                    </span>{" "}
                    Name, email address, phone number, company name, message,
                    and service inquiries
                  </li>
                  <li>
                    <span className="font-semibold">Lead Forms:</span> Contact
                    details, work information, budget range, timeline, and
                    service interests
                  </li>
                  <li>
                    <span className="font-semibold">Chatbot Interactions:</span>{" "}
                    Messages sent to our AI chatbot (Leo) for customer support
                  </li>
                  <li>
                    <span className="font-semibold">Email Communications:</span>{" "}
                    Correspondence with our team
                  </li>
                  <li>
                    <span className="font-semibold">Optional Information:</span>{" "}
                    Any additional details you choose to share
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-azure mb-2">
                  2.2 Information Collected Automatically
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <span className="font-semibold">
                      Browser & Device Data:
                    </span>{" "}
                    Browser type, operating system, device type, IP address, and
                    device identifiers
                  </li>
                  <li>
                    <span className="font-semibold">Usage Information:</span>{" "}
                    Pages visited, time spent, click patterns, scroll depth, and
                    referral sources
                  </li>
                  <li>
                    <span className="font-semibold">Cookies & Tracking:</span>{" "}
                    Session data, preferences, and advertising identifiers
                  </li>
                  <li>
                    <span className="font-semibold">Location Data:</span>{" "}
                    General geographic location based on IP address (not
                    precise)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-azure mb-2">
                  2.3 Third-Party Information
                </h3>
                <p>
                  We may receive information about you from third parties such
                  as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                  <li>Analytics providers (Google Analytics)</li>
                  <li>Advertising partners (Google Ads)</li>
                  <li>Email service providers</li>
                  <li>Social media platforms (if you interact with our ads)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you quotes, proposals, and service information</li>
              <li>To process lead form submissions and evaluate your needs</li>
              <li>
                To send promotional emails and marketing communications (with
                your consent)
              </li>
              <li>To improve our website, services, and user experience</li>
              <li>
                To analyze website traffic and user behavior through analytics
              </li>
              <li>To measure advertising campaign performance</li>
              <li>To detect and prevent fraud or security incidents</li>
              <li>To comply with legal obligations and enforce our terms</li>
              <li>
                To create aggregate, anonymized reports about website usage
              </li>
            </ul>
          </section>

          {/* 4. Legal Basis for Processing (GDPR) */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Legal Basis for Processing (GDPR)
            </h2>
            <p className="mb-4">
              If you are located in the European Union or United Kingdom, we
              process your data based on:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <span className="font-semibold">Contract:</span> Processing
                necessary to fulfill our agreement with you
              </li>
              <li>
                <span className="font-semibold">Legitimate Interests:</span> Our
                business interests in marketing, analytics, and fraud prevention
              </li>
              <li>
                <span className="font-semibold">Consent:</span> Your explicit
                consent for marketing communications and cookies
              </li>
              <li>
                <span className="font-semibold">Legal Obligation:</span>{" "}
                Compliance with laws and regulations
              </li>
            </ul>
          </section>

          {/* 5. Cookies and Tracking Technologies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Cookies and Tracking Technologies
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-azure mb-2">
                  5.1 Types of Cookies We Use
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <span className="font-semibold">Essential Cookies:</span>{" "}
                    Required for website functionality
                  </li>
                  <li>
                    <span className="font-semibold">Analytics Cookies:</span>{" "}
                    Google Analytics to understand user behavior
                  </li>
                  <li>
                    <span className="font-semibold">Marketing Cookies:</span>{" "}
                    Google Ads tracking for conversion measurement
                  </li>
                  <li>
                    <span className="font-semibold">Preference Cookies:</span>{" "}
                    To remember your preferences
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-azure mb-2">
                  5.2 Managing Cookies
                </h3>
                <p>
                  Most web browsers allow you to control cookies through browser
                  settings. You can:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                  <li>Delete existing cookies</li>
                  <li>Prevent new cookies from being stored</li>
                  <li>Disable or enable specific cookie types</li>
                </ul>
                <p className="mt-3 text-sm text-slate-400">
                  Note: Disabling essential cookies may impact website
                  functionality.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Google Analytics and Google Ads */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Google Analytics and Google Ads
            </h2>
            <p className="mb-3">
              We use Google Analytics to analyze website traffic and user
              behavior. We also use Google Ads conversion tracking (Conversion
              ID: AW-18098118618) to measure advertising campaign performance.
            </p>
            <p className="mb-3">
              Google Analytics and Google Ads use cookies and tracking pixels to
              collect data. This data is subject to Google's Privacy Policy:
            </p>
            <p className="text-azure underline mb-3">
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-llime transition"
              >
                https://policies.google.com/privacy
              </a>
            </p>
            <p>
              You can opt out of Google Analytics tracking using the Google
              Analytics Opt-out Browser Add-on:
            </p>
            <p className="text-azure underline">
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-llime transition"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
            </p>
          </section>

          {/* 7. Information Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We do NOT sell, trade, or rent your personal information to third
              parties. However, we may share information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <span className="font-semibold">With Service Providers:</span>{" "}
                Email service providers, hosting providers, and analytics
                platforms that assist in our operations
              </li>
              <li>
                <span className="font-semibold">For Legal Requirements:</span>{" "}
                When required by law, court order, or government request
              </li>
              <li>
                <span className="font-semibold">To Protect Rights:</span> To
                enforce our terms, prevent fraud, or protect our users' safety
              </li>
              <li>
                <span className="font-semibold">Business Transfers:</span> In
                case of merger, acquisition, or sale of assets
              </li>
            </ul>
          </section>

          {/* 8. Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to
              provide our services and fulfill the purposes outlined in this
              policy. Specifically:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>
                <span className="font-semibold">Contact Form Data:</span>{" "}
                Retained for 2 years or until you request deletion
              </li>
              <li>
                <span className="font-semibold">Lead Form Data:</span> Retained
                for 3 years for business records
              </li>
              <li>
                <span className="font-semibold">Analytics Data:</span> Retained
                according to Google Analytics retention settings
              </li>
              <li>
                <span className="font-semibold">Cookies:</span> Session cookies
                are deleted when you close your browser; persistent cookies last
                up to 2 years
              </li>
            </ul>
            <p className="mt-3">
              You can request deletion of your data at any time by contacting
              us.
            </p>
          </section>

          {/* 9. Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction. These include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>SSL/TLS encryption for data in transit</li>
              <li>Secure hosting on reputable platforms (Vercel)</li>
              <li>Regular security updates and monitoring</li>
              <li>Access controls and authentication measures</li>
            </ul>
            <p className="mt-3 text-sm text-slate-400">
              However, no security system is completely foolproof. While we
              strive to protect your information, we cannot guarantee absolute
              security.
            </p>
          </section>

          {/* 10. Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              10. Your Rights
            </h2>
            <p className="mb-4">
              Depending on your location, you may have the following rights:
            </p>

            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-azure mb-2">
                  GDPR Rights (EU/UK Users)
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <span className="font-semibold">Right to Access:</span>{" "}
                    Request a copy of your data
                  </li>
                  <li>
                    <span className="font-semibold">
                      Right to Rectification:
                    </span>{" "}
                    Correct inaccurate data
                  </li>
                  <li>
                    <span className="font-semibold">Right to Erasure:</span>{" "}
                    Request deletion of your data ("right to be forgotten")
                  </li>
                  <li>
                    <span className="font-semibold">
                      Right to Restrict Processing:
                    </span>{" "}
                    Limit how we use your data
                  </li>
                  <li>
                    <span className="font-semibold">
                      Right to Data Portability:
                    </span>{" "}
                    Receive your data in portable format
                  </li>
                  <li>
                    <span className="font-semibold">Right to Object:</span>{" "}
                    Opt-out of marketing and analytics
                  </li>
                  <li>
                    <span className="font-semibold">
                      Right to Lodge a Complaint:
                    </span>{" "}
                    File a complaint with your data protection authority
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-azure mb-2">
                  California Privacy Rights (CCPA)
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Right to know what personal information is collected</li>
                  <li>
                    Right to know whether personal information is sold or
                    disclosed
                  </li>
                  <li>Right to opt-out of the sale of personal information</li>
                  <li>Right to delete personal information</li>
                  <li>
                    Right to non-discrimination for exercising your rights
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-4">
              To exercise any of these rights, please contact us at the
              information provided below.
            </p>
          </section>

          {/* 11. Marketing Communications */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              11. Marketing Communications
            </h2>
            <p className="mb-3">
              We may send you marketing emails about our services, updates, and
              promotions. You can unsubscribe from these communications at any
              time by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Clicking the "unsubscribe" link in any marketing email</li>
              <li>Replying with "UNSUBSCRIBE"</li>
              <li>Contacting us directly</li>
            </ul>
            <p className="mt-3">
              We will respect your preferences and remove you from our marketing
              list promptly.
            </p>
          </section>

          {/* 12. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              12. Children's Privacy
            </h2>
            <p>
              Our website is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children. If we
              become aware that a child has provided us with personal
              information, we will delete such information immediately and
              terminate the child's account.
            </p>
          </section>

          {/* 13. Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              13. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of external
              sites. We encourage you to review the privacy policies of any
              third-party websites before providing your information.
            </p>
          </section>

          {/* 14. International Data Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              14. International Data Transfers
            </h2>
            <p>
              Legendary One is based in India. Your information may be
              transferred to, stored in, and processed in India and other
              countries where we operate. These countries may have different
              data protection laws than your home country. By using our website,
              you consent to the transfer of your information to countries
              outside your country of residence.
            </p>
          </section>

          {/* 15. Policy Changes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              15. Policy Changes
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, or legal requirements. We
              will notify you of significant changes by posting the updated
              policy on this page and updating the "Last Updated" date. Your
              continued use of our website constitutes your acceptance of the
              updated policy.
            </p>
          </section>

          {/* 16. Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              16. Contact Us
            </h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us:
            </p>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 space-y-3">
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <a
                  href="mailto:contact@legendaryone.com"
                  className="text-azure hover:text-llime transition font-semibold"
                >
                  contact@legendaryone.com
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm">WhatsApp</p>
                <a
                  href="https://wa.me/917339596165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-azure hover:text-llime transition font-semibold"
                >
                  +91 7339 596 165
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Website</p>
                <p className="text-azure font-semibold">
                  https://legendaryone.com
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              <span className="font-semibold">Data Protection Officer:</span>{" "}
              For GDPR-related inquiries, contact us with "DPO" in the subject
              line.
            </p>
          </section>

          {/* Closing */}
          <section className="pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-sm">
              This Privacy Policy is effective as of the date last updated and
              will remain in effect except with respect to any changes in its
              provisions in the future, which will be in effect immediately upon
              posting.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
