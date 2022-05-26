function NavbarMenu({ children }) {
  return (
    <div className=" pt-16 px-8 max-h-screen overflow-y-auto">
      <div>{children}</div>
      <div></div>
    </div>
  );
}

export default NavbarMenu;
