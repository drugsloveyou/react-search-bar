import React, { PureComponent } from 'react';
import SearchResultSectionItem from './SearchResultSectionItem';

export default class SearchResultSection extends PureComponent<any> {
  render() {
    const { data = {} } = this.props;

    return (
      <div className='search-section'>
        <div className='search-section-title'>{data.type}</div>
        {this.props.data.items.map((item: any) => (
          <SearchResultSectionItem data={item} key={item.id} />
        ))}
      </div>
    );
  }
}
