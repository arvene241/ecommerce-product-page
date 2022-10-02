import prod1 from "../assets/images/image-product-1.jpg";
import prod1_thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import prod2 from "../assets/images/image-product-2.jpg";
import prod2_thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import prod3 from "../assets/images/image-product-3.jpg";
import prod3_thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import prod4 from "../assets/images/image-product-4.jpg";
import prod4_thumbnail from "../assets/images/image-product-4-thumbnail.jpg";

const products = {
  company: "SNEAKER COMPANY",
  title: "Fall Limited Edition Sneakers",
  desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: "$125.00",
  discount: "50%",
  orig_price: "$250.00",
  imgs: [
    {
      prod1: prod1,
      prod1_thumbnail: prod1_thumbnail,
    },
    {
      prod2: prod2,
      prod2_thumbnail: prod2_thumbnail,
    },
    {
      prod3: prod3,
      prod3_thumbnail: prod3_thumbnail,
    },
    {
      prod4: prod4,
      prod4_thumbnail: prod4_thumbnail,
    },
  ],
};

export default products;
