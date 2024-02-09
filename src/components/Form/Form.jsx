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
        <input
          type="text"
          placeholder="Insira seu nome ..."
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-alura-100"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Insira seu email ..."
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-alura-100"
        />
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
