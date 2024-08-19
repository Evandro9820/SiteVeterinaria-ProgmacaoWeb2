import React from "react";
import logo from "/src/assets/logo2re.png"; // Ajuste o caminho da imagem conforme necessário
import Modal from "../Modal";
/* const Logo = () => {
  return (
    <div className="absolute  left-6 w-auto h-[4.5rem] items-center">
      <img src={logo} alt="Pet Shop Logo" className="w-full h-full" />
    </div>
  );
}; */

const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-white text-lg font-bold">Pet Shop</div>
        </div>
        <ul className="flex space-x-4">
          <Modal></Modal>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Animais
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Contato
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Serviços
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
