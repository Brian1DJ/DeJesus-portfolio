// Project Data
// Edit this file to add/modify your projects

export const projects = [
  {
    id: 1,
    year: 2023,
    quarter: 'Q1',
    title: 'Campus Event Aggregator',
    type: 'web',
    problem: 'Students missed events because announcements were scattered across 12+ Facebook groups, Discord servers, and email lists.',
    solution: 'Built a centralized React dashboard that scraped and normalized event data from multiple sources, with filtering by category, date, and organization.',
    result: '847 active users in first semester, 23% increase in event attendance measured by check-ins',
    tech: ['React', 'Node.js', 'MongoDB', 'Puppeteer'],
    metrics: { 
      users: '847', 
      engagement: '+23%' 
    },
    image: '/projects/event-aggregator.jpg', // Add your screenshot path
    liveUrl: 'https://your-project.com', // Optional: live demo
    repoUrl: 'https://github.com/yourusername/event-aggregator', // Optional: GitHub repo
    previewable: true // Set to false if no live demo
  },
  {
    id: 2,
    year: 2023,
    quarter: 'Q3',
    title: 'Municipal Budget Transparency Portal',
    type: 'data',
    problem: 'Local government published 200-page PDF budget reports that residents couldn\'t easily understand or explore.',
    solution: 'Created an interactive dashboard with drill-down capabilities, comparing budget allocation across departments and years with real-time visualizations.',
    result: 'Used by city council in 3 public hearings, featured in local news, 12,000+ sessions in first month',
    tech: ['React', 'D3.js', 'Python', 'Pandas'],
    metrics: { 
      sessions: '12k', 
      impact: 'City council' 
    },
    image: '/projects/budget-portal.jpg',
    liveUrl: 'https://budget-demo.com',
    repoUrl: 'https://github.com/yourusername/budget-portal',
    previewable: true
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
    },
    image: '/projects/whiteboard.jpg',
    liveUrl: null, // No live demo
    repoUrl: 'https://github.com/yourusername/whiteboard',
    previewable: false
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
      time: '−96%' 
    },
    image: '/projects/course-optimizer.jpg',
    liveUrl: null,
    repoUrl: 'https://github.com/yourusername/course-optimizer',
    previewable: false
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
      insights: '3 fixes' 
    },
    image: '/projects/sentiment-analysis.jpg',
    liveUrl: null,
    repoUrl: 'https://github.com/yourusername/sentiment-analysis',
    previewable: false
  }
];

// Template for adding new projects:
/*
{
  id: 6,
  year: 2024,
  quarter: 'Q3',
  title: 'Project Name',
  type: 'web', // 'web', 'data', or 'system'
  problem: 'What problem existed? Be specific.',
  solution: 'What did you build? Include key tech decisions.',
  result: 'What was the measurable impact?',
  tech: ['Tech', 'Stack'], // 4-6 technologies
  metrics: {
    metric1: 'value',
    metric2: 'value'
  },
  image: '/projects/project-name.jpg', // Screenshot path
  liveUrl: 'https://demo.com', // Optional: null if not available
  repoUrl: 'https://github.com/user/repo', // Optional: null if private
  previewable: true // true if has live demo, false otherwise
}
*/