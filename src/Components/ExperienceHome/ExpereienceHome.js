import React from "react";
import Title from "../Title/Title";
import Row from "../../Layout/Row";
import Column from "../../Layout/Column";
import { Image } from "react-bootstrap";
import quadreal from "../../Assets/quadreal.webp";
import LinkButton from "../LinkButton/LinkButton";
import OneTimeTypeAnimation from "../OneTimeTypeAnimation/OneTimeTypeAnimation";

function ExperienceHome() {
  return (
    <>
      <Title
        symbol={"!"}
        title={"experience"}
        discription={
          "... a snapshot of my career evolution, marked by growth, leadership, and innovation."
        }
      />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Row>
          <Column className="align-items-center py-2">
            <Image
              src={quadreal}
              className="w-100"
              style={{
                filter: "invert(0.5)",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </Column>
          <Column className="py-2">
            <div className="d-flex flex-row align-items-center">
              <OneTimeTypeAnimation
                text={"//QuadReal"}
                color={"blue"}
                size={"avg"}
                time={2}
              />
              <p className=" yellow_color font-italic small_fonts mb-2">
                {"{Sept 2025 - Present}"}
              </p>
            </div>
            <div>
              <p
                className="small_fonts"
                dangerouslySetInnerHTML={{
                  __html:
                    "As a <span class='blue_color'><u>Integratio Developer Intern (Remote)</u></span> at QuadReal, I develop and maintain MuleSoft-based integration solutions using an API-led architecture to streamline communication between systems like Workday, Yardi, and ServiceNow. My work focuses on ensuring seamless data flow, reliability, and scalability across enterprise platforms. I’ve played a key role in resolving critical integration issues, enhancing health monitoring processes, and supporting data migration initiatives from legacy systems to Liferay. Additionally, I collaborate with the Cybersecurity team to integrate tools such as Workiva and Microsoft Purview into Microsoft Fabric, strengthening data compliance and monitoring capabilities.",
                }}
              ></p>
            </div>
          </Column>
        </Row>
        <LinkButton
          to={"/experience"}
          content={"read_more"}
          className={"mt-4"}
        />
      </div>
    </>
  );
}

export default ExperienceHome;
