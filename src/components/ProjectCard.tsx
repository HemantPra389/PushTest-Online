import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export function ProjectCard({ title, description, technologies, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <Card className="group card-premium glow-effect h-full overflow-hidden relative">
      {/* Gradient background overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
        style={{ background: 'var(--gradient-premium)' }}
      ></div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold group-hover:text-terminal-green transition-colors duration-300 mb-2">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6 relative z-10 flex-1 flex flex-col">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full border border-border/50 group-hover:border-terminal-green/30 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 pt-2 mt-auto">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}
              className="flex items-center gap-2 rounded-xl hover:bg-terminal-green/10 hover:border-terminal-green hover:text-terminal-green transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              Code
            </Button>
          )}
          {demoUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(demoUrl, '_blank', 'noopener,noreferrer')}
              className="flex items-center gap-2 rounded-xl hover:bg-terminal-green/10 hover:border-terminal-green hover:text-terminal-green transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              View Config
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}