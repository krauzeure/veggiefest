import Dahl from '../assets/114451_w2000h3128c1cx540cy844cxb1080cyb1689.webp'
import Croque from '../assets/57252_w2000h3000c1cx2000cy3000.webp'
import Gaufres from '../assets/10404_w1280h972c1cx1000cy1500cxb2000cyb3000.webp'
import Tatin from '../assets/86217_w1280h972c1cx3050cy4137cxb4337cyb6500.webp'
import Spaghetti from '../assets/61540_w1280h972c1cx1500cy996.webp'
import Omelette from '../assets/125932_w1280h972c1cx954cy709cxb2121cyb1414.webp'

import { StaticImageData } from 'next/image'

export const recipes: {name: string, image: StaticImageData, difficulty: number, time: number, ingredients:{qty: string, name: string}[], steps:string[], recipeType: string}[] = [
  {
    name: "Dahl de lentilles corail",
    image: Dahl,
    difficulty: 1,
    time: 30,
    ingredients: [{qty: "30cl", name: "Lentilles corail"}, {qty: "5", name: "Tomates"}, {qty: "4", name: "Carottes"}, {qty: "1 càs", name: "Huile de tournesol"}, {qty: "1", name: "Gousse d'ail hachée"}, {qty: "1 càs", name: "Concentré de tomates"} ],
    steps: ["Laver les tomates et les découper en dés. Peler les carottes, et les découper en fines rondelles.", "Dans une casserole, verser les lentilles corail et couvrir d'eau. Porter à ébullition. Laisser cuire pendant 10 min environ, jusqu'à complète absorption de l'eau. Retire du feu et laisser reposer.", "Dans une sauteuse, verser l'huile et chauffer. Y ajouter l'ail qui dorera pendant une petite minute. Verser ensuite les légumes et saupoudrer avec les épices. Ajouter enfin le concentré de tomate.", "Verser le lait de coco et laisser mijoter environ 10 min. sans couvrir.", "Enfin, ajouter les lentilles et bien remuer le tout."],
    recipeType: "Plat"
  },
  {
    name: "Quiche façon croque-monsieur",
    image: Croque,
    difficulty: 1,
    time: 14,
    ingredients: [{qty: "2", name: "Carottes"}, {qty: "2", name: "Brocolis"}, {qty: "100g", name: "Chèvre sec"}, {qty: "3", name: "Oeufs"}, {qty: "20cl", name: "Crème liquide"}, {qty: "1 poignée", name: "Gruyère râpé"} ],
    steps: ["Faire cuire les brocolis 20 minutes dans de l'eau salée ainsi que les carottes émincées.", "Égoutter et réserver.", "Dans un saladier, battre les oeufs avec la crème et le chèvre émietté, assaisonner.", "Ajouter les brocolis et les carottes coupés en petits moreaux.", "Verser la préparation dans l'appareil à croque-monsieur et laisser cuire.", "A déguster chaud ou froid."],
    recipeType: "Plat"
  },
  {
    name: "Gaufres salées au pesto",
    image: Gaufres,
    difficulty: 1,
    time: 30,
    ingredients: [{qty: "1 sachet", name: "Levure"}, {qty: "450g", name: "Farine"}, {qty: "3 càc", name: "Pesto"}, {qty: "75cl", name: "Lait"}, {qty: "3", name: "Oeufs"}],
    steps: ["Verser dans un mixeur le lait, la farine, la levure, les œufs et la sauce pesto.", "Mixer: vous obtenez une pâte de gaufres normale avec des 'particules' de pesto. Laisser reposer environ 1 heure.", "Après avoir laissé reposer la pâte, la verser dans un gaufrier traditionnel, 2 min de chaque côté."],
    recipeType: "Plat"
  },
  {
    name: "Tarte Tatin aux oignons rouges",
    image: Tatin,
    difficulty: 1,
    time: 60,
    ingredients: [{qty: "250g", name: "Pâte brisée"}, {qty: "2 càs", name: "Vinaigre balsamique"}, {qty: "25g", name: "Beurre"}, {qty: "1 càs", name: "Huile d'olive"}, {qty: "1.5kg", name: "Oignon rouge"}],
    steps: ["Préchauffer votre four à 200°.", "Eplucher et émincer finement les oignons.", "Les verser dans un plat creux allant au four, suivi du vinaigre balsamique, du thym, du beurre, de l'huile d'olive et du sucre. Bien mélanger afin que les oignons soient bien recouverts de ce mélange. Faire cuire au four pendant 35 mn afin que les oignons soient bien fondus et confits.", "Verser les oignons dans un plat à tarte de 24 cm environ de diamètre, recouvrir de la pâte brisée par dessus comme pour une tarte tatin classique. Veiller à ce que les extrémités de la pâte soient bien rentrées dans le plat. Faire cuire entre 10 et 15 mn jusqu'à ce que la pâte soit brun doré.", "Sortir du four et renverser immediatement la tarte sur un plat plus grand que le moule à tarte."],
    recipeType: "Plat"
  },
  {
    name: "Spaghetti aux courgettes",
    image: Spaghetti,
    difficulty: 2,
    time: 35,
    ingredients: [{qty: "600g", name: "Courgettes"}, {qty: "1", name: "Oignon"}, {qty: "2 càs", name: "Huile d'olive"}, {qty: "500g", name: "Spaghettis"}, {qty: "150g", name: "Crème épaisse"}, {qty: "100g", name: "Parmesan"}],
    steps: ["Faire cuire les spaghettis al dente, puis les réserver", "Éplucher les courgettes et les râper.", "Émincer un oignon.", "Faire revenir dans une poêle, l'oignon avec l'huile d'olive, puis ajouter les courgettes râpées.", "Couvrir et laisser cuire à petit feu pendant 10 minutes.", "Dans un bol, mélanger la crème épaisse et le parmesan râpé frais.", "Dans la poêle ajouter les spaghetti et le mélange crème-parmesan.", "Bien mélanger ( 2-3 minutes), assaisonner (sel-poivre) et servir chaud."],
    recipeType: "Plat"
  },
  {
    name: "Omelette aux épinards et mozzarella",
    image: Omelette,
    difficulty: 1,
    time: 15,
    ingredients: [{qty: "1", name: "Oignon"}, {qty: "4", name: "Oeufs"}, {qty: "250g", name: "Épinards en branche"}, {qty: "50g", name: "Mozzarella"}],
    steps: ["Emincer l'oignon et sa verdure.", "Battre les oeufs avec les épinards (cuits à l'avance), saler et poivrer.", "Fondre une noisette de beurre dans une poêle et faire revenir l'oignon 2 mn, puis ajouter le mélange oeufs/épinards. Saupoudrer de mozzarella (râpée ou tranchée finement).", "Laisser cuire à feu doux, jusqu'à ce que les oeufs soient cuits et la mozzarella fondue."],
    recipeType: "Plat"
  }
]