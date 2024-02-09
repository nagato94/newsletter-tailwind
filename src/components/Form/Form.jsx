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
        className="w-full px-4 py-2 text-white bg-alura-100 rounded hover:bg-alura-200  hover:ease-in-out transition-all duration-500"
      >
        Seguir
      </button>
    </form>
  );
};

export default Form;
