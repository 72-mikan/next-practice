import Link from "next/link";
import type { Photo } from "@/type";

async function getPhotos() {
  const data: { photos: Photo[] } = await fetch(
    "http://localhost:8080/api/photos"
  ).then((res) => res.json());
  return data.photos.map(({ id, title }) => ({ id, title }));
}

export default async function Page() {
  const photos = await getPhotos();
  return (
    <div>
      <h1>トップ画面</h1>
      <ul>
        {/* <li>
          <Link href={`/photos/1`}>写真1</Link>
        </li>
        <li>
          <Link href={`/photos/2`}>写真2</Link>
        </li>
        <li>
          <Link href={`/photos/2`}>写真2</Link>
        </li> */}
        {photos.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/photos/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
