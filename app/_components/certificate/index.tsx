"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { TypographyH4 } from "@/components/ui/typography";
import { CertificateImage } from "./certificate-image";
import APIsAndMicroservices from "./images/APIs and Microservices.png";
import AWSAcademyGraduateAWSAcademyCloudFoundations from "./images/AWS Academy Graduate - AWS Academy Cloud Foundations.png";
import AWSCertifiedCloudPractitionerFoundational from "./images/AWS Certified Cloud Practitioner Foundational.png";
import AWSCertifiedCloudPractitioner from "./images/AWS Certified Cloud Practitioner.png";
import BelajarDasarDasarDevOps from "./images/Belajar Dasar-Dasar DevOps.png";
import BelajarImplementasiCICD from "./images/Belajar Implementasi CI-CD.png";
import BelajarJaringanKomputerUntukPemula from "./images/Belajar Jaringan Komputer untuk Pemula.png";
import BelajarMachineLearningUntukPemula from "./images/Belajar Machine Learning untuk Pemula.jpg";
import CSS from "./images/CSS.png";
import DataVisualization from "./images/Data Visualization.png";
import EthereumDeveloperBootcamp from "./images/Ethereum Developer Bootcamp.png";
import FrontEndLibraries from "./images/Front End Libraries.png";
import IndomaretCommonKnowledgeQuiz from "./images/Indomaret Common Knowledge Quiz.png";
import InformationSecurity from "./images/Information Security.png";
import JavaBasic from "./images/Java (Basic).png";
import JavaScriptBasic from "./images/JavaScript (Basic).png";
import JavaScriptAlgorithmsAndDataStructures from "./images/JavaScript Algorithms and Data Structures.png";
import MenjadiLinuxSystemAdministrator from "./images/Menjadi Linux System Administrator.png";
import QualityAssurance from "./images/Quality Assurance.png";
import ReactBasic from "./images/React (Basic).png";
import ResponsiveWebDesign from "./images/Responsive Web Design.png";
import RestAPI from "./images/Rest API.png";
import SQLBasic from "./images/SQL (Basic).png";
import TokopediaSTARTSummit from "./images/Tokopedia START Summit.png";
import TypingSpeed from "./images/Typing Speed.jpg";
import AnimationsOnTheWeb from "./images/animations-on-the-web.webp";

export default function Certificate() {
  const highlights = certificates
    .filter((x) => x.highlight)
    .sort((a, b) => a.url.localeCompare(b.url));

  const regulars = certificates
    .filter((x) => !x.highlight)
    .sort((a, b) => b.url.localeCompare(a.url));

  return (
    <section className="flex flex-col">
      <BlurFade inView>
        <TypographyH4 className="mb-4 text-center" asChild>
          <h2>Certificates</h2>
        </TypographyH4>
      </BlurFade>

      <div className="flex flex-col gap-2">
        {highlights.map((certificate, idx) => (
          <BlurFade key={idx} inView>
            <CertificateImage src={certificate.src} alt={certificate.label} />
          </BlurFade>
        ))}
      </div>

      <div className="mt-2 columns-1 md:columns-2">
        {regulars.map((certificate, idx) => (
          <BlurFade key={idx} inView className="py-2">
            <CertificateImage src={certificate.src} alt={certificate.label} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

const certificates = [
  {
    label: "Certificate APIs and Microservices",
    src: APIsAndMicroservices,
    url: "https://www.freecodecamp.org/certification/brandon-julio-thenaro/back-end-development-and-apis",
    highlight: true,
  },
  {
    label: "Certificate Front End Libraries",
    src: FrontEndLibraries,
    url: "https://www.freecodecamp.org/certification/brandon-julio-thenaro/front-end-development-libraries",
  },
  {
    label: "Certificate Java Basic",
    src: JavaBasic,
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
    highlight: true,
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
    highlight: true,
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
    highlight: true,
  },
  {
    label: "Belajar Machine Learning untuk Pemula",
    src: BelajarMachineLearningUntukPemula,
    url: "https://www.dicoding.com/certificates/07Z6WV05MZQR",
  },
  {
    label: "Ethereum Developer Bootcamp by Alchemy University",
    src: EthereumDeveloperBootcamp,
    highlight: true,
    url: "",
  },
  {
    label: "Animations on the Web by Emil Kowalski",
    src: AnimationsOnTheWeb,
    highlight: true,
    url: "",
  },
];
