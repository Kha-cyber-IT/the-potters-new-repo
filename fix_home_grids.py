import re

with open('components/Home.tsx', 'r') as f:
    content = f.read()

# Fix Connect Hub parent container
content = content.replace(
    'className="max-w-[1400px] mx-auto grid grid-cols-4 md:grid-cols-8 2xl:grid-cols-12 gap-0 md:gap-6 2xl:gap-8 items-stretch"',
    'className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 md:gap-8 items-stretch"'
)
# Connect Hub children - revert col-span as they are now in a 2 column grid
content = content.replace(
    'className="col-span-4 md:col-span-4 2xl:col-span-6 flex flex-col text-center md:text-left bg-[#789A99] p-8 md:p-10 justify-center h-full rounded-none md:rounded-3xl"',
    'className="flex flex-col text-center md:text-left bg-[#789A99] p-8 md:p-10 justify-center h-full rounded-none md:rounded-3xl"'
)
content = content.replace(
    'className="col-span-4 md:col-span-4 2xl:col-span-6 flex flex-col text-center md:text-left bg-[#FFD2C2] p-8 md:p-10 justify-center h-full rounded-none md:rounded-3xl"',
    'className="flex flex-col text-center md:text-left bg-[#FFD2C2] p-8 md:p-10 justify-center h-full rounded-none md:rounded-3xl"'
)


# Fix Weekly Services parent container
content = content.replace(
    'className="grid grid-cols-4 md:grid-cols-8 2xl:grid-cols-12 gap-4 md:gap-6 2xl:gap-8 max-w-[1400px] mx-auto text-left"',
    'className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 max-w-[1400px] mx-auto text-left"'
)
# Weekly Services children - revert col-span
content = content.replace(
    'className="flex flex-col justify-center bg-[#FEFACD] p-6 md:p-10 rounded-3xl col-span-4 md:col-span-8 2xl:col-span-8"',
    'className="flex flex-col justify-center bg-[#FEFACD] p-6 md:p-10 rounded-3xl"'
)
content = content.replace(
    '<div className="col-span-4 md:col-span-8 2xl:col-span-4 flex flex-col gap-4 md:gap-6">',
    '<div className="flex flex-col gap-4 md:gap-6">'
)

# Apply signature glow to buttons
btn_style = 'bg-[#000000] border-2 border-[#9333EA] shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_35px_rgba(147,51,234,0.8)] hover:scale-105 transition-all duration-300 text-white font-bold tracking-[0.2em] uppercase'

content = content.replace(
    'className="bg-[#0B0D0F] border border-[#5F4A8B] shadow-[0_0_15px_rgba(95,74,139,0.4)] hover:shadow-[0_0_25px_rgba(95,74,139,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 flex-1 sm:flex-none w-full sm:w-auto justify-center font-bold py-4 px-4 md:px-8 rounded-full font-heading uppercase tracking-[0.15em] text-xs md:text-sm"',
    f'className="{btn_style} flex-1 sm:flex-none w-full sm:w-auto justify-center py-4 px-4 md:px-8 rounded-full font-heading text-xs md:text-sm"'
)

content = content.replace(
    'className="bg-[#0B0D0F] border border-[#5F4A8B] shadow-[0_0_15px_rgba(95,74,139,0.4)] hover:shadow-[0_0_25px_rgba(95,74,139,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 w-full justify-center md:w-auto font-bold py-4 px-4 md:px-8 rounded-full font-heading uppercase tracking-[0.15em] text-xs md:text-sm"',
    f'className="{btn_style} w-full justify-center md:w-auto py-4 px-4 md:px-8 rounded-full font-heading text-xs md:text-sm"'
)

with open('components/Home.tsx', 'w') as f:
    f.write(content)
