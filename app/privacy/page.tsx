import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Zanda Kitchen",
  description: "Privacy policy for Zanda Kitchen.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/zk-logo.png"
              alt="Zanda Kitchen logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-display text-xl text-foreground">
              Zanda Kitchen
            </span>
          </Link>
          <span className="px-4 py-1.5 rounded-full border border-border text-muted-foreground text-xs font-medium tracking-wide select-none">
            Coming to iOS
          </span>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        <h1 className="font-display text-4xl mb-3">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">
          Last updated: 31 March 2026
        </p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              Overview
            </h2>
            <p>
              Zanda Kitchen is committed to protecting your privacy. This policy
              explains what information we collect, how we use it, and your
              rights in relation to it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              Information We Collect
            </h2>
            <p className="mb-4">
              When you use Zanda Kitchen, we may collect the following:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Account information (such as your email address) when you
                register
              </li>
              <li>
                Recipe content, notes, photos, and meal plans that you create
                within the app
              </li>
              <li>
                App usage data to help us understand how the product is used and
                improve it
              </li>
              <li>
                Device and diagnostic information for crash reporting and
                performance monitoring
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              How We Use Your Information
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>To provide and operate the Zanda Kitchen service</li>
              <li>
                To store and sync your recipes and meal plans across your
                devices
              </li>
              <li>To improve and fix the product over time</li>
              <li>To contact you about your account if necessary</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal data. We do not share your recipe
              content with third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              Data Storage
            </h2>
            <p>
              Your data is stored securely. Recipe content you create is private
              to your account and is not shared publicly unless you explicitly
              choose to do so in a future feature that supports it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              Third-Party Services
            </h2>
            <p>
              Zanda Kitchen may use third-party services for infrastructure,
              analytics, or crash reporting. These services are bound by their
              own privacy policies and are used solely to operate and improve
              the app.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting us at{" "}
              <a
                href="mailto:support@zandakitchen.com"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
              >
                support@zandakitchen.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              Children&apos;s Privacy
            </h2>
            <p>
              Zanda Kitchen is not directed at children under the age of 13. We
              do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this policy as the product evolves. Material changes
              will be communicated through the app or via email.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              Contact
            </h2>
            <p>
              For any privacy-related questions, contact us at{" "}
              <a
                href="mailto:support@zandakitchen.com"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
              >
                support@zandakitchen.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/zk-logo.png"
              alt="Zanda Kitchen"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="font-display text-sm text-muted-foreground">
              Zanda Kitchen
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:support@zandakitchen.com"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </a>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Zanda Kitchen. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
