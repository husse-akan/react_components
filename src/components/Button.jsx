import { handleButtonClick } from "../utils/handleButtonClick";

export default function Button(props) {
  let color = `text-${props.color}`;
  let bg = `bg-${props.accent}`;
  let border = `border-2 rounded-md border-${props.border}`;
  let size = props.size;
  let content = props.content;
  let disabled = props.disabled;
  let hover =
    `hover:` + `text-${props.accent}` + " " + `hover:` + `bg-${props.color}`;
  let url = props.url;

  if (disabled === true) {
    hover = "";
    bg = `bg-slate-100`;
    color = `text-slate-400`;
    border = `border-2 rounded-md border-slate-400`;
  }

  return (
    <button
      type="button"
      className={`${border} font-bold ${color} ${bg} ${size} ${hover}`}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={() => handleButtonClick(url)}
    >
      {content}
    </button>
  );
}
