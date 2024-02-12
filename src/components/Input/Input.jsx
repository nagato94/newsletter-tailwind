const Input = (props) => {
  return (
    <input
      className="w-full px-3 py-2 border rounded focus:outline-none focus:border-2 focus:border-alura-100 focus:invalid:border-red-400 placeholder:dark:text-gray-400 dark:bg-dark-200 dark:border-dark-200 transition-all duration-500 ease-in-out hover:shadow-md hover:shadow-gray-500 dark:hover:shadow-md dark:hover:border-alura-100 dark:hover:text-gray-200 text-gray-200 focus:valid:border-green-400"
      {...props}
    />
  );
};

export default Input;
