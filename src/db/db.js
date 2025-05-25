import Dexie from "dexie";

export const db = new Dexie("myDatabase");

db.version(1).stores({
  wishlist: "++id, name, price, image, refLink, isOwned",
});
