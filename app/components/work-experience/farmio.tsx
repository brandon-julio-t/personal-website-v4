import Card from "@/components/common/card";

export default function Farmio() {
  return (
    <section className="mx-auto my-8 flex max-w-screen-md flex-col justify-center space-y-8">
      <h3 className="text-center text-4xl">
        Farmio
        <br />
        <small className="text-base italic">2023 - present</small>
      </h3>

      <Card>
        <h4 className="text-2xl font-medium">Software Engineer</h4>
        <p>
          As a software engineer, I am responsible for many software related
          tasks such as software development, database design, software
          maintenance, and software architecture design.
        </p>
      </Card>
    </section>
  );
}
