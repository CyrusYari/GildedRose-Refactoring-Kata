import { Item, GildedRose } from '@/gilded-rose';



describe("Gilded Rose", () => {
  describe("Everything else", () => {
    it("Should degrade the quality of an item twice as fast after SellIn date has passed", () => {
      const gildedRose = new GildedRose([new Item("protein bar", 0, 4)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(2);
    })

    it("Quality of an item is never negative", () => {
      const gildedRose = new GildedRose([new Item("protein bar", 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(0);
    })

    it("Quality of an item is never more than 50", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 47)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(50);
    })

   


  });

  describe("Aged Brie", () => {
    it("Increases in quality the older it gets", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 20, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(19);
      expect(items[0].quality).toBe(1);
    })
  
    it("Quality should increase by 2 if item is past expiry", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", -1, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-2);
      expect(items[0].quality).toBe(4);
    });


  });

  describe("Sulfuras, Hand of Ragnaros", () => {
    it("Never has to be sold or increases in quality", () => {
      const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(80);
    })
  });

  describe("Backstage passes to a TAFKAL80ETC concert", () => {
    it("Increases in quality as its SellIn value approaches", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(14);
      expect(items[0].quality).toBe(21);
    });

    it("Quality increases by 2 when there are 10 days or less", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(4);
    });

    it("Quality increases by 3 when there are 5 days or less", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 7)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(10);
    });

    it("Quality drops to 0 after the concert", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });
  });

  describe("Conjured Items", () => {
    it("Degrades in quality twice as fast as normal item", () => {
      const gildedRose = new GildedRose([new Item("Conjured", 3, 6)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(2);
      expect(items[0].quality).toBe(4);
    });
  });  
  

});