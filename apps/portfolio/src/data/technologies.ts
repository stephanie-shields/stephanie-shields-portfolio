// Front-end languages & frameworks
import html from '../assets/technologies/html.svg'
import css from '../assets/technologies/css.svg'
import sass from '../assets/technologies/sass.svg'
import tailwind from '../assets/technologies/tailwind.svg'
import javascript from '../assets/technologies/javascript.svg'
import typescript from '../assets/technologies/typescript.svg'
import react from '../assets/technologies/react.svg'
import angular from '../assets/technologies/angular.svg'
import vue from '../assets/technologies/vue.svg'
import webComponents from '../assets/technologies/web-components.svg'
import d3 from '../assets/technologies/d3.svg'
import storybook from '../assets/technologies/storybook.svg'

// Build tooling, testing & infrastructure
import vite from '../assets/technologies/vite.svg'
import npm from '../assets/technologies/npm.svg'
import pnpm from '../assets/technologies/pnpm.svg'
import nodejs from '../assets/technologies/nodejs.svg'
import git from '../assets/technologies/git.svg'
import github from '../assets/technologies/github.svg'
import gitlab from '../assets/technologies/gitlab.svg'
import visualStudioCode from '../assets/technologies/visual-studio-code.svg'
import playwright from '../assets/technologies/playwright.svg'
import googleLighthouse from '../assets/technologies/google-lighthouse.svg'
import aws from '../assets/technologies/aws.svg'

// AI tools
import anthropic from '../assets/technologies/anthropic.svg'
import cursor from '../assets/technologies/cursor.svg'
import githubCopilot from '../assets/technologies/github-copilot.svg'
import openai from '../assets/technologies/openai.svg'

// Design
import figma from '../assets/technologies/figma.svg'
import googleMaterialDesign from '../assets/technologies/google-material-design.svg'
import adobeIllustrator from '../assets/technologies/adobe-illustrator.svg'
import adobePhotoshop from '../assets/technologies/adobe-photoshop.svg'

// Research, delivery & collaboration
import mural from '../assets/technologies/mural.svg'
import optimal from '../assets/technologies/optimal.svg'
import medallia from '../assets/technologies/medallia.svg'
import servicenow from '../assets/technologies/servicenow.svg'
import jira from '../assets/technologies/jira.svg'
import confluence from '../assets/technologies/confluence.svg'
import slack from '../assets/technologies/slack.svg'
import lumaSystem from '../assets/technologies/luma-system.svg'

export interface Technology {
  id: string
  title: string
  logo: string
}

export const technologies: Technology[] = [
  // Front-end languages & frameworks
  { id: 'html', title: 'HTML', logo: html },
  { id: 'css', title: 'CSS', logo: css },
  { id: 'sass', title: 'Sass', logo: sass },
  { id: 'tailwind', title: 'Tailwind CSS', logo: tailwind },
  { id: 'javascript', title: 'JavaScript', logo: javascript },
  { id: 'typescript', title: 'TypeScript', logo: typescript },
  { id: 'react', title: 'React', logo: react },
  { id: 'angular', title: 'Angular', logo: angular },
  { id: 'vue', title: 'Vue', logo: vue },
  { id: 'web-components', title: 'Web Components', logo: webComponents },
  { id: 'd3', title: 'D3', logo: d3 },
  { id: 'storybook', title: 'Storybook', logo: storybook },

  // Build tooling, testing & infrastructure
  { id: 'vite', title: 'Vite', logo: vite },
  { id: 'npm', title: 'NPM', logo: npm },
  { id: 'pnpm', title: 'pnpm', logo: pnpm },
  { id: 'nodejs', title: 'Node.js', logo: nodejs },
  { id: 'git', title: 'Git', logo: git },
  { id: 'github', title: 'GitHub', logo: github },
  { id: 'gitlab', title: 'GitLab', logo: gitlab },
  { id: 'visual-studio-code', title: 'Visual Studio Code', logo: visualStudioCode },
  { id: 'playwright', title: 'Playwright', logo: playwright },
  { id: 'google-lighthouse', title: 'Google Lighthouse', logo: googleLighthouse },
  { id: 'aws', title: 'AWS', logo: aws },

  // AI tools
  { id: 'anthropic', title: 'Claude', logo: anthropic },
  { id: 'cursor', title: 'Cursor', logo: cursor },
  { id: 'github-copilot', title: 'GitHub Copilot', logo: githubCopilot },
  { id: 'openai', title: 'OpenAI', logo: openai },

  // Design
  { id: 'figma', title: 'Figma', logo: figma },
  { id: 'google-material-design', title: 'Google Material Design', logo: googleMaterialDesign },
  { id: 'adobe-illustrator', title: 'Adobe Illustrator', logo: adobeIllustrator },
  { id: 'adobe-photoshop', title: 'Adobe Photoshop', logo: adobePhotoshop },

  // Research, delivery & collaboration
  { id: 'mural', title: 'Mural', logo: mural },
  { id: 'optimal', title: 'Optimal Workshop', logo: optimal },
  { id: 'medallia', title: 'Medallia', logo: medallia },
  { id: 'servicenow', title: 'ServiceNow', logo: servicenow },
  { id: 'jira', title: 'Jira', logo: jira },
  { id: 'confluence', title: 'Confluence', logo: confluence },
  { id: 'slack', title: 'Slack', logo: slack },
  { id: 'luma-system', title: 'LUMA System', logo: lumaSystem },
]
