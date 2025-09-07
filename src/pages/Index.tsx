import { Terminal } from '@/components/Terminal';
import { ToolButton } from '@/components/ToolButton';
import { SkillCard } from '@/components/SkillCard';
import { ProjectCard } from '@/components/ProjectCard';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, FileText, ExternalLink, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/devops-hero.jpg';

const tools = [
  {
    name: 'Grafana',
    description: 'Interactive monitoring dashboards and analytics',
    url: 'http://192.168.56.10:3000',
    icon: '📊'
  },
  {
    name: 'Prometheus',
    description: 'Metrics collection and alerting system',
    url: 'http://192.168.56.10:9090',
    icon: '🔥'
  },
  {
    name: 'Jenkins',
    description: 'CI/CD automation and deployment pipelines',
    url: '#',
    icon: '⚙️'
  },
  {
    name: 'Jaeger',
    description: 'Distributed tracing and performance monitoring',
    url: '#',
    icon: '🔍'
  },
  {
    name: 'Kibana',
    description: 'Log analysis and visualization platform',
    url: '#',
    icon: '📈'
  }
];

const skills = [
  { name: 'Linux', icon: '🐧', category: 'Operating Systems' },
  { name: 'Docker', icon: '🐳', category: 'Containerization' },
  { name: 'Nginx', icon: '🌐', category: 'Web Servers' },
  { name: 'Apache', icon: '🪶', category: 'Web Servers' },
  { name: 'Ansible', icon: '🔧', category: 'Configuration Management' },
  { name: 'Terraform', icon: '🏗️', category: 'Infrastructure as Code' },
  { name: 'AWS EC2', icon: '☁️', category: 'Cloud Services' },
  { name: 'AWS S3', icon: '🪣', category: 'Cloud Storage' },
  { name: 'AWS VPC', icon: '🔐', category: 'Networking' },
  { name: 'AWS IAM', icon: '👤', category: 'Security' },
  { name: 'Prometheus', icon: '📡', category: 'Monitoring' },
  { name: 'Grafana', icon: '📊', category: 'Visualization' },
  { name: 'Jenkins', icon: '⚙️', category: 'CI/CD' },
  { name: 'GitHub Actions', icon: '🚀', category: 'CI/CD' }
];

const projects = [
  {
    title: 'Automated Server Provisioning',
    description: 'Complete infrastructure automation using Ansible playbooks for multi-environment server provisioning, configuration management, and application deployment.',
    technologies: ['Ansible', 'Linux', 'AWS EC2', 'YAML', 'Shell Scripting'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    title: 'Jenkins CI/CD Pipeline',
    description: 'End-to-end CI/CD pipeline with automated testing, security scanning, Docker image building, and multi-stage deployment to staging and production environments.',
    technologies: ['Jenkins', 'Docker', 'Git', 'SonarQube', 'AWS'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    title: 'Prometheus + Grafana Monitoring',
    description: 'Comprehensive monitoring setup with custom metrics collection, alerting rules, and interactive dashboards for infrastructure and application performance.',
    technologies: ['Prometheus', 'Grafana', 'AlertManager', 'Node Exporter', 'Docker'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    title: 'Centralized Logging & Tracing',
    description: 'Distributed logging and tracing system using Jaeger for microservices observability, performance tracking, and troubleshooting.',
    technologies: ['Jaeger', 'OpenTelemetry', 'Docker', 'Kubernetes', 'Go'],
    githubUrl: '#',
    demoUrl: '#'
  }
];

const Index = () => {
  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Header */}
      <header className="backdrop-blur-md bg-background/80 border-b border-border/50 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="animate-fade-in-scale">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-terminal-green to-terminal-cyan bg-clip-text text-transparent">
                pushtest.online
              </h1>
              <p className="text-sm text-muted-foreground">DevOps in Action</p>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={() => window.open('#', '_blank')} className="rounded-xl">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.open('#', '_blank')} className="rounded-xl">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--terminal-green)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                  DevOps
                  <br />
                  <span className="bg-gradient-to-r from-terminal-green via-terminal-cyan to-terminal-green bg-clip-text text-transparent">
                    Engineer
                  </span>
                </h2>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  Building scalable infrastructure with modern automation, monitoring, and cloud technologies. 
                  <span className="text-terminal-green font-medium">Premium DevOps solutions</span> for the digital age.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="btn-premium bg-terminal-green hover:bg-terminal-green/90 text-black font-semibold"
                  size="lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Live Dashboards
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-xl border-2 hover:bg-terminal-green/10 hover:border-terminal-green transition-all duration-300"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>

              {/* Scroll indicator */}
              <div className="pt-8">
                <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
              </div>
            </div>
            
            <div className="relative animate-fade-in-scale" style={{ animationDelay: '200ms' }}>
              <div className="relative group">
                <img 
                  src={heroImage} 
                  alt="DevOps Architecture and Infrastructure" 
                  className="rounded-2xl transition-all duration-500 group-hover:scale-105"
                  style={{ boxShadow: 'var(--shadow-premium)' }}
                />
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    background: 'var(--gradient-glow)',
                    filter: 'blur(20px)',
                    transform: 'scale(1.1)'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Integrations */}
      <section className="py-24 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Live DevOps Dashboards</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access read-only views of production monitoring and CI/CD systems. 
              Experience the power of modern DevOps tooling in action.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <div 
                key={tool.name} 
                className="animate-fade-in-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ToolButton {...tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Terminal */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Interactive Playground</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience real-time system diagnostics and DevOps commands. 
              Try common operations used in production environments.
            </p>
          </div>
          <div className="max-w-5xl mx-auto animate-fade-in-scale" style={{ animationDelay: '200ms' }}>
            <Terminal />
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-24 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern tools and technologies for infrastructure automation, 
              monitoring, and cloud operations at enterprise scale.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="animate-fade-in-scale"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">DevOps Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world implementations of infrastructure automation, monitoring solutions, 
              and production-ready CI/CD pipelines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="animate-fade-in-scale"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                I'm a DevOps engineer with a passion for building reliable, scalable infrastructure. 
                My expertise spans across <span className="text-terminal-green font-medium">infrastructure automation</span>, 
                CI/CD pipeline development, monitoring and observability, and cloud technologies.
              </p>
              <p className="text-muted-foreground">
                I focus on practical, hands-on experience with tools like 
                <span className="text-terminal-cyan font-medium"> Ansible, Terraform, Docker, Jenkins, Prometheus</span>, 
                and AWS services. My goal is to streamline development workflows and ensure robust, 
                maintainable infrastructure that scales with business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 backdrop-blur-md bg-background/80 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2024 pushtest.online — Premium DevOps Portfolio
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => window.open('#', '_blank')} className="rounded-xl hover:bg-terminal-green/10">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.open('#', '_blank')} className="rounded-xl hover:bg-terminal-green/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.open('#', '_blank')} className="rounded-xl hover:bg-terminal-green/10">
                <FileText className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
