import Card from "@/components/common/card";

export default function SoftwareLaboratoryCenter() {
  return (
    <section className="mx-auto my-8 flex max-w-screen-md flex-col justify-center space-y-8">
      <h3 className="text-center text-4xl">
        Software Laboratory Center
        <br />
        <small className="text-base italic">2020 - 2023</small>
      </h3>

      <Card>
        <h4 className="text-2xl font-medium">
          Research and Development Team (RnD/RDT)
        </h4>
        <small className="italic">2021 - 2023</small>
        <p>
          After a year of being a teaching assistant, I was promoted to the RnD
          team. My tasks in the RnD team are maintaining existing application
          and developing new application for stakeholders.
        </p>
      </Card>

      <Card>
        <h4 className="text-2xl font-medium">Teaching Assistant</h4>
        <small className="italic">2020 - 2021</small>
        <p>
          While being a teaching assistant, I am tasked to handle practicum
          operational activities such as teaching practicum subjects,
          participating in teaching qualification and trainings, and grading
          student answers.
        </p>
      </Card>
    </section>
  );
}
