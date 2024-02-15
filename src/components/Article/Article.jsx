const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col items-center hover:shadow-gray-500 transition-all duration-300 ease-in-out dark:hover:shadow-gray-200">
      <h3 className="text-xl   text-alura-200 dark:text-gray-200 font-bold text-center">
        {title}
      </h3>
      <div className="w-full flex flex-wrap justify-center gap-2 mt-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="alura-tag"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="grid gap-1 mt-4">
        {text.map((content, index) => (
          <p key={index} className="text-alura-200 dark:text-gray-400">
            {content}
          </p>
        ))}
      </div>
      {image && <img className="sm:p-4 mt-4" src={image} alt={alt} />}

      {/* Remove o span desnecessário */}
    </div>
  );
};

export default Article;
