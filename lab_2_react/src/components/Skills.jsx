function Skills() {
  const skills = ['C# / WinForms', 'Python', 'HTML / React / Git', 'Networking'];

  return (
    <section className="bg-white p-6 rounded-xl shadow-md mb-6 border border-gray-100 hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-1 inline-block">
        Навички
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-full border border-blue-200 hover:bg-blue-600 hover:text-white transition duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
