const obj = {
  name: 'Hamid',
  sayHi() {
    console.log(this.name);
  },
};

// obj.sayHi

const func = obj.sayHi;

func.apply(obj);

console.log(obj.name);
