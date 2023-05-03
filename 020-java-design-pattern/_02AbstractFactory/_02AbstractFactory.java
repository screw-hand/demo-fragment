package _02AbstractFactory;

/**
 * 工厂方法
 * 
 * 提供一个创建一系列相关或互相依赖对象的接口
 * 而无需指定他们具体的类
 */

class AbstractFactory {
  public static void main (String[] args) {
    Factory factory1 = new Factory1();
    ProductA productA1 = factory1.createProductA();
    productA1.info();

    ProductB productB1 = factory1.createProductB();
    productB1.info();

    Factory factory2 = new Factory2();

    ProductA productA2 = factory2.createProductA();
    productA2.info();

    ProductB productB2 = factory2.createProductB();
    productB2.info();

  }
}

interface ProductA {
  public void info();
}

interface ProductB {
  public void info();
}

class ProductA1 implements ProductA {
  @Override
  public void info () {
    System.out.println("产品的信息：A1");
  }
}

class ProductA2 implements ProductA {

  @Override
  public void info() {
      System.out.println("产品的信息：A2");
  }
}


class ProductB1 implements ProductB {
  @Override
  public void info () {
    System.out.println("产品的信息：B1");
  }
}

class ProductB2 implements ProductB {

  @Override
  public void info() {
      System.out.println("产品的信息：B2");
  }
}

interface Factory {
  public ProductA createProductA();
  public ProductB createProductB();
}

class Factory1 implements Factory {
  @Override
  public ProductA createProductA() {
      return new ProductA1();
  }

  @Override
  public ProductB createProductB() {
      return new ProductB1();
  }
}


class Factory2 implements Factory {

  @Override
  public ProductA createProductA() {
      return new ProductA2();
  }

  @Override
  public ProductB createProductB() {
      return new ProductB2();
  }
}
