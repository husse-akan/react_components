export default function Card(props) {
  let bg = `bg-${props.accent}`;
  let content = props.children;
  let href = props.href;
  let alt = props.imgAlt;
  let src = props.imgSrc;
  return (
    <div
      className={`flex flex-col max-w-xs rounded-md overflow-hidden shadow-md ${bg} gap-2 m-6`}
    >
      <a href={href}>
        <img src={src} alt={alt} className=" aspect-square max-w-xs" />
      </a>
      {content}
    </div>
  );
}
