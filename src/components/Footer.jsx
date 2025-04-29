import React from "react";

const footerData = {
  features: [
    "Boards", "Roadmap", "Milestones", "Iterations (Sprints)", "Docs", "Reporting",
    "Teams", "Integrations", "REST API Docs", "Webhook API Docs", "Import from Trello", "Import from Jira",
  ],
  solutions: ["Developers", "Product Managers", "Designers", "Enterprise"],
  learn: ["The Shortcut Way", "Design at Weblozy", "Developer-How-Tos", "Blog"],
  otherPages: ["Featured long", "Featured short", "Solutions", "Competitors", "Customer Stories", "404 page", "Request a Demo"],
  resources: ["Help Center", "Training Hub", "Status", "Release Notes", "Customers", "Community", "Security", "Referral Program"],
  company: ["About Us", "Pricing", "Careers", "Press", "Contact", "FAQ", "Open Source Projects", "Shop"],
};

const Footer = () => {
  return (
    <footer className="bg-[#0D172A] text-white px-6 py-10 md:px-20">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
        
        <div>
          <img src="/logoo.png" alt="Logo" className="mb-6 w-[120px]" />
          <div>
            <h4 className="font-bold text-sm mb-2">Features</h4>
            <ul className="space-y-1 text-sm">
              {footerData.features.map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-sm mb-2">Solutions</h4>
            <ul className="space-y-1 text-sm">
              {footerData.solutions.map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">Learn</h4>
            <ul className="space-y-1 text-sm">
              {footerData.learn.map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">Other Pages</h4>
            <ul className="space-y-1 text-sm">
              {footerData.otherPages.map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-2">Resources</h4>
          <ul className="space-y-1 text-sm">
            {footerData.resources.map((item, index) => (
              <li key={index} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            {footerData.company.map((item, index) => (
              <li key={index} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row md:justify-between text-sm text-gray-400">
        <p>© 2025 Weblozy, Inc.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policies</a>
          <a href="#" className="hover:underline">Terms Of Use</a>
          <a href="#" className="hover:underline">Security</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
