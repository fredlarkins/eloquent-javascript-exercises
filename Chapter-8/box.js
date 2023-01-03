const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
};

function withBoxUnlocked(action) {
    // unlock box
    if (box.locked) box.unlock();
    try {
        return action();
    } finally {
        box.lock();
    }
}


console.log(box);
withBoxUnlocked(function() {box.content.push('secret sauce')});
console.log(box);