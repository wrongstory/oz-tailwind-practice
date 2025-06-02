export default function Header() {
  return (
    <header className="flex justify-between align-center py-[10px] px-[20px] bg-black">
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center, align-center gap-[20px]">
        <li className="list-none font-normal text-[13px]">로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </header>
  );
}
