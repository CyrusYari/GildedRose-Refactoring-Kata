export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}


const ItemTypes = {
  BRIE: 'Aged Brie',
  PASS: 'Backstage passes to a TAFKAL80ETC concert',
  HAND: 'Sulfuras, Hand of Ragnaros',
  CONJ: 'Conjured',
}


function updateBrie(item: Item) {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality < 50) {
    item.quality = item.quality + 1;
  }
}

function updatePass(item: Item) {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
      if (item.sellIn < 11 && item.quality < 50) {
        item.quality = item.quality + 1;
      }
      if (item.sellIn < 6 && item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
    item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0) {
    item.quality = item.quality - item.quality;
  }
}

function updateHand(item: Item) {
}


function updateNormal(item: Item) {
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality > 0) {
    item.quality = item.quality - 1;
  }
}


function updateConj(item: Item) {
}



export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {

      switch(item.name) {
        case ItemTypes.BRIE:
          updateBrie(item);
          continue;
        case ItemTypes.HAND:
          updateHand(item);
          continue;
        case ItemTypes.PASS:
          updatePass(item);
          continue;
      case ItemTypes.CONJ:
          updateConj(item);
          continue;  
        default:
          updateNormal(item);
          continue;
      }

  }
return this.items;

}
}

// module.exports = {
//   Item,
//   GildedRose
// }


// import { Item } from './item';
// import { 
//   updateQualityForAgedBrie, 
//   updateQualityForConcert, 
//   updateQualityForSulfuras, 
//   updateQualityForConjured, 
//   updateQualityForNormalItem} from './updatedQuality'

// export class GildedRose {
//   items: Array<Item>;

//   constructor(items = [] as Array<Item>) {
//       this.items = items;
//   }

//   updateQuality() :Item[]  {
//       this.items.forEach(currentItem => {
          
//           switch (currentItem.name) {
//               case 'Aged Brie': {
//                   currentItem = updateQualityForAgedBrie(currentItem)
//                   break;
//               }
//               case 'Backstage passes to a TAFKAL80ETC concert': {
//                       currentItem = updateQualityForConcert(currentItem)
//                       break;
//               }
//               case  'Sulfuras, Hand of Ragnaros':  {
//                       currentItem = updateQualityForSulfuras(currentItem)
//                       break;
//               }
//               case 'Conjured':  {
//                       currentItem = updateQualityForConjured(currentItem)
//                       break;
//               }
//               default: {
//                       currentItem = updateQualityForNormalItem(currentItem)
//               }
//           }
//       })
//       return this.items;
//   }
// }
