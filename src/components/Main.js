import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";

const Main = () => {
  return (
    <main className="container">
      <div className="row">
        <CVForm />
        <CVPreview />
      </div>
    </main>
  );
};

export default Main;
