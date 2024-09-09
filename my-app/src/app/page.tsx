import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>トップ画面</h1>
      <ul>
        <li>
          <Link href={`/photos/1`}>写真1</Link>
        </li>
        <li>
          <Link href={`/photos/2`}>写真2</Link>
        </li>
        <li>
          <Link href={`/photos/2`}>写真2</Link>
        </li>
      </ul>
    </div>
  );
}
