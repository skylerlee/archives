import $ from 'cash-dom';

export function initSidebar(): void {
  const $wrapper = $('#wrapper');
  const $sidebar = $('#sidebar');
  const $toggle = $('#sidebar-toggle');

  if (!$toggle.length || !$sidebar.length || !$wrapper.length) {
    return;
  }

  const isOpen = (): boolean => $sidebar.hasClass('open');

  const closeSidebar = (): void => {
    $toggle.removeClass('active');
    $sidebar.removeClass('open');
    $wrapper.removeClass('shift');
  };

  const openSidebar = (): void => {
    $toggle.addClass('active');
    $sidebar.addClass('open');
    $wrapper.addClass('shift');
  };

  $toggle.on('click', () => {
    if (isOpen()) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  $(document).on('click', (e) => {
    if (!isOpen()) {
      return;
    }
    const target = e.target as Node;
    if ($sidebar[0]?.contains(target) || $toggle[0]?.contains(target)) {
      return;
    }
    closeSidebar();
  });

  $(document).on('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen()) {
      closeSidebar();
    }
  });
}
