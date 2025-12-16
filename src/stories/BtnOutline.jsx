function BtnOutline({ name }) {
  return (
    <a className="py-3 px-6 rounded-lg font-medium cursor-pointer transition-[all_0.2s] no-underline inline-flex items-center gap-2 bg-transparent border-1 border-solid border-[#d1d5db] text-[#374151] hover:bg-[#f9fafb]">
      {name}
    </a>
  );
}
export default BtnOutline;
