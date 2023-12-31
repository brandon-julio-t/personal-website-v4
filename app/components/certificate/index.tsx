"use client";

import ExternalLink from "@/components/common/external-link";
import { Variants, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import APIsAndMicroservices from "./images/APIs and Microservices.png";
import FrontEndLibraries from "./images/Front End Libraries.png";
import JavaBasic from "./images/Java (Basic).png";
import JavaScriptAlgorithmsAndDataStructures from "./images/JavaScript Algorithms and Data Structures.png";
import JavaScriptBasic from "./images/JavaScript (Basic).png";
import ReactBasic from "./images/React (Basic).png";
import ResponsiveWebDesign from "./images/Responsive Web Design.png";
import RestAPI from "./images/Rest API.png";
import TokopediaSTARTSummit from "./images/Tokopedia START Summit.png";
import TypingSpeed from "./images/Typing Speed.jpg";
import IndomaretCommonKnowledgeQuiz from "./images/Indomaret Common Knowledge Quiz.png";
import InformationSecurity from "./images/Information Security.png";
import QualityAssurance from "./images/Quality Assurance.png";
import DataVisualization from "./images/Data Visualization.png";
import BelajarDasarDasarDevOps from "./images/Belajar Dasar-Dasar DevOps.png";
import BelajarJaringanKomputerUntukPemula from "./images/Belajar Jaringan Komputer untuk Pemula.png";
import CSS from "./images/CSS.png";
import SQLBasic from "./images/SQL (Basic).png";
import MenjadiLinuxSystemAdministrator from "./images/Menjadi Linux System Administrator.png";
import BelajarImplementasiCICD from "./images/Belajar Implementasi CI-CD.png";
import AWSAcademyGraduateAWSAcademyCloudFoundations from "./images/AWS Academy Graduate - AWS Academy Cloud Foundations.png";
import AWSCertifiedCloudPractitionerFoundational from "./images/AWS Certified Cloud Practitioner Foundational.png";
import AWSCertifiedCloudPractitioner from "./images/AWS Certified Cloud Practitioner.png";
import BelajarMachineLearningUntukPemula from "./images/Belajar Machine Learning untuk Pemula.jpg";

export default function Certificate() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section>
      <h2 className="mb-4 text-center text-5xl">Certificates</h2>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3"
      >
        {certificates.sort(certificatesSortFn).map((certificate) => (
          <motion.div key={certificate.url} variants={item}>
            <ExternalLink href={certificate.url} aria-label={certificate.label}>
              <Image
                className="m-auto"
                placeholder="blur"
                src={certificate.src}
                alt={certificate.label}
              />
            </ExternalLink>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
} satisfies Variants;

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
} satisfies Variants;

function certificatesSortFn(
  a: (typeof certificates)[0],
  b: (typeof certificates)[0],
) {
  return b.url.localeCompare(a.url);
}

const certificates = [
  {
    label: "Certificate APIs and Microservices",
    src: APIsAndMicroservices,
    url: "https://www.freecodecamp.org/certification/brandon-julio-thenaro/back-end-development-and-apis",
  },
  {
    label: "Certificate Front End Libraries",
    src: FrontEndLibraries,
    url: "https://www.freecodecamp.org/certification/brandon-julio-thenaro/front-end-development-libraries",
  },
  {
    label: "Certificate Java Basic",
    src: JavaBasic,
    component: <Image className="m-auto" src={JavaBasic} alt="Java Basic" />,
    url: "https://www.hackerrank.com/certificates/db0e67348aaf",
  },
  {
    label: "Certificate JavaScript Algorithms and Data Structures",
    src: JavaScriptAlgorithmsAndDataStructures,
    url: "https://www.freecodecamp.org/certification/brandon-julio-thenaro/javascript-algorithms-and-data-structures",
  },
  {
    label: "Certificate JavaScript Basic",
    src: JavaScriptBasic,
    url: "https://www.hackerrank.com/certificates/dbd7ce689a45",
  },
  {
    label: "Certificate React Basic",
    src: ReactBasic,
    component: <Image className="m-auto" src={ReactBasic} alt="React Basic" />,
    url: "https://www.hackerrank.com/certificates/c962efa53fc2",
  },
  {
    label: "Certificate Responsive Web Design",
    src: ResponsiveWebDesign,
    url: "https://www.freecodecamp.org/certification/brandon-julio-thenaro/responsive-web-design",
  },
  {
    label: "Certificate Rest API",
    src: RestAPI,
    component: <Image className="m-auto" src={RestAPI} alt="Rest API" />,
    url: "https://www.hackerrank.com/certificates/c8d332eb3414",
  },
  {
    label: "Certificate Tokopedia START Summit",
    src: TokopediaSTARTSummit,
    url: "https://bit.ly/2xPxg83",
  },
  {
    label: "Certificate Typing Speed",
    src: TypingSpeed,
    url: "https://bit.ly/2WH3M4U",
  },
  {
    label: "Certificate Indomaret Common Knowledge Quiz",
    src: IndomaretCommonKnowledgeQuiz,
    url: "https://www.google.com",
  },
  {
    label: "Information Security",
    src: InformationSecurity,
    url: "https://www.freecodecamp.org/certification/brandon-julio-thenaro/information-security-v7",
  },
  {
    label: "Quality Assurance",
    src: QualityAssurance,
    url: "https://www.freecodecamp.org/certification/brandon-julio-thenaro/quality-assurance-v7",
  },
  {
    label: "Data Visualization",
    src: DataVisualization,
    url: "https://www.freecodecamp.org/certification/brandon-julio-thenaro/data-visualization",
  },
  {
    label: "Belajar Dasar-Dasar DevOps",
    src: BelajarDasarDasarDevOps,
    url: "https://www.dicoding.com/certificates/GRX5LLJO3P0M",
  },
  {
    label: "Belajar Jaringan Komputer untuk Pemula",
    src: BelajarJaringanKomputerUntukPemula,
    url: "https://www.dicoding.com/certificates/N9ZO7478RZG5",
  },
  {
    label: "CSS",
    src: CSS,
    url: "https://www.hackerrank.com/certificates/2b870b85fff3",
  },
  {
    label: "SQL (Basic)",
    src: SQLBasic,
    component: <Image className="m-auto" src={SQLBasic} alt="SQL (Basic)" />,
    url: "https://www.hackerrank.com/certificates/e950f9fb6fb2",
  },
  {
    label: "Menjadi Linux System Administrator",
    src: MenjadiLinuxSystemAdministrator,
    url: "https://www.dicoding.com/certificates/JMZVGKR2QZN9",
  },
  {
    label: "Belajar Implementasi CI/CD",
    src: BelajarImplementasiCICD,
    url: "https://www.dicoding.com/certificates/6RPNDLD29Z2M",
  },
  {
    label: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    src: AWSAcademyGraduateAWSAcademyCloudFoundations,
    url: "https://www.credly.com/badges/f8244e96-1f16-4c51-b1d5-10e941338303/linked_in_profile",
  },
  {
    label: "AWS Certified Cloud Practitioner Foundational",
    src: AWSCertifiedCloudPractitionerFoundational,
    url: "https://www.credly.com/badges/3da6d8a4-1b45-4027-8fa3-bb5245f3dcfb/linked_in_profile",
  },
  {
    label: "AWS Certified Cloud Practitioner",
    src: AWSCertifiedCloudPractitioner,
    url: "https://aw.certmetrics.com/amazon/public/verification.aspx",
  },
  {
    label: "Belajar Machine Learning untuk Pemula",
    src: BelajarMachineLearningUntukPemula,
    url: "https://www.dicoding.com/certificates/07Z6WV05MZQR",
  },
];
