const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col items-center">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h3>
      <div className="w-full flex flex-wrap justify-center gap-2 mt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 text-xs font-bold uppercase mb-2"
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
