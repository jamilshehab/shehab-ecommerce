import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type ArrowProps = {
  onClick?: () => void;
};

export const SwiperPrev = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="rounded-full bg-white p-3 shadow-md transition hover:scale-105"
  >
    <FaChevronLeft />
  </button>
);

export const SwiperNext = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="rounded-full bg-white p-3 shadow-md transition hover:scale-105"
  >
    <FaChevronRight />
  </button>
);
