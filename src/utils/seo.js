// Structured data for projects
export const generateProjectStructuredData = (projects) => {
  return projects.map(project => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "url": project.liveUrl,
    "author": {
      "@type": "Person",
      "name": "Kondwani Muwowo"
    },
    "dateCreated": "2024-01-01",
    "programmingLanguage": project.tech,
    "applicationCategory": "WebApplication"
  }));
};

// Breadcrumb structured data
export const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://kondwanimuwowo.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Projects",
      "item": "https://kondwanimuwowo.com/#projects"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Skills",
      "item": "https://kondwanimuwowo.com/#skills"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Contact",
      "item": "https://kondwanimuwowo.com/#contact"
    }
  ]
};