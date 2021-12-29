/* 9-class.ts */

class MyNode {
  params: Object
  readonly readOnly: string = 'readOnly'

  constructor(params: Object) {
    this.params = params
    this.readOnly = ''
    console.log(this)
  }

  get getParams(): Object {
    return this.params
  }

  set setParams(params: { name: string, index: number })  {
    this.params = params
  }

  static staticData: object = { k: 'v' }

  public method(key: string, value: any) {
    // Cannot assign to 'readOnly' because it is a read-only property.ts(2540)
    // this.readOnly = 'readOnly'
    this.params[key] = value
    console.log(this.params)
    this.privateMethod(key, value)
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