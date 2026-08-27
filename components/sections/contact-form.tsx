"use client";

import * as React from "react";
import { Send, CheckCircle2, AlertCircle, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { profileData } from "@/data/profile";

const PROJECT_TYPES = [
  "1-on-1 Student Mentorship & Placement Prep",
  "Custom Next.js Web App / SaaS",
  "Custom WordPress Theme / Plugin",
  "WooCommerce / E-Commerce Store",
  "API Development & Integration",
  "Website Speed & Core Web Vitals",
  "Other / Retainer Partnership"
];

const BUDGET_RANGES = [
  "Student Mentorship / Monthly Plan",
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000+",
  "Flexible / Discussion"
];

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    projectType: PROJECT_TYPES[0],
    budget: BUDGET_RANGES[0],
    timeline: "Within 1 Month",
    message: "",
  });

  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      // Static Form Handling:
      // Uses Web3Forms or standard mailto fallback
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e0310fa0-79ea-4d1e-bd04-4e20b3cbff4c",
          subject: `New Inquiry from ${formData.name} - ${formData.projectType}`,
          from_name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        // Fallback: If network block or service unavailable, open mailto
        const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
          `Inquiry: ${formData.projectType}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nTopic / Category: ${formData.projectType}\nBudget / Plan: ${formData.budget}\nTimeline: ${formData.timeline}\n\nMessage / Goals:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setStatus("success");
      }
    } catch {
      // In case of offline/fetch error, redirect to mailto safely
      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
        `Inquiry: ${formData.projectType}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nTopic / Category: ${formData.projectType}\nBudget / Plan: ${formData.budget}\nTimeline: ${formData.timeline}\n\nMessage / Goals:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus("success");
    }
  };

  return (
    <div className="rounded-2xl border border-border/80 bg-card/80 p-6 sm:p-8 shadow-sm">
      {status === "success" ? (
        <div className="text-center py-12 space-y-4 animate-fade-in">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">
            Thank You, {formData.name}!
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Your details have been sent. I will review your requirements or mentorship goals and get back to you within 12 hours.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="outline"
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  email: "",
                  projectType: PROJECT_TYPES[0],
                  budget: BUDGET_RANGES[0],
                  timeline: "Within 1 Month",
                  message: "",
                });
              }}
            >
              Send Another Message
            </Button>
            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2 font-semibold">
                <MessageSquare className="h-4 w-4" />
                Chat on WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Project & Mentorship Inquiry Form
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Fill in the details below to discuss a freelance project or book a 1-on-1 student mentorship session.
            </p>
          </div>

          {status === "error" && errorMessage && (
            <div className="p-3.5 rounded-xl border border-destructive/30 bg-destructive/10 text-destructive text-xs flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-foreground">
                Your Name <span className="text-primary">*</span>
              </label>
              <Input
                id="name"
                required
                placeholder="e.g. Sarah Connor / Student Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-foreground">
                Email Address <span className="text-primary">*</span>
              </label>
              <Input
                id="email"
                type="email"
                required
                placeholder="sarah@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Project Type & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="projectType" className="text-xs font-semibold text-foreground">
                Service / Mentorship Topic
              </label>
              <Select
                value={formData.projectType}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, projectType: value }))
                }
              >
                <SelectTrigger id="projectType" className="w-full">
                  <SelectValue placeholder="Select a service or topic" />
                </SelectTrigger>
                <SelectContent>
                  {PROJECT_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="budget" className="text-xs font-semibold text-foreground">
                Estimated Budget / Plan
              </label>
              <Select
                value={formData.budget}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, budget: value }))
                }
              >
                <SelectTrigger id="budget" className="w-full">
                  <SelectValue placeholder="Select a budget range" />
                </SelectTrigger>
                <SelectContent>
                  {BUDGET_RANGES.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message / Requirements */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-semibold text-foreground">
              Details, Questions, or Mentorship Goals <span className="text-primary">*</span>
            </label>
            <Textarea
              id="message"
              required
              rows={4}
              placeholder="Tell me about your project scope, tech stack requirements, or what topics you want mentorship on (Next.js, full stack, REST APIs, WordPress, placement prep)..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
            className="w-full gap-2 font-semibold shadow-md shadow-primary/20"
          >
            {status === "submitting" ? (
              <span>Sending Inquiry...</span>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit Inquiry
              </>
            )}
          </Button>

          <p className="text-center text-[11px] text-muted-foreground">
            🔒 Your information is confidential and will only be used to respond directly to your request.
          </p>
        </form>
      )}
    </div>
  );
}
