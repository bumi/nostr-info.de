// ----------------------------------------------
// Imports
// ----------------------------------------------
import $ from 'jquery';

// ----------------------------------------------
// Zoom
// ----------------------------------------------
const miscZoom = () => {
  const imgArr = $('.post__content img');

  imgArr.each((idx, img) => {
    if (img.src.indexOf('full') === -1) {
      $(img).attr('data-action', 'zoom');
    }
  });
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  miscZoom
};
