export const websiteName = 'TheTavern';
export const apiUrl = 'http://localhost:8080/api/v1';

export const defaultTitles = [
  'Apprenti aventurier',
  'Aventurier',
  'Prêtre de Haidge',
  'Troubadour',
  'Aventurière incroyable',
  'Demon du jeu',
  'Buveur de boisson',
  'Maître du Monde',
  'Mage Noir',
  'Filou des dés',
  'Mendiant de passage',
  'Prếcheur de gameplay',
  'Vigile du roleplay',
  'Maitre trapéziste',
  'En a gros sur la patate',
  'Coincé dans un donjon',
].sort();

export const getDate = () => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let day = new Date().getDay();

  month = month < 10 ? (month = '0' + month) : month;
  day = day < 10 ? (day = '0' + day) : day;

  return { year, month, day };
};
