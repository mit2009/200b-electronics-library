import fs from 'fs'
import path from 'path'

const get2023Toobers = (_, res) => {
  const dirRelativeToPublicFolder = '2023/toobers/medium'

  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

  res.statusCode = 200
  res.json(images.filter((fileName) => {

    // only return the files that are name-2.jpg (the ones with -1 includes a picture of the student)
    return fileName.includes('-2');
  }));
}

export default get2023Toobers;