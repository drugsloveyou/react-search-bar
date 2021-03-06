import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';
import SearchResultSection from './SearchResultSection';

class SearcgResultView extends PureComponent<any> {
  render() {
    return (
      <div className='search-result-view'>
        {this.props.results.map((data: any, index: number) => (
          <SearchResultSection data={data} key={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  results: state.searchbar,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearcgResultView);
