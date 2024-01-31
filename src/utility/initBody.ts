export const initBody = () => {
  const body = document.querySelector('body');
  if (!body) { return };
  body.setAttribute('data-theme', 'cupcake');
}