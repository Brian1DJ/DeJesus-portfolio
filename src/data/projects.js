// Project Data
// Edit this file to add/modify your projects

export const projects = [
  {
  id: 1,
  year: 2023,
  quarter: 'Q2',
  title: 'AX Fitness Website',
  type: 'web',

  problem: 'AX Fitness relied entirely on walk-ins and word-of-mouth. There was no website, no online presence, and no clear way for gym-goers to view services, schedules, or promotions. Everything—from inquiries to membership details—was handled manually on-site.',

  solution: 'Designed and built a responsive website that introduced AX Fitness online. The site presents services, pricing, schedules, and contact details in one place, giving gym-goers a clear, modern way to understand the gym before ever stepping inside.',

  result: 'Improved first-time inquiries and reduced in-person questions by centralizing information, giving the gym a professional digital presence for the first time.',

  tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],

  metrics: { 
    users: 847, 
    engagement: '+23%' 
  },

  // 🔽 Add these
  liveUrl: 'https://axfitness.vercel.app',     // your deployed site
  repoUrl: 'https://github.com/you/ax-fitness', // optional
  previewable: true,
  screenshots: [
    '/projects/axfitness/home.png',
    '/projects/axfitness/services.png',
    '/projects/axfitness/contact.png'
  ]
},
,
  {
    id: 2,
    year: 2023,
    quarter: 'Q3',
    title: 'Evaluation Management System for NU Employees',
    type: 'data',
    problem: 'Local government published 200-page PDF budget reports that residents couldn\'t easily understand or explore.',
    solution: 'Created an interactive dashboard with drill-down capabilities, comparing budget allocation across departments and years with real-time visualizations.',
    result: 'Used by city council in 3 public hearings, featured in local news, 12,000+ sessions in first month',
    tech: ['React', 'D3.js', 'Python', 'Pandas'],
    metrics: { 
      sessions: '12k', 
      impact: 'City council presentation' 
    }
  },
  {
    id: 3,
    year: 2024,
    quarter: 'Q1',
    title: 'Real-time Collaboration Whiteboard',
    type: 'web',
    problem: 'Study groups needed a lightweight alternative to Miro that worked on campus WiFi (often unstable) with low latency.',
    solution: 'Built a WebSocket-based drawing canvas with optimistic UI updates, offline mode, and conflict resolution for simultaneous edits.',
    result: 'Average latency under 100ms, handled 8 concurrent users without lag, zero data loss in 200+ sessions',
    tech: ['React', 'WebSocket', 'Canvas API', 'IndexedDB'],
    metrics: { 
      latency: '<100ms', 
      sessions: '200+' 
    }
  },
  {
    id: 4,
    year: 2024,
    quarter: 'Q2',
    title: 'Course Load Optimizer',
    type: 'system',
    problem: 'Creating a valid 4-year course schedule that satisfied prerequisites, credit limits, and graduation requirements took students 8+ hours.',
    solution: 'Designed a constraint satisfaction algorithm that generated valid schedules in under 5 seconds, with manual override options for preferred professors.',
    result: 'Tested with 50 CS majors, 94% received a valid schedule on first attempt, average planning time reduced to 12 minutes',
    tech: ['Python', 'Constraint Propagation', 'React', 'SQLite'],
    metrics: { 
      accuracy: '94%', 
      time: '8h → 12min' 
    }
  },
  {
    id: 5,
    year: 2024,
    quarter: 'Q4',
    title: 'Sentiment Analysis for Product Reviews',
    type: 'data',
    problem: 'E-commerce platform had 50,000+ reviews but no way to surface actionable insights for product teams.',
    solution: 'Built a pipeline that classified reviews by sentiment, extracted feature-specific feedback, and generated weekly summary reports.',
    result: 'Identified 3 major pain points that led to product improvements, 89% classification accuracy on test set',
    tech: ['Python', 'Scikit-learn', 'NLTK', 'Matplotlib'],
    metrics: { 
      accuracy: '89%', 
      insights: '3 product changes' 
    }
  }
];
// Template for adding new projects:
/*
{
  id: 6,                          // Increment from last project
  year: 2024,                     // Project year
  quarter: 'Q3',                  // Q1, Q2, Q3, or Q4
  title: 'Project Name',          // Clear, descriptive title
  type: 'web',                    // 'web', 'data', or 'system'
  problem: '...',                 // What problem existed? Be specific.
  solution: '...',                // What did you build? Include key tech decisions.
  result: '...',                  // What was the measurable impact?
  tech: ['Tech', 'Stack'],        // 4-6 most relevant technologies
  metrics: {                      // 2-3 key metrics
    metric1: 'value',
    metric2: 'value'
  }
}
*/