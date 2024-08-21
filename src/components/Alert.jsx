export default function Alert(props) {
  let color = `text-${props.color}`;
  let bg = `bg-${props.accent}`;
  let content = props.content;
  let warning = props.warning;
  let icon = props.icon;

  return (
    <div
      className={`flex items-center align-middle ${color} ${bg} p-2 rounded-md gap-1`}
    >
      {icon}
      <strong className="font-mono">{warning}</strong>
      {content}
    </div>
  );
}
