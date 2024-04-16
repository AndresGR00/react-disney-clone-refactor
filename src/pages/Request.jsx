import Form from "../components/Form";

const Request = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="font-semibold text-3xl text-center text-wrap">Is there a film or serie you would like us to add to our catalogue?</h1>
      <p className="text-center text-wrap">You can now request the inclusion of new content using our form:</p>
      <Form />
    </section>
  );
};

export default Request;