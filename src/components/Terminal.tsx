import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface Command {
  command: string;
  output: string;
  delay?: number;
}

const commands: Command[] = [
  {
    command: 'ping pushtest.online',
    output: `PING pushtest.online (104.21.72.223) 56(84) bytes of data.
64 bytes from 104.21.72.223: icmp_seq=1 time=23.4 ms
64 bytes from 104.21.72.223: icmp_seq=2 time=22.8 ms
64 bytes from 104.21.72.223: icmp_seq=3 time=24.1 ms
--- pushtest.online ping statistics ---
3 packets transmitted, 3 received, 0% packet loss
time 2003ms
rtt min/avg/max/mdev = 22.8/23.4/24.1/0.5 ms`
  },
  {
    command: 'uptime',
    output: ` 14:23:42 up 127 days,  3:15,  2 users,  load average: 0.12, 0.08, 0.05`
  },
  {
    command: 'df -h',
    output: `Filesystem      Size  Used Avail Use% Mounted on
/dev/root        29G  8.2G   20G  30% /
devtmpfs        2.0G     0  2.0G   0% /dev
tmpfs           2.0G     0  2.0G   0% /dev/shm
tmpfs           394M  1.1M  393M   1% /run
tmpfs           5.0M     0  5.0M   0% /run/lock
/dev/sda15      105M  6.1M   99M   6% /boot/efi
tmpfs           394M  4.0K  394M   1% /run/user/1000`
  },
  {
    command: 'systemctl status nginx',
    output: `● nginx.service - A high performance web server and reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2024-01-15 08:42:13 UTC; 127 days ago
       Docs: man:nginx(8)
    Process: 1234 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
    Process: 1235 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
   Main PID: 1236 (nginx)
      Tasks: 5 (limit: 4679)
     Memory: 12.8M
     CGroup: /system.slice/nginx.service
             ├─1236 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
             ├─1237 nginx: worker process
             ├─1238 nginx: worker process
             ├─1239 nginx: worker process
             └─1240 nginx: worker process`,
    delay: 500
  }
];

export function Terminal() {
  const [currentLine, setCurrentLine] = useState('');
  const [history, setHistory] = useState<Array<{ type: 'command' | 'output'; content: string }>>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const runCommand = async (cmd: Command) => {
    setIsRunning(true);
    
    // Add command to history with typing animation
    setHistory(prev => [...prev, { type: 'command', content: `$ ${cmd.command}` }]);
    setCurrentLine('');
    
    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, cmd.delay || 300));
    
    // Add output to history with fade-in effect
    setHistory(prev => [...prev, { type: 'output', content: cmd.output }]);
    setIsRunning(false);
  };

  const clearTerminal = () => {
    setHistory([]);
    setCurrentLine('');
  };

  return (
    <div className="relative group">
      {/* Terminal window with premium styling */}
      <div 
        className="rounded-2xl overflow-hidden"
        style={{ background: 'var(--gradient-terminal)' }}
      >
        {/* Terminal header */}
        <div className="bg-black/20 px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></div>
            </div>
            <span className="text-white/60 text-sm font-mono ml-4">
              terminal@pushtest.online — Interactive DevOps Playground
            </span>
          </div>
        </div>
        
        {/* Terminal content */}
        <div className="p-6 font-mono text-sm min-h-[300px] max-h-[500px] overflow-y-auto">
          <div className="space-y-2 mb-6">
            {history.map((entry, index) => (
              <div 
                key={index} 
                className={`animate-fade-in-up ${
                  entry.type === 'command' 
                    ? 'text-terminal-green font-medium' 
                    : 'text-white/90'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <pre className="whitespace-pre-wrap leading-relaxed">{entry.content}</pre>
              </div>
            ))}
            
            {isRunning && (
              <div className="text-terminal-green animate-pulse">
                <span className="opacity-60">Processing...</span>
              </div>
            )}
            
            {/* Active cursor line */}
            <div className="text-terminal-green font-medium flex items-center">
              <span>$ </span>
              <span 
                className={`ml-1 w-2 h-5 inline-block transition-opacity duration-100 ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  background: 'var(--terminal-green)',
                  boxShadow: `0 0 10px hsl(var(--terminal-green) / 0.5)`
                }}
              ></span>
            </div>
          </div>
        </div>
        
        {/* Command buttons */}
        <div className="px-6 pb-6 border-t border-white/10 bg-black/10">
          <div className="pt-4">
            <div className="flex flex-wrap gap-2">
              {commands.map((cmd, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  size="sm"
                  onClick={() => runCommand(cmd)}
                  disabled={isRunning}
                  className="text-xs font-mono bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 transition-all duration-300 rounded-lg"
                >
                  {cmd.command}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={clearTerminal}
                className="text-xs font-mono bg-transparent hover:bg-red-500/20 text-white/70 hover:text-white border-white/20 hover:border-red-500/50 transition-all duration-300 rounded-lg"
              >
                clear
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle glow effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
        style={{ 
          background: 'var(--gradient-glow)',
          filter: 'blur(20px)',
          transform: 'scale(1.05)'
        }}
      ></div>
    </div>
  );
}