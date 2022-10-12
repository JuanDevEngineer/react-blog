const Footer = () => {
  return (
    <footer className="flex h-16 justify-center bg-gray-900">
      <div className="bg-gray-900 p-6 text-center">
        <span className="text-white">{new Date().getFullYear()} Copyright </span>
        <span className="font-semibold text-white">Juan Jose Cuadros</span>
      </div>
    </footer>
  );
};

export default Footer;
