function filterSelection() {
    // Create the CSS selector
    const filteredClasses = [...document.querySelectorAll('#filters :checked')]
      .map(el => '.' + el.value)
      .filter(cls => cls !== '.all')
      .join('');
  
    // Hide or show each item in one pass
    document.querySelectorAll('.column').forEach(el => {
      // .matches() chokes on '', so use '*' in that case
      el.style.display = el.matches(filteredClasses || '*') ? '' : 'none';
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#filters').addEventListener('change', filterSelection);
  });