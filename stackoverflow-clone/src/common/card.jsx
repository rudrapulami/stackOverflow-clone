export default function Card({ id, question, creator, createdDate, tags }) {
  return (
    <div className="card border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">
        <a href={'/question/${id}'}>{question}</a>
      </h2>

      <p className="text-sm text-gray-500 mb-1">
        Asked By <span className="font-medium">{creator}</span> on{" "}
        {new Date(createdDate).toLocaleDateString()}
      </p>

      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
