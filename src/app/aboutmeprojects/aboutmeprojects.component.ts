import { Component, OnInit } from "@angular/core";

export class Project {
  projectName: string;
  role: string;
  location: string;
  duration: string;
  gitLocation?: string;
  url?: string;
  status: string;
  scope: string[];
}

@Component({
  selector: "app-aboutmeprojects",
  templateUrl: "./aboutmeprojects.component.html",
  styleUrls: ["./aboutmeprojects.component.scss"],
})
export class AboutmeprojectsComponent implements OnInit {
  public projects: Project[] = [
    {
      projectName: "AWS S3 Uploader",
      role: "Full Stack Engineer",
      duration: "Jan 2020",
      location: "Denver, CO",
      status: "Completed",
      scope: [
        "Tool for uploading and archiving downloaded files from multiple streams to S3 Bucket for further processing" +
          ", built using  Python and Cron job, creating common repository for files to avoid data loss; wrote unit tests covering 80% of codebase.",
      ],
    },
    {
      projectName: "Load and Performance Test Tool",
      role: "Senior Software Engineer",
      duration: "Sep 2019",
      location: "Denver, CO",
      status: "Completed",
      scope: [
        "Unique load and performance testing for RESTful APIs based on frequency of API call from other systems" +
          "​, creating entire  system using C#, .Net Core, and JSON.",
      ],
    },
    {
      projectName: "Internal Server Maintenance",
      role: "Senior Software Developer",
      duration: "Dec 2018",
      location: "Denver, CO",
      status: "Completed",
      scope: [
        "Internal system to monitor all configured servers and send status to configure users every day to take preventive actions  built in C#," +
          "​ .Net Windows Service, XML, and Smtp Client, helping to reduce 80% of server downtime.",
      ],
    },
    {
      projectName: "Scrum Pocker*",
      role: "Full Stack",
      duration: "Aug 2020 - Sep 2020",
      location: "Denver, CO",
      status: "In-Progress",
      scope: [
        "Story point estimation tool to capture and track the teams points for each story built using Angular 9, JavaScript, HTML, CSS, " +
          "​ Python, AWS Lambda, AWS Elastic Bean, RESTful, FireBase Database, FireBase Login which will ease the scrum master to collect highest points.",
      ],
    },
    {
      projectName: "My Portfolio",
      role: "Full Stack",
      duration: "Aug 2020",
      location: "Denver, CO",
      status: "In-Progress",
      gitLocation:"",
      url:"",
      scope: [
        "Angular web app which shows all all about me and on going projects built using Angular 9, JavaScript, HTML, CSS deployed in S3 and pointed to 3rd Party domain."
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
