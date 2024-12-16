interface Props {
  assets: {
    js: string[];
    css: string[];
  };
}

export const Footer = ({ assets }: Props) => {
  const { js = [] } = assets || {};
  return (
    <>
      {js.map((url: string) => (
        <script key={url} src={url} crossOrigin="anonymous" />
      ))}
      <script dangerouslySetInnerHTML={{ __html: 'console.log("Footer")' }} />
    </>
  );
};
