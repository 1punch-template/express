interface Props {
  assets: {
    js: string[];
    css: string[];
  };
}

export const Header = ({ assets }: Props) => {
  const { css = [] } = assets || {};
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>React Server Side Rendering</title>
      <script dangerouslySetInnerHTML={{ __html: 'console.log("Header")' }} />
      {css.map((url: string) => (
        <link
          key={url}
          rel="stylesheet"
          type="text/css"
          href={url}
          crossOrigin="anonymous"
        />
      ))}
    </>
  );
};
