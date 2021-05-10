/** pages/api/[id].js */

import { SlugModel }     from 'model/slug'
import { getCollection } from 'src/controller'
import { errorHandler }  from 'src/error'

export default async (req, res) => {
  // Parse slug paramater from the incoming query.
  const { slug } = req.query;

  try {
    // Fetch collection, and check if slug exists.
    const urls = await getCollection(SlugModel),
          obj  = await urls.findOne({ slug });

    // If slug found, redirect to URL.
    if (obj) return res.redirect(obj.url);
    
    // Otherwise, redirect to 404 page.
    return res.status(404).redirect('/404');
  } catch(err) { errorHandler(req, res, err) }
}
