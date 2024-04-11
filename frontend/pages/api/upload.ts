

// export default handler;
import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/img");
    options.filename = (name, ext, path, form) => {
      // return Date.now().toString() + "_" + path.originalFilename;
      return "MyPet_" + path.originalFilename; // added this so i can generate a custom name for the image in uploadImageToServer
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/img"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/img"));
  }

  await readFile(req, true);
  res.json({ done: "MyPet:  Image uploaded!" });

  // const file = await readFile(req, true);
  // res.json({ file });

  
};

export default handler;