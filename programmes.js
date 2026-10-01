const PROGRAMMES = [
  {
    "id": "eda-001",
    "title": "Computer Appreciation",
    "area": "Computer & Office Skills",
    "audience": "Student",
    "description": "Develop practical skills in computer appreciation through computer hardware, file management and internet basics.",
    "topics": [
      "Computer hardware",
      "File management",
      "Internet basics"
    ]
  },
  {
    "id": "eda-002",
    "title": "Office Productivity",
    "area": "Computer & Office Skills",
    "audience": "Student",
    "description": "Develop practical skills in office productivity through documents, spreadsheets and presentations.",
    "topics": [
      "Documents",
      "Spreadsheets",
      "Presentations"
    ]
  },
  {
    "id": "eda-003",
    "title": "Microsoft Word Essentials",
    "area": "Computer & Office Skills",
    "audience": "Student",
    "description": "Develop practical skills in microsoft word essentials through document formatting, tables and styles and mail merge.",
    "topics": [
      "Document formatting",
      "Tables and styles",
      "Mail merge"
    ]
  },
  {
    "id": "eda-004",
    "title": "Microsoft Excel Foundations",
    "area": "Computer & Office Skills",
    "audience": "Student",
    "description": "Develop practical skills in microsoft excel foundations through formulas, sorting and filtering and charts.",
    "topics": [
      "Formulas",
      "Sorting and filtering",
      "Charts"
    ]
  },
  {
    "id": "eda-005",
    "title": "Advanced Excel",
    "area": "Computer & Office Skills",
    "audience": "Student",
    "description": "Develop practical skills in advanced excel through lookup functions, pivot tables and power query.",
    "topics": [
      "Lookup functions",
      "Pivot tables",
      "Power Query"
    ]
  },
  {
    "id": "eda-006",
    "title": "PowerPoint Presentation Design",
    "area": "Computer & Office Skills",
    "audience": "Student",
    "description": "Develop practical skills in powerpoint presentation design through slide layouts, visual storytelling and presenter tools.",
    "topics": [
      "Slide layouts",
      "Visual storytelling",
      "Presenter tools"
    ]
  },
  {
    "id": "eda-007",
    "title": "Google Workspace Essentials",
    "area": "Computer & Office Skills",
    "audience": "Student",
    "description": "Develop practical skills in google workspace essentials through docs and sheets, drive organisation and collaborative editing.",
    "topics": [
      "Docs and Sheets",
      "Drive organisation",
      "Collaborative editing"
    ]
  },
  {
    "id": "eda-008",
    "title": "Digital Communication & Email",
    "area": "Computer & Office Skills",
    "audience": "Student",
    "description": "Develop practical skills in digital communication & email through email etiquette, calendar management and online meetings.",
    "topics": [
      "Email etiquette",
      "Calendar management",
      "Online meetings"
    ]
  },
  {
    "id": "eda-009",
    "title": "Digital Research & Information Literacy",
    "area": "Computer & Office Skills",
    "audience": "Student",
    "description": "Develop practical skills in digital research & information literacy through search strategies, source evaluation and referencing.",
    "topics": [
      "Search strategies",
      "Source evaluation",
      "Referencing"
    ]
  },
  {
    "id": "eda-010",
    "title": "Typing & Digital File Management",
    "area": "Computer & Office Skills",
    "audience": "Student",
    "description": "Develop practical skills in typing & digital file management through keyboard fluency, folder organisation and backup habits.",
    "topics": [
      "Keyboard fluency",
      "Folder organisation",
      "Backup habits"
    ]
  },
  {
    "id": "eda-011",
    "title": "Coding for Young Learners",
    "area": "Coding & Web Development",
    "audience": "Student",
    "description": "Develop practical skills in coding for young learners through sequencing, loops and creative projects.",
    "topics": [
      "Sequencing",
      "Loops",
      "Creative projects"
    ]
  },
  {
    "id": "eda-012",
    "title": "HTML & CSS Foundations",
    "area": "Coding & Web Development",
    "audience": "Student",
    "description": "Develop practical skills in html & css foundations through html structure, css layouts and responsive design.",
    "topics": [
      "HTML structure",
      "CSS layouts",
      "Responsive design"
    ]
  },
  {
    "id": "eda-013",
    "title": "JavaScript Foundations",
    "area": "Coding & Web Development",
    "audience": "Student",
    "description": "Develop practical skills in javascript foundations through variables, functions and browser events.",
    "topics": [
      "Variables",
      "Functions",
      "Browser events"
    ]
  },
  {
    "id": "eda-014",
    "title": "Website Development",
    "area": "Coding & Web Development",
    "audience": "Student",
    "description": "Develop practical skills in website development through frontend development, accessibility and publishing.",
    "topics": [
      "Frontend development",
      "Accessibility",
      "Publishing"
    ]
  },
  {
    "id": "eda-015",
    "title": "Python Foundations",
    "area": "Coding & Web Development",
    "audience": "Student",
    "description": "Develop practical skills in python foundations through python syntax, data structures and small projects.",
    "topics": [
      "Python syntax",
      "Data structures",
      "Small projects"
    ]
  },
  {
    "id": "eda-016",
    "title": "Scratch Creative Coding",
    "area": "Coding & Web Development",
    "audience": "Student",
    "description": "Develop practical skills in scratch creative coding through sprites, events and loops and interactive stories.",
    "topics": [
      "Sprites",
      "Events and loops",
      "Interactive stories"
    ]
  },
  {
    "id": "eda-017",
    "title": "React Frontend Development",
    "area": "Coding & Web Development",
    "audience": "Student",
    "description": "Develop practical skills in react frontend development through components, state management and routing.",
    "topics": [
      "Components",
      "State management",
      "Routing"
    ]
  },
  {
    "id": "eda-018",
    "title": "Node.js Backend Development",
    "area": "Coding & Web Development",
    "audience": "Student",
    "description": "Develop practical skills in node.js backend development through server routes, apis and database connections.",
    "topics": [
      "Server routes",
      "APIs",
      "Database connections"
    ]
  },
  {
    "id": "eda-019",
    "title": "WordPress Website Building",
    "area": "Coding & Web Development",
    "audience": "Student",
    "description": "Develop practical skills in wordpress website building through themes, plugins and site management.",
    "topics": [
      "Themes",
      "Plugins",
      "Site management"
    ]
  },
  {
    "id": "eda-020",
    "title": "Git & GitHub Collaboration",
    "area": "Coding & Web Development",
    "audience": "Student",
    "description": "Develop practical skills in git & github collaboration through version control, branches and pull requests.",
    "topics": [
      "Version control",
      "Branches",
      "Pull requests"
    ]
  },
  {
    "id": "eda-021",
    "title": "Flutter App Development",
    "area": "Mobile Apps & Software Engineering",
    "audience": "Professional",
    "description": "Develop practical skills in flutter app development through dart basics, widgets and mobile navigation.",
    "topics": [
      "Dart basics",
      "Widgets",
      "Mobile navigation"
    ]
  },
  {
    "id": "eda-022",
    "title": "React Native App Development",
    "area": "Mobile Apps & Software Engineering",
    "audience": "Professional",
    "description": "Develop practical skills in react native app development through mobile components, app state and device features.",
    "topics": [
      "Mobile components",
      "App state",
      "Device features"
    ]
  },
  {
    "id": "eda-023",
    "title": "Android Development with Kotlin",
    "area": "Mobile Apps & Software Engineering",
    "audience": "Professional",
    "description": "Develop practical skills in android development with kotlin through kotlin syntax, android layouts and app lifecycle.",
    "topics": [
      "Kotlin syntax",
      "Android layouts",
      "App lifecycle"
    ]
  },
  {
    "id": "eda-024",
    "title": "iOS Development with Swift",
    "area": "Mobile Apps & Software Engineering",
    "audience": "Professional",
    "description": "Develop practical skills in ios development with swift through swift basics, swiftui and app navigation.",
    "topics": [
      "Swift basics",
      "SwiftUI",
      "App navigation"
    ]
  },
  {
    "id": "eda-025",
    "title": "Progressive Web Apps",
    "area": "Mobile Apps & Software Engineering",
    "audience": "Professional",
    "description": "Develop practical skills in progressive web apps through web manifests, service workers and offline features.",
    "topics": [
      "Web manifests",
      "Service workers",
      "Offline features"
    ]
  },
  {
    "id": "eda-026",
    "title": "Software Testing Foundations",
    "area": "Mobile Apps & Software Engineering",
    "audience": "Professional",
    "description": "Develop practical skills in software testing foundations through test planning, test cases and bug reporting.",
    "topics": [
      "Test planning",
      "Test cases",
      "Bug reporting"
    ]
  },
  {
    "id": "eda-027",
    "title": "API Design & Integration",
    "area": "Mobile Apps & Software Engineering",
    "audience": "Professional",
    "description": "Develop practical skills in api design & integration through rest concepts, authentication and api testing.",
    "topics": [
      "REST concepts",
      "Authentication",
      "API testing"
    ]
  },
  {
    "id": "eda-028",
    "title": "Database Design & SQL",
    "area": "Mobile Apps & Software Engineering",
    "audience": "Professional",
    "description": "Develop practical skills in database design & sql through data modelling, sql queries and relationships.",
    "topics": [
      "Data modelling",
      "SQL queries",
      "Relationships"
    ]
  },
  {
    "id": "eda-029",
    "title": "Software Architecture Foundations",
    "area": "Mobile Apps & Software Engineering",
    "audience": "Professional",
    "description": "Develop practical skills in software architecture foundations through design patterns, system components and architecture decisions.",
    "topics": [
      "Design patterns",
      "System components",
      "Architecture decisions"
    ]
  },
  {
    "id": "eda-030",
    "title": "No-Code App Development",
    "area": "Mobile Apps & Software Engineering",
    "audience": "Professional",
    "description": "Develop practical skills in no-code app development through visual workflows, data collections and app prototyping.",
    "topics": [
      "Visual workflows",
      "Data collections",
      "App prototyping"
    ]
  },
  {
    "id": "eda-031",
    "title": "AI Fundamentals",
    "area": "AI & Automation",
    "audience": "Professional",
    "description": "Develop practical skills in ai fundamentals through ai concepts, everyday applications and responsible use.",
    "topics": [
      "AI concepts",
      "Everyday applications",
      "Responsible use"
    ]
  },
  {
    "id": "eda-032",
    "title": "AI for Business Productivity",
    "area": "AI & Automation",
    "audience": "Professional",
    "description": "Develop practical skills in ai for business productivity through workflow planning, ai assistance and quality checks.",
    "topics": [
      "Workflow planning",
      "AI assistance",
      "Quality checks"
    ]
  },
  {
    "id": "eda-033",
    "title": "Prompt Engineering",
    "area": "AI & Automation",
    "audience": "Professional",
    "description": "Develop practical skills in prompt engineering through prompt structure, task decomposition and output evaluation.",
    "topics": [
      "Prompt structure",
      "Task decomposition",
      "Output evaluation"
    ]
  },
  {
    "id": "eda-034",
    "title": "Generative AI Content Creation",
    "area": "AI & Automation",
    "audience": "Professional",
    "description": "Develop practical skills in generative ai content creation through text generation, creative workflows and content review.",
    "topics": [
      "Text generation",
      "Creative workflows",
      "Content review"
    ]
  },
  {
    "id": "eda-035",
    "title": "AI Chatbot Development",
    "area": "AI & Automation",
    "audience": "Professional",
    "description": "Develop practical skills in ai chatbot development through conversation design, knowledge retrieval and testing.",
    "topics": [
      "Conversation design",
      "Knowledge retrieval",
      "Testing"
    ]
  },
  {
    "id": "eda-036",
    "title": "AI Agents & Workflow Automation",
    "area": "AI & Automation",
    "audience": "Professional",
    "description": "Develop practical skills in ai agents & workflow automation through tool use, workflow orchestration and human oversight.",
    "topics": [
      "Tool use",
      "Workflow orchestration",
      "Human oversight"
    ]
  },
  {
    "id": "eda-037",
    "title": "Machine Learning Foundations",
    "area": "AI & Automation",
    "audience": "Professional",
    "description": "Develop practical skills in machine learning foundations through training data, model selection and evaluation metrics.",
    "topics": [
      "Training data",
      "Model selection",
      "Evaluation metrics"
    ]
  },
  {
    "id": "eda-038",
    "title": "Natural Language Processing",
    "area": "AI & Automation",
    "audience": "Professional",
    "description": "Develop practical skills in natural language processing through text preprocessing, classification and language modelling.",
    "topics": [
      "Text preprocessing",
      "Classification",
      "Language modelling"
    ]
  },
  {
    "id": "eda-039",
    "title": "Computer Vision Foundations",
    "area": "AI & Automation",
    "audience": "Professional",
    "description": "Develop practical skills in computer vision foundations through image preprocessing, object recognition and model evaluation.",
    "topics": [
      "Image preprocessing",
      "Object recognition",
      "Model evaluation"
    ]
  },
  {
    "id": "eda-040",
    "title": "Responsible AI & Data Ethics",
    "area": "AI & Automation",
    "audience": "Professional",
    "description": "Develop practical skills in responsible ai & data ethics through bias evaluation, privacy awareness and human accountability.",
    "topics": [
      "Bias evaluation",
      "Privacy awareness",
      "Human accountability"
    ]
  },
  {
    "id": "eda-041",
    "title": "Data Analysis Foundations",
    "area": "Data & Business Intelligence",
    "audience": "Professional",
    "description": "Develop practical skills in data analysis foundations through data cleaning, analysis and visualisation.",
    "topics": [
      "Data cleaning",
      "Analysis",
      "Visualisation"
    ]
  },
  {
    "id": "eda-042",
    "title": "Python for Data Analysis",
    "area": "Data & Business Intelligence",
    "audience": "Professional",
    "description": "Develop practical skills in python for data analysis through pandas, data exploration and reporting.",
    "topics": [
      "Pandas",
      "Data exploration",
      "Reporting"
    ]
  },
  {
    "id": "eda-043",
    "title": "Power BI Dashboard Development",
    "area": "Data & Business Intelligence",
    "audience": "Professional",
    "description": "Develop practical skills in power bi dashboard development through data models, dax measures and dashboards.",
    "topics": [
      "Data models",
      "DAX measures",
      "Dashboards"
    ]
  },
  {
    "id": "eda-044",
    "title": "Tableau Data Visualisation",
    "area": "Data & Business Intelligence",
    "audience": "Professional",
    "description": "Develop practical skills in tableau data visualisation through data connections, interactive charts and dashboard design.",
    "topics": [
      "Data connections",
      "Interactive charts",
      "Dashboard design"
    ]
  },
  {
    "id": "eda-045",
    "title": "SQL for Data Analysis",
    "area": "Data & Business Intelligence",
    "audience": "Professional",
    "description": "Develop practical skills in sql for data analysis through joins, aggregations and window functions.",
    "topics": [
      "Joins",
      "Aggregations",
      "Window functions"
    ]
  },
  {
    "id": "eda-046",
    "title": "Data Engineering Foundations",
    "area": "Data & Business Intelligence",
    "audience": "Professional",
    "description": "Develop practical skills in data engineering foundations through data pipelines, etl processes and data quality.",
    "topics": [
      "Data pipelines",
      "ETL processes",
      "Data quality"
    ]
  },
  {
    "id": "eda-047",
    "title": "Statistics for Digital Analytics",
    "area": "Data & Business Intelligence",
    "audience": "Professional",
    "description": "Develop practical skills in statistics for digital analytics through descriptive statistics, probability and interpreting results.",
    "topics": [
      "Descriptive statistics",
      "Probability",
      "Interpreting results"
    ]
  },
  {
    "id": "eda-048",
    "title": "Business Intelligence Foundations",
    "area": "Data & Business Intelligence",
    "audience": "Professional",
    "description": "Develop practical skills in business intelligence foundations through business questions, kpis and decision reporting.",
    "topics": [
      "Business questions",
      "KPIs",
      "Decision reporting"
    ]
  },
  {
    "id": "eda-049",
    "title": "Data Storytelling",
    "area": "Data & Business Intelligence",
    "audience": "Professional",
    "description": "Develop practical skills in data storytelling through audience needs, chart selection and insight presentation.",
    "topics": [
      "Audience needs",
      "Chart selection",
      "Insight presentation"
    ]
  },
  {
    "id": "eda-050",
    "title": "Spreadsheet Financial Modelling",
    "area": "Data & Business Intelligence",
    "audience": "Professional",
    "description": "Develop practical skills in spreadsheet financial modelling through model structure, forecast formulas and scenario analysis.",
    "topics": [
      "Model structure",
      "Forecast formulas",
      "Scenario analysis"
    ]
  },
  {
    "id": "eda-051",
    "title": "Cybersecurity Foundations",
    "area": "Cybersecurity & Digital Safety",
    "audience": "Professional",
    "description": "Develop practical skills in cybersecurity foundations through threat awareness, account security and safe browsing.",
    "topics": [
      "Threat awareness",
      "Account security",
      "Safe browsing"
    ]
  },
  {
    "id": "eda-052",
    "title": "Network Security Foundations",
    "area": "Cybersecurity & Digital Safety",
    "audience": "Professional",
    "description": "Develop practical skills in network security foundations through network controls, firewalls and traffic monitoring.",
    "topics": [
      "Network controls",
      "Firewalls",
      "Traffic monitoring"
    ]
  },
  {
    "id": "eda-053",
    "title": "Ethical Hacking Fundamentals",
    "area": "Cybersecurity & Digital Safety",
    "audience": "Professional",
    "description": "Develop practical skills in ethical hacking fundamentals through authorised lab practice, vulnerability assessment and remediation reporting.",
    "topics": [
      "Authorised lab practice",
      "Vulnerability assessment",
      "Remediation reporting"
    ]
  },
  {
    "id": "eda-054",
    "title": "Security Operations Centre Foundations",
    "area": "Cybersecurity & Digital Safety",
    "audience": "Professional",
    "description": "Develop practical skills in security operations centre foundations through security alerts, log analysis and incident triage.",
    "topics": [
      "Security alerts",
      "Log analysis",
      "Incident triage"
    ]
  },
  {
    "id": "eda-055",
    "title": "Digital Forensics Foundations",
    "area": "Cybersecurity & Digital Safety",
    "audience": "Professional",
    "description": "Develop practical skills in digital forensics foundations through evidence handling, forensic workflows and investigation reporting.",
    "topics": [
      "Evidence handling",
      "Forensic workflows",
      "Investigation reporting"
    ]
  },
  {
    "id": "eda-056",
    "title": "Cloud Security Foundations",
    "area": "Cybersecurity & Digital Safety",
    "audience": "Professional",
    "description": "Develop practical skills in cloud security foundations through access control, cloud configuration and security monitoring.",
    "topics": [
      "Access control",
      "Cloud configuration",
      "Security monitoring"
    ]
  },
  {
    "id": "eda-057",
    "title": "Web Application Security",
    "area": "Cybersecurity & Digital Safety",
    "audience": "Professional",
    "description": "Develop practical skills in web application security through common weaknesses, secure coding and application testing.",
    "topics": [
      "Common weaknesses",
      "Secure coding",
      "Application testing"
    ]
  },
  {
    "id": "eda-058",
    "title": "Cybersecurity Governance",
    "area": "Cybersecurity & Digital Safety",
    "audience": "Professional",
    "description": "Develop practical skills in cybersecurity governance through security policies, risk assessment and control monitoring.",
    "topics": [
      "Security policies",
      "Risk assessment",
      "Control monitoring"
    ]
  },
  {
    "id": "eda-059",
    "title": "Incident Response & Recovery",
    "area": "Cybersecurity & Digital Safety",
    "audience": "Professional",
    "description": "Develop practical skills in incident response & recovery through response planning, containment and recovery exercises.",
    "topics": [
      "Response planning",
      "Containment",
      "Recovery exercises"
    ]
  },
  {
    "id": "eda-060",
    "title": "Online Privacy & Personal Security",
    "area": "Cybersecurity & Digital Safety",
    "audience": "Professional",
    "description": "Develop practical skills in online privacy & personal security through privacy settings, phishing awareness and device protection.",
    "topics": [
      "Privacy settings",
      "Phishing awareness",
      "Device protection"
    ]
  },
  {
    "id": "eda-061",
    "title": "Cloud Computing Foundations",
    "area": "Cloud, Networks & DevOps",
    "audience": "Professional",
    "description": "Develop practical skills in cloud computing foundations through cloud models, core services and cost awareness.",
    "topics": [
      "Cloud models",
      "Core services",
      "Cost awareness"
    ]
  },
  {
    "id": "eda-062",
    "title": "AWS Cloud Foundations",
    "area": "Cloud, Networks & DevOps",
    "audience": "Professional",
    "description": "Develop practical skills in aws cloud foundations through compute services, storage and identity basics.",
    "topics": [
      "Compute services",
      "Storage",
      "Identity basics"
    ]
  },
  {
    "id": "eda-063",
    "title": "Microsoft Azure Foundations",
    "area": "Cloud, Networks & DevOps",
    "audience": "Professional",
    "description": "Develop practical skills in microsoft azure foundations through azure services, resource management and monitoring.",
    "topics": [
      "Azure services",
      "Resource management",
      "Monitoring"
    ]
  },
  {
    "id": "eda-064",
    "title": "Google Cloud Foundations",
    "area": "Cloud, Networks & DevOps",
    "audience": "Professional",
    "description": "Develop practical skills in google cloud foundations through compute and storage, cloud networking and access management.",
    "topics": [
      "Compute and storage",
      "Cloud networking",
      "Access management"
    ]
  },
  {
    "id": "eda-065",
    "title": "Linux Administration",
    "area": "Cloud, Networks & DevOps",
    "audience": "Professional",
    "description": "Develop practical skills in linux administration through shell commands, permissions and service management.",
    "topics": [
      "Shell commands",
      "Permissions",
      "Service management"
    ]
  },
  {
    "id": "eda-066",
    "title": "Computer Networking Foundations",
    "area": "Cloud, Networks & DevOps",
    "audience": "Professional",
    "description": "Develop practical skills in computer networking foundations through ip addressing, routing and network troubleshooting.",
    "topics": [
      "IP addressing",
      "Routing",
      "Network troubleshooting"
    ]
  },
  {
    "id": "eda-067",
    "title": "Docker & Containerisation",
    "area": "Cloud, Networks & DevOps",
    "audience": "Professional",
    "description": "Develop practical skills in docker & containerisation through container images, volumes and container networking.",
    "topics": [
      "Container images",
      "Volumes",
      "Container networking"
    ]
  },
  {
    "id": "eda-068",
    "title": "Kubernetes Foundations",
    "area": "Cloud, Networks & DevOps",
    "audience": "Professional",
    "description": "Develop practical skills in kubernetes foundations through pods, deployments and service discovery.",
    "topics": [
      "Pods",
      "Deployments",
      "Service discovery"
    ]
  },
  {
    "id": "eda-069",
    "title": "DevOps & CI/CD",
    "area": "Cloud, Networks & DevOps",
    "audience": "Professional",
    "description": "Develop practical skills in devops & ci/cd through build pipelines, automated checks and release workflows.",
    "topics": [
      "Build pipelines",
      "Automated checks",
      "Release workflows"
    ]
  },
  {
    "id": "eda-070",
    "title": "Website Hosting & Domain Management",
    "area": "Cloud, Networks & DevOps",
    "audience": "Professional",
    "description": "Develop practical skills in website hosting & domain management through dns records, hosting setup and tls certificates.",
    "topics": [
      "DNS records",
      "Hosting setup",
      "TLS certificates"
    ]
  },
  {
    "id": "eda-071",
    "title": "Digital Marketing",
    "area": "Digital Marketing & Sales",
    "audience": "Business Owner",
    "description": "Develop practical skills in digital marketing through campaign planning, content strategy and measurement.",
    "topics": [
      "Campaign planning",
      "Content strategy",
      "Measurement"
    ]
  },
  {
    "id": "eda-072",
    "title": "Social Media Management",
    "area": "Digital Marketing & Sales",
    "audience": "Business Owner",
    "description": "Develop practical skills in social media management through content calendars, community management and reporting.",
    "topics": [
      "Content calendars",
      "Community management",
      "Reporting"
    ]
  },
  {
    "id": "eda-073",
    "title": "Search Engine Optimisation",
    "area": "Digital Marketing & Sales",
    "audience": "Business Owner",
    "description": "Develop practical skills in search engine optimisation through keyword research, on-page seo and technical checks.",
    "topics": [
      "Keyword research",
      "On-page SEO",
      "Technical checks"
    ]
  },
  {
    "id": "eda-074",
    "title": "Search Engine Marketing",
    "area": "Digital Marketing & Sales",
    "audience": "Business Owner",
    "description": "Develop practical skills in search engine marketing through ad campaign structure, keyword targeting and conversion measurement.",
    "topics": [
      "Ad campaign structure",
      "Keyword targeting",
      "Conversion measurement"
    ]
  },
  {
    "id": "eda-075",
    "title": "Meta Ads Campaign Management",
    "area": "Digital Marketing & Sales",
    "audience": "Business Owner",
    "description": "Develop practical skills in meta ads campaign management through audience targeting, ad creatives and campaign optimisation.",
    "topics": [
      "Audience targeting",
      "Ad creatives",
      "Campaign optimisation"
    ]
  },
  {
    "id": "eda-076",
    "title": "Email Marketing",
    "area": "Digital Marketing & Sales",
    "audience": "Business Owner",
    "description": "Develop practical skills in email marketing through audience lists, email campaigns and performance reporting.",
    "topics": [
      "Audience lists",
      "Email campaigns",
      "Performance reporting"
    ]
  },
  {
    "id": "eda-077",
    "title": "Content Marketing Strategy",
    "area": "Digital Marketing & Sales",
    "audience": "Business Owner",
    "description": "Develop practical skills in content marketing strategy through content planning, distribution and engagement analysis.",
    "topics": [
      "Content planning",
      "Distribution",
      "Engagement analysis"
    ]
  },
  {
    "id": "eda-078",
    "title": "YouTube Channel Management",
    "area": "Digital Marketing & Sales",
    "audience": "Business Owner",
    "description": "Develop practical skills in youtube channel management through channel planning, video optimisation and audience analytics.",
    "topics": [
      "Channel planning",
      "Video optimisation",
      "Audience analytics"
    ]
  },
  {
    "id": "eda-079",
    "title": "TikTok & Short-Form Marketing",
    "area": "Digital Marketing & Sales",
    "audience": "Business Owner",
    "description": "Develop practical skills in tiktok & short-form marketing through short-form storytelling, content scheduling and engagement metrics.",
    "topics": [
      "Short-form storytelling",
      "Content scheduling",
      "Engagement metrics"
    ]
  },
  {
    "id": "eda-080",
    "title": "Digital Sales & CRM",
    "area": "Digital Marketing & Sales",
    "audience": "Business Owner",
    "description": "Develop practical skills in digital sales & crm through lead management, sales pipelines and customer follow-up.",
    "topics": [
      "Lead management",
      "Sales pipelines",
      "Customer follow-up"
    ]
  },
  {
    "id": "eda-081",
    "title": "Graphic Design Foundations",
    "area": "Graphic Design & Visual Communication",
    "audience": "Student",
    "description": "Develop practical skills in graphic design foundations through layout, typography and brand visuals.",
    "topics": [
      "Layout",
      "Typography",
      "Brand visuals"
    ]
  },
  {
    "id": "eda-082",
    "title": "Canva Design Essentials",
    "area": "Graphic Design & Visual Communication",
    "audience": "Student",
    "description": "Develop practical skills in canva design essentials through design templates, visual hierarchy and export formats.",
    "topics": [
      "Design templates",
      "Visual hierarchy",
      "Export formats"
    ]
  },
  {
    "id": "eda-083",
    "title": "Adobe Photoshop Foundations",
    "area": "Graphic Design & Visual Communication",
    "audience": "Student",
    "description": "Develop practical skills in adobe photoshop foundations through image layers, photo editing and digital composition.",
    "topics": [
      "Image layers",
      "Photo editing",
      "Digital composition"
    ]
  },
  {
    "id": "eda-084",
    "title": "Adobe Illustrator Foundations",
    "area": "Graphic Design & Visual Communication",
    "audience": "Student",
    "description": "Develop practical skills in adobe illustrator foundations through vector shapes, paths and illustration exports.",
    "topics": [
      "Vector shapes",
      "Paths",
      "Illustration exports"
    ]
  },
  {
    "id": "eda-085",
    "title": "Brand Identity Design",
    "area": "Graphic Design & Visual Communication",
    "audience": "Student",
    "description": "Develop practical skills in brand identity design through logo concepts, colour systems and brand guidelines.",
    "topics": [
      "Logo concepts",
      "Colour systems",
      "Brand guidelines"
    ]
  },
  {
    "id": "eda-086",
    "title": "UI/UX Design Foundations",
    "area": "Graphic Design & Visual Communication",
    "audience": "Student",
    "description": "Develop practical skills in ui/ux design foundations through user research, wireframes and usability testing.",
    "topics": [
      "User research",
      "Wireframes",
      "Usability testing"
    ]
  },
  {
    "id": "eda-087",
    "title": "Figma Interface Design",
    "area": "Graphic Design & Visual Communication",
    "audience": "Student",
    "description": "Develop practical skills in figma interface design through components, auto layout and interactive prototypes.",
    "topics": [
      "Components",
      "Auto layout",
      "Interactive prototypes"
    ]
  },
  {
    "id": "eda-088",
    "title": "Digital Illustration",
    "area": "Graphic Design & Visual Communication",
    "audience": "Student",
    "description": "Develop practical skills in digital illustration through drawing fundamentals, digital brushes and illustration workflows.",
    "topics": [
      "Drawing fundamentals",
      "Digital brushes",
      "Illustration workflows"
    ]
  },
  {
    "id": "eda-089",
    "title": "Infographic Design",
    "area": "Graphic Design & Visual Communication",
    "audience": "Student",
    "description": "Develop practical skills in infographic design through information structure, visual encoding and readable layouts.",
    "topics": [
      "Information structure",
      "Visual encoding",
      "Readable layouts"
    ]
  },
  {
    "id": "eda-090",
    "title": "Print & Digital Publication Design",
    "area": "Graphic Design & Visual Communication",
    "audience": "Student",
    "description": "Develop practical skills in print & digital publication design through page grids, typography and production files.",
    "topics": [
      "Page grids",
      "Typography",
      "Production files"
    ]
  },
  {
    "id": "eda-091",
    "title": "Content Creation",
    "area": "Video, Audio & Animation",
    "audience": "Student",
    "description": "Develop practical skills in content creation through storytelling, creative planning and publishing.",
    "topics": [
      "Storytelling",
      "Creative planning",
      "Publishing"
    ]
  },
  {
    "id": "eda-092",
    "title": "Video Editing",
    "area": "Video, Audio & Animation",
    "audience": "Student",
    "description": "Develop practical skills in video editing through editing workflow, sound and captions and export settings.",
    "topics": [
      "Editing workflow",
      "Sound and captions",
      "Export settings"
    ]
  },
  {
    "id": "eda-093",
    "title": "CapCut Video Production",
    "area": "Video, Audio & Animation",
    "audience": "Student",
    "description": "Develop practical skills in capcut video production through timeline editing, text and effects and mobile exports.",
    "topics": [
      "Timeline editing",
      "Text and effects",
      "Mobile exports"
    ]
  },
  {
    "id": "eda-094",
    "title": "Adobe Premiere Pro Foundations",
    "area": "Video, Audio & Animation",
    "audience": "Student",
    "description": "Develop practical skills in adobe premiere pro foundations through media organisation, video sequences and colour correction.",
    "topics": [
      "Media organisation",
      "Video sequences",
      "Colour correction"
    ]
  },
  {
    "id": "eda-095",
    "title": "Motion Graphics with After Effects",
    "area": "Video, Audio & Animation",
    "audience": "Student",
    "description": "Develop practical skills in motion graphics with after effects through keyframes, animated typography and compositing.",
    "topics": [
      "Keyframes",
      "Animated typography",
      "Compositing"
    ]
  },
  {
    "id": "eda-096",
    "title": "2D Animation Foundations",
    "area": "Video, Audio & Animation",
    "audience": "Student",
    "description": "Develop practical skills in 2d animation foundations through timing, character movement and scene assembly.",
    "topics": [
      "Timing",
      "Character movement",
      "Scene assembly"
    ]
  },
  {
    "id": "eda-097",
    "title": "3D Modelling with Blender",
    "area": "Video, Audio & Animation",
    "audience": "Student",
    "description": "Develop practical skills in 3d modelling with blender through modelling, materials and rendering.",
    "topics": [
      "Modelling",
      "Materials",
      "Rendering"
    ]
  },
  {
    "id": "eda-098",
    "title": "Digital Photography",
    "area": "Video, Audio & Animation",
    "audience": "Student",
    "description": "Develop practical skills in digital photography through composition, exposure and photo workflow.",
    "topics": [
      "Composition",
      "Exposure",
      "Photo workflow"
    ]
  },
  {
    "id": "eda-099",
    "title": "Podcast Production",
    "area": "Video, Audio & Animation",
    "audience": "Student",
    "description": "Develop practical skills in podcast production through episode planning, audio recording and editing and publishing.",
    "topics": [
      "Episode planning",
      "Audio recording",
      "Editing and publishing"
    ]
  },
  {
    "id": "eda-100",
    "title": "Audio Editing & Sound Design",
    "area": "Video, Audio & Animation",
    "audience": "Student",
    "description": "Develop practical skills in audio editing & sound design through audio cleanup, layered sound and mixing.",
    "topics": [
      "Audio cleanup",
      "Layered sound",
      "Mixing"
    ]
  },
  {
    "id": "eda-101",
    "title": "E-commerce Foundations",
    "area": "Digital Business & Entrepreneurship",
    "audience": "Business Owner",
    "description": "Develop practical skills in e-commerce foundations through store planning, product listings and customer service.",
    "topics": [
      "Store planning",
      "Product listings",
      "Customer service"
    ]
  },
  {
    "id": "eda-102",
    "title": "Digital Entrepreneurship",
    "area": "Digital Business & Entrepreneurship",
    "audience": "Business Owner",
    "description": "Develop practical skills in digital entrepreneurship through business models, digital tools and growth planning.",
    "topics": [
      "Business models",
      "Digital tools",
      "Growth planning"
    ]
  },
  {
    "id": "eda-103",
    "title": "Shopify Store Management",
    "area": "Digital Business & Entrepreneurship",
    "audience": "Business Owner",
    "description": "Develop practical skills in shopify store management through store setup, product catalogues and order workflows.",
    "topics": [
      "Store setup",
      "Product catalogues",
      "Order workflows"
    ]
  },
  {
    "id": "eda-104",
    "title": "WooCommerce Store Management",
    "area": "Digital Business & Entrepreneurship",
    "audience": "Business Owner",
    "description": "Develop practical skills in woocommerce store management through store configuration, product management and checkout workflows.",
    "topics": [
      "Store configuration",
      "Product management",
      "Checkout workflows"
    ]
  },
  {
    "id": "eda-105",
    "title": "Digital Product Creation",
    "area": "Digital Business & Entrepreneurship",
    "audience": "Business Owner",
    "description": "Develop practical skills in digital product creation through audience research, product packaging and online delivery.",
    "topics": [
      "Audience research",
      "Product packaging",
      "Online delivery"
    ]
  },
  {
    "id": "eda-106",
    "title": "Freelancing & Online Portfolio",
    "area": "Digital Business & Entrepreneurship",
    "audience": "Business Owner",
    "description": "Develop practical skills in freelancing & online portfolio through service positioning, portfolio projects and client communication.",
    "topics": [
      "Service positioning",
      "Portfolio projects",
      "Client communication"
    ]
  },
  {
    "id": "eda-107",
    "title": "Virtual Assistant Skills",
    "area": "Digital Business & Entrepreneurship",
    "audience": "Business Owner",
    "description": "Develop practical skills in virtual assistant skills through task coordination, calendar support and remote communication.",
    "topics": [
      "Task coordination",
      "Calendar support",
      "Remote communication"
    ]
  },
  {
    "id": "eda-108",
    "title": "Digital Project Management",
    "area": "Digital Business & Entrepreneurship",
    "audience": "Business Owner",
    "description": "Develop practical skills in digital project management through scope planning, task tracking and delivery reviews.",
    "topics": [
      "Scope planning",
      "Task tracking",
      "Delivery reviews"
    ]
  },
  {
    "id": "eda-109",
    "title": "Online Customer Support",
    "area": "Digital Business & Entrepreneurship",
    "audience": "Business Owner",
    "description": "Develop practical skills in online customer support through support channels, issue resolution and service reporting.",
    "topics": [
      "Support channels",
      "Issue resolution",
      "Service reporting"
    ]
  },
  {
    "id": "eda-110",
    "title": "Digital Bookkeeping & Accounting Tools",
    "area": "Digital Business & Entrepreneurship",
    "audience": "Business Owner",
    "description": "Develop practical skills in digital bookkeeping & accounting tools through transaction records, reconciliation and financial reports.",
    "topics": [
      "Transaction records",
      "Reconciliation",
      "Financial reports"
    ]
  },
  {
    "id": "eda-111",
    "title": "Internet of Things Foundations",
    "area": "Emerging Technology & Digital Careers",
    "audience": "Professional",
    "description": "Develop practical skills in internet of things foundations through connected devices, sensors and iot data flows.",
    "topics": [
      "Connected devices",
      "Sensors",
      "IoT data flows"
    ]
  },
  {
    "id": "eda-112",
    "title": "Robotics & Physical Computing",
    "area": "Emerging Technology & Digital Careers",
    "audience": "Professional",
    "description": "Develop practical skills in robotics & physical computing through controllers, sensors and actuators and prototype projects.",
    "topics": [
      "Controllers",
      "Sensors and actuators",
      "Prototype projects"
    ]
  },
  {
    "id": "eda-113",
    "title": "Game Development Foundations",
    "area": "Emerging Technology & Digital Careers",
    "audience": "Professional",
    "description": "Develop practical skills in game development foundations through game mechanics, player interaction and prototype testing.",
    "topics": [
      "Game mechanics",
      "Player interaction",
      "Prototype testing"
    ]
  },
  {
    "id": "eda-114",
    "title": "Unity Game Development",
    "area": "Emerging Technology & Digital Careers",
    "audience": "Professional",
    "description": "Develop practical skills in unity game development through scenes, game scripting and build workflows.",
    "topics": [
      "Scenes",
      "Game scripting",
      "Build workflows"
    ]
  },
  {
    "id": "eda-115",
    "title": "Augmented Reality Foundations",
    "area": "Emerging Technology & Digital Careers",
    "audience": "Professional",
    "description": "Develop practical skills in augmented reality foundations through ar concepts, scene placement and interactive experiences.",
    "topics": [
      "AR concepts",
      "Scene placement",
      "Interactive experiences"
    ]
  },
  {
    "id": "eda-116",
    "title": "Virtual Reality Foundations",
    "area": "Emerging Technology & Digital Careers",
    "audience": "Professional",
    "description": "Develop practical skills in virtual reality foundations through immersive design, vr interaction and prototype testing.",
    "topics": [
      "Immersive design",
      "VR interaction",
      "Prototype testing"
    ]
  },
  {
    "id": "eda-117",
    "title": "Blockchain Foundations",
    "area": "Emerging Technology & Digital Careers",
    "audience": "Professional",
    "description": "Develop practical skills in blockchain foundations through distributed ledgers, smart contract concepts and use-case evaluation.",
    "topics": [
      "Distributed ledgers",
      "Smart contract concepts",
      "Use-case evaluation"
    ]
  },
  {
    "id": "eda-118",
    "title": "Digital Product Management",
    "area": "Emerging Technology & Digital Careers",
    "audience": "Professional",
    "description": "Develop practical skills in digital product management through user needs, product roadmaps and outcome metrics.",
    "topics": [
      "User needs",
      "Product roadmaps",
      "Outcome metrics"
    ]
  },
  {
    "id": "eda-119",
    "title": "Technical Writing & Documentation",
    "area": "Emerging Technology & Digital Careers",
    "audience": "Professional",
    "description": "Develop practical skills in technical writing & documentation through documentation structure, clear explanations and developer guides.",
    "topics": [
      "Documentation structure",
      "Clear explanations",
      "Developer guides"
    ]
  },
  {
    "id": "eda-120",
    "title": "Digital Career & Portfolio Development",
    "area": "Emerging Technology & Digital Careers",
    "audience": "Professional",
    "description": "Develop practical skills in digital career & portfolio development through skills planning, project portfolios and interview preparation.",
    "topics": [
      "Skills planning",
      "Project portfolios",
      "Interview preparation"
    ]
  }
];
