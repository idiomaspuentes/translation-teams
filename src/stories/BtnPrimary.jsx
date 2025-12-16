function BtnPrimary({ name }) {
  return (
    <a className="py-3 px-6 rounded-lg font-medium cursor-pointer transition-[all_0.2s] no-underline inline-flex items-center gap-2 bg-[#3b82f6] text-white hover:bg-[#2563eb]">
      {name}
    </a>
  );
}
export default BtnPrimary;
