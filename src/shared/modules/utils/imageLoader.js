import React from 'react';

class ImageLoader extends React.Component {
  render() {
    const {
      classname,
      src,
      alt,
      width,
      height,
      layout,
      onClick
    } = this.props;
    return(
      <img
      className={classname ? classname+ ' lazyload' : 'lazyload'}
      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      data-src={src}
      data-sizes="auto"
      alt={alt || ''}
      onClick={onClick}
      width={width || null}
      height={height || null}
      layout={layout || null}
      />
    );
  }
}

export default ImageLoader;
