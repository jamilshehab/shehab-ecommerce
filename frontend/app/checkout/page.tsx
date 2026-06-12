import CheckoutForm from "../components/CheckoutForm";
import Breadcrumb from "../components/common/Breadcrumb";

export default function CheckoutPage() {
  return (
    <main className="">
      <Breadcrumb items={[{ label: "Checkout" }]} />
      <CheckoutForm />
    </main>
  );
}
