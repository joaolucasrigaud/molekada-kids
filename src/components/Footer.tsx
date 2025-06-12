const Footer = () => {
  return (
    <footer className="bg-gray-dark text-white py-8">
      <div className="container-custom text-center">
        <p>&copy; {new Date().getFullYear()} Molecada Kids. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Feito com ♥ para os pequenos.</p>
      </div>
    </footer>
  );
};

export default Footer;