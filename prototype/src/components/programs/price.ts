const priceFormatter = new Intl.NumberFormat("ko-KR");

export const formatPrice = (price: number) =>
  price === 0 ? "무료" : `${priceFormatter.format(price)}원`;
