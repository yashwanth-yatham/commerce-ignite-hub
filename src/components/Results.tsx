import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const results = [
  {
    brand: "FashionForward",
    industry: "Fashion",
    revenue: "$2.4M",
    growth: "340%",
    period: "12 months",
    description: "Complete store redesign, SEO optimization, and conversion funnel overhaul",
    metrics: [
      { label: "Revenue Growth", value: "340%" },
      { label: "Conversion Rate", value: "+185%" },
      { label: "Organic Traffic", value: "+420%" }
    ]
  },
  {
    brand: "TechGadgets Pro",
    industry: "Electronics",
    revenue: "$1.8M",
    growth: "275%",
    period: "8 months",
    description: "PPC campaigns, email marketing automation, and mobile optimization",
    metrics: [
      { label: "ROAS", value: "8.5x" },
      { label: "Email Revenue", value: "+450%" },
      { label: "Mobile Sales", value: "+290%" }
    ]
  },
  {
    brand: "HomeDecor Elite",
    industry: "Home & Garden",
    revenue: "$3.1M",
    growth: "410%",
    period: "14 months",
    description: "Full brand overhaul, content strategy, and omnichannel marketing",
    metrics: [
      { label: "Brand Recognition", value: "+380%" },
      { label: "Customer LTV", value: "+210%" },
      { label: "Repeat Purchases", value: "+165%" }
    ]
  }
];

const Results = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Real Results from
            <span className="text-electric"> Real Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See how we've transformed businesses 
            and generated millions in revenue for our clients.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-electric transition-colors">
                        {result.brand}
                      </h3>
                      <Badge variant="secondary" className="mt-2">
                        {result.industry}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-electric">{result.growth}</div>
                      <div className="text-sm text-muted-foreground">growth</div>
                    </div>
                  </div>
                  
                  <div className="text-4xl font-bold text-foreground mb-2">{result.revenue}</div>
                  <div className="text-muted-foreground mb-4">in {result.period}</div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {result.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {result.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                      <span className="text-sm text-muted-foreground">{metric.label}</span>
                      <span className="font-bold text-electric">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-card rounded-2xl p-8 shadow-elegant">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Be Our Next Success Story?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of successful ecommerce brands who have transformed their business with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-electric">Free</div>
              <div className="text-sm text-muted-foreground">Growth Audit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-electric">30-Day</div>
              <div className="text-sm text-muted-foreground">Money Back Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-electric">24/7</div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;