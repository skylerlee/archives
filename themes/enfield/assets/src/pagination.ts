import $ from 'cash-dom';

export function initPagination(): void {
  const $cursor = $('#page-cursor');
  if (!$cursor.length) {
    return;
  }

  const min = parseInt($cursor.attr('min') ?? '1', 10) || 1;
  const max = parseInt($cursor.attr('max') ?? '1', 10) || 1;

  $cursor.on('keypress', (e: KeyboardEvent) => {
    if (e.key !== 'Enter') {
      return;
    }

    const val = parseInt(String($cursor.val()), 10);
    if (val >= min && val <= max) {
      const path = location.pathname;
      const base = path.replace(/\/page\d+\/?$/, '/').replace(/\/$/, '');
      const dest = val > 1 ? `${base}/page${val}/` : `${base}/`;
      if (dest !== path) {
        document.location = dest;
      }
    } else {
      $cursor.addClass('invalid');
    }
  });
}
