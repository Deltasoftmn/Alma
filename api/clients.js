// Vercel serverless function for clients data
const clientsData = [
  "Уул уурхайн компаниуд",
  "Боловсруулах үйлдвэрүүд",
  "Түнш байгууллагууд"
];

export default function handler(req, res) {
  res.status(200).json(clientsData);
}
