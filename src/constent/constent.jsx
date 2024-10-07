import {
  FaShippingFast,
  FaRegCreditCard,
  FaHeadset,
  FaUndoAlt,
  FaRegStar,
} from "react-icons/fa";

export const services = [
  {
    id: 1,
    icon: FaShippingFast,
    title: "Free Shipping",
    color: "#ff6f61",
  },
  {
    id: 2,
    icon: FaRegCreditCard,
    title: "Secure Payment",
    color: "#4a90e2",
  },
  {
    id: 3,
    icon: FaHeadset,
    title: "24/7 Support",
    color: "#7ed321",
  },
  {
    id: 4,
    icon: FaUndoAlt,
    title: "Easy Returns",
    color: "#ffbe0b",
  },
  {
    id: 5,
    icon: FaRegStar,
    title: "High Quality",
    color: "#00b4d8",
  },
];
export const tabContent = {
  Details: (
    <div>
      <h2 className="text-2xl font-bold">Product Details</h2>

      <p className="mt-2">
        This product is crafted using high-quality materials that ensure
        durability and comfort. It is available in a range of sizes and colors,
        designed to suit every preference.
      </p>

      <h3 className="text-xl font-semibold mt-4">Key Features:</h3>
      <ul className="mt-2 list-disc list-inside">
        <li>Made from premium fabric, ensuring long-lasting wear</li>
        <li>Water-resistant and easy to clean</li>
        <li>Available in multiple sizes and colors</li>
        <li>Lightweight and breathable design for maximum comfort</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Care Instructions:</h3>
      <p className="mt-2">
        To maintain the product's quality, it is recommended to hand wash with
        cold water or use a gentle cycle in the washing machine. Avoid using
        harsh detergents, and air dry to retain the fabric's softness.
      </p>
    </div>
  ),
  Shipping: (
    <div>
      <h2 className="text-2xl font-bold">Shipping Information</h2>

      <p className="mt-2">
        We offer fast and reliable shipping to both domestic and international
        locations. All orders are processed within 1-2 business days. Once your
        order has shipped, you will receive an email with a tracking number so
        you can follow your package's progress.
      </p>

      <h3 className="text-xl font-semibold mt-4">Domestic Shipping:</h3>
      <ul className="mt-2 list-disc list-inside">
        <li>Standard Shipping (5-7 business days): $5.00</li>
        <li>Expedited Shipping (2-3 business days): $15.00</li>
        <li>Overnight Shipping (1 business day): $25.00</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">International Shipping:</h3>
      <p className="mt-2">
        We ship to most countries around the world. International shipping costs
        are calculated at checkout based on your location.
      </p>
      <ul className="mt-2 list-disc list-inside">
        <li>Standard International Shipping (10-15 business days): $20.00</li>
        <li>Expedited International Shipping (5-7 business days): $40.00</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Shipping Policies:</h3>
      <p className="mt-2">
        Please note that shipping times may vary depending on your location and
        any delays caused by customs in your country. We are not responsible for
        any customs fees or import taxes that may be applied to your order.
      </p>

      <h3 className="text-xl font-semibold mt-4">Tracking Your Order:</h3>
      <p className="mt-2">
        Once your order has shipped, you will receive an email with a tracking
        number. You can use this number to track your package on the carrier's
        website.
      </p>

      <h3 className="text-xl font-semibold mt-4">Free Shipping Promotion:</h3>
      <p className="mt-2">
        We offer free standard shipping on all domestic orders over $50.00. This
        promotion is automatically applied at checkout.
      </p>
    </div>
  ),
  Returns: (
    <div>
      <h2 className="text-2xl font-bold">Return & Refund Policy</h2>

      <p className="mt-2">
        We want you to be completely satisfied with your purchase. If you are
        not happy with your item, you may return it within 30 days of the
        delivery date for a full refund or exchange, provided the item is in its
        original condition and packaging.
      </p>

      <h3 className="text-xl font-semibold mt-4">Return Eligibility:</h3>
      <ul className="mt-2 list-disc list-inside">
        <li>Items must be returned within 30 days of receipt.</li>
        <li>The product must be unused and in its original packaging.</li>
        <li>Final sale items are not eligible for return.</li>
        <li>Proof of purchase or order confirmation must be provided.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">How to Return:</h3>
      <ol className="mt-2 list-decimal list-inside">
        <li>
          Contact our customer service team at{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-500 underline"
          >
            support@example.com
          </a>{" "}
          to initiate the return.
        </li>
        <li>
          Once your return is approved, you will receive a return shipping label
          via email.
        </li>
        <li>
          Pack the item securely and attach the return label to the package.
        </li>
        <li>Drop off the package at your nearest shipping facility.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-4">Refunds:</h3>
      <p className="mt-2">
        Once we receive and inspect your return, we will process your refund
        within 5-7 business days. Refunds will be issued to the original form of
        payment. Please note that shipping fees are non-refundable.
      </p>

      <h3 className="text-xl font-semibold mt-4">Exchanges:</h3>
      <p className="mt-2">
        If you would like to exchange an item for a different size or color,
        please indicate this when you contact customer service. Exchanges are
        subject to product availability.
      </p>

      <h3 className="text-xl font-semibold mt-4">Return Shipping Costs:</h3>
      <p className="mt-2">
        Customers are responsible for return shipping costs unless the item is
        defective or the wrong product was sent. In such cases, we will cover
        the return shipping fees.
      </p>

      <h3 className="text-xl font-semibold mt-4">
        Damaged or Defective Items:
      </h3>
      <p className="mt-2">
        If your item arrives damaged or defective, please contact us within 48
        hours of delivery. We will arrange for a replacement or refund, and
        cover all associated shipping costs.
      </p>
    </div>
  ),
};

import image from "../assets/pexels-pavel-danilyuk-8001072.jpg";
import image1 from "../assets/4f25258f8c1b2cb401f1b6591daa3aba.jpg";
import image3 from "../assets/pexels-pavel-danilyuk-8000646.jpg";
import image4 from "../assets/pexels-pavel-danilyuk-8000646.jpg";
import image5 from "../assets/pexels-pavel-danilyuk-8001240.jpg";

export const products = [
  {
    id: 1,
    title: "Premium Cotton T-Shirt",
    price: 29.99,
    image: image,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Leather Wallet",
    price: 49.99,
    image: image1,
    rating: 4.7,
  },
  {
    id: 3,
    title: "Wireless Bluetooth",
    price: 99.89,
    image: image3,
    rating: 4.3,
  },
  {
    id: 4,
    title: "Stainless Water Bottle",
    price: 19.99,
    image: image4,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Leather Wallet",
    price: 49.99,
    image: image1,
    rating: 4.7,
  },
  {
    id: 3,
    title: "Wireless Bluetooth",
    price: 89.99,
    image: image3,
    rating: 4.3,
  },
  {
    id: 4,
    title: "Stainless Water Bottle",
    price: 19.99,
    image: image4,
    rating: 4.8,
  },
  {
    id: 5,
    title: "Running Shoes",
    price: 129.99,
    image: image5,
    rating: 4.6,
  },
];

export default products;

export const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Amazing product! Highly recommend.",
    published: "2023-12-01T12:00:00Z",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment: "Good quality, but delivery took longer than expected.",
    published: "2023-12-01T12:00:00Z",
  },
  {
    id: 3,
    name: "Sam Wilson",
    rating: 3,
    comment: "It's okay, but I expected more features.",
    published: "2023-12-01T12:00:00Z",
  },
  {
    id: 6,
    name: "John Doe",
    rating: 5,
    comment: "Amazing product! Highly recommend.",
    published: "2023-12-01T12:00:00Z",
  },
  {
    id: 8,
    name: "Jane Smith",
    rating: 4,
    comment: "Good quality, but delivery took longer than expected.",
    published: "2023-12-01T12:00:00Z",
  },
  {
    id: 9,
    name: "Sam Wilson",
    rating: 3,
    comment: "It's okay, but I expected more features.",
    published: "2023-12-01T12:00:00Z",
  },
];
