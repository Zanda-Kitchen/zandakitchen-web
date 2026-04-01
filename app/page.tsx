"use client";

import { motion } from "framer-motion";
import {
  ChefHat,
  BookOpen,
  CalendarDays,
  Star,
  Smartphone,
  History,
} from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const features = [
  {
    icon: ChefHat,
    title: "Create & Iterate",
    description:
      "Write recipes with step-by-step instructions, ingredient lists, and photos. Refine them as you cook and learn.",
  },
  {
    icon: BookOpen,
    title: "Your Recipe Collection",
    description:
      "One place for every recipe you build. Find any recipe instantly by cuisine, cooking time, or your own tags.",
  },
  {
    icon: CalendarDays,
    title: "Meal Planning",
    description:
      "Know exactly what you're cooking this week - and have everything ready before you start.",
  },
  {
    icon: Star,
    title: "Rate & Improve",
    description:
      "Track what worked, what didn't, and what to improve. Each version builds on the last.",
  },
  {
    icon: History,
    title: "Version History",
    description:
      "Never lose a great version of a recipe again. Every attempt is saved so you can always go back.",
  },
  {
    icon: Smartphone,
    title: "Built for the Kitchen",
    description:
      "Clear enough to follow mid-cook, quick enough to update on the spot.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
          </div>
          <span className="px-4 py-1.5 rounded-full border border-border text-muted-foreground text-xs font-medium tracking-wide select-none">
            Coming to iOS
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        {/* flex col + items-center ensures logo, badge, headline, and CTA share one center axis */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-block"
          >
            <Image
              src="/zk-logo.png"
              alt="Zanda Kitchen"
              width={196}
              height={196}
              className="mx-auto rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-muted-foreground text-xs font-medium tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            Coming soon to the App Store
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-tight mb-6"
          >
            Recipes, <span className="text-accent">refined over time.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-3"
          >
            Build recipes. Refine them. Make them yours.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-4"
          >
            Zanda Kitchen tracks every version so your cooking actually improves
            over time.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.6 }}
            className="text-sm text-muted-foreground/60 mb-10"
          >
            A private recipe system for people who want to get better at
            cooking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-base hover:bg-secondary transition-colors"
            >
              Learn More
            </a>
            <span className="mt-2 text-xs text-muted-foreground/50 tracking-wide ">
              Built for iPhone
            </span>
          </motion.div>
        </div>

        {/* Ambient glow */}
        {/* Reduced from blur-[120px] — large-radius blur causes rendering artifacts on Safari/iOS */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-accent/5 blur-2xl pointer-events-none" />
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-accent font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Features
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl sm:text-4xl mb-4"
            >
              Designed around how recipes actually improve
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              From your first attempt to a dish you&apos;re proud to repeat -
              built for the whole journey.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                custom={i}
                className="card-elevated p-6 hover:border-accent/30 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-accent font-semibold text-sm uppercase tracking-widest mb-3"
            >
              How It Works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl sm:text-4xl"
            >
              Three steps to better cooking
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="space-y-8"
          >
            {[
              {
                step: "01",
                title: "Create your recipe",
                desc: "Add ingredients, step-by-step instructions, and photos.",
              },
              {
                step: "02",
                title: "Cook, taste, and iterate",
                desc: "Rate each attempt, note what worked, and save a new version with your improvements.",
              },
              {
                step: "03",
                title: "Plan your week",
                desc: "Schedule your best recipes across the week. Breakfast, lunch, and dinner - organised in one place.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                custom={i}
                className="flex gap-6 items-start"
              >
                <span className="font-display text-3xl text-accent/40 shrink-0 w-12">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-xl mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-display text-3xl sm:text-5xl mb-6"
          >
            Your recipes deserve a proper home.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
          >
            Zanda Kitchen is launching soon on iOS. A focused, private space for
            cooking that gets better every time you cook.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <div className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-border text-muted-foreground text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              Coming soon to the App Store
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/zk-logo.png"
              alt="Zanda Kitchen"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="font-display text-sm text-muted-foreground/70">
              Zanda Kitchen
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="/privacy"
              className="text-sm text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:support@zandakitchen.com"
              className="text-sm text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              Support
            </a>
            <p className="text-sm text-muted-foreground/70">
              © {new Date().getFullYear()} Zanda Kitchen
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
