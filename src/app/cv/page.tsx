import Navigation from '@/components/navigation';
import { Mail, MapPin, ExternalLink, Download, Circle } from 'lucide-react';

export const metadata = {
  title: 'CV',
  description: 'Professional background, skills, and experience.',
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />
      
      <main className="px-6 md:px-12 lg:px-20 pt-24 pb-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-gray-900 mb-8">
              Zishan Ashraf
            </h1>
            <p className="text-2xl text-gray-700 mb-6">
              Revenue Technology Lead at Shopify
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Edinburgh, United Kingdom</span>
              </div>
              <Circle className="w-1 h-1 fill-current hidden sm:block" />
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@zish.xyz" className="hover:text-gray-900 transition-colors">
                  hello@zish.xyz
                </a>
              </div>
            </div>
            <a 
              href="https://www.linkedin.com/in/zishan-ashraf-95610938/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          {/* Two Column Layout - Summary and Personal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-8">
              <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Professional Summary</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I build AI systems that help Shopify&apos;s revenue teams move faster, sell smarter, and operate at 10x. 
                Currently architecting internal AI systems, agentic tools, and automations that supercharge Shopify&apos;s revenue engine. 
                Previously managed a scaled book of business generating over $1B+ in GMV as a Senior Merchant Success Manager. 
                Serial entrepreneur with multiple successful exits, award-winning videographer with viral content reaching millions of views, 
                passionate about the intersection of AI, crypto, and e-commerce.
              </p>
            </div>
            
            <div className="lg:col-span-4">
              <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Personal</h2>
              <p className="text-gray-600 leading-relaxed">
                Husband to Katie and father to Elias and Lilah. Born and bred in Scotland, living in Edinburgh 
                with our family and two British Shorthair cats, Monster Truck and Margo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16">
              {/* Experience */}
              <section>
                <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">Experience</h2>
                <div className="space-y-12">
                  <ExperienceItem
                    title="Revenue Technology Lead"
                    company="Shopify"
                    period="Mar 2025 - Present"
                    description="Architecting internal AI systems, agentic tools, and automations that supercharge Shopify's revenue engine."
                    achievements={[
                      "Building AI systems that help revenue teams move faster, sell smarter, and operate at 10x",
                      "Working across GTM, sales, and growth teams to eliminate bottlenecks and unlock leverage",
                      "Deploying agentic tools and building infrastructure for efficient go-to-market operations",
                      "10x productivity improvements through intelligent, proactive AI workflows"
                    ]}
                  />
                  
                  <ExperienceItem
                    title="Senior Merchant Success Manager"
                    company="Shopify"
                    period="Jun 2023 - Mar 2025"
                    description="Managed a scaled book of business generating over $1B+ in GMV across UK, Ireland, Europe and Middle East."
                    achievements={[
                      "Consistently beat net revenue retention and incremental product profit targets",
                      "Helped 100s of Plus merchants grow their businesses through strategic growth programs",
                      "Drove product adoption and revenue growth across diverse international markets",
                      "Managed high-value merchant relationships generating $1B+ in GMV"
                    ]}
                  />
                  
                  <ExperienceItem
                    title="Founder & Entrepreneur"
                    company="Multiple Ventures"
                    period="2017 - 2023"
                    description="Serial entrepreneur with multiple successful exits including Electric Scootz UK (acquired 2023)."
                    achievements={[
                      "Founded Electric Scootz UK - online retailer working with Xiaomi, Dualtron (acquired June 2023)",
                      "Built Made BRICK by BRICK - digital agency for construction companies (2019-2022)",
                      "Launched iamhungover.co.uk at age 17, got acquihired by Jinn",
                      "Experience spans e-commerce, digital marketing, operations, and business development"
                    ]}
                  />
                </div>
              </section>

              {/* Notable Projects */}
              <section>
                <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">Notable Projects</h2>
                <div className="space-y-8">
                  <ProjectItem
                    title="Shopify Revenue AI Systems"
                    description="Architecting AI systems and agentic tools that supercharge Shopify's revenue engine, delivering 10x productivity improvements."
                  />
                  
                  <ProjectItem
                    title="Viral Video Production"
                    description="Filmed and produced a rap video that achieved over 6 million views on YouTube, demonstrating expertise in viral content creation."
                  />
                  
                  <ProjectItem
                    title="Humans of Edinburgh"
                    description="Built and ran viral social media campaign reaching 735,230 unique views with posts beating celebrities like Eddie Murphy."
                  />
                  
                  <ProjectItem
                    title="Crypto Trading Infrastructure"
                    description="Built multiple trading bots and experimented with stablecoins, LP strategies, and prediction markets."
                  />
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-12">
              {/* Skills */}
              <section>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Skills</h3>
                <div className="space-y-6">
                  <SkillGroup
                    title="AI & Automation"
                    skills={["AI Systems", "Agentic Tools", "Workflow Automation", "Revenue Operations"]}
                  />
                  <SkillGroup
                    title="Business & Strategy"
                    skills={["Revenue Growth", "Merchant Success", "Entrepreneurship", "Go-to-Market"]}
                  />
                  <SkillGroup
                    title="Technical"
                    skills={["Python", "Blockchain", "Trading Bots", "Data Analytics", "E-commerce"]}
                  />
                  <SkillGroup
                    title="Creative"
                    skills={["Videography", "Content Strategy", "Social Media", "Viral Marketing"]}
                  />
                </div>
              </section>

              {/* Education */}
              <section>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif text-lg text-gray-900">
                      Bachelor of Laws (LL.B.)
                    </h4>
                    <p className="text-gray-600">University of Dundee</p>
                    <p className="text-sm text-gray-500">Dual Qualification Law</p>
                    <p className="text-sm text-gray-500">2011 - 2012</p>
                  </div>
                  <div className="pt-4">
                    <h4 className="font-serif text-lg text-gray-900">
                      Higher National Certificate
                    </h4>
                    <p className="text-gray-600">Central College of Commerce</p>
                    <p className="text-sm text-gray-500">Legal Services - Band 1 A</p>
                    <p className="text-sm text-gray-500">2010 - 2011</p>
                  </div>
                </div>
              </section>

              {/* Languages */}
              <section>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Languages</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">English</span>
                    <span className="text-gray-500">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Arabic</span>
                    <span className="text-gray-500">Limited Working</span>
                  </div>
                </div>
              </section>

              {/* Interests */}
              <section>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Interests</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI & Machine Learning, Cryptocurrency, Videography, E-commerce, 
                  Entrepreneurship, Viral Marketing, Revenue Operations, Blockchain
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ExperienceItem({ title, company, period, description, achievements }: {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}) {
  return (
    <div className="border-l-2 border-gray-200 pl-6">
      <div className="mb-3">
        <h3 className="font-serif text-2xl text-gray-900">{title}</h3>
        <div className="flex items-center gap-3 text-gray-600 mt-1">
          <span>{company}</span>
          <Circle className="w-1 h-1 fill-current" />
          <span className="text-sm">{period}</span>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-600 leading-relaxed">
            • {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectItem({ title, description }: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h4 className="font-serif text-xl text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function SkillGroup({ title, skills }: {
  title: string;
  skills: string[];
}) {
  return (
    <div>
      <h4 className="text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        {skills.join(', ')}
      </p>
    </div>
  );
}