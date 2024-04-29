import Item from "./Item";
import { PRODUCTS, RESOURCES, ABOUT, CONTACT } from "./Menu";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-10">
      <Item Links={ABOUT} title="About us" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={PRODUCTS} title="QUICK LINKS" />
      <Item Links={CONTACT} title="CONTACT" />
    </div>
  );
};

export default ItemsContainer;