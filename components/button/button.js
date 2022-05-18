function Button({ label }) {
  return (
    <button className="hover:text-neutral-almost-black border-2 text-neutral-almost-white text-lg hover:bg-neutral-almost-white border-neutral-almost-black hover bg-neutral-almost-black py-3 px-6 rounded-xl transition">
      {label}
    </button>
  );
}

export default Button;
