import React from 'react';
import { PaginationStyles } from './styles';
import { ReactComponent as ChevronLeft } from '../../icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../icons/chevron-right.svg';

const Pagination = () => {
  return (
    <PaginationStyles.Wrapper>
      <button>
        <ChevronLeft /> Previous
      </button>

      <li>
        <a href="#" class="current">
          1
        </a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <span class="disabled">...</span>
      </li>
      <li>
        <a href="#">8</a>
      </li>
      <li>
        <a href="#">9</a>
      </li>

      <button>
        Next <ChevronRight />
      </button>
    </PaginationStyles.Wrapper>
  );
};

export default Pagination;
