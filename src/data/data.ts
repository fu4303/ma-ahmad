import PhaedraLogo from "../assets/images/logos/phaedra.jpeg";
import BrainxLogo from "../assets/images/logos/brainxtech.png";
import CodenyaLogo from "../assets/images/logos/codenya.png";
import BrainplowLogo from "../assets/images/logos/brainplow.jpg";
import UniLogo from "../assets/images/logos/fast.png";
import figma from "../assets/images/skills/figma.png";
import vscode from "../assets/images/skills/vscode.png";
import grammarly from "../assets/images/skills/grammarly.png";
import ruby from "../assets/images/skills/ruby.png";
import rails from "../assets/images/skills/rails.png";
import javascript from "../assets/images/skills/javascript.png";
import html5 from "../assets/images/skills/html-5.png";
import css3 from "../assets/images/skills/css3.png";
import python from "../assets/images/skills/python.png";
import bootstrap from "../assets/images/skills/bootstrap.png";
import postgres from "../assets/images/skills/postgresql.png";
import redis from "../assets/images/skills/redis.png";
import mysql from "../assets/images/skills/mysql.png";
import heroku from "../assets/images/skills/heroku.png";
import docean from "../assets/images/skills/digital-ocean.png";
import aws from "../assets/images/skills/aws.png";

export const companies = [
  {
    title: "Phaedra Solutions",
    alt: "PS image",
    role: "Senior Software Engineer",
    skills: ["ruby", "rails", "typescript", "javascript", "react", "aws"],
    period: "2019 - Present",
    logo: PhaedraLogo
  },
  {
    title: "Brainx Technologies",
    alt: "BT image",
    role: "Software Engineer",
    skills: ["ruby", "rails", "javascript", "python"],
    period: "2018 - 2019",
    logo: BrainxLogo
  },
  {
    title: "Codenya Studio",
    alt: "CS image",
    role: "Co-founder, CTO",
    skills: ["ruby", "rails", "python", "typescript", "react", "aws"],
    period: "2018 - Present",
    logo: CodenyaLogo
  },
  {
    title: "Brainplow",
    alt: "Brainplow image",
    role: "Software Engineer",
    skills: ["javascript", "python", "angular"],
    period: "2017 - 2018",
    logo: BrainplowLogo
  }
];

export const institutes = [
  {
    title: "National University of Computer and Emerging Sciences",
    alt: "Nuces image",
    role: "Bachelor's Degree in Computer Science",
    skills: ["project management", "web development", "data structures"],
    period: "2013 - 2017",
    logo: UniLogo,
  }
];


export const skills = [
  {
    name: "Ruby on Rails",
    description: "Web development",
    link: "https://rubyonrails.org/",
    type: "development",
    image: rails
  },
  {
    name: "Ruby",
    description: "Web development, scrapping",
    link: "https://www.ruby-lang.org/en/",
    type: "development",
    image: ruby
  },
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: python
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap
  },
  {
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  {
    name: "Redis",
    description: "Database",
    link: "https://redis.io/",
    type: "database",
    image: redis
  },
  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku
  },
  {
    name: "AWS",
    description: "Devops",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: aws
  },
  {
    name: "Digital Ocean",
    description: "Devops",
    link: "https://www.digitalocean.com/",
    type: "devops",
    image: docean
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  }
];
