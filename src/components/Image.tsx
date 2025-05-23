type Props = {
  url: string;
  alt: string;
};

function Image({ url, alt }: Props) {
  return <img className="rounded-lg" src={url} alt={alt} loading="lazy" />;
}

export default Image;
