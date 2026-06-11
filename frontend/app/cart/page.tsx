import Breadcrumb from "../components/common/Breadcrumb";
import CartSection from "../sections/CartSection";

export default function Cart() {
  return (
    <main>
      <Breadcrumb items={[{ label: "Cart" }]} />
      <CartSection />
    </main>
  );
}
