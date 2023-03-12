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
 // please note: we refactored all of the code by taking the big block of code we were given, creating these functions and pasting that block of code into these functions that are newly created, and then cutting down the conditionals based on criteria we are given. In this case, when we refactor the code for this function, we end up with no code. Please see the bottom of the file for the commented out code we were originally given.
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
  item.quality = item.quality - 2;
  item.sellIn = item.sellIn - 1;
}
  




export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Item[] {
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

  };
};



// below is the code we were given inside of the updateQuality function (nested conditionals) that we took and pasted into each of the functions we created above, before cutting each one down and refactoring to meet the criteria for that function.

// if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
//   if (item.quality > 0) {
//     if (item.name != 'Sulfuras, Hand of Ragnaros') {
//       item.quality = item.quality - 1;
//     }
//   }
// } else {
//   if (item.quality < 50) {
//     item.quality = item.quality + 1;
//     if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
//       if (item.sellIn < 11) {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1;
//         }
//       }
//       if (item.sellIn < 6) {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1;
//         }
//       }
//     }
//   }
// }
// if (item.name != 'Sulfuras, Hand of Ragnaros') {
//   item.sellIn = item.sellIn - 1;
// }
// if (item.sellIn < 0) {
//   if (item.name != 'Aged Brie') {
//     if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
//       if (item.quality > 0) {
//         if (item.name != 'Sulfuras, Hand of Ragnaros') {
//           item.quality = item.quality - 1;
//         }
//       }
//     } else {
//       item.quality = item.quality - item.quality;
//     }
//   } else {
//     if (item.quality < 50) {
//       item.quality = item.quality + 1;
//     }
//   }
// }

