import Dahl from '../assets/114451_w2000h3128c1cx540cy844cxb1080cyb1689.webp'
import Croque from '../assets/57252_w2000h3000c1cx2000cy3000.webp'
import Gaufres from '../assets/10404_w1280h972c1cx1000cy1500cxb2000cyb3000.webp'
import Tatin from '../assets/86217_w1280h972c1cx3050cy4137cxb4337cyb6500.webp'
import Spaghetti from '../assets/61540_w1280h972c1cx1500cy996.webp'
import Omelette from '../assets/125932_w1280h972c1cx954cy709cxb2121cyb1414.webp'
import OeufCoque from '../assets/135678_w2000h3000c1cx695cy1193cxb1414cyb1918.webp'
import OeufMimosa from '../assets/17648_w2000h2904c1cx1328cy1928.webp'
import Souffle from '../assets/61662_w2000h3000cx1000cy1500.webp'
import TarteOignon from '../assets/80679_w2000h2667c1cx1944cy2592cxb3888cyb5184.webp'
import GateauChocolat from '../assets/93106_w2000h1124c1cx3744cy2104cxb7488cyb4208.webp'
import Crepes from '../assets/124598_w2000h1333c1cx3176cy2107cxt1161cyt477cxb5347cyb3565.webp'
import TartePomme from '../assets/128250_w2000h1445c1cx1294cy688cxb2037cyb1472.webp'

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
  },
  {
    name: "Oeufs à la coque",
    image: OeufCoque,
    difficulty: 1,
    time: 4,
    ingredients: [{qty: "6", name: "Oeufs"}, {qty: "1", name: "Baguette"}],
    steps: ["Choisissez des oeufs extra frais et de taille similaire pour une cuisson homogène Sortez-les du réfrigérateur 1 heure avant de les cuire pour qu’ils soient à température ambiante", "Mettre de l'eau à chauffer Lorsque l'eau bout, plonger les oeufs dedans avec une cuillère et compter 3 minutes de cuisson avant de les sortir de l'eau", "Coupez la baguette en mouillettes", "Ouvrez le haut de l'oeuf, trempez les mouilettes et dégustez !"],
    recipeType: "Entree"
  },
  {
    name: "Oeufs mimosa",
    image: OeufMimosa,
    difficulty: 1,
    time: 35,
    ingredients: [{qty: "4", name: "Oeufs"}, {qty: "1", name: "Baguette"}],
    steps: ["Faire cuire les oeufs 10 mn dans l'eau bouillante, puis les mettre dans l'eau froide pour arrêter la cuisson.", "Ecaler les oeufs, les couper dans le sens de la longueur, puis séparer les blancs des jaunes.", "Dans une assiette creuse, émietter les jaunes à la fourchette, mélanger la moitié de ces jaunes émiettés avec de la mayonnaise et réserver le reste.", "Remplir les demi-blancs de cette préparation, puis saupoudrer chaque demi-oeuf du reste de jaunes émiettés."],
    recipeType: "Entree"
  },
  {
    name: "Soufflé au fromage",
    image: Souffle,
    difficulty: 1,
    time: 50,
    ingredients: [{qty: "150g", name: "Emmental rapé"}, {qty: "60g", name: "Beurre"}, {qty: "60g", name: "Farine"}, {qty: "4", name: "Oeufs"}, {qty: "40cl", name: "Lait"}],
    steps: ["Préchauffer le four à 180°C (thermostat 6). Beurrer le moule.", "Chauffer le beurre dans une casserole, ajouter la farine et remuer rapidement pendant 1 min. Ajouter le lait tiédi, remuer au fouet pendant quelques minutes à feu doux.", "Retirer la casserole du feu.", "Séparer les blancs et les battre fermement (avec une pincée de sel).", "Dans la casserole refroidie, ajouter les jaunes d'oeufs un à un, puis le fromage râpé.", "Incorporer les blancs d'oeufs battus en mélangeant délicatement.", "Verser dans le moule, au maximum jusqu'à 4 cm du bord.", "Enfourner pendant 35 minutes en position chaleur tournante."],
    recipeType: "Entree"
  },
  {
    name: "Tarte à l'oignon rapide",
    image: TarteOignon,
    difficulty: 1,
    time: 45,
    ingredients: [{qty: "1", name: "Pâte brisée"}, {qty: "5", name: "Oignons"}, {qty: "20cl", name: "Crême fraiche"}, {qty: "2", name: "Oeufs"}],
    steps: ["Faire suer les oignons émincés finement dans une poêle avec de l'huile, saler et poivrer.", "Battre les oeufs avec la crème fraîche.", "Lorsque les oignons ont blondi, ajouter hors du feu le mélange oeufs/crème.", "Verser le tout sur la pâte brisée étalée dans un moule, faire cuire 30 min au four à 200°C (thermostat 6-7)."],
    recipeType: "Entrée"
  },
  {
    name: "Gâteau au chocolat fondant",
    image: GateauChocolat,
    difficulty: 1,
    time: 40,
    ingredients: [{qty: "200g", name: "Chocolat patissier"}, {qty: "100g", name: "Beurre"}, {qty: "50g", name: "Farine"}, {qty: "100g", name: "Sucre en poudre"}, {qty: "3", name: "Oeufs"}],
    steps: ["Préchauffez votre four à 180°C (thermostat 6). Dans une casserole, faites fondre le chocolat et le beurre coupé en morceaux à feu très doux.", "Dans un saladier, ajoutez le sucre, les oeufs, la farine. Mélangez.", "Ajoutez le mélange chocolat/beurre. Mélangez bien.", "Beurrez à l'aide d'une feuille de papier essuie-tout et farinez votre moule puis y versez la pâte à gâteau.", "Faites cuire au four environ 20 minutes.", "A la sortie du four le gâteau ne paraît pas assez cuit. C'est normal, laissez-le refroidir puis démoulez- le."],
    recipeType: "Dessert"
  },
  {
    name: "Pâte à crèpes",
    image: Crepes,
    difficulty: 1,
    time: 70,
    ingredients: [{qty: "300g", name: "Farine"}, {qty: "3 càs", name: "Sucre"}, {qty: "2 càs", name: "Huile"}, {qty: "50g", name: "Beurre fondu"}, {qty: "5cl", name: "Rhum"}, {qty: "3", name: "Oeufs"}, {qty: "60cl", name: "Lait"}],
    steps: ["Mettre la farine dans un saladier et former un puits.", "Y déposer les oeufs entiers, le sucre, l'huile et le beurre.", "Mélanger délicatement avec un fouet en ajoutant au fur et à mesure le lait. La pâte ainsi obtenue doit avoir une consistance d'un liquide légèrement épais.", "Parfumer de rhum.", "Faire chauffer une poêle antiadhésive et la huiler très légèrement à l'aide d'un papier Essuie-tout. Y verser une louche de pâte, la répartir dans la poêle puis attendre qu'elle soit cuite d'un côté avant de la retourner. Cuire ainsi toutes les crêpes à feu doux."],
    recipeType: "Dessert"
  },
  {
    name: "Tarte aux pommes",
    image: TartePomme,
    difficulty: 1,
    time: 55,
    ingredients: [{qty: "1", name: "Pâte brisée"}, {qty: "1 sachet", name: "Sucre vanillée"}, {qty: "30g", name: "Beurre"}, {qty: "6", name: "Pommes golden"}],
    steps: ["Éplucher et découper en morceaux 4 Golden.", "Faire une compote : les mettre dans une casserole avec un peu d'eau (1 verre ou 2). Bien remuer. Quand les pommes commencent à ramollir, ajouter un sachet ou un sachet et demi de sucre vanillé. Ajouter un peu d'eau si nécessaire.", "Vous saurez si la compote est prête une fois que les pommes ne seront plus dures du tout. Ce n'est pas grave s'il reste quelques morceaux.", "Pendant que la compote cuit, éplucher et couper en quatre les deux dernières pommes, puis, couper les quartiers en fines lamelles (elles serviront à être posées sur la compote).", "Préchauffer le four à 210°C (thermostat 7).", "Laisser un peu refroidir la compote et étaler la pâte brisée dans un moule et la piquer avec une fourchette.", "Verser la compote sur la pâte et placer les lamelles de pommes en formant une spirale ou plusieurs cercles, au choix ! Disposer des lamelles de beurre dessus.", "Mettre au four et laisser cuire pendant 30 min max. Surveiller la cuisson. Vous pouvez ajouter un peu de sucre vanillé sur la tarte pendant que çà cuit pour caraméliser un peu."],
    recipeType: "Dessert"
  }
]