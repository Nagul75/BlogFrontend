import img from "@/assets/india-stock.jpg";
const ImageBanner = () => {
  return (
    <div
      className={`relative h-48 md:h-64 w-full overflow-hidden bg-cover bg-center rounded-md mt-4`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-4xl md:text-7xl font-serif tracking-widest uppercase">
          NAGUL KANNA T
        </h1>
      </div>
    </div>
  );
};

export default ImageBanner;
