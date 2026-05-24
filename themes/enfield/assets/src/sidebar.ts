import $ from 'cash-dom';

export function initSidebar(): void {
  const $wrapper = $('#wrapper');
  const $sidebar = $('#sidebar');
  const $toggle = $('#sidebar-toggle');

  if (!$toggle.length || !$sidebar.length || !$wrapper.length) {
    return;
  }

  $toggle.on('click', () => {
    $toggle.toggleClass('active');
    if ($toggle.hasClass('active')) {
      $sidebar.addClass('open');
      $wrapper.addClass('shift');
    } else {
      $sidebar.removeClass('open');
      $wrapper.removeClass('shift');
    }
  });
}
