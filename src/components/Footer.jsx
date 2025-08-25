import './Footer.css';

function Footer() {
  // Pega o ano atual dinamicamente para que nunca fique desatualizado
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>&copy; {currentYear} CAR SELL - Todos os direitos reservados.</p>
      <p className="signature">Desenvolvido por JP Rosipirski</p>
    </footer>
  );
}

export default Footer;