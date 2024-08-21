export default function Badge(props) {
  let color = `text-${props.color}`;
  let bg = `bg-${props.accent}`;
  let content = props.content;
  let size = props.size;
  let icon = props.icon;

  return (
    <div
      className={`flex whitespace-nowrap items-center align-middle justify-center ${color} ${bg} px-2 rounded-md gap-1 text-${size} max-w-44 font-bold`}
    >
      {icon}
      {content}
    </div>
  );
}
