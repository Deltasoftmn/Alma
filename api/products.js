// Vercel serverless function for products data
const productsData = [
  "Уул уурхайд ашиглагдах химийн бодисууд",
  "Боловсруулах үйлдвэрт ашиглагдах бүтээгдэхүүнүүд",
  "Агуулах, савлагаа, тээврийн стандарт шийдэл"
];

export default function handler(req, res) {
  res.status(200).json(productsData);
}
