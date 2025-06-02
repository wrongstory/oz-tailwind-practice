export default function Content({ content }) {
  return (
    <div className="content-container flex flex-col itmes-start gap-[5px]">
      <img
        src={content.img}
        alt={content.title}
        className="w-[300px] rounded-[10px] mb-[3px]"
      />
      <span className="text-[12px] text-[#d7fa00] border border-[#d7fa00] px-[5px] py-[4px] rounded-[3px]">
        모집중
      </span>
      <div className="text-[18px] font-semibold">{content.title}</div>
      <p className="text-[12px] text-gray-400">{content.subtitle}</p>
    </div>
  );
}
