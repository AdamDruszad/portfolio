// Real screenshot of a project (public/projects/<name>-<width>.webp, 16:10). The featured
// project also shows its phone layout, overlapping the desktop screenshot.
const sizes = {
  featured: "(min-width: 1200px) 44rem, (min-width: 900px) calc(100vw - 20rem), calc(100vw - 2.5rem)",
  card: "(min-width: 1000px) 29rem, (min-width: 900px) calc(100vw - 20rem), calc(100vw - 2.5rem)",
  row: "(min-width: 1000px) 18rem, (min-width: 900px) calc(100vw - 20rem), calc(100vw - 2.5rem)",
};

export default function ProjectShot({ image, variant }) {
  const path = (width) => `/projects/${image.name}-${width}.webp`;
  return (
    <div className={`shot shot--${variant}`}>
      <img
        className="shot__screen"
        src={path(800)}
        srcSet={`${path(800)} 800w, ${path(1600)} 1600w`}
        sizes={sizes[variant]}
        width="1600"
        height="1000"
        alt={image.alt}
        loading="lazy"
        decoding="async"
      />
      {image.phone && (
        <img
          className="shot__phone"
          src={`/projects/${image.phone.name}-480.webp`}
          width={image.phone.width}
          height={image.phone.height}
          alt={image.phone.alt}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}
