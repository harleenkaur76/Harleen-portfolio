export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "optimizely-cli-automation",
    title: "How I Built a CLI That Cut A/B Experiment Setup Time by 80%",
    excerpt:
      "A deep dive into automating Optimizely experiment creation with Node.js, Gulp, and REST APIs — and why every CRO team needs internal tooling.",
    date: "2025-04-15",
    readTime: "8 min read",
    tags: ["CRO", "Optimizely", "Node.js", "CLI", "Automation"],
    featured: true,
    content: `# How I Built a CLI That Cut A/B Experiment Setup Time by 80%

At Optiphoenix, we were running 100+ A/B experiments annually across 8+ client accounts. Each experiment required the same repetitive steps: creating the experiment in Optimizely, setting up audience targeting, configuring event tracking, and deploying variations. The process took 2-3 hours per experiment and was error-prone.

## The Problem

Manual experiment setup had three major issues:

1. **Time-consuming**: 2-3 hours per experiment × 100+ experiments = 250+ hours annually
2. **Error-prone**: Human error in audience targeting or event configuration could invalidate an entire experiment
3. **Inconsistent**: Different engineers set up experiments differently, making cross-client analysis difficult

## The Solution: A Node.js/Gulp CLI

I built a CLI tool that automated the entire experiment lifecycle through Optimizely's REST API.

### Key Features

- **Programmatic experiment creation** via Optimizely Web REST API
- **Audience targeting automation** with reusable audience templates
- **Event tracking setup** with custom attribute-based selectors
- **Variation deployment** with automatic CSS/JS injection
- **Validation pipeline** to catch errors before deployment

### Architecture

The CLI was built with Node.js and Gulp, using a YAML-based configuration file for each experiment. This allowed non-technical team members to set up experiments by filling in a simple config file.

## Results

- **80% reduction** in experiment setup time (from 2-3 hours to 20-30 minutes)
- **Zero deployment errors** after CLI adoption
- **100% consistency** across all client experiments
- **Team-wide adoption** as the standard workflow

## Key Learnings

1. **Internal tooling ROI**: The 40 hours spent building the CLI saved 200+ hours annually
2. **API-first design**: Optimizely's REST API is powerful but underutilized
3. **YAML configs**: Non-technical stakeholders can contribute to experiment setup
4. **Validation is critical**: Catch errors before they reach production

## Code Snippet

\`\`\`typescript
// Creating an experiment via Optimizely REST API
const experiment = await optimizely.experiments.create({
  project_id: config.projectId,
  name: config.name,
  variations: config.variations.map(v => ({
    name: v.name,
    weight: v.trafficAllocation,
    actions: generateActions(v.selector, v.css)
  })),
  audience_conditions: buildAudienceTargeting(config.audience),
  metrics: config.goals.map(g => ({
    event_id: g.eventId,
    aggregator: 'sum',
    winning_direction: 'increasing'
  }))
});
\`\`\`

This tool became the backbone of our CRO operations and is still in use today.`,
  },
  {
    slug: "core-web-vitals-optimization",
    title: "Improving Lighthouse Scores by 40%: A Real-World Case Study",
    excerpt:
      "How I took a client's SPA from a 45 Lighthouse score to 85+ through code splitting, lazy loading, and critical path rendering.",
    date: "2025-03-22",
    readTime: "6 min read",
    tags: ["Performance", "Core Web Vitals", "Lighthouse", "React"],
    featured: true,
    content: `# Improving Lighthouse Scores by 40%: A Real-World Case Study

Performance isn't just a metric — it's a conversion driver. When a client's SPA scored 45 on Lighthouse, I knew we had work to do. Here's how we got to 85+.

## The Starting Point

- **Lighthouse Score**: 45 (Poor)
- **LCP**: 4.2s
- **FID**: 280ms
- **CLS**: 0.25

## The Strategy

### 1. Code Splitting with React.lazy()

Split the bundle into route-based chunks:

\`\`\`javascript
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Analytics = lazy(() => import('./pages/Analytics'));
\`\`\`

### 2. Critical CSS Extraction

Inlined above-the-fold CSS and async-loaded the rest:

\`\`\`html
<style>/* critical CSS */</style>
<link rel="preload" href="/styles/main.css" as="style" onload="this.rel='stylesheet'">
\`\`\`

### 3. Image Optimization

- Converted images to WebP format
- Implemented responsive images with srcset
- Added lazy loading for below-fold images

### 4. JavaScript Optimization

- Deferred non-critical scripts
- Removed unused JavaScript (tree-shaking)
- Preloaded critical resources

## The Results

- **Lighthouse Score**: 45 → 87 (+40%)
- **LCP**: 4.2s → 1.8s
- **FID**: 280ms → 45ms
- **CLS**: 0.25 → 0.05

## Business Impact

- **Bounce rate decreased by 15%**
- **Session duration increased by 22%**
- **Organic traffic grew by 20%** (SEO boost from Core Web Vitals)

## Tools Used

- Lighthouse CI for automated performance monitoring
- Webpack Bundle Analyzer for bundle optimization
- Chrome DevTools Performance panel for profiling

Performance optimization is an ongoing process, not a one-time fix.`,
  },
  {
    slug: "react-component-library",
    title: "Building a Reusable React Component Library That Cut Dev Time by 35%",
    excerpt:
      "How I architected a design-system-aligned component library with TypeScript, Storybook, and accessibility-first patterns.",
    date: "2025-02-10",
    readTime: "7 min read",
    tags: ["React", "TypeScript", "Design Systems", "Component Library"],
    featured: false,
    content: `# Building a Reusable React Component Library That Cut Dev Time by 35%

When you're building for 6+ clients, consistency and reusability aren't luxuries — they're necessities. Here's how I built a component library that accelerated delivery across all projects.

## Why a Component Library?

Before the library, each project had its own components. Button styles varied. Form validation logic was duplicated. Accessibility was inconsistent. The result? Slower development and a fragmented user experience.

## Architecture Decisions

### 1. TypeScript First

Every component is fully typed with explicit prop interfaces:

\`\`\`typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}
\`\`\`

### 2. Accessibility Built-In

- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Focus management

### 3. Composition Over Configuration

Components are built to be composed, not configured:

\`\`\`jsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
\`\`\`

## Results

- **35% faster** feature development
- **Zero accessibility regressions** across 6+ projects
- **Consistent UI** aligned with Figma design system
- **Faster onboarding** for new team members

## Tools

- **Storybook** for component documentation and testing
- **Rollup** for bundling
- **Jest + React Testing Library** for unit tests
- **Chromatic** for visual regression testing`,
  },
  {
    slug: "ab-testing-mistakes",
    title: "5 A/B Testing Mistakes That Cost Companies Millions (And How to Avoid Them)",
    excerpt:
      "After running 100+ experiments, I've seen the same mistakes repeatedly. Here are the most expensive ones and how to fix them.",
    date: "2025-01-18",
    readTime: "5 min read",
    tags: ["A/B Testing", "CRO", "Data Analysis", "Statistics"],
    featured: false,
    content: `# 5 A/B Testing Mistakes That Cost Companies Millions

After 100+ experiments across 8+ platforms, I've seen patterns. The same mistakes kill experiments, waste traffic, and lead to bad decisions. Here are the top 5.

## 1. Stopping Tests Too Early

**The Mistake**: Declaring a winner after 3 days with 100 visitors.

**Why It Hurts**: You need statistical significance AND statistical power. Low sample sizes produce false positives.

**The Fix**: Use a sample size calculator. Minimum 2 weeks. Wait for at least 95% significance with 80% power.

## 2. Testing Too Many Variables

**The Mistake**: Changing the headline, button color, layout, and image in one test.

**Why It Hurts**: You can't attribute the lift to any single change.

**The Fix**: One variable per test. Build a testing roadmap with isolated hypotheses.

## 3. Ignoring Segment Differences

**The Mistake**: Looking at aggregate results only.

**Why It Hurts**: A winning variation for desktop might lose on mobile. Aggregate data hides this.

**The Fix**: Always segment by device, traffic source, and user type.

## 4. Not Validating Tracking

**The Mistake**: Launching without verifying that events fire correctly.

**Why It Hurts**: If your primary metric isn't tracked correctly, the entire experiment is invalid.

**The Fix**: Pre-launch QA checklist. Verify every event fires. Check for duplicate tracking.

## 5. Running Tests Without Hypotheses

**The Mistake**: "Let's test this because it looks better."

**Why It Hurts**: Without a hypothesis, you can't learn from negative results.

**The Fix**: Every test needs: Problem → Hypothesis → Expected Outcome → Learning Plan.`,
  },
  {
    slug: "nextjs-app-router-migration",
    title: "Migrating a Production SPA to Next.js App Router: Lessons Learned",
    excerpt:
      "We migrated a high-traffic client SPA to Next.js 14 App Router. Here's what broke, what worked, and the performance gains we achieved.",
    date: "2024-12-05",
    readTime: "9 min read",
    tags: ["Next.js", "Migration", "Performance", "SSR"],
    featured: false,
    content: `# Migrating a Production SPA to Next.js App Router

Migrating a production SPA to Next.js App Router isn't just a framework swap — it's a paradigm shift. Here's how we did it for a high-traffic client.

## Why Migrate?

The existing React SPA had:
- Poor SEO (client-side rendered)
- Slow initial load (large bundle)
- No server-side data fetching

## The Migration Strategy

### Phase 1: Pages Router

First, we migrated to Next.js Pages Router. This was straightforward:
- Moved React Router routes to Next.js file-based routing
- Set up API routes for data fetching
- Configured image optimization

### Phase 2: App Router

Then, we incrementally adopted App Router:
- Migrated routes one by one
- Used Server Components for data-heavy pages
- Kept Client Components for interactive elements

## Challenges

### 1. Third-Party Libraries

Some libraries weren't compatible with Server Components. Solution: dynamic imports with \`ssr: false\`.

### 2. State Management

Redux doesn't work in Server Components. Solution: React Server Components for data, URL state for UI state.

### 3. Authentication

Session management changed. Solution: NextAuth.js with App Router support.

## Results

- **TTFB**: 800ms → 200ms
- **LCP**: 3.5s → 1.2s
- **SEO**: 40% increase in organic traffic
- **Bundle size**: 60% reduction (server components don't ship JS)

## Key Takeaways

1. Incremental migration beats big-bang
2. Not everything needs to be a Server Component
3. Third-party library compatibility is the biggest blocker
4. Testing is critical — SEO regressions are expensive`,
  },
  {
    slug: "ai-frontend-tools",
    title: "AI Tools Every Frontend Developer Should Use in 2025",
    excerpt:
      "From GitHub Copilot to V0.dev, AI is changing how we build. Here's my curated list of tools that actually improve productivity.",
    date: "2024-11-20",
    readTime: "4 min read",
    tags: ["AI", "Developer Tools", "Productivity", "Frontend"],
    featured: false,
    content: `# AI Tools Every Frontend Developer Should Use in 2025

AI isn't replacing frontend developers — it's amplifying them. Here are the tools I use daily.

## 1. GitHub Copilot

**Best for**: Boilerplate code, repetitive patterns, test generation

**My Workflow**: Write a comment describing what I need, let Copilot generate the code, then review and refine.

**Impact**: 30% faster on repetitive tasks

## 2. V0.dev

**Best for**: UI component generation from text descriptions

**My Workflow**: Describe a component in natural language, get React/Tailwind code, customize.

**Impact**: Prototyping speed increased 3x

## 3. Cursor IDE

**Best for**: Code understanding, refactoring, debugging

**My Workflow**: Ask Cursor to explain legacy code, suggest refactors, or find bugs.

**Impact**: Onboarding to new codebases cut in half

## 4. ChatGPT / Claude

**Best for**: Architecture decisions, debugging, learning

**My Workflow**: Use it as a rubber duck debugger and architecture sounding board.

**Impact**: Better architectural decisions, faster debugging

## 5. Figma AI

**Best for**: Design generation, component creation

**My Workflow**: Generate design variations, then implement in code.

**Impact**: Faster design-to-code handoff

## The Caveat

AI tools speed you up, but they don't replace:
- Understanding the fundamentals
- Code review discipline
- Architecture thinking
- User empathy

Use AI as an accelerator, not a replacement.`,
  },
];

export function getFeaturedPosts() {
  return blogPosts.filter((post) => post.featured);
}

export function getAllPosts() {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
