import { useEffect, useState } from "react";

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/15/comments")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Помилка завантаження коментарів");
        }
        return response.json();
      })
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="my-8 p-4 border rounded-xl">
      <h2 className="text-xl font-bold mb-4">
        Коментарі попередніх роботодавців (Варіант 15)
      </h2>

      {loading && <p>Завантаження коментарів...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="grid gap-3">
          {comments.map((comment) => (
            <div key={comment.id} className="p-3 border rounded-lg">
              <h3 className="font-semibold">{comment.name}</h3>
              <p className="text-sm opacity-80">{comment.email}</p>
              <p className="mt-1">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;
