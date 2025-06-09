'use client';
console.log( "CWD: " + process.cwd() );
import { Card } from '../../lib/stories/components/Card';



export const CardGrid = () => {
  const cards = [
    {
      title: "Web Development",
      description: "Building modern, responsive web applications with the latest technologies.",
      features: [
        "React & Next.js",
        "TypeScript",
        "Tailwind CSS",
        "API Integration"
      ],
      ctaText: "View Projects",
      variant: "default" as const
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces that enhance user experience.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems"
      ],
      ctaText: "See Designs",
      variant: "green" as const
    },
    {
      title: "Backend Development",
      description: "Developing robust and scalable backend systems to power your applications.",
      features: [
        "Node.js",
        "Database Design",
        "API Development",
        "Cloud Services"
      ],
      ctaText: "Learn More",
      variant: "orange" as const
    },
    {
      title: "DevOps & Deployment",
      description: "Streamlining development workflows and ensuring smooth deployments.",
      features: [
        "CI/CD Pipelines",
        "Containerization",
        "Cloud Platforms",
        "Monitoring"
      ],
      ctaText: "Explore Services",
      variant: "default" as const
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
      {cards.map((card, index) => (
        <Card
          key={index}
          {...card}
          onCtaClick={() => {}}
        />
      ))}
    </div>
  );
}; 