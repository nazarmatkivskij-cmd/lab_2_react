function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center rounded-2xl mt-8">
      <p className="mb-2 text-gray-300">Контакти:</p>
      <div className="flex justify-center gap-4 text-sm font-medium">
        <a
          href="https://github.com/nazarmatkivskij-cmd"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          GitHub
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nazarmatkivskij@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
