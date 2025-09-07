import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface ToolButtonProps {
  name: string;
  description: string;
  url: string;
  icon: string;
}

export function ToolButton({ name, description, url, icon }: ToolButtonProps) {
  return (
    <Card className="group card-premium glow-effect cursor-pointer h-full" onClick={() => window.open(url, '_blank')}>
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg group-hover:text-terminal-green transition-colors duration-300">
              {name}
            </h3>
          </div>
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-terminal-green transition-colors duration-300 opacity-0 group-hover:opacity-100" />
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {description}
        </p>
        
        <div className="pt-4 mt-auto">
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-center group-hover:bg-terminal-green/10 group-hover:text-terminal-green transition-all duration-300 rounded-xl"
          >
            Open Dashboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}