class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param = `height: ${this.height}; width: ${this.width}; bg: ${this.bg}; fontSize: ${this.fontSize}; textAlign: ${this.textAlign}`;;
        elem.style.cssText = param;
    }
}

let newObj = new Options(100, 100, 'blue', 20, 'center');
newObj.createDiv();