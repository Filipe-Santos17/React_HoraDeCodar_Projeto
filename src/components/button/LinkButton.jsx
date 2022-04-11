import { Linka } from "./LinkButton.element";

export default function Linkbutton({ rout, text }) {
  return <Linka to={`${rout}`}>{text}</Linka>;
}
