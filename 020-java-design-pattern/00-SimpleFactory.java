/**
 * 简单工厂模式
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
  public void info () {
    System.out.println("ProductB");
  }
}
