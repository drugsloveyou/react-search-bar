import React, { PureComponent } from 'react';
import classnames from 'classnames';

export default class SearchResultSectionItem extends PureComponent<any> {
  render() {
    const { data = {} } = this.props;

    return (
      <div className='search-section-item'>
        <div className='search-item-left'>
          <div>{data.name}</div>
          <span>{data.stock ? 'In-stock' : 'Out-of-stock'}</span>
        </div>
        <div
          className={classnames('search-price', {
            'no-stock': !data.stock,
          })}
        >
          ${data.price}
        </div>
      </div>
    );
  }
}
