import { InfoBanner } from "../components/InfoBanner";
import { ProductCard } from "../components/ProductCard";
import { products } from "../Data/productsData";

export const Products = () => {
  return (
    <>
      <InfoBanner
        category="SIEMPRE UNA SOLUCIÓN"
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/products.webp"
        alt="products"
        title="PRODUCTOS"
        desc="NUESTROS PRODUCTOS"
        link=""
        buttonTitle="Contacto"
      />
      <section className="bg-primaryGray">
        <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  p-5 max-w-[1250px] mx-auto mb-20">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              srcImg={product.srcImg[0]}
              alt={product.alt}
              category={product.category}
              name={product.name}
              subtitle={product.subtitle}
              link={`/productos/${product.slug}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};
