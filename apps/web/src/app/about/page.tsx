"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  Award,
  Globe,
  Zap,
  Heart,
  Shield,
  Truck,
  Headphones,
  Star,
  Quote,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  Handshake,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "50,000+", label: "Happy Customers", icon: Users },
    { number: "500+", label: "Products Sold", icon: Headphones },
    { number: "25+", label: "Countries Served", icon: Globe },
    { number: "15+", label: "Years Experience", icon: Award },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We constantly push the boundaries of audio technology to deliver cutting-edge products that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Customer Obsessed",
      description:
        "Every decision we make is centered around our customers' needs and delivering exceptional experiences.",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description:
        "We stand behind every product with comprehensive warranties and rigorous quality testing.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description:
        "We embrace new technologies and feedback to continuously improve our products and services.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b002?w=300&h=300&fit=crop&crop=face",
      bio: "Former audio engineer with 20+ years in the industry, passionate about democratizing high-quality audio.",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in acoustic engineering and product development, holds 15+ patents in audio technology.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning industrial designer focused on creating beautiful, functional audio products.",
    },
    {
      name: "David Kim",
      role: "VP of Customer Experience",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Customer service expert dedicated to ensuring every interaction exceeds expectations.",
    },
  ];

  const testimonials = [
    {
      quote:
        "TechStore has completely transformed my music experience. The quality is unmatched.",
      author: "Alex Thompson",
      role: "Music Producer",
      rating: 5,
    },
    {
      quote:
        "Outstanding customer service and products that actually deliver on their promises.",
      author: "Maria Garcia",
      role: "Podcast Host",
      rating: 5,
    },
    {
      quote:
        "I've tried many brands, but TechStore's attention to detail sets them apart.",
      author: "James Wilson",
      role: "Audio Engineer",
      rating: 5,
    },
  ];

  const milestones = [
    {
      year: "2009",
      event:
        "TechStore founded with a mission to democratize high-quality audio",
    },
    {
      year: "2012",
      event:
        "Launched our first wireless headphones, setting new industry standards",
    },
    {
      year: "2015",
      event: "Expanded globally, reaching customers in 25+ countries",
    },
    {
      year: "2018",
      event: "Introduced AI-powered noise cancellation technology",
    },
    {
      year: "2021",
      event: "Achieved carbon-neutral shipping across all operations",
    },
    { year: "2024", event: "Reached 50,000+ satisfied customers worldwide" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              About TechStore
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Pioneering the</span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Future of Audio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been dedicated to creating exceptional
              audio experiences that bring people closer to the music they love.
              From our humble beginnings to serving customers worldwide,
              innovation and quality remain at our core.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    TechStore was born from a simple observation: great audio
                    shouldn't be a luxury reserved for professionals. Our
                    founder, Sarah Johnson, was an audio engineer who noticed
                    the gap between studio-quality equipment and consumer
                    products.
                  </p>
                  <p>
                    In 2009, she set out to bridge that gap by creating products
                    that delivered professional-grade audio quality at
                    accessible prices. What started as a small team of audio
                    enthusiasts has grown into a global company serving
                    customers in over 25 countries.
                  </p>
                  <p>
                    Today, we continue to push the boundaries of what's possible
                    in audio technology, always with our customers' experiences
                    at the heart of everything we do.
                  </p>
                </div>
                <div className="mt-8">
                  <Button className="bg-primary hover:bg-primary/90">
                    Learn More About Our Mission
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
                  alt="Our team at work"
                  className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core principles guide every decision we make and every
                product we create.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The passionate individuals behind TechStore's success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones that shaped TechStore's evolution.
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-border ml-1.5 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <Badge variant="secondary" className="w-fit">
                        {milestone.year}
                      </Badge>
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Real feedback from the people who matter most.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <Quote className="h-8 w-8 text-primary mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have discovered what
              makes TechStore special. Explore our products and find your
              perfect audio companion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                Shop Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
