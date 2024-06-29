import {promises as fsPromises, existsSync} from 'fs';
import path from 'node:path';
import Image from '@11ty/eleventy-img';
const ogImagesDir = './src/assets/og-images';

export const svgToJpeg = async function () {
  const socialPreviewImagesDir = 'dist/assets/og-images/';
  const files = await fsPromises.readdir(socialPreviewImagesDir);
  if (files.length > 0) {
    files.forEach(async function (filename) {
      const outputFilename = filename.substring(0, filename.length - 4);
      if (filename.endsWith('.svg') & !existsSync(path.join(ogImagesDir, outputFilename))) {
        const imageUrl = socialPreviewImagesDir + filename;
        await Image(imageUrl, {
          formats: ['jpeg'],
          outputDir: ogImagesDir,
          filenameFormat: function (id, src, width, format, options) {
            return `${outputFilename}.${format}`;
          }
        });
      }
    });
  } else {
    console.log('⚠ No social images found');
  }
};
