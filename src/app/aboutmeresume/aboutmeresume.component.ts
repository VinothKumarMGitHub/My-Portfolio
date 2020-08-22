import { Component, OnInit } from "@angular/core";

export class Project {
  companyName: string;
  role: string;
  location: string;
  duration: string;
  scope: string[];
  icon: string;
  website: string;
}

export class Skill {
  name: string;
  percentage: number;
}

@Component({
  selector: "app-aboutmeresume",
  templateUrl: "./aboutmeresume.component.html",
  styleUrls: ["./aboutmeresume.component.scss"],
})
export class AboutmeresumeComponent implements OnInit {
  public projects: Project[] = [
    {
      companyName: "Imagine Communications",
      role: "Technical Lead, Full Stack Developer",
      duration: "Oct 2018 - Present",
      location: "Denver, CO",
      scope: [
        "Created RESTful microservice to work as interface between in-house platform and external ad-sales soware using C#, .Net, .Net Core, Entity Framework, unifying data sources across 3 diﬀerent applications.",
        "Implemented RESTful resources and HTTP routes, successfully abstracting interaction layer utilizing C#, .Net Core, Entity Framework, Swagger, and Postman, saving 80% of maintenance time and costs across the board. ",
        "Automated order creation process for data accessibility and authentication in C#, .Net Core, Entity Framework, Swagger, Hangfire and Microso Exchange, optimizing speed to create orders by over 98%.",
        "Architected 99% automated, error free, multi format, large-scale distributed loader file processing system with C#, .Net Core, Entity Framework, ADO.NET, and SQL Server, saving 90% file processing time.",
        "Developed chip based hierarchical multi selector, calendar, and user friendly comment provider components using TypeScript, Angular 7, Microservices, HTML5, SCSS, C#, and .NET, reused in 5 applications.",
        "Designed and developed next-gen ad placement request UI leveraging existing APIs available on sales systems using TypeScript, Angular 7, C#, and .NET, projected to increase ad Sales by over 50%.",
      ],
      icon: "Imagine.jpg",
      website: "https://www.imaginecommunications.com/",
    },
    {
      companyName: "IBM",
      role: "Senior Software Engineer",
      duration: "Nov 2015 - Oct 2018",
      location: "Denver, CO",
      scope: [
        "Discussed project progress with customers, collected feedback, and directly addressed concerns, gathering and defined customer requirements to develop clear specifications for creating well-organized project plans.",
        "Engineered live ad placement system, integrating with multiple traﬀic systems using C#, VC++, ADO.NET, and SQL, supporting revenue growth of 40%.",
        "Provided technical guidance and support for an oﬀshore development team of 8, troubleshooting systems and training new hires in VC++, increasing team productivity by over 40%.",
        "Re-designed XML based ETL process utilizing C#, ADO.NET, and SQL, increasing performance by over 90%.",
      ],
      icon: "ibm.png",
      website: "https://www.ibm.com/",
    },
    {
      companyName: "Cognizant Technology Solution",
      role: "Senior Software Developer",
      duration: "Nov 2009 - Nov 2015",
      location: "Denver, CO",
      scope: [
        "Designed and developed message based common platform to have 2-way communication between external   integration systems using MSMQ, C#, and SQL Server.",
        "Automated application deployment system for on perm client servers using Power-Shell, C#, AngularJS, and   SQL Server, reducing 70% of deployment issues and deployment time.",
      ],
      icon: "cognizant.jpg",
      website: "https://www.cognizant.com/",
    },
    {
      companyName: "prolifics ( Semanticspace Technology )",
      role: "Software Developer",
      duration: "Apr 2007 - Nov 2009",
      location: "Hyderabad, AP",
      scope: [
        "Wrote highly maintainable, solid code in C#.Net for Gantt Chart and Project Management system that formed a core framework and has won consistent praise from subsequent developers since the initial version using C#.NET, Drawing library, N-Array Tree Improved performance 99% from existing control, got appreciation from CTO.",
        "Three-dimensional Visualization Software for Home Builders using C#, VRML, DirectX.",
      ],
      icon: "prolifix.png",
      website: "https://prolifics.com/",
    },
    {
      companyName: "Kwick Soft Solutions",
      role: "Applications Programmer",
      duration: "May 2005 - Apr 2007",
      location: "Chennai, TN",
      scope: [
        "Two-Dimensional floor plan editor for home builders using VC++. Created own file format for storing the drawings.",
        "Developed GPS travel notifier, based on latitude and longitude location using C++ and Developed many visualization tools on machinery dismantling and assembling using VC++.",
      ],
      icon: "kwicksoft.png",
      website: "https://www.kwicksoft.co.in/",
    },
  ];

  public skills: Skill[] = [
    {
      name: "Python",
      percentage: 70,
    },
    {
      name: "C#.Net",
      percentage: 80,
    },
    {
      name: "JavaScript",
      percentage: 60,
    },
    {
      name: "Visual C++",
      percentage: 75,
    },
    {
      name: "HTML5",
      percentage: 60,
    },
    {
      name: "CSS3",
      percentage: 45,
    },
    {
      name: "SQL",
      percentage: 75,
    },
    {
      name: "RESTful",
      percentage: 80,
    },
    {
      name: "Microservices",
      percentage: 80,
    },
    {
      name: "SOA",
      percentage: 80,
    },
    {
      name: "WCF",
      percentage: 60,
    },
    {
      name: ".Net Framework",
      percentage: 80,
    },
    {
      name: ".Net Core 2.2",
      percentage: 80,
    },
    {
      name: "Angular 8",
      percentage: 60,
    },
    {
      name: "Language-Integrated Query C#",
      percentage: 70,
    },
    {
      name: "Entity Framework",
      percentage: 60,
    },
    {
      name: "Swagger Open API",
      percentage: 90,
    },
    {
      name: "AWS (Lambda, S3, EC2)",
      percentage: 80,
    },
    {
      name: "Swagger Open API",
      percentage: 90,
    },
    {
      name: "Windows",
      percentage: 80,
    },
    {
      name: "Linux",
      percentage: 30,
    },
    {
      name: "Unix",
      percentage: 25,
    },

    {
      name: "AWS (Redshi, DynamoDB)",
      percentage: 10,
    },

    {
      name: "Terraform",
      percentage: 10,
    },
    {
      name: "Liquibase",
      percentage: 10,
    },
    {
      name: "Pandas",
      percentage: 10,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
