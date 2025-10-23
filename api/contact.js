// Vercel serverless function for contact data
const contactData = {
  address: "Монгол Улс, Улаанбаатар 14220, Сүхбаатар дүүрэг, 1-р хороо, Элчин сайдын гудамж, Скай Плаза бизнес төв, 9 тоот",
  phone: "+976 88042323",
  email: "Info@khimiconsulting.mn"
};

export default function handler(req, res) {
  res.status(200).json(contactData);
}
