const PROJECTS = {
  prodify: {
    index: "01",
    category: "Graduation Project",
    name: "Prodify",
    subtitle: "AI-Powered Social Productivity Platform",
    description:
      "Prodify is a bilingual mobile platform created to help users stay consistent with personal and professional goals. It combines AI-generated plans, goal-focused groups, real-time chat, streak tracking, badges, leaderboards, and progress dashboards to turn goal achievement into a more structured, social, and motivating experience.",
    details: [
      "Designed after survey insights from 265 respondents showed common challenges around unclear planning, weak accountability, and difficulty staying consistent.",
      "Built productivity groups where users can create or join shared goals, communicate through real-time chat, send daily streaks, and track group progress.",
      "Integrated Claude AI to generate editable daily or weekly action plans from the group goal, duration, and description.",
      "Implemented Firebase Authentication, Cloud Firestore streams, Firebase Remote Config, and Cloudinary media uploads for secure, real-time app behavior.",
      "Developed a Dockerized FastAPI backend with a Random Forest model that classifies streak behavior to support more personalized coaching."
    ],
    tags: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Firebase Remote Config", "Cloudinary", "Claude AI API", "FastAPI", "Docker", "Render", "Python", "scikit-learn"],
    visuals: [
      { label: "AI Plan Generation", type: "mobile", accent: "cyan" },
      { label: "Group Chat & Streaks", type: "chat", accent: "violet" },
      { label: "Progress, Badges & Leaderboard", type: "stats", accent: "blue" }
    ]
  },
  costify: {
    index: "02",
    category: "Web App",
    name: "Costify",
    subtitle: "Product Costing & Inventory Management Web App",
    description:
      "Costify is a web app designed for small businesses to manage raw materials, calculate accurate product costs, track inventory, and estimate profitable selling prices. I built cost calculation logic based on material quantities and unit-based usage, allowing users to calculate product costs even when inventory and product usage use different measurement units. The app also includes inventory tracking and email automation that extracts order numbers from incoming emails and stores them in the database.",
    details: [
      "Built product costing logic for raw materials, quantities, and unit-based material usage.",
      "Implemented inventory tracking to help users monitor stock levels and production needs.",
      "Added email automation to extract order numbers from emails and save them into the database.",
      "Designed a responsive interface that simplifies pricing, costing, and inventory decisions for small businesses."
    ],
    features: [
      "Raw material management",
      "Product cost calculator",
      "Unit conversion logic",
      "Inventory tracking",
      "Email order automation",
      "Database integration"
    ],
    tags: ["HTML", "CSS", "JavaScript", "Firebase", "Firestore", "Email Automation"],
    visuals: [
      { label: "Pricing Workspace", type: "dashboard", accent: "blue" },
      { label: "Inventory Tracker", type: "table", accent: "cyan" },
      { label: "Order Automation", type: "flow", accent: "violet" }
    ]
  },
  "sales-prediction": {
    index: "03",
    category: "AI Dashboard",
    name: "AI-Powered Predictive Sales Dashboard",
    subtitle: "Python, Streamlit & Generative AI Business Insights",
    description:
      "A web-based sales dashboard developed during my Petrolube internship to analyze real sales data and generate natural-language business insights. The project used Python and Streamlit to build an interactive analytics app with KPI cards, dynamic filters, Plotly charts, file uploads, preprocessing automation, and Gemini-powered AI explanations.",
    details: [
      "Selected Streamlit after comparing dashboard tools because it supported fast Python development, interactivity, and smooth AI integration.",
      "Built preprocessing logic to clean uploaded Excel files, standardize columns, handle missing values, derive unit-price metrics, and save optimized parquet files.",
      "Designed a modular dashboard with pages for Overview, Time Trends, Customer Analysis, Product Insights, Regional Performance, Risk Alerts, Market Share, and YTD KPIs.",
      "Created KPI cards and Plotly visuals for net revenue, contribution margin, active customers, volume, customer churn, product portfolio, regional pricing variance, and budget vs actual analysis.",
      "Integrated Gemini through langchain-google-genai and prompt builders to generate concise AI insight cards, with caching and fallback handling to improve performance."
    ],
    tags: ["Python", "Streamlit", "Pandas", "Plotly", "Gemini API", "LangChain", "openpyxl", "Parquet", "Prompt Engineering", "AI Insights", "KPI Dashboard", "Data Preprocessing"],
    visuals: [
      { label: "AI Insight Cards", type: "insight", accent: "violet" },
      { label: "Interactive KPI Dashboard", type: "dashboard", accent: "cyan" },
      { label: "Sales Trends & Risk Alerts", type: "chart", accent: "blue" }
    ]
  },
  "sales-analytics": {
    index: "04",
    category: "Business Intelligence",
    name: "Power BI Sales Performance Dashboard",
    subtitle: "Sales KPIs, Customer Behavior & Profitability Analysis",
    description:
      "A multi-page Power BI dashboard built during my Petrolube internship to analyze historical sales performance across customers, products, regions, sectors, and financial trends. The dashboard transformed raw Excel sales files into executive-ready visuals supported by Power Query cleaning, DAX measures, slicers, and interactive KPI reporting.",
    details: [
      "Gathered business requirements with supervisors and identified key KPIs including Net Revenue, Contribution Margin, CM%, Volume, Customer Count, and Average Order Value.",
      "Connected Power BI to Excel-based sales files, cleaned inconsistent data in Power Query, standardized dates and columns, and created supporting date and item-family tables.",
      "Built DAX measures for revenue, volume, profitability, customer segmentation, NR/MT, CM/MT, and root-cause variance analysis across volume, price, and mix effects.",
      "Expanded the dashboard from two initial pages to six pages covering executive snapshot, product performance, customer analysis, customer-product analysis, finance, and snapshot performance.",
      "Improved usability with slicers, tooltips, data labels, KPI icons, branded styling, and optimized filters after supervisor feedback."
    ],
    tags: ["Power BI", "Power Query", "DAX", "Excel", "KPIs", "Sales Analytics", "Customer Segmentation", "Profitability", "Data Modeling", "Business Reporting"],
    visuals: [
      { label: "Executive KPI View", type: "dashboard", accent: "blue" },
      { label: "Product & Customer Analysis", type: "chart", accent: "violet" },
      { label: "Profitability & Variance Analysis", type: "stats", accent: "cyan" }
    ]
  },
  "jewelry-ecommerce": {
    index: "05",
    category: "E-Commerce",
    name: "Jewelry E-Commerce Website",
    subtitle: "Full-Stack Jewelry Storefront with Cart & Orders",
    description:
      "A complete jewelry e-commerce website with a responsive storefront, user authentication, product browsing, cart management, checkout flow, order handling, and database-backed interactions. The project focused on combining front-end design, UI/UX, PHP server-side logic, and MySQL integration to create a polished shopping experience.",
    details: [
      "Built responsive storefront pages using HTML, CSS, and JavaScript with interactive form behavior and a polished product browsing experience.",
      "Implemented PHP and MySQL backend flows for signup, login, password reset, session handling, cart actions, checkout, and order management.",
      "Added product search suggestions using a PHP endpoint that queries the database and returns matching product results as JSON.",
      "Supported cart and order CRUD operations, including adding items, updating quantities, removing cart products, editing shipping information, and canceling orders.",
      "Applied field validation for checkout and account forms to improve data quality before storing customer and order information."
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "E-Commerce", "Cart System", "Checkout Flow", "Authentication", "CRUD", "Search Suggestions", "Responsive Design"],
    visuals: [
      { label: "Storefront Layout", type: "store", accent: "violet" },
      { label: "Cart & Checkout Flow", type: "table", accent: "blue" },
      { label: "Responsive Product Experience", type: "mobile", accent: "cyan" }
    ]
  }
};
