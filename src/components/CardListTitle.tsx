type CardListTitleProps = {
  pageName: string;
};

export default function CardListTitle(props: CardListTitleProps) {
  const { pageName } = props;
  return <h2 className="text-3xl font-semibold">{pageName}</h2>;
}
