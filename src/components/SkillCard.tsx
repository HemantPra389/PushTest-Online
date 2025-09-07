import { Card, CardContent } from '@/components/ui/card';

interface SkillCardProps {
  name: string;
  icon: string;
  category: string;
}

export function SkillCard({ name, icon, category }: SkillCardProps) {
  return (
    <Card className="group card-premium glow-effect cursor-pointer relative overflow-hidden">
      <CardContent className="p-4 text-center">
        <div className="mb-3 text-2xl group-hover:scale-125 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="font-medium text-sm mb-1 group-hover:text-terminal-green transition-colors duration-300">
          {name}
        </h3>
        <p className="text-xs text-muted-foreground">
          {category}
        </p>
        
        {/* Subtle background effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ background: 'var(--gradient-glow)' }}
        ></div>
      </CardContent>
    </Card>
  );
}