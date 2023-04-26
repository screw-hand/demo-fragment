/**
 * 简单工厂模式
 * 
 * @deprecated
 *             定义一个工厂累，根据不同参数返回不同的实例
 *             被创建的实例通常都有共同的父类
 */
class SimpleFactory {
  public static void main(String[] args) {
    Product productA = Factory.createProduct("A");
    Product productB = Factory.createProduct("B");

    productA.info();
    productB.info();
  }
}

class Factory {
  public static Product createProduct(String type) {
    Product product = null;
    switch (type) {
      case "A":
        product = new ProductA();
        break;
      case "B":
        product = new ProductB();
        break;
      default:
        System.out.println("Unknown type: " + type);
        break;
    }
    return product;
  }
}

abstract class Product {
  public abstract void info();
}

class ProductA extends Product {
  @Override
  public void info() {
    System.out.println("ProductA");
  }
}

class ProductB extends Product {
  @Override
  public void info() {
    System.out.println("ProductB");
  }
}
