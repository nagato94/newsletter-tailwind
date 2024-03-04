import Input from "../Input/Input";
const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email });
  };

  return (
    <form
      onSubmit={safeSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow-md"
    >
      <div className="mb-4">
        <Input type="text" required placeholder="Insira seu nome ..." />
      </div>
      <div className="mb-4">
        <Input type="text" required placeholder="Insira seu email ..." />
      </div>
      <button
        type="submit"
        className="btn"
      >
        Seguir
      </button>
    </form>
  );
};

export default Form;
