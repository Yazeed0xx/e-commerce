import React from "react";

function Banner_03() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-card to-background text-foreground overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-300"></div>

      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Content Section */}
            <div className="lg:col-span-6 space-y-8">
              {/* New Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">
                  ✨ Now Available
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-black tracking-tight">
                  <span className="block text-foreground">Next-Gen</span>
                  <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Audio
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-light text-muted-foreground max-w-lg">
                  Experience sound like never before with our revolutionary
                  wireless technology
                </h2>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">
                    99.9%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Noise Reduction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">
                    48hrs
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Battery Life
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">
                    0.02s
                  </div>
                  <div className="text-sm text-muted-foreground">Latency</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Shop Now - $199</span>
                </button>

                <button className="group px-8 py-4 border border-border text-foreground font-semibold rounded-lg backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                  <span className="group-hover:text-primary transition-colors">
                    Watch Demo
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-8 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-yellow-400">
                        ★
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    4.9/5 (2.1k reviews)
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Free shipping worldwide
                </div>
              </div>
            </div>

            {/* Product Showcase */}
            <div className="lg:col-span-6 relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>

              {/* Product Container */}
              <div className="relative">
                {/* Floating UI Elements */}
                <div className="absolute -top-8 -left-8 bg-card/60 backdrop-blur-md border border-border rounded-xl p-4 z-20">
                  <div className="text-xs text-muted-foreground mb-1">
                    Active Noise Cancelling
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">ON</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-card/60 backdrop-blur-md border border-border rounded-xl p-4 z-20">
                  <div className="text-xs text-muted-foreground mb-1">
                    Battery
                  </div>
                  <div className="text-2xl font-bold text-foreground">87%</div>
                </div>

                <div className="absolute top-1/2 -left-12 bg-card/60 backdrop-blur-md border border-border rounded-xl p-3 z-20">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Main Product Image */}
                <div className="relative z-10 p-8">
                  <img
                    src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop&crop=center"
                    alt="Premium Wireless Headphones"
                    className="w-full max-w-lg mx-auto drop-shadow-2xl transform hover:rotate-12 transition-transform duration-700"
                  />
                </div>

                {/* Orbiting Elements */}
                <div className="absolute top-1/4 right-0 w-4 h-4 bg-accent/60 rounded-full animate-bounce"></div>
                <div className="absolute bottom-1/4 left-0 w-3 h-3 bg-primary/60 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-muted-foreground to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner_03;
