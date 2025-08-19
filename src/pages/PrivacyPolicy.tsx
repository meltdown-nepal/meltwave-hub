
import React from 'react';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Meltdown Nepal - Learn how we collect, use, and protect your personal information"
        canonical="https://meltdownnepal.com/privacy-policy"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-8 md:p-12">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Privacy Policy
                </h1>
                <p className="text-muted-foreground text-lg">
                  Effective Date: 31st July, 2025 | Last Updated: 7th August, 2025
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-8">
                  Welcome to Meltdown Nepal. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our mobile application and visit our website at <a href="https://meltdownnepal.com" className="text-primary hover:underline">https://meltdownnepal.com</a>.
                </p>
                
                <p className="text-lg leading-relaxed mb-12">
                  By using Meltdown Nepal, you agree to the practices described in this Privacy Policy.
                </p>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">1. Information We Collect</h2>
                  <p className="mb-4">When you use Meltdown Nepal, we may collect the following information:</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-foreground mb-3">a. Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Date of birth (DOB)</li>
                      <li>Gender</li>
                      <li>Height and Weight (optional)</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-foreground mb-3">b. Device and Usage Data</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>IP address</li>
                      <li>Device ID and type</li>
                      <li>Operating system and version</li>
                      <li>App usage data</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-foreground mb-3">c. Health and Fitness Data</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Step count and related metrics from Apple Health and Health Connect</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-foreground mb-3">d. Location Data</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Location-based data to provide personalized recommendations and fitness center access</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">2. How We Use Your Information</h2>
                  <p className="mb-4">We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Enable account creation and secure login</li>
                    <li>Read your steps information</li>
                    <li>Offer personalized suggestions based on your location</li>
                    <li>Send push notifications (e.g., new fitness center, activity goals)</li>
                    <li>Enable check-ins at fitness centers via QR scan</li>
                    <li>Improve the app's performance and user experience</li>
                    <li>Monitor app usage and fix bugs using crash analytics</li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">3. Third-Party Services</h2>
                  <p className="mb-4">
                    We do not share your personal data with third parties for marketing or advertising.
                    However, we use the following trusted third-party services to support our operations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Firebase (Notification)</li>
                    <li>Apple Health and Health Connect (to read steps data with your permission)</li>
                    <li>Sentry (for crash reporting and performance monitoring)</li>
                  </ul>
                  <p className="text-muted-foreground">
                    These services have access only to the necessary data required for their functionality and operate under their respective privacy policies.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">4. Data Storage and Security</h2>
                  <p className="mb-4">Your data is stored on secured servers and protected using industry-standard practices, including:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Secure HTTPS encryption</li>
                    <li>Authentication and access control</li>
                    <li>Encrypted storage and transmission of sensitive data</li>
                  </ul>
                  <p className="text-muted-foreground">
                    We are committed to safeguarding your personal information from unauthorized access, use, or disclosure.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">5. Your Rights and Choices</h2>
                  <p className="mb-4">You have control over your data and can:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Access or update your information within the app</li>
                    <li>Delete your account permanently</li>
                  </ul>
                  
                  <div className="bg-muted/30 rounded-lg p-6 mb-6">
                    <p className="text-foreground mb-4">
                      <strong>Account Deletion:</strong>
                    </p>
                    <p className="text-muted-foreground mb-4">
                      You can delete your account at any time if you do not have an active subscription. If you wish to delete your account while your subscription is still active, please contact us at <a href="mailto:support@meltdownnepal.com" className="text-primary hover:underline">support@meltdownnepal.com</a>.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      When your account is deleted, we will permanently remove all personally identifiable information associated with your account — including your name, email address, contact number, profile picture, and personal notifications.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      However, we will retain non-personal data such as feedback, ratings, check-ins, steps, interests, and freeze history. This data is kept solely for financial auditing and business analysis purposes and cannot be linked back to you in any way.
                    </p>
                    <p className="text-muted-foreground">
                      Your privacy and trust are important to us.
                    </p>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Withdraw permissions (such as location or health data access) via your device settings</li>
                  </ul>
                  <p className="text-muted-foreground">
                    To make a request, please email us at <a href="mailto:support@meltdownnepal.com" className="text-primary hover:underline">support@meltdownnepal.com</a>.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">6. Data Retention</h2>
                  <p className="text-muted-foreground">
                    We retain your personal data only as long as necessary to provide you with the app's services and for legitimate business or legal purposes. When data is no longer required, we securely delete or anonymize it.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">7. Children's Privacy</h2>
                  <p className="text-muted-foreground mb-4">
                    Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
                  </p>
                  <p className="text-muted-foreground">
                    If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">8. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any significant changes through the app or website. Your continued use of the service constitutes your acceptance of the revised policy.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">9. Contact Us</h2>
                  <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:</p>
                  <div className="bg-muted/30 rounded-lg p-6">
                    <p className="text-foreground mb-2">
                      <strong>Email:</strong> <a href="mailto:support@meltdownnepal.com" className="text-primary hover:underline">support@meltdownnepal.com</a>
                    </p>
                    <p className="text-foreground">
                      <strong>Website:</strong> <a href="https://meltdownnepal.com" className="text-primary hover:underline">https://meltdownnepal.com</a>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
