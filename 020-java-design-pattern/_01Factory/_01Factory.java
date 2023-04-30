package _01Factory;

/**
 * 工厂方法
 * 定义一个用于创建对象的接口
 * 让子类去决定实例化哪一个类
 * Factory Method使一个类的实例化延迟到子类
 */

interface Product {
  public void info();
}

interface _01Factory {
  public Product createProduct();
}


class FactoryA implements _01Factory {
  @Override
  public Product createProduct() {
    return new ProductA();
  }
}

class FactoryB implements _01Factory {
  @Override
  public Product createProduct() {
    return new ProductB();
  }
}

class ProductA implements Product {
  @Override
  public void info() {
    System.out.println("ProductA");
  }
}

class ProductB implements Product {
  @Override
  public void info() {
    System.out.println("ProductB");
  }
}

class FactoryMethod {
  public static void main(String[] args) {
    _01Factory factoryA = new FactoryA();
    Product productA = factoryA.createProduct();
    productA.info();

    _01Factory factoryB = new FactoryB();
    Product productB = factoryB.createProduct();
    productB.info();
  }
}