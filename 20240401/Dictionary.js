function Dictionary(items = {})
{
    this.items = item;
}

Dictionary.prototype.getBuffer = () => {return {...this.items}};
Dictionary.prototype.clear = () => this.items = {};
Dictionary.prototype.size = () => Object.keys(this.items).length;
Dictionary.prototype.hasKey = (key) =>  this.items.hasOwnProperty(key);
Dictionary.prototype.set = (key,value) => this.items[key] = value;
Dictionary.prototype.get = (key) => this.hasKey(key) ? items[key] : null;
Dictionary.prototype.remove = () => this.hasKey != null ? delete this.items[key] : false;
Dictionary.prototype.keys = () => Object.keys(this.items);
Dictionary.prototype.values = () => Object.values(this.items);

var hashMapHtmlKey = new Map();

function SetHashMap()
{

}





