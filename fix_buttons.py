import re

with open('components/ActionPages.tsx', 'r') as f:
    content = f.read()

btn_style = 'bg-[#000000] border-2 border-[#9333EA] shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_35px_rgba(147,51,234,0.8)] hover:scale-105 transition-all duration-300 text-white font-bold tracking-[0.2em] uppercase'

# Play on Spotify button in ActionPages.tsx
content = content.replace(
    'className="bg-[#0B0D0F] border border-[#5F4A8B] shadow-[0_0_15px_rgba(95,74,139,0.4)] hover:shadow-[0_0_25px_rgba(95,74,139,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 w-full justify-center md:w-auto font-bold py-4 px-6 md:px-10 rounded-full flex items-center gap-4 font-heading uppercase tracking-[0.15em] text-sm md:text-base text-white"',
    f'className="{btn_style} w-full justify-center md:w-auto py-4 px-6 md:px-10 rounded-full flex items-center gap-4 font-heading text-sm md:text-base"'
)

# Stream Now button in ActionPages.tsx
content = content.replace(
    'className="liquid-glass text-white font-bold py-4 px-12 rounded-full shadow-[0_0_25px_rgba(168,85,247,0.7)] hover:shadow-[0_0_35px_rgba(168,85,247,0.9)] border border-purple-500/50 hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-4 mx-auto font-heading uppercase tracking-widest"',
    f'className="{btn_style} py-4 px-12 rounded-full flex items-center justify-center gap-4 mx-auto font-heading"'
)

with open('components/ActionPages.tsx', 'w') as f:
    f.write(content)
