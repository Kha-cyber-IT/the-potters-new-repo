import re

with open('components/ActionPages.tsx', 'r') as f:
    content = f.read()

content = content.replace(
'''                <div className="col-span-4 md:col-span-8 2xl:col-span-4"><div className="col-span-4 md:col-span-8 2xl:col-span-4"><TimeCard day="Sunday" times={[
                    "Adult Bible Study & Children's Sunday School | 9:00 AM",
                    "Morning Worship Service | 10:00 AM",
                    "Evening Worship Service | 5:00 PM"
                ]} />
                <div className="col-span-4 md:col-span-4 2xl:col-span-4"><div className="col-span-4 md:col-span-4 2xl:col-span-4"><TimeCard day="Wednesdays" times={["Midweek Worship Services | 7:00 PM"]} /></div></div>
                <div className="col-span-4 md:col-span-4 2xl:col-span-4"><div className="col-span-4 md:col-span-4 2xl:col-span-4"><TimeCard day="Fridays" times={["One80 Concept | 7:00 PM"]} /></div></div>''',
'''                <div className="col-span-4 md:col-span-8 2xl:col-span-4"><TimeCard day="Sunday" times={[
                    "Adult Bible Study & Children's Sunday School | 9:00 AM",
                    "Morning Worship Service | 10:00 AM",
                    "Evening Worship Service | 5:00 PM"
                ]} /></div>
                <div className="col-span-4 md:col-span-4 2xl:col-span-4"><TimeCard day="Wednesdays" times={["Midweek Worship Services | 7:00 PM"]} /></div>
                <div className="col-span-4 md:col-span-4 2xl:col-span-4"><TimeCard day="Fridays" times={["One80 Concept | 7:00 PM"]} /></div>'''
)

with open('components/ActionPages.tsx', 'w') as f:
    f.write(content)
