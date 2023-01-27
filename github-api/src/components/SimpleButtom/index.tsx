import "./style.css";

type Props = {
  texto: string;
};

const SimpleButtom = ({ texto }: Props) => {
  return (
    <button type="submit" className="btn btn-primary">
      <p>{texto}</p>
    </button>
  );
};

export default SimpleButtom;
