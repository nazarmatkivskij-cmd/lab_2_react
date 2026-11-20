import { useState, useEffect } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({
    platform: '',
    userAgent: '',
  });

  useEffect(() => {
    // 1. Зчитуємо інформацію про ОС та браузер
    const info = {
      platform: navigator.platform,
      userAgent: navigator.userAgent,
    };

    // 2. Зберігаємо дані у localStorage (перетворюємо об'єкт у рядок)
    localStorage.setItem('systemInfo', JSON.stringify(info));

    // 3. Безпечно зчитуємо з localStorage і записуємо в стан для відображення
    const savedRaw = localStorage.getItem('systemInfo');
    if (savedRaw) {
      setSysInfo(JSON.parse(savedRaw));
    }
  }, []);

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

      {/* Блок із системною інформацією з localStorage */}
      <div className="mt-6 pt-4 border-t border-gray-700 text-xs text-gray-400 px-4">
        <p>Платформа: <span className="text-gray-200">{sysInfo.platform}</span></p>
        <p className="mt-1">Браузер: <span className="text-gray-200">{sysInfo.userAgent}</span></p>
      </div>
    </footer>
  );
}

export default Footer;
