/* eslint-disable no-inner-declarations */
$(document).on('turbolinks:load', function() {
  const canvas = $('#canvas')[0];
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      console.log('canvas context found');
    }
  }
});
