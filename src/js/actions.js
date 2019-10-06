// Tipos das actions
export const SET_BING_IMAGE_OF_THE_DAY = 'SET_BING_IMAGE_OF_THE_DAY';

// Action para mudar a imagem do dia do bing
export function setBingImageOfTheDay(urlBingImageOfTheDay) {
  return {
    type: SET_BING_IMAGE_OF_THE_DAY,
    text: urlBingImageOfTheDay,
  };
}
