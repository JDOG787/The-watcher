const Filter = require("bad-words");
const filter = new Filter();

module.exports = msg => {
    let cleanedMsg = filter.clean(msg.content);

    if (cleanedMsg !== msg.content) {
        return true;
    } 
    return;
}