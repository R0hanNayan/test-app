import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2022 - Present",
    description: [
      "Led the development of a scalable microservices architecture using Node.js and Kubernetes.",
      "Implemented CI/CD pipelines, reducing deployment time by 50%.",
      "Mentored junior developers and conducted code reviews.",
    ],
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "Innovate Corp.",
    duration: "Jul 2019 - Dec 2021",
    description: [
      "Developed and maintained web applications using React and Python/Django.",
      "Collaborated with product teams to define and implement new features.",
      "Optimized database queries, improving application performance by 30%.",
    ],
  },
  {
    id: "3",
    title: "Junior Developer",
    company: "Startup Hub",
    duration: "Jan 2018 - Jun 2019",
    description: [
      "Assisted in front-end development with HTML, CSS, and JavaScript.",
      "Participated in daily stand-ups and agile sprint planning.",
      "Learned best practices in software development and version control.",
    ],
  },
];

export function WorkExperienceTimeline() {
  return (
    <section id="experience" className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
      <ScrollArea className="h-[600px] w-full max-w-3xl mx-auto rounded-md border p-4">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-muted-foreground/20"></div>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className={`w-1/2 p-4 ${index % 2 === 0 ? "pr-10" : "pl-10"}`}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.company} | {exp.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/80">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="z-10 flex-shrink-0 h-6 w-6 rounded-full bg-primary ring-4 ring-background flex items-center justify-center shadow-md absolute left-1/2 transform -translate-x-1/2">
                <span className="h-3 w-3 rounded-full bg-white dark:bg-black"></span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
}