export const Obj = {
  foo: "foo",
  111: "bar",
};

// type Obj = typeof Obj;
// type Key = keyof Obj;

type Key = keyof typeof Obj;

function test(x: keyof typeof Obj) {
  return;
}

test("foo");
