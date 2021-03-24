const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withImages = require('next-images');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins(
  [withSass, withImages, withFonts, withCSS],
  {
    assetPrefix: isProd ? '/' : '',
  }
);
