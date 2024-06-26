import CardRegion from "../Card/CardRegion";
import ActordentifyCard from "../CustomCards/ActordentifyCard";
import CategoryCard from "../CategoryCard/CategoryCard";
import Modal from "../Modal/Modal";

type Props = {
  sectionData: { [key: string]: any };
  name: string;
};

function Section({ sectionData, name }: Props) {
  const cardMap: { [key: string]: any } = {
    Actordentify: ActordentifyCard,
  };

  return (
    <div id={name.toLowerCase()}>
      <h2>{name}</h2>
      <CardRegion className="card-layout">
        {sectionData.cards.map((cardData: { [key: string]: any }) => {
          const ThisCard = cardMap[cardData.title];
          return <ThisCard cardData={cardData} />;
        })}
        {sectionData.categories
          ? sectionData.categories.map(
              (categoryData: { [key: string]: any }) => {
                return <CategoryCard categoryData={categoryData} />;
              }
            )
          : null}
      </CardRegion>
    </div>
  );
}

export default Section;
