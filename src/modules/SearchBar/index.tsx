import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';
import classnames from 'classnames';
import { SearchListByNameAction } from '../../actions/SearchBar';

import './style.css';
import { connect } from 'react-redux';
class SearchBar extends PureComponent<any> {
  timer: any;
  state = {
    focus: false,
    search: '',
  };

  onFocus = () => {
    this.setState({ focus: true });
  };

  onBlur = () => {
    const { search } = this.state;
    if (!search) {
      this.setState({ focus: false });
    }
  };

  onChange = (e: any) => {
    let value = e.nativeEvent.target.value;
    this.setState({ search: value });
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.props.SearchListByNameAction(value);
    }, 500);
  };

  close = () => {
    this.setState({ search: '', focus: false });
    this.props.SearchListByNameAction('');
  };

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { focus, search } = this.state;

    return (
      <>
        <div
          className={classnames('search-container', {
            focus,
          })}
        >
          <span className='search-title'>Search</span>
          <div className='search-bar'>
            <input
              className='search-input'
              placeholder='Tap here to search'
              value={search}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.onChange}
            />
            <FontAwesome name='search' className='search-icon' />
            {search ? (
              <FontAwesome
                name='close'
                className='search-close'
                onClick={this.close}
              />
            ) : null}
          </div>
        </div>
        <FontAwesome
          name='rocket'
          className='go-to-top'
          onClick={this.scrollToTop}
        />
      </>
    );
  }
}

export default connect(null, { SearchListByNameAction })(SearchBar);
