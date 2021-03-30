const fs = require("fs");

const data = [];

const fileName = "./db.json";

module.exports = {
  init() {
    try {
      const fileContent = fs.readFileSync(fileName);
      data = JSON.parse(fileContent.toString());
    } catch (e) {
      data = [];
    }
  },
  getItem() {
    return data;
  },
  addItem(item) {
    data.push(item);
    this.save();
  },
  save() {
    fs.writeFileSync(fileName, JSON.stringify(data));
  },
};
