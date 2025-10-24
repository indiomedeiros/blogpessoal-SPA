function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center  py-4 bg-indigo-900 text-white">
        <div className="container flex justify-between text-lg mx-8">
          <a href="http://">Blog pessoal</a>

          <div className=" flex gap-4">
            <a href="#">Postagens</a>
            <a href="#">Temas</a>
            <a href="#">Cadastrar</a>
            <a href="#">Perfil</a>
            <a href="#">Sair</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
