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
    let boxWasLocked = box.locked;
    if (boxWasLocked) box.unlock();
    try {
        return action();
    } finally {
        if (boxWasLocked) {
            box.lock();
        }
    }
}


console.log(box);
box.unlock();
withBoxUnlocked(function() {box.content.push('secret sauce')});
console.log(box);

try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised:", e);
  }
  
  console.log(box.locked);
  // → true