/** src/error.js */

export function errorHandler(req, res, err) {
  console.error('Error: ', { ...err });
  res.status(500);
  if (req.method === 'POST') return res.end();
  return res.redirect('/500');
}