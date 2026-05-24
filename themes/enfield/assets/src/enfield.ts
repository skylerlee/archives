import $ from 'cash-dom';
import { initPagination } from './pagination';
import { initSidebar } from './sidebar';

$(() => {
  initSidebar();
  initPagination();
});
