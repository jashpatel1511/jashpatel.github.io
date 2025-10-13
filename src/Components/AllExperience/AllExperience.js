import React from "react";
import SpecialColumn from "../SpecialColumn/SpecialColumn";

function AllExperience() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center services mt-5">
      <SpecialColumn
        title={"QuadReal"}
        symbol={"Sept 2025 - Present"}
        description={
          "Developed and maintain MuleSoft-based integration solutions using an API-led architecture to connect systems like Workday, Yardi, and ServiceNow. My work ensures reliable data flow and scalability across platforms while resolving critical issues, improving health monitoring, and supporting data migration to Liferay. I also collaborate with the Cybersecurity team to integrate Workiva and Microsoft Purview into Microsoft Fabric, enhancing compliance and monitoring."
        }
        descriptionHeading={"Integration Developer Intern"}
      />
      <SpecialColumn
        title={"Agevole"}
        symbol={"Jan 2024 - Aug 2025"}
        description={
          "Designed and developed distributed microservices and React + TypeScript dashboards for a multi-tenant sales platform handling over 1K daily orders and $10M+ in revenue. I built a serverless AWS video pipeline using S3, Lambda, SQS, Fargate, and FFmpeg, automating media workflows and reducing processing time by up to 20%. I also contributed to API design, CI/CD automation, and infrastructure with Terraform and Datadog, improving scalability, reliability, and team efficiency."
        }
        descriptionHeading={"Software Developer (Remote)"}
      />
      <SpecialColumn
        title={"Opus Technologies"}
        symbol={"Jan 2024 - Feb 2024"}
        description={
          "Developed a high-performance stock data platform for NSE India, automating CSV extraction and real-time insights. Designed a scalable database to improve query efficiency by 30% with 99.9% data accuracy. Optimized the data pipeline, cutting processing time by 40% for faster stock analysis."
        }
        descriptionHeading={"Full-Stack web Developer (contract base)"}
      />
      <SpecialColumn
        title={"Aphelios Solution"}
        symbol={"Jul 2023 - Nov 2023"}
        description={
          "Developed a cross-platform mobile app for buying and selling second-hand vehicles using React Native and Firebase, accelerating the listing process by 30%. Conducted user research and A/B testing, enhancing UI/UX and boosting engagement by 25%. Optimized performance with lazy loading and code splitting, reducing startup time by 40% for a seamless Android and iOS experience."
        }
        descriptionHeading={"Front-end Application Developer"}
      />
    </div>
  );
}

export default AllExperience;
