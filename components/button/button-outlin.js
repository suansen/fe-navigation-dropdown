function ButtonOutline({ label }) {
  return (
    <button className=" border-2 border-neutral-medium-gray text-neutral-medium-gray hover:border-neutral-almost-black hover:text-neutral-almost-black py-3 px-6 rounded-xl transition">
      {label}
    </button>
  );
}

export default ButtonOutline;
