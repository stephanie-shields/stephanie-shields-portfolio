import html from '../assets/technologies/html.svg'
import css from '../assets/technologies/css.svg'
import sass from '../assets/technologies/sass.svg'
import javascript from '../assets/technologies/javascript.svg'
import react from '../assets/technologies/react.svg'
import angular from '../assets/technologies/angular.svg'
import vue from '../assets/technologies/vue.svg'
import storybook from '../assets/technologies/storybook.svg'
import git from '../assets/technologies/git.svg'
import github from '../assets/technologies/github.svg'
import gitlab from '../assets/technologies/gitlab.svg'
import npm from '../assets/technologies/npm.svg'
import visualStudioCode from '../assets/technologies/visual-studio-code.svg'
import googleLighthouse from '../assets/technologies/google-lighthouse.svg'
import uswds from '../assets/technologies/uswds.svg'
import googleMaterialDesign from '../assets/technologies/google-material-design.svg'
import bootstrap from '../assets/technologies/bootstrap.svg'
import figma from '../assets/technologies/figma.svg'
import adobeXd from '../assets/technologies/adobe-xd.svg'
import sketch from '../assets/technologies/sketch.svg'
import adobeIllustrator from '../assets/technologies/adobe-illustrator.svg'
import adobePhotoshop from '../assets/technologies/adobe-photoshop.svg'
import mural from '../assets/technologies/mural.svg'
import axure from '../assets/technologies/axure.svg'
import optimal from '../assets/technologies/optimal.svg'
import medallia from '../assets/technologies/medallia.svg'
import servicenow from '../assets/technologies/servicenow.svg'
import jira from '../assets/technologies/jira.svg'
import confluence from '../assets/technologies/confluence.svg'
import trello from '../assets/technologies/trello.svg'
import slack from '../assets/technologies/slack.svg'
import lumaSystem from '../assets/technologies/luma-system.svg'

export interface Technology {
  id: string
  title: string
  logo: string
}

export const technologies: Technology[] = [
  { id: 'html', title: 'HTML', logo: html },
  { id: 'css', title: 'CSS', logo: css },
  { id: 'sass', title: 'Sass', logo: sass },
  { id: 'javascript', title: 'JavaScript', logo: javascript },
  { id: 'react', title: 'React', logo: react },
  { id: 'angular', title: 'Angular', logo: angular },
  { id: 'vue', title: 'Vue', logo: vue },
  { id: 'storybook', title: 'Storybook', logo: storybook },
  { id: 'git', title: 'Git', logo: git },
  { id: 'github', title: 'GitHub', logo: github },
  { id: 'gitlab', title: 'GitLab', logo: gitlab },
  { id: 'npm', title: 'NPM', logo: npm },
  { id: 'visual-studio-code', title: 'Visual Studio Code', logo: visualStudioCode },
  { id: 'google-lighthouse', title: 'Google Lighthouse', logo: googleLighthouse },
  { id: 'uswds', title: 'U.S. Web Design System', logo: uswds },
  { id: 'google-material-design', title: 'Google Material Design', logo: googleMaterialDesign },
  { id: 'bootstrap', title: 'Bootstrap', logo: bootstrap },
  { id: 'figma', title: 'Figma', logo: figma },
  { id: 'adobe-xd', title: 'Adobe XD', logo: adobeXd },
  { id: 'sketch', title: 'Sketch', logo: sketch },
  { id: 'adobe-illustrator', title: 'Adobe Illustrator', logo: adobeIllustrator },
  { id: 'adobe-photoshop', title: 'Adobe Photoshop', logo: adobePhotoshop },
  { id: 'mural', title: 'Mural', logo: mural },
  { id: 'axure', title: 'Axure', logo: axure },
  { id: 'optimal', title: 'Optimal Workshop', logo: optimal },
  { id: 'medallia', title: 'Medallia', logo: medallia },
  { id: 'servicenow', title: 'ServiceNow', logo: servicenow },
  { id: 'jira', title: 'Jira', logo: jira },
  { id: 'confluence', title: 'Confluence', logo: confluence },
  { id: 'trello', title: 'Trello', logo: trello },
  { id: 'slack', title: 'Slack', logo: slack },
  { id: 'luma-system', title: 'LUMA System', logo: lumaSystem },
]
