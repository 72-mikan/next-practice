type Props = {
  params: { photoId: string }
}

export default function Page({ params }: Props) {
  return (
    <div>
      <h1>写真ID「{ params.photoId }」の詳細画面</h1>
      <table>
        <tbody>
          <tr>
            <th>概要</th>
            <td>概要テキスト</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}