/* 9-class.ts */

interface MyNode {
  params: Object
}

class MyNode {
  constructor(params: Object) {
    this.params = params
  }

  static staticData: object = { k: 'v' }

  public method(key: string, value: any) {
    this.params[key] = value
    console.log(this.params)
  }

  private privateMethod(key: string, value: any) {
    this.method(key, value)
  }

  static staticMethod(key?: string, value?: any) {
    console.log(this)
  }

}

const node: MyNode = new MyNode({
  name: 'chris',
  index: 0
})

node.method('name', 'Chris')

// Property 'privateMethod' is private and only accessible within class 'MyNode'.ts(2341)
// node.privateMethod('name', node.params.name += ' Chen')

MyNode.staticMethod()

console.log(node)

export { }