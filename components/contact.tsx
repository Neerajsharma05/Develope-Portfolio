"use client";

import { Mail, MessageCircle, Send } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/social-icons";
import { Reveal, SectionTitle } from "@/components/ui/reveal";
import { useState } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    console.log(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Email Sent Successfully ✅");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project, role or idea in mind? My inbox is always open."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* left: quick links */}
          <Reveal className="space-y-4">
            <a
              href="mailto:hello@neerajsharma.dev"
              className="glass group flex items-center gap-4 rounded-3xl p-5 transition-colors hover:border-primary/40"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 text-secondary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">neerajko890@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/9554699158"
              className="glass group flex items-center gap-4 rounded-3xl p-5 transition-colors hover:border-secondary/40"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-secondary/30 to-accent/30 text-secondary">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-medium">Message me directly</p>
              </div>
            </a>

            <div className="glass rounded-3xl p-5">
              <p className="mb-3 text-sm text-muted-foreground">
                Find me online
              </p>
              <div className="flex gap-3">
                {[
                  { icon: GithubIcon, label: "GitHub" },
                  { icon: LinkedinIcon, label: "LinkedIn" },
                  { icon: TwitterIcon, label: "Twitter" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-glass-border bg-background/40 text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* right: form (visual) */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                   <label className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  className="w-full resize-none rounded-2xl border border-glass-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                </div>
 <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  className="w-full resize-none rounded-2xl border border-glass-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
               </div>
              </div>
              <div className="mt-4 grid grid:grid-cols-2">
                <label className="mb-1.5 block text-sm font-medium">
                  Subject
                </label>
                 <input
                  className="w-full resize-none rounded-2xl border border-glass-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                      type="text"
                      name="subject"
                      placeholder="What's this about? - Subject "
                      value={formData.subject}
                      onChange={handleChange}
      />
                {/* <Field label="Subject" placeholder="What's this about?" /> */}
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-glass-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  value={formData.message}
                  onChange={handleChange}
                />
                {/* <textarea

                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-glass-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                /> */}
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"
              >
                 {loading ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-glass-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}
